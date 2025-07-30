import { RequestHandler } from "express";
import https from "https";

interface GoogleMapsRequest {
  input: string;
  locationBias?: {
    circle: {
      center: {
        latitude: number;
        longitude: number;
      };
      radius: number;
    };
  };
  includedPrimaryTypes?: string[];
  includedRegionCodes?: string[];
  languageCode?: string;
  regionCode?: string;
  origin?: {
    latitude: number;
    longitude: number;
  };
  inputOffset?: number;
  includeQueryPredictions?: boolean;
  sessionToken?: string;
}

// Mock data for when API is unavailable
const getMockPandalData = (query: string) => {
  const mockPandals = [
    {
      placePrediction: {
        place: "places/ChIJZ_YISduC-DkRvCxsEqaWRQM",
        placeId: "ChIJZ_YISduC-DkRvCxsEqaWRQM",
        text: {
          text: "Bagbazar Sarbojonin Durga Puja, Kolkata, West Bengal, India",
          matches: [{ endOffset: 16 }],
        },
        structuredFormat: {
          mainText: { text: "Bagbazar Sarbojonin Durga Puja" },
          secondaryText: { text: "Kolkata, West Bengal, India" },
        },
      },
    },
    {
      placePrediction: {
        place: "places/ChIJa_YISduC-DkRvCxsEqaWRQN",
        placeId: "ChIJa_YISduC-DkRvCxsEqaWRQN",
        text: {
          text: "College Square Durga Puja, Kolkata, West Bengal, India",
          matches: [{ endOffset: 16 }],
        },
        structuredFormat: {
          mainText: { text: "College Square Durga Puja" },
          secondaryText: { text: "Kolkata, West Bengal, India" },
        },
      },
    },
    {
      placePrediction: {
        place: "places/ChIJb_YISduC-DkRvCxsEqaWRQO",
        placeId: "ChIJb_YISduC-DkRvCxsEqaWRQO",
        text: {
          text: "Kumartuli Park Durga Puja, Kolkata, West Bengal, India",
          matches: [{ endOffset: 16 }],
        },
        structuredFormat: {
          mainText: { text: "Kumartuli Park Durga Puja" },
          secondaryText: { text: "Kolkata, West Bengal, India" },
        },
      },
    },
    {
      placePrediction: {
        place: "places/ChIJc_YISduC-DkRvCxsEqaWRQP",
        placeId: "ChIJc_YISduC-DkRvCxsEqaWRQP",
        text: {
          text: "Shyambazar Friends Union Durga Puja, Kolkata, West Bengal, India",
          matches: [{ endOffset: 16 }],
        },
        structuredFormat: {
          mainText: { text: "Shyambazar Friends Union Durga Puja" },
          secondaryText: { text: "Kolkata, West Bengal, India" },
        },
      },
    },
  ];

  // Filter mock data based on search query
  const filteredPandals = mockPandals.filter(
    (pandal) =>
      pandal.placePrediction.text.text
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      pandal.placePrediction.structuredFormat.mainText.text
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  return {
    suggestions:
      filteredPandals.length > 0 ? filteredPandals : mockPandals.slice(0, 2),
  };
};

export const handleMapsAutocomplete: RequestHandler = async (req, res) => {
  try {
    const requestData: GoogleMapsRequest = {
      input: req.body.input || "Durga Puja Pandal",
      locationBias: {
        circle: {
          center: {
            latitude: req.body.latitude || 22.5726, // Kolkata latitude
            longitude: req.body.longitude || 88.3639, // Kolkata longitude
          },
          radius: req.body.radius || 50000, // 50km radius around Kolkata
        },
      },
      includedPrimaryTypes: req.body.includedPrimaryTypes || [],
      includedRegionCodes: req.body.includedRegionCodes || ["IN"],
      languageCode: req.body.languageCode || "en",
      regionCode: req.body.regionCode || "IN",
      origin: {
        latitude: 22.5726,
        longitude: 88.3639,
      },
      inputOffset: req.body.inputOffset || 0,
      includeQueryPredictions: req.body.includeQueryPredictions || true,
      sessionToken: req.body.sessionToken || "",
    };

    // Check if API key is available
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    if (!rapidApiKey) {
      console.warn("RapidAPI key not found, using mock data");
      return res.json(getMockPandalData(requestData.input));
    }

    const options = {
      method: "POST",
      hostname: "google-map-places-new-v2.p.rapidapi.com",
      port: null,
      path: "/v1/places:autocomplete",
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "google-map-places-new-v2.p.rapidapi.com",
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "*",
      },
    };

    const apiReq = https.request(options, function (apiRes) {
      const chunks: Buffer[] = [];

      apiRes.on("data", function (chunk) {
        chunks.push(chunk);
      });

      apiRes.on("end", function () {
        try {
          const body = Buffer.concat(chunks);
          const data = JSON.parse(body.toString());

          // Check if API returned valid data
          if (data && data.suggestions && data.suggestions.length > 0) {
            res.json(data);
          } else {
            console.warn("API returned empty data, using mock data");
            res.json(getMockPandalData(requestData.input));
          }
        } catch (error) {
          console.error("Error parsing response:", error);
          res.json(getMockPandalData(requestData.input));
        }
      });
    });

    apiReq.on("error", function (error) {
      console.error("API request error:", error);
      res.json(getMockPandalData(requestData.input));
    });

    // Set timeout for API request
    apiReq.setTimeout(5000, () => {
      console.warn("API request timeout, using mock data");
      apiReq.destroy();
      res.json(getMockPandalData(requestData.input));
    });

    apiReq.write(JSON.stringify(requestData));
    apiReq.end();
  } catch (error) {
    console.error("Server error:", error);
    res.json(getMockPandalData(req.body.input || "Durga Puja"));
  }
};

// Search for places near pandals
export const handleNearbyPlaces: RequestHandler = async (req, res) => {
  try {
    // Check if API key is available
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    if (!rapidApiKey) {
      console.warn("RapidAPI key not found, using mock data for nearby places");
      const mockResponse = {
        suggestions: [
          {
            placePrediction: {
              place: "places/ChIJa_YISduC-DkRvCxsEqaWRQN",
              placeId: "ChIJa_YISduC-DkRvCxsEqaWRQN",
              text: {
                text: "New Market, Kolkata, West Bengal, India",
                matches: [{ endOffset: 10 }],
              },
              structuredFormat: {
                mainText: { text: "New Market" },
                secondaryText: { text: "Kolkata, West Bengal, India" },
              },
            },
          },
          {
            placePrediction: {
              place: "places/ChIJb_YISduC-DkRvCxsEqaWRQO",
              placeId: "ChIJb_YISduC-DkRvCxsEqaWRQO",
              text: {
                text: "Park Street Metro Station, Kolkata, West Bengal, India",
                matches: [{ endOffset: 15 }],
              },
              structuredFormat: {
                mainText: { text: "Park Street Metro Station" },
                secondaryText: { text: "Kolkata, West Bengal, India" },
              },
            },
          },
        ],
      };
      return res.json(mockResponse);
    }

    const requestData = {
      input: req.body.query || "restaurant near me",
      locationBias: {
        circle: {
          center: {
            latitude: req.body.latitude || 22.5726,
            longitude: req.body.longitude || 88.3639,
          },
          radius: 5000, // 5km radius
        },
      },
      includedPrimaryTypes: req.body.types || [
        "restaurant",
        "tourist_attraction",
        "transit_station",
      ],
      includedRegionCodes: ["IN"],
      languageCode: "en",
      regionCode: "IN",
      includeQueryPredictions: true,
    };

    const options = {
      method: "POST",
      hostname: "google-map-places-new-v2.p.rapidapi.com",
      port: null,
      path: "/v1/places:autocomplete",
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "google-map-places-new-v2.p.rapidapi.com",
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "*",
      },
    };

    const apiReq = https.request(options, function (apiRes) {
      const chunks: Buffer[] = [];

      apiRes.on("data", function (chunk) {
        chunks.push(chunk);
      });

      apiRes.on("end", function () {
        try {
          const body = Buffer.concat(chunks);
          const data = JSON.parse(body.toString());
          res.json(data);
        } catch (error) {
          console.error("Error parsing nearby places response:", error);
          const mockResponse = {
            suggestions: [
              {
                placePrediction: {
                  place: "places/ChIJa_YISduC-DkRvCxsEqaWRQN",
                  placeId: "ChIJa_YISduC-DkRvCxsEqaWRQN",
                  text: {
                    text: "New Market, Kolkata, West Bengal, India",
                    matches: [{ endOffset: 10 }],
                  },
                  structuredFormat: {
                    mainText: { text: "New Market" },
                    secondaryText: { text: "Kolkata, West Bengal, India" },
                  },
                },
              },
            ],
          };
          res.json(mockResponse);
        }
      });
    });

    apiReq.on("error", function (error) {
      console.error("Nearby places API request error:", error);
      const mockResponse = {
        suggestions: [
          {
            placePrediction: {
              place: "places/ChIJa_YISduC-DkRvCxsEqaWRQN",
              placeId: "ChIJa_YISduC-DkRvCxsEqaWRQN",
              text: {
                text: "New Market, Kolkata, West Bengal, India",
                matches: [{ endOffset: 10 }],
              },
              structuredFormat: {
                mainText: { text: "New Market" },
                secondaryText: { text: "Kolkata, West Bengal, India" },
              },
            },
          },
        ],
      };
      res.json(mockResponse);
    });

    apiReq.setTimeout(5000, () => {
      console.warn("Nearby places API request timeout");
      apiReq.destroy();
      const mockResponse = {
        suggestions: [
          {
            placePrediction: {
              place: "places/ChIJa_YISduC-DkRvCxsEqaWRQN",
              placeId: "ChIJa_YISduC-DkRvCxsEqaWRQN",
              text: {
                text: "New Market, Kolkata, West Bengal, India",
                matches: [{ endOffset: 10 }],
              },
              structuredFormat: {
                mainText: { text: "New Market" },
                secondaryText: { text: "Kolkata, West Bengal, India" },
              },
            },
          },
        ],
      };
      res.json(mockResponse);
    });

    apiReq.write(JSON.stringify(requestData));
    apiReq.end();
  } catch (error) {
    console.error("Nearby places server error:", error);
    const mockResponse = {
      suggestions: [
        {
          placePrediction: {
            place: "places/ChIJa_YISduC-DkRvCxsEqaWRQN",
            placeId: "ChIJa_YISduC-DkRvCxsEqaWRQN",
            text: {
              text: "New Market, Kolkata, West Bengal, India",
              matches: [{ endOffset: 10 }],
            },
            structuredFormat: {
              mainText: { text: "New Market" },
              secondaryText: { text: "Kolkata, West Bengal, India" },
            },
          },
        },
      ],
    };
    res.json(mockResponse);
  }
};

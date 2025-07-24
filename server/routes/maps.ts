import { RequestHandler } from "express";
import https from 'https';

interface GoogleMapsRequest {
  input: string;
  locationBias?: {
    circle: {
      center: {
        latitude: number;
        longitude: number;
      };
      radius: number;
    }
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

export const handleMapsAutocomplete: RequestHandler = async (req, res) => {
  try {
    const requestData: GoogleMapsRequest = {
      input: req.body.input || 'Durga Puja Pandal',
      locationBias: {
        circle: {
          center: {
            latitude: req.body.latitude || 22.5726, // Kolkata latitude
            longitude: req.body.longitude || 88.3639 // Kolkata longitude
          },
          radius: req.body.radius || 50000 // 50km radius around Kolkata
        }
      },
      includedPrimaryTypes: req.body.includedPrimaryTypes || [],
      includedRegionCodes: req.body.includedRegionCodes || ['IN'],
      languageCode: req.body.languageCode || 'en',
      regionCode: req.body.regionCode || 'IN',
      origin: {
        latitude: 22.5726,
        longitude: 88.3639
      },
      inputOffset: req.body.inputOffset || 0,
      includeQueryPredictions: req.body.includeQueryPredictions || true,
      sessionToken: req.body.sessionToken || ''
    };

    const options = {
      method: 'POST',
      hostname: 'google-map-places-new-v2.p.rapidapi.com',
      port: null,
      path: '/v1/places:autocomplete',
      headers: {
        'x-rapidapi-key': 'ea20e25b95mshaa23b6e950ced78p1caa7bjsna2036f230cb3',
        'x-rapidapi-host': 'google-map-places-new-v2.p.rapidapi.com',
        'Content-Type': 'application/json',
        'X-Goog-FieldMask': '*'
      }
    };

    const apiReq = https.request(options, function (apiRes) {
      const chunks: Buffer[] = [];

      apiRes.on('data', function (chunk) {
        chunks.push(chunk);
      });

      apiRes.on('end', function () {
        try {
          const body = Buffer.concat(chunks);
          const data = JSON.parse(body.toString());
          res.json(data);
        } catch (error) {
          console.error('Error parsing response:', error);
          res.status(500).json({ error: 'Failed to parse API response' });
        }
      });
    });

    apiReq.on('error', function (error) {
      console.error('API request error:', error);
      res.status(500).json({ error: 'Failed to fetch data from Google Maps API' });
    });

    apiReq.write(JSON.stringify(requestData));
    apiReq.end();

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Search for places near pandals
export const handleNearbyPlaces: RequestHandler = async (req, res) => {
  try {
    const requestData = {
      input: req.body.query || 'restaurant near me',
      locationBias: {
        circle: {
          center: {
            latitude: req.body.latitude || 22.5726,
            longitude: req.body.longitude || 88.3639
          },
          radius: 5000 // 5km radius
        }
      },
      includedPrimaryTypes: req.body.types || ['restaurant', 'tourist_attraction', 'transit_station'],
      includedRegionCodes: ['IN'],
      languageCode: 'en',
      regionCode: 'IN',
      includeQueryPredictions: true
    };

    const options = {
      method: 'POST',
      hostname: 'google-map-places-new-v2.p.rapidapi.com',
      port: null,
      path: '/v1/places:autocomplete',
      headers: {
        'x-rapidapi-key': 'ea20e25b95mshaa23b6e950ced78p1caa7bjsna2036f230cb3',
        'x-rapidapi-host': 'google-map-places-new-v2.p.rapidapi.com',
        'Content-Type': 'application/json',
        'X-Goog-FieldMask': '*'
      }
    };

    const apiReq = https.request(options, function (apiRes) {
      const chunks: Buffer[] = [];

      apiRes.on('data', function (chunk) {
        chunks.push(chunk);
      });

      apiRes.on('end', function () {
        try {
          const body = Buffer.concat(chunks);
          const data = JSON.parse(body.toString());
          res.json(data);
        } catch (error) {
          res.status(500).json({ error: 'Failed to parse API response' });
        }
      });
    });

    apiReq.on('error', function (error) {
      res.status(500).json({ error: 'Failed to fetch nearby places' });
    });

    apiReq.write(JSON.stringify(requestData));
    apiReq.end();

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

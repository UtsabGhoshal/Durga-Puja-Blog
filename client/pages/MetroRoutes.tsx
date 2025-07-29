import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Train, MapPin, Search, ChevronDown, ChevronUp, Navigation, Clock, Star, Zap, ExternalLink, Route } from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

interface Pandal {
  name: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

interface Exit {
  name: string;
  pandals: Pandal[];
}

interface Station {
  name: string;
  exits?: Exit[];
  pandals?: Pandal[];
  zone: "North" | "Central" | "South";
  latitude?: number;
  longitude?: number;
}

const blueLineStations: Station[] = [
  // NORTH KOLKATA
  {
    name: "BARANAGAR",
    zone: "North",
    latitude: 22.6447,
    longitude: 88.3781,
    pandals: [
      { 
        name: "Bandhudal sporting",
        address: "Baranagar, North 24 Parganas, West Bengal",
        latitude: 22.6447,
        longitude: 88.3781
      },
      { 
        name: "Baranagar netaji colony lowland",
        address: "Netaji Colony, Baranagar, West Bengal",
        latitude: 22.6447,
        longitude: 88.3781
      },
      { 
        name: "BELGHARIA BANI MANDIR",
        address: "Belgharia, North 24 Parganas, West Bengal",
        latitude: 22.6506,
        longitude: 88.3781
      }
    ]
  },
  {
    name: "NOAPARA",
    zone: "North",
    latitude: 22.6171,
    longitude: 88.3781,
    pandals: [
      { 
        name: "Dadabhai Sangha",
        address: "Noapara, North 24 Parganas, West Bengal",
        latitude: 22.6171,
        longitude: 88.3781
      }
    ]
  },
  {
    name: "BELGACHIA",
    zone: "North",
    latitude: 22.6063,
    longitude: 88.3781,
    exits: [
      {
        name: "Tram Depot Side",
        pandals: [
          { 
            name: "BELGACHIA SADHARAN",
            address: "Belgachia, Kolkata, West Bengal",
            latitude: 22.6063,
            longitude: 88.3781
          },
          { 
            name: "TALA PARK PRATTAY",
            address: "Tala Park, Belgachia, Kolkata",
            latitude: 22.6063,
            longitude: 88.3781
          },
          { 
            name: "TALA BAROWARI",
            address: "Tala, Kolkata, West Bengal",
            latitude: 22.6063,
            longitude: 88.3781
          },
          { 
            name: "TALA 15 PALLI",
            address: "Tala, Kolkata, West Bengal",
            latitude: 22.6063,
            longitude: 88.3781
          }
        ]
      },
      {
        name: "Milk Colony Side",
        pandals: [
          { 
            name: "BELGACHIA ADI SARBOJONIN",
            address: "Belgachia, Kolkata, West Bengal",
            latitude: 22.6063,
            longitude: 88.3781
          },
          { 
            name: "BELGACHIA CENTRAL SARBOJONIN DURGOTSAB",
            address: "Belgachia, Kolkata, West Bengal",
            latitude: 22.6063,
            longitude: 88.3781
          },
          { 
            name: "BELGACHIA YUBA SAMMILANI",
            address: "Belgachia, Kolkata, West Bengal",
            latitude: 22.6063,
            longitude: 88.3781
          }
        ]
      }
    ]
  },
  {
    name: "SHYAMBAZAR",
    zone: "North",
    latitude: 22.5919,
    longitude: 88.3648,
    exits: [
      {
        name: "5 point X-ing",
        pandals: [
          { 
            name: "BIDHAN SARANI ATLAS CLUB",
            address: "Bidhan Sarani, Shyambazar, Kolkata",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "SIKDAR BAGAN SADHARAN",
            address: "Sikdar Bagan, Shyambazar, Kolkata",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "HATIBAGAN NABIN PALLY",
            address: "Hatibagan, Shyambazar, Kolkata",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "NALIN SARKAR STREET",
            address: "Nalin Sarkar Street, Shyambazar, Kolkata",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "NORTH TRIDHARA",
            address: "Shyambazar, Kolkata, West Bengal",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "HATIBAGAN SARBOJONIN",
            address: "Hatibagan, Shyambazar, Kolkata",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "SHYAMPUKUR ADI SARBOJONIN",
            address: "Shyampukur, Kolkata, West Bengal",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "SHYAMBAZAR FRIENDS UNION",
            address: "Shyambazar, Kolkata, West Bengal",
            latitude: 22.5919,
            longitude: 88.3648
          }
        ]
      },
      {
        name: "Ramakanto Bose Street",
        pandals: [
          { 
            name: "JAGAT MUKHERJEE PARK",
            address: "Jagat Mukherjee Park, Shyambazar, Kolkata",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "BAGBAZAR PALLI PUJA(GOURIMATA UDYAN)",
            address: "Bagbazar, Kolkata, West Bengal",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "NABA BAGBAZAR SARBOJONIN",
            address: "Bagbazar, Kolkata, West Bengal",
            latitude: 22.5919,
            longitude: 88.3648
          },
          { 
            name: "BAGBAZAR SARBOJONIN",
            address: "Bagbazar, Kolkata, West Bengal",
            latitude: 22.5919,
            longitude: 88.3648
          }
        ]
      }
    ]
  },
  {
    name: "Sovabazar Sutanuti",
    zone: "North",
    latitude: 22.5934,
    longitude: 88.3659,
    exits: [
      {
        name: "Kumartuli Side",
        pandals: [
          { 
            name: "Kumartuli Sarbojonin",
            address: "Kumartuli, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          },
          { 
            name: "Kumartuli Park",
            address: "Kumartuli Park, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          },
          { 
            name: "Ahiritola Sarbojonin",
            address: "Ahiritola, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          },
          { 
            name: "AHIRITOLA JUBAK BRINDA",
            address: "Ahiritola, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          },
          { 
            name: "BENIATOLA SARBOJONIN",
            address: "Beniatola, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          },
          { 
            name: "HATHKHOLA GOSAIPARA SARBOJONIN",
            address: "Hathkhola, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          },
          { 
            name: "SOVABAZAR BURTOLLA SARBOJONIN",
            address: "Burtolla, Sovabazar, Kolkata",
            latitude: 22.5934,
            longitude: 88.3659
          }
        ]
      }
    ]
  },
  {
    name: "Girish Park",
    zone: "North",
    latitude: 22.5878,
    longitude: 88.3625,
    exits: [
      {
        name: "Ganesh Talkies side",
        pandals: [
          { 
            name: "KASHI BOSE LANE",
            address: "Kashi Bose Lane, Girish Park, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "DARJEEPARA SARBOJONIN",
            address: "Darjeepara, Girish Park, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "NIMTALA SARBOJONIN",
            address: "Nimtala, Girish Park, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "PATHURIAGHATA 5er PALLY",
            address: "Pathuriaghata, Girish Park, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "SHIMLA BYAM SAMITY",
            address: "Shimla Street, Girish Park, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "VIVEKANANDA SPORTING",
            address: "Girish Park, Kolkata, West Bengal",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "SHIMLA SPORTING",
            address: "Shimla Street, Girish Park, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "SHYAMALDHAN DUTTA BARI",
            address: "Girish Park, Kolkata, West Bengal",
            latitude: 22.5878,
            longitude: 88.3625
          }
        ]
      },
      {
        name: "Maniktala Side",
        pandals: [
          { 
            name: "CHALTABAGAN LOHAPATTY",
            address: "Chaltabagan, Maniktala, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "LALABAGAN SARBOJONIN",
            address: "Lalabagan, Maniktala, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "LALABAGAN NABANKUR",
            address: "Lalabagan, Maniktala, Kolkata",
            latitude: 22.5878,
            longitude: 88.3625
          },
          { 
            name: "SAHITYA PARISHAD",
            address: "Maniktala, Kolkata, West Bengal",
            latitude: 22.5878,
            longitude: 88.3625
          }
        ]
      }
    ]
  },
  // CENTRAL KOLKATA
  {
    name: "Mahatma Gandhi Road",
    zone: "Central",
    latitude: 22.5744,
    longitude: 88.3628,
    exits: [
      {
        name: "Madan Mohan Burman Street",
        pandals: [
          { 
            name: "CHOREBAGAN SARBOJONIN",
            address: "Chorebagan, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "COLLEGE SQUARE",
            address: "College Square, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "MD ALI PARK",
            address: "Md Ali Park, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "SANTOSH MITRA SQUARE",
            address: "Santosh Mitra Square, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "SEALDAH RAILWAY ATHLETIC",
            address: "Sealdah, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "SUBODH MALLICK SQUARE",
            address: "Subodh Mallick Square, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "AMHERST STREET SARBOJONIN",
            address: "Amherst Street, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "ENTALLY DURGA PUJA SAMITY",
            address: "Entally, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          }
        ]
      },
      {
        name: "Chitpur x-ing",
        pandals: [
          { 
            name: "JORASAKO 7 PALLI",
            address: "Jorasanko, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          },
          { 
            name: "JORASAKO SADHARAN",
            address: "Jorasanko, Central Kolkata",
            latitude: 22.5744,
            longitude: 88.3628
          }
        ]
      }
    ]
  },
  // SOUTH KOLKATA
  {
    name: "Netaji Bhawan(Bhawanipur)",
    zone: "South",
    latitude: 22.5352,
    longitude: 88.3441,
    exits: [
      {
        name: "Ramrik Hospital side",
        pandals: [
          { 
            name: "75 PALLY",
            address: "75 Pally, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "62 PALLY",
            address: "62 Pally, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          }
        ]
      },
      {
        name: "Jadu Babu Bazar side",
        pandals: [
          { 
            name: "BHAWANIPUR SARBOJONIN",
            address: "Bhawanipur, Kolkata, West Bengal",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "SWADHIN SANGHA",
            address: "Bhawanipur, Kolkata, West Bengal",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "KISHORE SANGHA",
            address: "Bhawanipur, Kolkata, West Bengal",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "SARASWATI SANGHA",
            address: "Bhawanipur, Kolkata, West Bengal",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "CHAKRABERIA SARBOJONIN",
            address: "Chakraberia, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "PADDAPUKUR SARBOJONIN",
            address: "Paddapukur, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "JAGRITEE DURGA PUJA",
            address: "Bhawanipur, Kolkata, West Bengal",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "PADDAPUKUR BAROWARI",
            address: "Paddapukur, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "PEYARA BAGAN DURGA PUJA",
            address: "Peyara Bagan, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "MADDOX SQUARE",
            address: "Maddox Square, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "68 PALLY DURGA PUJA",
            address: "68 Pally, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "BAKULBAGAN SARBOJONIN",
            address: "Bakulbagan, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          },
          { 
            name: "RUPCHAND MUKHERJEE LANE",
            address: "Rupchand Mukherjee Lane, Bhawanipur, Kolkata",
            latitude: 22.5352,
            longitude: 88.3441
          }
        ]
      }
    ]
  },
  {
    name: "Jatin Das Park(Hazra)",
    zone: "South",
    latitude: 22.5250,
    longitude: 88.3563,
    exits: [
      {
        name: "Asutosh College Side",
        pandals: [
          { 
            name: "Hazra Park Sarbojonin",
            address: "Hazra Park, Kolkata, West Bengal",
            latitude: 22.5250,
            longitude: 88.3563
          }
        ]
      },
      {
        name: "Hazra X-ing",
        pandals: [
          { 
            name: "Kalighat Yuba Maitry",
            address: "Kalighat, Kolkata, West Bengal",
            latitude: 22.5250,
            longitude: 88.3563
          },
          { 
            name: "Kalighat Byamagar",
            address: "Kalighat, Kolkata, West Bengal",
            latitude: 22.5250,
            longitude: 88.3563
          },
          { 
            name: "Kalighat Milan Sangha",
            address: "Kalighat, Kolkata, West Bengal",
            latitude: 22.5250,
            longitude: 88.3563
          },
          { 
            name: "Kalighat Sree Sangha",
            address: "Kalighat, Kolkata, West Bengal",
            latitude: 22.5250,
            longitude: 88.3563
          },
          { 
            name: "Kalighat Mahashakti",
            address: "Kalighat, Kolkata, West Bengal",
            latitude: 22.5250,
            longitude: 88.3563
          }
        ]
      }
    ]
  },
  {
    name: "Kalighat",
    zone: "South",
    latitude: 22.5186,
    longitude: 88.3426,
    exits: [
      {
        name: "Chetla Side",
        pandals: [
          { 
            name: "66 Pally",
            address: "66 Pally, Kalighat, Kolkata",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Badamtala Ashar Sangha",
            address: "Badamtala, Kalighat, Kolkata",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Nepal Bhattacharya Street",
            address: "Nepal Bhattacharya Street, Kalighat, Kolkata",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Kalighat BBTA",
            address: "Kalighat, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Chetla Pally",
            address: "Chetla, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Chetla Agrani",
            address: "Chetla, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "SURUCHI SANGHA",
            address: "Chetla, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Alipore Sarbojonin",
            address: "Alipore, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Alipore 78 Pally",
            address: "78 Pally, Alipore, Kolkata",
            latitude: 22.5186,
            longitude: 88.3426
          }
        ]
      },
      {
        name: "Deshapriya Park side",
        pandals: [
          { 
            name: "Deshapriya Park",
            address: "Deshapriya Park, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Tridhara Sammilani",
            address: "Deshapriya Park, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Ballygunge Cultural Association",
            address: "Ballygunge, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Samaj Sebi sangha",
            address: "Ballygunge, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Hindustan Park Sarbojonin",
            address: "Hindustan Park, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Hindustan Yubak Brinda",
            address: "Hindustan Park, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Hindustan Club Sarbojonin",
            address: "Hindustan Park, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Singhi Park",
            address: "Singhi Park, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          },
          { 
            name: "Ekdalia Evergreen",
            address: "Ekdalia, Kolkata, West Bengal",
            latitude: 22.5186,
            longitude: 88.3426
          }
        ]
      }
    ]
  },
  {
    name: "Rabindra Sarobar",
    zone: "South",
    latitude: 22.5051,
    longitude: 88.3563,
    exits: [
      {
        name: "Charu Market",
        pandals: [
          { 
            name: "Mudiali Club",
            address: "Mudiali, Tollygunge, Kolkata",
            latitude: 22.5051,
            longitude: 88.3563
          },
          { 
            name: "Shiv Mandir Sarbojonin",
            address: "Tollygunge, Kolkata, West Bengal",
            latitude: 22.5051,
            longitude: 88.3563
          },
          { 
            name: "Lake Youth",
            address: "Tollygunge, Kolkata, West Bengal",
            latitude: 22.5051,
            longitude: 88.3563
          },
          { 
            name: "Pratipaditya trikon park",
            address: "Tollygunge, Kolkata, West Bengal",
            latitude: 22.5051,
            longitude: 88.3563
          }
        ]
      }
    ]
  },
  {
    name: "Mahanayak Uttam Kumar",
    zone: "South",
    latitude: 22.4951,
    longitude: 88.3563,
    pandals: [
      { 
        name: "Buroshibtolla",
        address: "Buroshibtolla, Tollygunge, Kolkata",
        latitude: 22.4951,
        longitude: 88.3563
      },
      { 
        name: "Swiss Park",
        address: "Swiss Park, Tollygunge, Kolkata",
        latitude: 22.4951,
        longitude: 88.3563
      },
      { 
        name: "Tarun Sangha",
        address: "Tollygunge, Kolkata, West Bengal",
        latitude: 22.4951,
        longitude: 88.3563
      }
    ]
  }
];

// Function to open Google Maps with directions
const openGoogleMapsDirections = (pandal: Pandal) => {
  if (pandal.latitude && pandal.longitude) {
    // Use coordinates for precise navigation
    const url = `https://www.google.com/maps/dir/?api=1&destination=${pandal.latitude},${pandal.longitude}&travelmode=transit`;
    window.open(url, '_blank');
  } else if (pandal.address) {
    // Fallback to address search
    const encodedAddress = encodeURIComponent(`${pandal.name}, ${pandal.address}`);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=transit`;
    window.open(url, '_blank');
  } else {
    // Generic search
    const encodedName = encodeURIComponent(`${pandal.name} Durga Puja Kolkata`);
    const url = `https://www.google.com/maps/search/${encodedName}`;
    window.open(url, '_blank');
  }
};

// Function to open location in Google Maps
const openInGoogleMaps = (pandal: Pandal) => {
  if (pandal.latitude && pandal.longitude) {
    const url = `https://www.google.com/maps/place/${pandal.latitude},${pandal.longitude}`;
    window.open(url, '_blank');
  } else if (pandal.address) {
    const encodedAddress = encodeURIComponent(`${pandal.name}, ${pandal.address}`);
    const url = `https://www.google.com/maps/search/${encodedAddress}`;
    window.open(url, '_blank');
  }
};

export default function MetroRoutes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZone, setSelectedZone] = useState("All");
  const [openStations, setOpenStations] = useState<string[]>([]);
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const zones = ["All", "North", "Central", "South"];

  const filteredStations = useMemo(() => {
    return blueLineStations.filter(station => {
      const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (station.pandals && station.pandals.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))) ||
                           (station.exits && station.exits.some(exit => 
                             exit.pandals.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                             exit.name.toLowerCase().includes(searchTerm.toLowerCase())
                           ));
      const matchesZone = selectedZone === "All" || station.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [searchTerm, selectedZone]);

  const toggleStation = (stationName: string) => {
    setOpenStations(prev => 
      prev.includes(stationName) 
        ? prev.filter(name => name !== stationName)
        : [...prev, stationName]
    );
  };

  const totalPandals = blueLineStations.reduce((total, station) => {
    if (station.pandals) {
      total += station.pandals.length;
    }
    if (station.exits) {
      total += station.exits.reduce((exitTotal, exit) => exitTotal + exit.pandals.length, 0);
    }
    return total;
  }, 0);

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case "North": return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 shadow-lg";
      case "Central": return "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 shadow-lg";
      case "South": return "bg-gradient-to-r from-festival-orange/20 to-festival-saffron/30 text-festival-orange-dark shadow-lg";
      default: return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-lg";
    }
  };

  const getZoneGradient = (zone: string) => {
    switch (zone) {
      case "North": return "from-blue-500 to-indigo-600";
      case "Central": return "from-emerald-500 to-green-600";
      case "South": return "from-festival-orange to-festival-saffron";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd7b5eeb133e34f1590f348887f3a3783%2F176401f6fcc841f5b5d10123352f8a31?format=webp&width=800"
            alt="Decorated Kolkata Metro train during festival season"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/85 via-indigo-700/80 to-purple-800/85"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-indigo-400/30 rounded-full blur-lg"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-purple-400/30 rounded-full blur-md"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />

          {/* Metro-themed decorative elements */}
          <motion.div
            className="absolute top-1/2 right-10 w-4 h-20 bg-white/10 rounded-full"
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-20 w-16 h-4 bg-white/10 rounded-full"
            animate={{
              scaleX: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 20, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-glow animate-pulse-slow">
                <Zap className="w-4 h-4 mr-2" />
                Navigate with Ease
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 30, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-festival-gold via-festival-amber to-festival-saffron bg-clip-text text-transparent animate-shimmer">
                Metro Routes & Pandals
              </span>
              <motion.span 
                className="block text-blue-200 text-2xl md:text-4xl mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Blue Line with Google Maps Navigation
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 20, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Navigate Kolkata's Durga Puja pandals using metro and get instant Google Maps directions 
              to any pandal with just one click!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 20, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white font-semibold px-8 py-6 text-lg shadow-festival-lg">
                  <Train className="w-5 h-5 mr-2" />
                  Explore Stations
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5 border-b-4 border-gradient-to-r border-festival-orange/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: blueLineStations.length, label: "Metro Stations", icon: <Train className="w-8 h-8" />, color: "from-blue-500 to-blue-600" },
              { value: `${totalPandals}+`, label: "Nearby Pandals", icon: <Star className="w-8 h-8" />, color: "from-festival-orange to-festival-saffron" },
              { value: "3", label: "Zones Covered", icon: <MapPin className="w-8 h-8" />, color: "from-emerald-500 to-green-600" },
              { value: "1-Click", label: "Navigation", icon: <Navigation className="w-8 h-8" />, color: "from-purple-500 to-indigo-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-300 border border-festival-orange/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: isStatsInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <motion.section 
        className="py-12 bg-gradient-to-r from-white to-festival-gold/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex flex-col md:flex-row gap-6 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Search className="absolute left-4 top-4 h-5 w-5 text-festival-orange animate-bounce-gentle" />
                <Input
                  placeholder="Search stations, exits, or pandals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 border-2 border-festival-orange/30 focus:border-festival-orange rounded-xl text-lg shadow-lg hover:shadow-festival transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </motion.div>
              <motion.select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="px-6 py-4 h-14 border-2 border-festival-orange/30 rounded-xl focus:border-festival-orange focus:outline-none text-lg font-medium shadow-lg hover:shadow-festival transition-all duration-300 bg-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {zones.map(zone => (
                  <option key={zone} value={zone}>{zone} Kolkata</option>
                ))}
              </motion.select>
            </motion.div>
            
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg">
                Showing <span className="font-bold text-festival-orange">{filteredStations.length}</span> of <span className="font-bold text-festival-orange">{blueLineStations.length}</span> metro stations
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Metro Route Guide */}
      <motion.section 
        className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-festival-lg border border-blue-200 overflow-hidden relative"
              whileHover={{ 
                boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Navigation className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-festival-orange to-festival-saffron bg-clip-text text-transparent">
                    How to Navigate to Pandals
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: <Train className="w-5 h-5" />, title: "Choose Metro Station", desc: "Find the nearest metro station to your location", color: "from-blue-500 to-blue-600" },
                    { icon: <MapPin className="w-5 h-5" />, title: "Select Pandal", desc: "Choose from pandals near the station", color: "from-festival-orange to-festival-saffron" },
                    { icon: <Navigation className="w-5 h-5" />, title: "Get Directions", desc: "Click 'Navigate' for Google Maps directions", color: "from-emerald-500 to-green-600" }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className={`p-2 bg-gradient-to-r ${step.color} rounded-lg text-white shadow-md mt-1`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">{step.title}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stations List */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence>
              {filteredStations.map((station, index) => (
                <motion.div
                  key={station.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  layout
                >
                  <Card className="overflow-hidden hover:shadow-festival-lg transition-all duration-500 border-0 bg-gradient-to-r from-white to-gray-50">
                    <Collapsible
                      open={openStations.includes(station.name)}
                      onOpenChange={() => toggleStation(station.name)}
                    >
                      <CollapsibleTrigger asChild>
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                          <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-festival-orange/5 hover:to-festival-saffron/5 transition-all duration-300 border-l-4 border-transparent hover:border-festival-orange">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <motion.div 
                                  className={`w-12 h-12 bg-gradient-to-r ${getZoneGradient(station.zone)} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                                  whileHover={{ scale: 1.1, rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  {index + 1}
                                </motion.div>
                                <div>
                                  <CardTitle className="text-xl text-gray-800 mb-2">{station.name}</CardTitle>
                                  <div className="flex items-center gap-3">
                                    <Badge className={getZoneColor(station.zone)}>
                                      {station.zone} Kolkata
                                    </Badge>
                                    <Badge variant="outline" className="text-festival-orange border-festival-orange bg-festival-orange/5">
                                      {station.exits ? 
                                        `${station.exits.reduce((total, exit) => total + exit.pandals.length, 0)} Pandals` :
                                        `${station.pandals?.length || 0} Pandals`
                                      }
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <motion.div 
                                  className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white shadow-md"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Train className="w-5 h-5" />
                                </motion.div>
                                <motion.div
                                  animate={{ rotate: openStations.includes(station.name) ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {openStations.includes(station.name) ? 
                                    <ChevronUp className="w-6 h-6 text-gray-400" /> : 
                                    <ChevronDown className="w-6 h-6 text-gray-400" />
                                  }
                                </motion.div>
                              </div>
                            </div>
                          </CardHeader>
                        </motion.div>
                      </CollapsibleTrigger>
                      
                      <AnimatePresence>
                        {openStations.includes(station.name) && (
                          <CollapsibleContent forceMount>
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CardContent className="border-t bg-gradient-to-br from-gray-50/80 to-festival-orange/5 backdrop-blur-sm">
                                {station.exits ? (
                                  <div className="space-y-8">
                                    {station.exits.map((exit, exitIndex) => (
                                      <motion.div 
                                        key={exitIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: exitIndex * 0.1 }}
                                      >
                                        <div className="flex items-center gap-3 mb-4">
                                          <motion.div 
                                            className="p-2 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white shadow-md"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <MapPin className="w-5 h-5" />
                                          </motion.div>
                                          <h4 className="font-semibold text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                            Exit: {exit.name}
                                          </h4>
                                          <Badge variant="outline" className="text-festival-orange border-festival-orange bg-festival-orange/10">
                                            {exit.pandals.length} Pandals
                                          </Badge>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-10">
                                          {exit.pandals.map((pandal, pandalIndex) => (
                                            <motion.div
                                              key={pandalIndex}
                                              className="p-4 bg-white rounded-lg border border-festival-orange/20 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-festival-orange/5 hover:to-festival-saffron/5 hover:border-festival-orange/40 transition-all duration-300 shadow-sm hover:shadow-md"
                                              initial={{ opacity: 0, scale: 0.9 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ duration: 0.3, delay: pandalIndex * 0.02 }}
                                              whileHover={{ 
                                                scale: 1.02,
                                                boxShadow: "0 4px 12px rgba(255, 107, 53, 0.15)"
                                              }}
                                            >
                                              <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                  <h5 className="font-medium text-gray-800 mb-1">{pandal.name}</h5>
                                                  {pandal.address && (
                                                    <p className="text-xs text-gray-500 mb-2">{pandal.address}</p>
                                                  )}
                                                </div>
                                              </div>
                                              <div className="flex gap-2 mt-3">
                                                <motion.div
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.95 }}
                                                  className="flex-1"
                                                >
                                                  <Button
                                                    size="sm"
                                                    className="w-full bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white text-xs"
                                                    onClick={() => openGoogleMapsDirections(pandal)}
                                                  >
                                                    <Navigation className="w-3 h-3 mr-1" />
                                                    Navigate
                                                  </Button>
                                                </motion.div>
                                                <motion.div
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.95 }}
                                                >
                                                  <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-festival-orange text-festival-orange hover:bg-festival-orange hover:text-white text-xs"
                                                    onClick={() => openInGoogleMaps(pandal)}
                                                  >
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    View
                                                  </Button>
                                                </motion.div>
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                ) : (
                                  <motion.div 
                                    className="space-y-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                  >
                                    <div className="flex items-center gap-3 mb-4">
                                      <motion.div 
                                        className="p-2 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white shadow-md"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <MapPin className="w-5 h-5" />
                                      </motion.div>
                                      <h4 className="font-semibold text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                        Nearby Pandals
                                      </h4>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                      {station.pandals?.map((pandal, pandalIndex) => (
                                        <motion.div
                                          key={pandalIndex}
                                          className="p-4 bg-white rounded-lg border border-festival-orange/20 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-festival-orange/5 hover:to-festival-saffron/5 hover:border-festival-orange/40 transition-all duration-300 shadow-sm hover:shadow-md"
                                          initial={{ opacity: 0, scale: 0.9 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.3, delay: pandalIndex * 0.02 }}
                                          whileHover={{ 
                                            scale: 1.02,
                                            boxShadow: "0 4px 12px rgba(255, 107, 53, 0.15)"
                                          }}
                                        >
                                          <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                              <h5 className="font-medium text-gray-800 mb-1">{pandal.name}</h5>
                                              {pandal.address && (
                                                <p className="text-xs text-gray-500 mb-2">{pandal.address}</p>
                                              )}
                                            </div>
                                          </div>
                                          <div className="flex gap-2 mt-3">
                                            <motion.div
                                              whileHover={{ scale: 1.05 }}
                                              whileTap={{ scale: 0.95 }}
                                              className="flex-1"
                                            >
                                              <Button
                                                size="sm"
                                                className="w-full bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white text-xs"
                                                onClick={() => openGoogleMapsDirections(pandal)}
                                              >
                                                <Navigation className="w-3 h-3 mr-1" />
                                                Navigate
                                              </Button>
                                            </motion.div>
                                            <motion.div
                                              whileHover={{ scale: 1.05 }}
                                              whileTap={{ scale: 0.95 }}
                                            >
                                              <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-festival-orange text-festival-orange hover:bg-festival-orange hover:text-white text-xs"
                                                onClick={() => openInGoogleMaps(pandal)}
                                              >
                                                <MapPin className="w-3 h-3 mr-1" />
                                                View
                                              </Button>
                                            </motion.div>
                                          </div>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </CardContent>
                            </motion.div>
                          </CollapsibleContent>
                        )}
                      </AnimatePresence>
                    </Collapsible>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-white via-festival-gold/5 to-festival-saffron/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
                Navigation Tips
              </h2>
              <p className="text-xl text-gray-600">
                Make the most of your Durga Puja pandal hopping with Google Maps navigation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "One-Click Navigation",
                  desc: "Click 'Navigate' for instant Google Maps directions with transit options",
                  icon: <Navigation className="w-7 h-7" />,
                  color: "from-festival-orange to-festival-saffron"
                },
                {
                  title: "Precise Locations",
                  desc: "Each pandal has GPS coordinates for accurate navigation",
                  icon: <MapPin className="w-7 h-7" />,
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Transit Mode",
                  desc: "Directions automatically set to public transit for easy metro access",
                  icon: <Train className="w-7 h-7" />,
                  color: "from-emerald-500 to-green-600"
                }
              ].map((tip, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-festival-orange/5 to-festival-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tip.color} rounded-full text-white mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tip.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{tip.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

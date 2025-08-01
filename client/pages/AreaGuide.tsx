import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  MapPin,
  Search,
  ChevronDown,
  ChevronUp,
  Navigation,
  Users,
  Zap,
  Star,
  Grid3X3,
} from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

interface Pandal {
  name: string;
}

interface Area {
  name: string;
  pandals: Pandal[];
  zone: "North" | "Central" | "South";
}

const areaData: Area[] = [
  // NORTH KOLKATA
  {
    name: "SEALDAH",
    zone: "North",
    pandals: [
      { name: "SANTOSH MITRA SQUARE" },
      { name: "SEALDAH RAILWAY ATHLETIC" },
      { name: "SUBODH MALLICK SQUARE" },
      { name: "AMHERST STREET SARBOJONIN" },
      { name: "ENTALLY DURGA PUJA SAMITY" },
    ],
  },
  {
    name: "MANIKTALA",
    zone: "North",
    pandals: [
      { name: "CHALTABAGAN LOHAPATTY" },
      { name: "LALABAGAN SARBOJONIN" },
      { name: "LALABAGAN NABANKUR" },
      { name: "SAHITYA PARISHAD" },
    ],
  },
  {
    name: "KAKURGACHI",
    zone: "North",
    pandals: [
      { name: "MITALI SANGHA" },
      { name: "YUBA BRINDA" },
      { name: "BRS 10" },
      { name: "BELEGHATA 33 PALLI" },
    ],
  },
  {
    name: "ULTADANGA",
    zone: "North",
    pandals: [
      { name: "Ultadanga sangrami" },
      { name: "Ultadanga Surir Bagan" },
      { name: "Dharbagan Sarbojonin" },
      { name: "Ultadanga Bidhan Sangha" },
      { name: "Telengabagan" },
      { name: "Karbagan" },
      { name: "Pallysree" },
      { name: "Kabiraj Bagan" },
      { name: "Aurobindo Setu Sarbojonin" },
      { name: "Gouriberia Sarbojonin" },
      { name: "DAKSHINDARI SPORTING CLUB" },
      { name: "SHREEBHUMI SPORTING" },
      { name: "GOLAGHATA SARBOJONIN" },
    ],
  },
  {
    name: "BELGACHIA",
    zone: "North",
    pandals: [
      { name: "BELGACHIA SADHARAN" },
      { name: "TALA PARK PRATTAY" },
      { name: "TALA BAROWARI" },
      { name: "TALA 15 PALLI" },
      { name: "BELGACHIA ADI SARBOJONIN" },
      { name: "BELGACHIA CENTRAL SARBOJONIN DURGOTSAB" },
      { name: "BELGACHIA YUBA SAMMILANI" },
    ],
  },
  {
    name: "SHYAMBAZAR",
    zone: "North",
    pandals: [
      { name: "BIDHAN SARANI ATLAS CLUB" },
      { name: "SIKDAR BAGAN SADHARAN" },
      { name: "HATIBAGAN NABIN PALLY" },
      { name: "NALIN SARKAR STREET" },
      { name: "NORTH TRIDHARA" },
      { name: "HATIBAGAN SARBOJONIN" },
      { name: "SHYAMPUKUR ADI SARBOJONIN" },
      { name: "SHYAMBAZAR FRIENDS UNION" },
      { name: "JAGAT MUKHERJEE PARK" },
      { name: "BAGBAZAR PALLI PUJA(GOURIMATA UDYAN)" },
      { name: "NABA BAGBAZAR SARBOJONIN" },
      { name: "BAGBAZAR SARBOJONIN" },
    ],
  },
  {
    name: "SOVABAZAR SUTANUTI & AHIRITOLA",
    zone: "North",
    pandals: [
      { name: "Kumartuli Sarbojonin" },
      { name: "Kumartuli Park" },
      { name: "Ahiritola Sarbojonin" },
      { name: "AHIRITOLA JUBAK BRINDA" },
      { name: "BENIATOLA SARBOJONIN" },
      { name: "HATHKHOLA GOSAIPARA SARBOJONIN" },
      { name: "SOVABAZAR BURTOLLA SARBOJONIN" },
    ],
  },
  {
    name: "GIRISH PARK",
    zone: "North",
    pandals: [
      { name: "KASHI BOSE LANE" },
      { name: "DARJEEPARA SARBOJONIN" },
      { name: "NIMTALA SARBOJONIN" },
      { name: "PATHURIAGHATA 5er PALLY" },
      { name: "SHIMLA BYAM SAMITY" },
      { name: "VIVEKANANDA SPORTING" },
      { name: "SHIMLA SPORTING" },
      { name: "SHYAMALDHAN DUTTA BARI" },
    ],
  },
  {
    name: "DUM DUM/BAGUIATI/KESHTOPUR",
    zone: "North",
    pandals: [
      { name: "Dum dum Park Bharat Chakra" },
      { name: "Dum dum park Sarbojonin" },
      { name: "Dum Dum park Tarun Dol" },
      { name: "Baguiati Railpukur Athletic" },
      { name: "Dum dum park tarun sangha" },
      { name: "Dum dum park Dakshinpara Durgotsab Committee" },
      { name: "Dum dum park yubak brinda" },
      { name: "KESHTOPUR PRAFULLA KANAN" },
      { name: "ARJUNPUR AMRA SABAI" },
    ],
  },
  // CENTRAL KOLKATA
  {
    name: "MG ROAD",
    zone: "Central",
    pandals: [
      { name: "CHOREBAGAN SARBOJONIN" },
      { name: "COLLEGE SQUARE" },
      { name: "MD ALI PARK" },
      { name: "JORASAKO 7 PALLI" },
      { name: "JORASAKO SADHARAN" },
    ],
  },
  {
    name: "SALT LAKE/NEWTOWN",
    zone: "Central",
    pandals: [
      { name: "IB BLOCK" },
      { name: "FE BLOCK" },
      { name: "FD BLOCK" },
      { name: "KARUNAMOYEE HOUSING G-BLOCK" },
      { name: "LABONY ESTATE" },
      { name: "EC BLOCK" },
      { name: "CE BLOCK" },
      { name: "BJ BLOCK" },
      { name: "AJ BLOCK" },
      { name: "CF BLOCK" },
      { name: "BG BLOCK" },
      { name: "AH BLOCK" },
      { name: "AE BLOCK" },
    ],
  },
  // SOUTH KOLKATA
  {
    name: "BHAWANIPUR",
    zone: "South",
    pandals: [
      { name: "75 PALLY" },
      { name: "62 PALLY" },
      { name: "BHAWANIPUR SARBOJONIN" },
      { name: "SWADHIN SANGHA" },
      { name: "KISHORE SANGHA" },
      { name: "SARASWATI SANGHA" },
      { name: "CHAKRABERIA SARBOJONIN" },
      { name: "PADDAPUKUR SARBOJONIN" },
      { name: "JAGRITEE DURGA PUJA" },
      { name: "PADDAPUKUR BAROWARI" },
      { name: "PEYARA BAGAN DURGA PUJA" },
      { name: "MADDOX SQUARE" },
      { name: "68 PALLY DURGA PUJA" },
      { name: "BAKULBAGAN SARBOJONIN" },
      { name: "RUPCHAND MUKHERJEE LANE" },
    ],
  },
  {
    name: "HAZRA X-ING/ ALIPORE/KALIGHAT",
    zone: "South",
    pandals: [
      { name: "Hazra Park Sarbojonin" },
      { name: "Kalighat Yuba Maitry" },
      { name: "Kalighat Byamagar" },
      { name: "Kalighat Milan Sangha" },
      { name: "Kalighat Sree Sangha" },
      { name: "Kalighat Mahashakti" },
      { name: "66 Pally" },
      { name: "Badamtala Ashar Sangha" },
      { name: "Nepal Bhattacharya Street" },
      { name: "Kalighat BBTA" },
      { name: "Chetla Pally" },
      { name: "Chetla Agrani" },
      { name: "SURUCHI SANGHA" },
      { name: "Alipore Sarbojonin" },
      { name: "Alipore 78 Pally" },
      { name: "Deshapriya Park" },
    ],
  },
  {
    name: "Tollygunge",
    zone: "South",
    pandals: [
      { name: "Mudiali Club" },
      { name: "Tarun Sangha" },
      { name: "Shiv Mandir Sarbojonin" },
      { name: "Lake Youth" },
      { name: "Buroshibtolla Durga Puja" },
      { name: "Swiss Park" },
      { name: "Pratipaditya Trikon Park" },
    ],
  },
  {
    name: "Ballygunge/Kasba",
    zone: "South",
    pandals: [
      { name: "Tridhara Sammilani" },
      { name: "Ballygunge Cultural Association" },
      { name: "Samaj Sebi sangha" },
      { name: "Hindustan Park Sarbojonin" },
      { name: "Hindustan Yubak Brinda" },
      { name: "Hindustan Club Sarbojonin" },
      { name: "Singhi Park" },
      { name: "Ekdalia Evergreen" },
      { name: "RAJDANGA CHAKRABORTY PARA" },
      { name: "RAJDANGA NABA UDAY SANGHA" },
      { name: "BOSEPUKUR TALBAGAN" },
      { name: "BOSEPUKUR SITALA MANDIR" },
    ],
  },
  {
    name: "Behala",
    zone: "South",
    pandals: [
      { name: "THAKURPUKUR SB PARK" },
      { name: "SABARNA ROY CHOWDHURY BORO BARI" },
      { name: "BARISHA CLUB" },
      { name: "BARISHA SARBOJONIN" },
      { name: "BARISHA JANAKALYAN SAMITY" },
      { name: "BARISHA PLAYER'S CORNER(SOURAV GANGULY'S PARA)" },
      { name: "BEHALA NATUN SANGHA" },
      { name: "AMRENDRA BARI(BONEDI BARI)" },
      { name: "BEHALA FRIENDS CLUB" },
      { name: "DEBDARU FATAK" },
      { name: "BEHALA SARBOJONIN" },
    ],
  },
  {
    name: "DHAKURIA JADAVPUR SANTOSHPUR",
    zone: "South",
    pandals: [
      { name: "DHAKURIA SARBOJONIN" },
      { name: "BABUBAGAN SARBOJONIN" },
      { name: "SELIMPUR PALLY" },
      { name: "JODHPUR PARK" },
      { name: "JODHPUR 95 PALLY ASSOCIATION" },
      { name: "SANTOSHPUR LAKE PALLY" },
      { name: "SANTOSHPUR AVENUE SOUTH" },
      { name: "SANTOSHPUR TRIKON PARK" },
    ],
  },
  {
    name: "KHIDDERPORE",
    zone: "South",
    pandals: [
      { name: "75 PALLI" },
      { name: "25 PALLI" },
      { name: "74 PALLI" },
      { name: "KHIDDERPORE SARBOJONIN" },
      { name: "KABITIRTHA SARADOTSAV" },
      { name: "KABITIRTHA SARODOTSAV" },
      { name: "PALLY SARODIYA" },
      { name: "26 PALLI" },
      { name: "NABAJAGARAN" },
    ],
  },
];

export default function AreaGuide() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZone, setSelectedZone] = useState("All");
  const [openAreas, setOpenAreas] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const zones = ["All", "North", "Central", "South"];

  const filteredAreas = useMemo(() => {
    return areaData.filter((area) => {
      const matchesSearch =
        area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.pandals.some((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      const matchesZone = selectedZone === "All" || area.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [searchTerm, selectedZone]);

  const toggleArea = (areaName: string) => {
    setOpenAreas((prev) =>
      prev.includes(areaName)
        ? prev.filter((name) => name !== areaName)
        : [...prev, areaName],
    );
  };

  const handleBrowseAreas = () => {
    areasRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuickSearch = () => {
    searchRef.current?.focus();
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate autocomplete suggestions
  const suggestions = useMemo(() => {
    if (searchTerm.length < 1) return [];

    const allItems = [];

    // Add area names
    areaData.forEach((area) => {
      if (area.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        allItems.push({ type: "area", name: area.name, zone: area.zone });
      }

      // Add pandal names
      area.pandals.forEach((pandal) => {
        if (pandal.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          allItems.push({
            type: "pandal",
            name: pandal.name,
            area: area.name,
            zone: area.zone,
          });
        }
      });
    });

    return allItems.slice(0, 8); // Limit to 8 suggestions
  }, [searchTerm]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setShowSuggestions(value.length > 0);
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    if (suggestion.type === "area") {
      setSelectedZone(suggestion.zone);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestion((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (activeSuggestion >= 0) {
          handleSuggestionClick(suggestions[activeSuggestion]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setActiveSuggestion(-1);
        break;
    }
  };

  const totalPandals = areaData.reduce(
    (total, area) => total + area.pandals.length,
    0,
  );
  const totalAreas = areaData.length;

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case "North":
        return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 shadow-lg";
      case "Central":
        return "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 shadow-lg";
      case "South":
        return "bg-gradient-to-r from-festival-orange/20 to-festival-saffron/30 text-festival-orange-dark shadow-lg";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-lg";
    }
  };

  const getZoneGradient = (zone: string) => {
    switch (zone) {
      case "North":
        return "from-blue-500 to-indigo-600";
      case "Central":
        return "from-emerald-500 to-green-600";
      case "South":
        return "from-festival-orange to-festival-saffron";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-deep-orange text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 bg-festival-gold/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-20 h-20 bg-festival-vermillion/20 rounded-full blur-lg"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-16 h-16 bg-festival-amber/20 rounded-full blur-md"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto mobile-safe">
          <div className="max-w-4xl mx-auto text-center mobile-container">
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 shadow-glow animate-pulse-slow">
                <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Explore by Area
              </Badge>
            </motion.div>

            <motion.h1
              className="mobile-hero font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent animate-shimmer">
                Area Guide
              </span>
              <motion.span
                className="block text-festival-gold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Pandals by Kolkata Areas
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto px-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover Durga Puja pandals organized by Kolkata's neighborhoods
              and areas. Find all the famous pujas in your locality or explore
              new areas.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={handleBrowseAreas}
                  className="bg-white text-festival-orange hover:bg-gray-100 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-festival-lg font-bold w-full sm:w-auto"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Browse Areas
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleQuickSearch}
                  className="border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 backdrop-blur-sm font-bold w-full sm:w-auto"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Quick Search
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="mobile-spacing lg:py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5 border-b-4 border-gradient-to-r border-festival-orange/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto mobile-safe">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                value: totalAreas,
                label: "Areas Covered",
                icon: <Grid3X3 className="w-8 h-8" />,
                color: "from-festival-orange to-festival-saffron",
              },
              {
                value: `${totalPandals}+`,
                label: "Total Pandals",
                icon: <Star className="w-8 h-8" />,
                color: "from-festival-gold to-festival-amber",
              },
              {
                value: "3",
                label: "Zones",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-blue-500 to-indigo-600",
              },
              {
                value: "Easy",
                label: "Search",
                icon: <Search className="w-8 h-8" />,
                color: "from-emerald-500 to-green-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center mobile-card bg-white rounded-xl sm:rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-300 border border-festival-orange/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isStatsInView ? 1 : 0,
                  y: isStatsInView ? 0 : 30,
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-3 sm:mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">{stat.icon}</div>
                </motion.div>
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1 sm:mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: isStatsInView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <motion.section
        className="mobile-spacing lg:py-12 bg-gradient-to-r from-white to-festival-gold/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto mobile-safe">
          <div className="max-w-4xl mx-auto mobile-container">
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative flex-1"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Search className="absolute left-3 sm:left-4 top-3 sm:top-4 h-4 w-4 sm:h-5 sm:w-5 text-festival-orange animate-bounce-gentle z-10" />
                <Input
                  ref={searchRef}
                  placeholder="Search areas or pandals..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 200)
                  }
                  className="pl-10 sm:pl-12 h-12 sm:h-14 border-2 border-festival-orange/30 focus:border-festival-orange rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-festival transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />

                {/* Autocomplete Suggestions */}
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      ref={suggestionsRef}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 bg-white border-2 border-festival-orange/30 rounded-lg sm:rounded-xl shadow-festival-lg mt-2 z-50 overflow-hidden backdrop-blur-sm"
                    >
                      {suggestions.map((suggestion, index) => (
                        <motion.div
                          key={`${suggestion.type}-${suggestion.name}`}
                          className={`p-3 cursor-pointer transition-colors duration-200 ${
                            index === activeSuggestion
                              ? "bg-festival-orange/10 border-l-4 border-festival-orange"
                              : "hover:bg-festival-orange/5 border-l-4 border-transparent"
                          }`}
                          onClick={() => handleSuggestionClick(suggestion)}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium text-gray-800">
                                {suggestion.name}
                              </div>
                              {suggestion.type === "pandal" && (
                                <div className="text-sm text-gray-500">
                                  in {suggestion.area}
                                </div>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Badge
                                className={`text-xs ${
                                  suggestion.type === "area"
                                    ? "bg-festival-saffron/20 text-festival-saffron-dark"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {suggestion.type}
                              </Badge>
                              <Badge className={getZoneColor(suggestion.zone)}>
                                {suggestion.zone}
                              </Badge>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-14 border-2 border-festival-orange/30 rounded-lg sm:rounded-xl focus:border-festival-orange focus:outline-none text-sm sm:text-base lg:text-lg font-medium shadow-lg hover:shadow-festival transition-all duration-300 bg-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {zones.map((zone) => (
                  <option key={zone} value={zone}>
                    {zone} Kolkata
                  </option>
                ))}
              </motion.select>
            </motion.div>

            <motion.div
              className="text-center mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mobile-text">
                Showing{" "}
                <span className="font-bold text-festival-orange">
                  {filteredAreas.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-festival-orange">
                  {totalAreas}
                </span>{" "}
                areas
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How to Use Guide */}
      <motion.section
        className="mobile-spacing lg:py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto mobile-safe">
          <div className="max-w-4xl mx-auto mobile-container">
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl mobile-card shadow-festival-lg border border-blue-200 overflow-hidden relative"
              whileHover={{
                boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div
                    className="p-2 sm:p-3 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Grid3X3 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <h2 className="mobile-heading font-bold bg-gradient-to-r from-festival-orange to-festival-saffron bg-clip-text text-transparent">
                    How to Use Area Guide
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    {
                      icon: <Navigation className="w-5 h-5" />,
                      title: "Choose Your Area",
                      desc: "Select from 18+ areas across Kolkata",
                      color: "from-festival-orange to-festival-saffron",
                    },
                    {
                      icon: <Search className="w-5 h-5" />,
                      title: "Search Pandals",
                      desc: "Find specific pandals in your area",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Plan Your Route",
                      desc: "Visit multiple pandals in the same locality",
                      color: "from-emerald-500 to-green-600",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <motion.div
                        className={`p-2 bg-gradient-to-r ${step.color} rounded-lg text-white shadow-md mt-1 flex-shrink-0`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5">{step.icon}</div>
                      </motion.div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                          {step.title}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Areas List */}
      <section
        ref={areasRef}
        className="mobile-spacing lg:py-16 bg-gradient-to-br from-orange-50 to-yellow-50"
      >
        <div className="container mx-auto mobile-safe">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mobile-container">
            <AnimatePresence>
              {filteredAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  layout
                >
                  <Card className="overflow-hidden hover:shadow-festival-lg transition-all duration-500 border-0 bg-gradient-to-r from-white to-gray-50">
                    <Collapsible
                      open={openAreas.includes(area.name)}
                      onOpenChange={() => toggleArea(area.name)}
                    >
                      <CollapsibleTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-festival-orange/5 hover:to-festival-saffron/5 transition-all duration-300 border-l-4 border-transparent hover:border-festival-orange">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <motion.div
                                  className={`w-12 h-12 bg-gradient-to-r ${getZoneGradient(area.zone)} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                                  whileHover={{ scale: 1.1, rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  {index + 1}
                                </motion.div>
                                <div>
                                  <CardTitle className="text-xl text-gray-800 mb-2">
                                    {area.name}
                                  </CardTitle>
                                  <div className="flex items-center gap-3">
                                    <Badge className={getZoneColor(area.zone)}>
                                      {area.zone} Kolkata
                                    </Badge>
                                    <Badge
                                      variant="outline"
                                      className="text-festival-orange border-festival-orange bg-festival-orange/5"
                                    >
                                      {area.pandals.length} Pandals
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <motion.div
                                  className="p-2 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white shadow-md"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <MapPin className="w-5 h-5" />
                                </motion.div>
                                <motion.div
                                  animate={{
                                    rotate: openAreas.includes(area.name)
                                      ? 180
                                      : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {openAreas.includes(area.name) ? (
                                    <ChevronUp className="w-6 h-6 text-gray-400" />
                                  ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400" />
                                  )}
                                </motion.div>
                              </div>
                            </div>
                          </CardHeader>
                        </motion.div>
                      </CollapsibleTrigger>

                      <AnimatePresence>
                        {openAreas.includes(area.name) && (
                          <CollapsibleContent forceMount>
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CardContent className="border-t bg-gradient-to-br from-gray-50/80 to-festival-orange/5 backdrop-blur-sm">
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
                                      <Star className="w-5 h-5" />
                                    </motion.div>
                                    <h4 className="font-semibold text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                      Pandals in {area.name}
                                    </h4>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {area.pandals.map((pandal, pandalIndex) => (
                                      <motion.div
                                        key={pandalIndex}
                                        className="p-3 bg-white rounded-lg border border-festival-orange/20 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-festival-orange/5 hover:to-festival-saffron/5 hover:border-festival-orange/40 transition-all duration-300 shadow-sm hover:shadow-md"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                          duration: 0.3,
                                          delay: pandalIndex * 0.02,
                                        }}
                                        whileHover={{
                                          scale: 1.02,
                                          boxShadow:
                                            "0 4px 12px rgba(255, 107, 53, 0.15)",
                                        }}
                                      >
                                        {pandal.name}
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
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

      {/* Popular Areas Section */}
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
                Popular Areas
              </h2>
              <p className="text-xl text-gray-600">
                Most visited areas during Durga Puja with the highest
                concentration of pandals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areaData.slice(0, 6).map((area, index) => (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-festival-orange/5 to-festival-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getZoneGradient(area.zone)} rounded-full text-white mb-6 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {area.name}
                    </h3>
                    <p className="text-festival-orange font-semibold text-lg mb-2">
                      {area.pandals.length} Pandals
                    </p>
                    <Badge className={getZoneColor(area.zone)}>
                      {area.zone} Kolkata
                    </Badge>
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

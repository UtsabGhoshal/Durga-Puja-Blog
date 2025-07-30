import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Navigation,
  ExternalLink,
  Clock,
  Star,
  Route,
  User,
  Heart,
  Camera,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

interface PandalLocation {
  name: string;
  area?: string;
}

interface DayLocation {
  name: string;
  exit?: string;
  pandals: PandalLocation[];
  mapUrl?: string;
  notes?: string;
}

interface OwnerDay {
  day: number;
  dayName: string;
  theme: string;
  zones: string[];
  locations: DayLocation[];
  choices?: {
    title: string;
    options: string[];
  };
  totalTime?: string;
  color: string;
  icon: any;
}

const ownersPlan: OwnerDay[] = [
  {
    day: 1,
    dayName: "Chaturthi",
    theme: "Covering North Main Kolkata Side today",
    zones: ["North Kolkata"],
    totalTime: "Full Day",
    color: "from-blue-500 to-indigo-600",
    icon: <Star className="w-4 h-4" />,
    locations: [
      {
        name: "Belgachia",
        exit: "Tram Depot Exit",
        pandals: [
          { name: "Belgachia Sadharan" },
          { name: "Tala Park Prattay" },
          { name: "Tala Barowari" },
        ],
        mapUrl:
          "https://www.google.com/maps/dir/J94P%2B7G7+Belgachia+Metro+Station,+10%2F1,+Belgachia,+Kolkata,+West+Bengal+700037/Belgachia+Sadharon+Durgotsav,+Tala,+Belgachia,+Kolkata,+West+Bengal/Tala+Prattoy+Durga+Puja+Art,+Tala+Park+Road,+Tala,+Kolkata,+West+Bengal/Tala+Barowari+Durga+Puja,+Paikpara+Row,+Tala,+Bidhan+Sarani,+Paikpara,+Kolkata,+West+Bengal/@22.605989,88.3759606,1337m/data=!3m2!1e3!4b1!4m26!4m25!1m5!1m1!1s0x3a02770058c8d823:0xada52946f9b74339!2m2!1d88.3862969!2d22.6056625!1m5!1m1!1s0x3a02761f65e977c5:0xb4a2aa7574f820e1!2m2!1d88.3827393!2d22.6077319!1m5!1m1!1s0x3a02770066793be3:0xa2bba210b58b73f6!2m2!1d88.382502!2d22.6087911!1m5!1m1!1s0x3a02774f2b7d0e37:0x488d58e6fd52e60!2m2!1d88.375924!2d22.607163!3e2?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        name: "Shyambazar Hatibagan Area",
        exit: "5 Point Crossing",
        pandals: [
          { name: "Bidhan Sarani Atlas Club" },
          { name: "Sikdar Bagan Sadharan" },
          { name: "Hatibagan Nabin Pally" },
          { name: "Nalin Sarkar Street" },
          { name: "North Tridhara" },
          { name: "Hatibagan Sarbojonin" },
          { name: "Kashi Bose Lane" },
          { name: "Darjeepara Sarbojonin" },
          { name: "Maniktala Chaltabagan Lohapatty" },
          { name: "Amherst Street Sarbojonin" },
          { name: "Lalabagan Sarbojonin" },
          { name: "Lalabagan Nabankur" },
        ],
        mapUrl:
          "https://www.google.com/maps/dir/Shyambazar+5+Point/Bidhan+Sarani+Atlas+Club/Sikdar+Bagan+Durga+Puja/Hatibagan+Nabinpally+Durga+Puja+Committee/North+Tridhara+Durga+Puja/Nalin+Sarkar+Street+Durga+Puja/Hatibagan+Sarbojonin/Kashi+Bose+Lane+Durga+Puja+Committee/Chaltabagan+Loha+patty+durgapuja/Lalabagan+Nabankur+Durga+Puja+Pandal+entrance+gate,+Raja+Dinendra+Street,+Manicktala,+Sahitya+Parishad,+Ward+Number+15,+Kolkata,+West+Bengal/@22.5927062,88.3621567,2674m/data=!3m2!1e3!4b1!4m62!4m61!1m5!1m1!1s0x3a0276256a6c32e7:0xf39c24ddadb38682!2m2!1d88.37348!2d22.601283!1m5!1m1!1s0x3a0277922da71ee9:0xe8eab0a84ac51d93!2m2!1d88.3729181!2d22.599686!1m5!1m1!1s0x3a0277007ded3faf:0x9800f918c0a72fcf!2m2!1d88.3721381!2d22.5966221!1m5!1m1!1s0x3a0277004241962d:0xb37aec4cc13d9b01!2m2!1d88.3734176!2d22.5959028!1m5!1m1!1s0x3a02779677298fb9:0x9473a4b994b8d3cc!2m2!1d88.3745571!2d22.5958363!1m5!1m1!1s0x3a02763a2e785e2f:0xa519bd83e2d27c76!2m2!1d88.3743798!2d22.5946878!1m5!1m1!1s0x3a027630b1e30443:0x78837359e84d7bc7!2m2!1d88.3720004!2d22.5943863!1m5!1m1!1s0x3a027636f4aba21b:0xd56a6b40b1520547!2m2!1d88.3689174!2d22.5908979!1m5!1m1!1s0x3a02770056934497:0x641f83815da39b29!2m2!1d88.3723011!2d22.5844952!1m5!1m1!1s0x3a02770026d8bcad:0xa9e9419ef4a43e88!2m2!1d88.3767671!2d22.5883715!3e2?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
        notes: "Spot ended Maniktala",
      },
    ],
    choices: {
      title: "User have choices",
      options: [
        "Go further for Kakurgachi - MITALI SANGHA, YUBA BRINDA",
        "PROCEED TO ULTADANGA and depart",
        "Go for central Kolkata/South Kolkata",
      ],
    },
  },
  {
    day: 2,
    dayName: "Panchami",
    theme: "Covering Main South",
    zones: ["South Kolkata"],
    totalTime: "Full Day",
    color: "from-emerald-500 to-green-600",
    icon: <Heart className="w-4 h-4" />,
    locations: [
      {
        name: "Rabindra Sarobar",
        exit: "Charu Market Exit",
        pandals: [
          { name: "Mudiali Club" },
          { name: "Shiv Mandir Sarbojonin" },
          { name: "Lake Youth" },
          { name: "Pratipaditya Trikon Park" },
        ],
      },
      {
        name: "Kalighat Area",
        pandals: [
          { name: "66 Pally" },
          { name: "Badamtala Ashar Sangha" },
          { name: "Nepal Bhattacharya Street" },
          { name: "Kalighat BBTA" },
          { name: "Chetla Pally" },
          { name: "Chetla Agrani" },
        ],
        mapUrl: "https://maps.app.goo.gl/hKr3TEo1wAthE4Fj7",
      },
      {
        name: "Alipore Area",
        pandals: [{ name: "Alipore Sarbojonin" }, { name: "Alipore 78 Pally" }],
        mapUrl: "https://maps.app.goo.gl/SNTAQjQzYmTeLG5E9",
      },
      {
        name: "Deshapriya Park & Ballygunge",
        pandals: [
          { name: "Deshapriya Park" },
          { name: "Tridhara Sammilani" },
          { name: "Ballygaunge Cultural Association" },
          { name: "Samaj Sebi Sangha" },
          { name: "Hindustan Park Sarbojonin" },
          { name: "Hindustan Yuba Brinda" },
          { name: "Hindustan Club Sarbojonin" },
          { name: "Singhi Park" },
          { name: "Ekdalia Evergreen" },
        ],
        mapUrl: "https://maps.app.goo.gl/JAqLTp2CU7AATrs19",
        notes:
          "Bus routes: 13C, 18B/1, 18C, S-131, SD-8, S-62 to Deshapriya Park",
      },
    ],
    choices: {
      title: "User have choices",
      options: ["Head Further Kasba/Bypass", "Head To Sealdah & Depart"],
    },
  },
  {
    day: 3,
    dayName: "Shasti",
    theme: "Covering the Central",
    zones: ["Central Kolkata"],
    totalTime: "Full Day",
    color: "from-purple-500 to-indigo-600",
    icon: <Camera className="w-4 h-4" />,
    locations: [
      {
        name: "Sealdah Railway Station",
        exit: "Sealdah Railway Station Exit",
        pandals: [
          { name: "Santosh Mitra Square" },
          { name: "Sealdah Railway Athletic" },
        ],
      },
      {
        name: "Central Poddar Court",
        exit: "CR Avenue Exit",
        pandals: [
          { name: "College Square" },
          { name: "Badan Chand Roy Bari" },
          { name: "Motilal Seal Thakurbari" },
          { name: "MD Ali Park" },
          { name: "Chorebagan Mitra Bari" },
          { name: "Chorebagan Sarbojonin" },
          { name: "Chorebagan Chatterjee Bari" },
          { name: "Thanthania Dutta Bari" },
          { name: "Laha Bari" },
          { name: "Simla Byam Samity" },
          { name: "Rajabazar Harinath Mukherjee Bari" },
        ],
        mapUrl: "https://maps.app.goo.gl/spUk7Yf934LR4eMJ6",
      },
    ],
    choices: {
      title: "User have choices to",
      options: ["Head for Kakurgachi", "Head for sealdah/ultadanga/shyambazar"],
    },
  },
  {
    day: 4,
    dayName: "Saptami",
    theme: "Covering North Side Branch",
    zones: ["North Kolkata"],
    totalTime: "Full Day",
    color: "from-red-500 to-pink-600",
    icon: <Users className="w-4 h-4" />,
    locations: [
      {
        name: "Dum Dum Park",
        exit: "Dum Dum Park Exit",
        pandals: [
          { name: "Dum Dum Park Yubak Brinda" },
          { name: "Dum Dum Park Sarbojonin" },
          { name: "Dakshinpara Durgotsab Committee" },
          { name: "Tarun Dal" },
          { name: "Bharat Chakra" },
          { name: "Tarun Sangha" },
        ],
        mapUrl: "https://maps.app.goo.gl/5pfQmokHaCfF4KzDy5",
      },
      {
        name: "Sovabazar X-ing",
        exit: "Sovabazar X-ing Exit",
        pandals: [
          { name: "Sovabazar Rajbari (Nabakrishna Dev)" },
          { name: "Sovabazar Rajbari (Radhakanta Dev)" },
          { name: "Sovabazar Burtolla" },
          { name: "Beniatola Sarbojonin" },
          { name: "Ahiritola Jubak Brinda" },
          { name: "Ahiritola Sarbojonin" },
          { name: "Hathkhola Gosaipara Sarbojonin" },
          { name: "Kumartuli Park" },
          { name: "Kumartuli Sarbojonin" },
          { name: "Jagat Mukherjee Park" },
          { name: "Bagbazar Polli Puja" },
          { name: "Bagbazar Sarbojonin" },
          { name: "Bagbazar Halder Bari" },
        ],
        mapUrl: "https://maps.app.goo.gl/JZLUhCukTwdAqcJX6",
      },
      {
        name: "Ultadanga Gouriberia Flyover",
        exit: "Ultadanga Gouriberia Flyover Exit",
        pandals: [
          { name: "Gouriberia Sarbojonin" },
          { name: "Aurobindo Setu Sarbojonin" },
          { name: "Kabiraj Bagan Sarbojonin" },
          { name: "Karbagan Sarbojonin" },
          { name: "Pallysree Sarbojonin" },
          { name: "Telengabagan Sarbojonin" },
          { name: "Surir Bagan Sarbojonin" },
          { name: "Ultadanga Bidhan Sangha" },
          { name: "Dharbagan Sarbojonin" },
          { name: "Ultadanga Sangrami" },
        ],
        mapUrl: "https://maps.app.goo.gl/xuakhRXzxm4h5PAF7",
      },
    ],
  },
  {
    day: 5,
    dayName: "Ashtami",
    theme: "Covering the heritage Bonedi baris of Kolkata",
    zones: ["Heritage Areas"],
    totalTime: "Full Day",
    color: "from-yellow-500 to-orange-600",
    icon: <Star className="w-4 h-4" />,
    locations: [
      {
        name: "Sovabazar Ahiritola Railway Station",
        exit: "Sovabazar Ahiritola Railway Station Exit",
        pandals: [
          { name: "Hathkhola Dutta Bari" },
          { name: "Pathuriaghata Rajbari" },
          { name: "Harakutir Ray-Banerjee Bari" },
          { name: "Shyamaldhan Dutta Bari" },
          { name: "Dorji Para Mitra Bari" },
          { name: "Chhatubabu and Latubabu Thakurbari" },
          { name: "Chandra Bari" },
          { name: "Jorasako Shib Krishna Daw Bati" },
          { name: "Jorasako Sadharan" },
          { name: "Maniktala Saha Bari" },
        ],
        mapUrl: "https://maps.app.goo.gl/NvR5DzFpCja3kikA6",
      },
      {
        name: "Dharmatala SN Banerjee Road",
        exit: "Dharmatala SN Banerjee Road Exit",
        pandals: [
          { name: "Rani Rashmoni Kachari Bari" },
          { name: "Janbazar Rajbari" },
          { name: "Bardhan Bari" },
          { name: "New Market Sarbojonin" },
        ],
        mapUrl: "https://maps.app.goo.gl/i4eamFrixrgqxy8T7",
      },
      {
        name: "Bhawanipur Harish Park",
        exit: "Bhawanipur Harish Park Exit",
        pandals: [
          { name: "Bhawanipur 75 Pally" },
          { name: "Bhawanipur De Bari" },
          { name: "Bhawanipur Sarbojonin" },
          { name: "Mallick Bari" },
          { name: "Chakraberia Sarbojonin" },
          { name: "Paddapukur Barowari" },
          { name: "Mitra Bari" },
          { name: "Abasar Sarbojonin" },
          { name: "Bakulbagan Sarbojonin" },
          { name: "HEM Kutir" },
          { name: "Rupchand Mukherjee Ln" },
          { name: "23 Pally Durga Mandap" },
          { name: "Hazra Park Durgotsab" },
        ],
        mapUrl: "https://maps.app.goo.gl/NB6zaz5E91z9268XA",
      },
    ],
  },
  {
    day: 6,
    dayName: "Navami",
    theme: "Covering Remaining South Kolkata",
    zones: ["South Kolkata Extended"],
    totalTime: "Full Day",
    color: "from-green-500 to-emerald-600",
    icon: <MapPin className="w-4 h-4" />,
    locations: [
      {
        name: "Acropolis Mall",
        exit: "Acropolis Mall Exit",
        pandals: [
          { name: "Rajdanga Chakraborty Para" },
          { name: "Rajdanga Naba Uday Sangha" },
          { name: "Bosepukur Sitala Mandir" },
          { name: "Bosepukur Tal Bagan" },
        ],
        mapUrl: "https://maps.app.goo.gl/JnDDy6F5zDDETAz66",
      },
      {
        name: "Dhakuria",
        exit: "Dhakuria Exit",
        pandals: [
          { name: "Dhakuria Sarbojonin" },
          { name: "Babubagan Sarbojonin" },
          { name: "Selimpur Pally" },
          { name: "Jodhpur Park" },
          { name: "Jodhpur 95 Pally Association" },
        ],
        mapUrl: "https://maps.app.goo.gl/NM41keKYRAq8zA3P7",
      },
      {
        name: "Santoshpur",
        exit: "Santoshpur Exit",
        pandals: [
          { name: "Santoshpur Lake Pally" },
          { name: "Santoshpur Avenue South" },
          { name: "Santoshpur Trikon Park" },
        ],
        mapUrl: "https://maps.app.goo.gl/5DbR3CyckoxVHFrh8",
      },
      {
        name: "New Alipore (Cal)",
        exit: "New Alipore Exit",
        pandals: [{ name: "Suruchi Sangha" }],
      },
      {
        name: "Thakurpukur",
        exit: "Thakurpukur Exit",
        pandals: [
          { name: "Thakurpukur SB Park" },
          { name: "Sabarna Roy Chowdhury Bari" },
          { name: "Barisha Club" },
          { name: "Barisha Sarbojonin" },
          { name: "Barisha Player's Corner" },
          { name: "Behala Natun Sangha" },
          { name: "Amrendra Bari" },
          { name: "Behala Friends" },
          { name: "Debdaru Fatak" },
          { name: "Behala Sarbojonin" },
        ],
        mapUrl: "https://maps.app.goo.gl/9GyT6J5dKDYPT1KTA",
      },
      {
        name: "Hazra",
        exit: "Hazra Exit",
        pandals: [
          { name: "Kalighat Yuba Maitry" },
          { name: "Kalighat Byamagar" },
          { name: "Kalighat MS" },
          { name: "Maddox Square Park Sarbojonin" },
        ],
        mapUrl: "https://maps.app.goo.gl/1s448rV5KnUi9Bhu9",
      },
    ],
  },
  {
    day: 7,
    dayName: "Dashami",
    theme: "Free Day Events",
    zones: ["All Areas"],
    totalTime: "Flexible",
    color: "from-pink-500 to-rose-600",
    icon: <Heart className="w-4 h-4" />,
    locations: [
      {
        name: "Traditional Activities",
        pandals: [
          { name: "Take part in traditional Sindoor Khela" },
          { name: "Cover the portion yet to cover" },
          { name: "Observe immersion at Taki/Babughat" },
        ],
        notes:
          "Final day of festivities - participate in farewell rituals and immersion ceremonies",
      },
    ],
    specialNote:
      "Having Problem to hop around this durga puja? Contact me for personalized guidance!",
  },
];

// Function to open Google Maps
const openGoogleMaps = (url: string) => {
  window.open(url, "_blank");
};

export default function OwnersPlan() {
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isMobile = useMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section - Mobile Optimized */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image - Optimized */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/18362801/pexels-photo-18362801.jpeg"
            alt="Gorgeous Durga Puja temple scene"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-indigo-700/85 to-blue-800/90"></div>
        </div>

        {/* Animated Background Elements - Smaller for mobile */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 sm:top-20 left-4 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-festival-gold/20 rounded-full"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-20 sm:top-40 right-4 sm:right-20 w-6 h-6 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-festival-saffron/20 rounded-full"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative container mx-auto mobile-safe">
          <div className="max-w-4xl mx-auto text-center mobile-container">
            <motion.div
              className="mb-3 sm:mb-4 md:mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-glow animate-pulse-slow">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Personal Journey
              </Badge>
            </motion.div>

            <motion.h1
              className="mobile-hero font-bold mb-3 sm:mb-4 md:mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-festival-gold via-festival-amber to-festival-saffron bg-clip-text text-transparent animate-shimmer">
                Owner's Plan
              </span>
              <motion.span
                className="block text-blue-200 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl mt-2 sm:mt-3 md:mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                My Personal Durga Puja Journey 2025
              </motion.span>
            </motion.h1>

            <motion.p
              className="mobile-text sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              My day-wise documented plan for experiencing Kolkata's Durga Puja
              celebrations with detailed routes and pandal visits
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base lg:text-lg shadow-festival-lg w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View My Plan
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 backdrop-blur-sm w-full sm:w-auto"
                >
                  <Route className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Follow Routes
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Overview Stats - Mobile Optimized */}
      <motion.section
        className="mobile-spacing lg:py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5 border-b-4 border-gradient-to-r border-festival-orange/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto mobile-safe">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              {
                value: "7",
                label: "Days Documented",
                icon: (
                  <Calendar className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                ),
                color: "from-festival-orange to-festival-saffron",
              },
              {
                value: "135+",
                label: "Pandals Listed",
                icon: <Star className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
                color: "from-blue-500 to-blue-600",
              },
              {
                value: "21",
                label: "Key Areas",
                icon: (
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                ),
                color: "from-emerald-500 to-green-600",
              },
              {
                value: "Complete",
                label: "Puja Coverage",
                icon: <Route className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />,
                color: "from-purple-500 to-indigo-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center mobile-card bg-white rounded-xl sm:rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-2 sm:mb-3 md:mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Owner's Day-wise Plan - Mobile Optimized */}
      <section className="mobile-spacing lg:py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto mobile-safe">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16 mobile-container"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-heading sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-2 sm:mb-4">
              My Personal Durga Puja Plan
            </h2>
            <p className="mobile-text sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Day-wise documented journey with specific pandals, routes, and
              personal choices
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mobile-stack sm:space-y-6 lg:space-y-8">
            {ownersPlan.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-festival-lg transition-all duration-500 border-0 bg-gradient-to-r from-white to-gray-50">
                  <CardHeader
                    className={`cursor-pointer bg-gradient-to-r ${day.color} text-white`}
                    onClick={() =>
                      setSelectedDay(selectedDay === day.day ? null : day.day)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 min-w-0 flex-1">
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-xl shadow-lg backdrop-blur-sm flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {day.icon}
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-1 sm:mb-2 leading-tight">
                            Day {day.day} - {day.dayName}
                          </CardTitle>
                          <CardDescription className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg leading-snug">
                            {day.theme}
                          </CardDescription>

                          {/* Mobile-optimized badges */}
                          <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-2">
                            <Badge className="bg-white/20 text-white border-white/30 text-xs">
                              {day.zones.join(" & ")}
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30 text-xs">
                              {day.locations.length} Locations
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedDay === day.day ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white flex-shrink-0 ml-2"
                      >
                        {selectedDay === day.day ? (
                          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                      </motion.div>
                    </div>
                  </CardHeader>

                  <AnimatePresence>
                    {selectedDay === day.day && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="mobile-card sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50/80 to-festival-orange/5">
                          <div className="mobile-stack sm:space-y-6 lg:space-y-8">
                            {/* Locations - Mobile Optimized */}
                            <div className="mobile-stack sm:space-y-4 lg:space-y-6">
                              {day.locations.map((location, locationIndex) => (
                                <motion.div
                                  key={locationIndex}
                                  className="mobile-card bg-white rounded-lg sm:rounded-xl shadow-md border border-festival-orange/20 hover:shadow-lg transition-all duration-300"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.4,
                                    delay: locationIndex * 0.1,
                                  }}
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="flex items-start gap-3 min-w-0 flex-1">
                                      <motion.div
                                        className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${day.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                      </motion.div>
                                      <div className="min-w-0 flex-1">
                                        <h4 className="mobile-heading sm:text-lg lg:text-xl font-bold text-gray-800 leading-tight">
                                          {location.name}
                                        </h4>
                                        {location.exit && (
                                          <Badge className="bg-blue-100 text-blue-800 mt-1 text-xs">
                                            Exit: {location.exit}
                                          </Badge>
                                        )}
                                        {location.notes && (
                                          <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                                            {location.notes}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                    {location.mapUrl && (
                                      <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-shrink-0 w-full sm:w-auto"
                                      >
                                        <Button
                                          size="sm"
                                          className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white text-xs sm:text-sm w-full sm:w-auto"
                                          onClick={() =>
                                            openGoogleMaps(location.mapUrl!)
                                          }
                                        >
                                          <Navigation className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                          View Route
                                        </Button>
                                      </motion.div>
                                    )}
                                  </div>

                                  <div>
                                    <h5 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-festival-orange" />
                                      Pandals to Visit (
                                      {location.pandals.length})
                                    </h5>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                      {location.pandals.map(
                                        (pandal, pandalIndex) => (
                                          <motion.div
                                            key={pandalIndex}
                                            className="p-2 sm:p-3 bg-gradient-to-r from-festival-orange/5 to-festival-saffron/5 rounded-md sm:rounded-lg border border-festival-orange/20 hover:border-festival-orange/40 transition-all duration-300"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                              duration: 0.3,
                                              delay: pandalIndex * 0.02,
                                            }}
                                            whileHover={{
                                              scale: 1.01,
                                              boxShadow:
                                                "0 4px 12px rgba(255, 107, 53, 0.15)",
                                            }}
                                          >
                                            <div className="flex items-start gap-2">
                                              <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-festival-orange flex-shrink-0 mt-0.5" />
                                              <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                                                {pandal.name}
                                              </span>
                                            </div>
                                            {pandal.area && (
                                              <p className="text-xs text-gray-500 mt-1 ml-4 sm:ml-5">
                                                {pandal.area}
                                              </p>
                                            )}
                                          </motion.div>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Choices Section - Mobile Optimized */}
                            {day.choices && (
                              <motion.div
                                className="mobile-card bg-gradient-to-r from-festival-gold/10 to-festival-saffron/10 rounded-lg sm:rounded-xl border border-festival-orange/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <h4 className="font-bold text-festival-orange mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                                  <Route className="w-4 h-4 sm:w-5 sm:h-5" />
                                  {day.choices.title}
                                </h4>
                                <div className="mobile-stack sm:space-y-3">
                                  {day.choices.options.map((option, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-md sm:rounded-lg border border-festival-orange/20 hover:border-festival-orange/40 transition-all duration-300"
                                      whileHover={{ scale: 1.01, x: 2 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                                        {String.fromCharCode(65 + idx)}
                                      </div>
                                      <span className="text-gray-800 font-medium text-xs sm:text-sm leading-relaxed">
                                        {option}
                                      </span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {/* Special Contact Message for Dashami - Mobile Optimized */}
                            {day.specialNote && (
                              <motion.div
                                className="mobile-card bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg sm:rounded-xl border-2 border-pink-200 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                              >
                                <h4 className="font-bold text-pink-700 mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
                                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                  Need Help?
                                </h4>
                                <p className="text-pink-700 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                                  {day.specialNote}
                                </p>
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Button
                                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg shadow-lg w-full sm:w-auto"
                                    onClick={() =>
                                      (window.location.href = "/contact")
                                    }
                                  >
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                    Contact Me
                                  </Button>
                                </motion.div>
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Section - Mobile Optimized */}
          <motion.div
            className="mt-8 sm:mt-12 lg:mt-16 text-center mobile-card bg-gradient-to-r from-white to-festival-gold/5 rounded-xl sm:rounded-2xl shadow-festival border border-festival-orange/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white mb-4 sm:mb-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
            <h3 className="mobile-heading sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
              More Days Coming Soon
            </h3>
            <p className="text-gray-600 mobile-text sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay tuned as I document my complete Durga Puja journey day by
              day. Each day will include detailed routes, pandal lists, and
              personal experiences to help you plan your own adventure.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

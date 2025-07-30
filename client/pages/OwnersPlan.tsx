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
  Clock,
  Star,
  Route,
  User,
  Heart,
  Camera,
  Users,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Info,
  Target,
  Compass,
  Globe,
} from "lucide-react";
import { useState } from "react";

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
  bgColor: string;
  icon: any;
  specialNote?: string;
  description?: string;
}

const ownersPlan: OwnerDay[] = [
  {
    day: 1,
    dayName: "Chaturthi",
    theme: "Covering North Main Kolkata Side today",
    description:
      "Starting our journey with the vibrant North Kolkata area, covering traditional and famous pandals around Belgachia and Shyambazar.",
    zones: ["North Kolkata"],
    totalTime: "Full Day (8-10 hours)",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    icon: <Star className="w-5 h-5" />,
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
        notes: "Tour ends at Maniktala. Great street food options available.",
      },
    ],
    choices: {
      title: "Your Next Move",
      options: [
        "Continue to Kakurgachi - Visit MITALI SANGHA, YUBA BRINDA",
        "Head to ULTADANGA and wrap up for the day",
        "Explore Central Kolkata/South Kolkata areas",
      ],
    },
  },
  {
    day: 2,
    dayName: "Panchami",
    theme: "Covering Main South",
    description:
      "Exploring South Kolkata's prestigious pandals including heritage areas around Kalighat, Alipore, and the famous Deshapriya Park circuit.",
    zones: ["South Kolkata"],
    totalTime: "Full Day (9-11 hours)",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    icon: <Heart className="w-5 h-5" />,
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
        notes:
          "Start early morning. Beautiful lake views and serene atmosphere.",
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
        notes: "Historic temple area. Consider visiting Kalighat Temple.",
      },
      {
        name: "Alipore Area",
        pandals: [{ name: "Alipore Sarbojonin" }, { name: "Alipore 78 Pally" }],
        mapUrl: "https://maps.app.goo.gl/SNTAQjQzYmTeLG5E9",
        notes: "Upscale area with sophisticated decorations.",
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
          "Bus routes: 13C, 18B/1, 18C, S-131, SD-8, S-62 to Deshapriya Park. The crown jewel area!",
      },
    ],
    choices: {
      title: "Evening Options",
      options: [
        "Continue to Kasba/Bypass areas",
        "Return via Sealdah & end the day",
      ],
    },
  },
  {
    day: 3,
    dayName: "Shasti",
    theme: "Covering the Central",
    description:
      "Dive into Central Kolkata's heritage with traditional family pujas and historic locations around Sealdah and College Street area.",
    zones: ["Central Kolkata"],
    totalTime: "Full Day (8-10 hours)",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    icon: <Camera className="w-5 h-5" />,
    locations: [
      {
        name: "Sealdah Railway Station",
        exit: "Sealdah Railway Station Exit",
        pandals: [
          { name: "Santosh Mitra Square" },
          { name: "Sealdah Railway Athletic" },
        ],
        notes: "Major transport hub. Easy connectivity to other areas.",
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
        notes:
          "Rich cultural heritage area. Book shops and academic institutions nearby.",
      },
    ],
    choices: {
      title: "Next Destination",
      options: [
        "Head to Kakurgachi area",
        "Return via Sealdah/Ultadanga/Shyambazar",
      ],
    },
  },
  {
    day: 4,
    dayName: "Saptami",
    theme: "Covering North Side Branch",
    description:
      "Exploring the extended North Kolkata circuit including Dum Dum Park, traditional Sovabazar area, and Ultadanga's vibrant pandals.",
    zones: ["North Kolkata Extended"],
    totalTime: "Full Day (9-12 hours)",
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    icon: <Users className="w-5 h-5" />,
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
        mapUrl: "https://maps.app.goo.gl/5pfQmokHaCfF4Kz5",
        notes: "Start early. Multiple pandals in close proximity.",
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
        notes:
          "Historic area with traditional family pujas. Amazing craftsmanship at Kumartuli.",
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
        notes: "End the day here. Great transport connectivity.",
      },
    ],
  },
  {
    day: 5,
    dayName: "Ashtami",
    theme: "Covering the heritage Bonedi baris of Kolkata",
    description:
      "A special day dedicated to Kolkata's prestigious Bonedi Baris (heritage family pujas) - experience centuries-old traditions and royal celebrations.",
    zones: ["Heritage Areas"],
    totalTime: "Full Day (8-10 hours)",
    color: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    icon: <Star className="w-5 h-5" />,
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
          { name: "Jorasako Shib Krishna Daw Bari" },
          { name: "Jorasako Sadharan" },
          { name: "Maniktala Saha Bari" },
        ],
        mapUrl: "https://maps.app.goo.gl/NvR5DzFpCja3kikA6",
        notes:
          "Historic family pujas with 200+ year traditions. Respect photography restrictions.",
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
        notes:
          "Central location with easy metro access. Historic significance.",
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
        notes:
          "Mix of family pujas and community celebrations. Food street nearby.",
      },
    ],
  },
  {
    day: 6,
    dayName: "Navami",
    theme: "Covering Remaining South Kolkata",
    description:
      "Completing the South Kolkata circuit with extended areas including Santoshpur, Thakurpukur, and other suburban locations.",
    zones: ["South Kolkata Extended"],
    totalTime: "Full Day (10-12 hours)",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    icon: <MapPin className="w-5 h-5" />,
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
        notes: "Modern area with shopping options. Good food courts.",
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
        notes: "Residential area with intimate pandal experiences.",
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
        notes: "Peaceful suburban pandals with unique themes.",
      },
      {
        name: "New Alipore (Cal)",
        exit: "New Alipore Exit",
        pandals: [{ name: "Suruchi Sangha" }],
        notes: "Famous for innovative themes and celebrity visits.",
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
        notes: "Historic family pujas in suburban setting.",
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
        notes: "End the day near Kalighat temple area.",
      },
    ],
  },
  {
    day: 7,
    dayName: "Dashami",
    theme: "Free Day Events",
    description:
      "The final day of festivities - participate in traditional Sindoor Khela, cover missed pandals, and witness the grand immersion ceremonies.",
    zones: ["All Areas"],
    totalTime: "Flexible (6-8 hours)",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    icon: <Heart className="w-5 h-5" />,
    locations: [
      {
        name: "Traditional Activities",
        pandals: [
          { name: "Take part in traditional Sindoor Khela" },
          { name: "Cover the portion yet to cover" },
          { name: "Observe immersion at Taki/Babughat" },
        ],
        notes:
          "Final day of festivities - participate in farewell rituals and immersion ceremonies. Emotional day for devotees.",
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
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"timeline" | "grid">("timeline");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-deep-orange text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-24 h-24 bg-festival-gold/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-festival-vermillion/20 rounded-full blur-lg animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-festival-amber/20 rounded-full blur-md animate-bounce-gentle"></div>
        </div>

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative container mx-auto mobile-safe">
          <div className="max-w-4xl mx-auto text-center mobile-container">
            <div className="mb-4 sm:mb-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 sm:px-6 py-2 sm:py-3 shadow-glow animate-pulse-slow">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Personal Journey
              </Badge>
            </div>

            <h1 className="mobile-hero font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent animate-shimmer">
                Owner's Plan
              </span>
              <span className="block text-festival-gold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-4">
                My Personal Durga Puja Journey 2025
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto px-2">
              A meticulously planned 7-day journey covering 135+ pandals across
              Kolkata. Follow my personal route for the ultimate Durga Puja
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm font-bold w-full sm:w-auto"
                onClick={() =>
                  setViewMode(viewMode === "timeline" ? "grid" : "timeline")
                }
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {viewMode === "timeline" ? "Grid View" : "Timeline View"}
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white font-bold w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download PDF Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mobile-spacing lg:py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5 border-b-4 border-gradient-to-r border-festival-orange/20">
        <div className="container mx-auto mobile-safe">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                value: "7",
                label: "Days Planned",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-festival-orange to-festival-saffron",
                description: "Complete festival coverage",
              },
              {
                value: "135+",
                label: "Pandals Listed",
                icon: <Star className="w-8 h-8" />,
                color: "from-festival-gold to-festival-amber",
                description: "Across all major areas",
              },
              {
                value: "21",
                label: "Key Areas",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-blue-500 to-indigo-600",
                description: "North, Central & South",
              },
              {
                value: "3",
                label: "Zones",
                icon: <Compass className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-600",
                description: "Comprehensive coverage",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center mobile-card bg-white rounded-xl sm:rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-300 border border-festival-orange/10"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-3 sm:mb-4 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-xs">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Content */}
      <section className="mobile-spacing lg:py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto mobile-safe">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              My 7-Day Journey Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Carefully curated day-wise itinerary with specific routes,
              timings, and insider tips
            </p>

            {/* View Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 shadow-lg border border-festival-orange/20">
                <Button
                  variant={viewMode === "timeline" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("timeline")}
                  className={
                    viewMode === "timeline"
                      ? "bg-gradient-to-r from-festival-orange to-festival-saffron text-white"
                      : ""
                  }
                >
                  Timeline View
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-festival-orange to-festival-saffron text-white"
                      : ""
                  }
                >
                  Grid View
                </Button>
              </div>
            </div>
          </div>

          {/* Timeline View */}
          {viewMode === "timeline" && (
            <div className="max-w-6xl mx-auto">
              {/* Timeline connector */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-festival-orange via-festival-saffron to-festival-deep-orange"></div>

                <div className="space-y-8">
                  {ownersPlan.map((day, index) => (
                    <div key={day.day} className="relative">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${day.color} rounded-full border-4 border-white shadow-lg z-10`}
                      ></div>

                      {/* Card */}
                      <div className="ml-16">
                        <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-r from-white to-gray-50 hover:shadow-2xl transition-all duration-300">
                          <CardHeader
                            className={`cursor-pointer bg-gradient-to-r ${day.color} text-white relative overflow-hidden`}
                            onClick={() =>
                              setSelectedDay(
                                selectedDay === day.day ? null : day.day,
                              )
                            }
                          >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold shadow-lg backdrop-blur-sm">
                                    {day.icon}
                                  </div>
                                  <div className="flex-1">
                                    <CardTitle className="text-xl lg:text-2xl text-white mb-2 flex items-center gap-3">
                                      Day {day.day} - {day.dayName}
                                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                                        {day.totalTime}
                                      </Badge>
                                    </CardTitle>
                                    <CardDescription className="text-white/90 text-base lg:text-lg mb-3">
                                      {day.theme}
                                    </CardDescription>
                                    <p className="text-white/80 text-sm leading-relaxed">
                                      {day.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                      {day.zones.map((zone, zoneIndex) => (
                                        <Badge
                                          key={zoneIndex}
                                          className="bg-white/20 text-white border-white/30 text-xs"
                                        >
                                          <MapPin className="w-3 h-3 mr-1" />
                                          {zone}
                                        </Badge>
                                      ))}
                                      <Badge className="bg-white/20 text-white border-white/30 text-xs">
                                        <Star className="w-3 h-3 mr-1" />
                                        {day.locations.reduce(
                                          (total, location) =>
                                            total + location.pandals.length,
                                          0,
                                        )}{" "}
                                        Pandals
                                      </Badge>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-white ml-4">
                                  {selectedDay === day.day ? (
                                    <ChevronUp className="w-6 h-6" />
                                  ) : (
                                    <ChevronDown className="w-6 h-6" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardHeader>

                          {selectedDay === day.day && (
                            <CardContent
                              className={`p-6 lg:p-8 ${day.bgColor} border-t-4 border-festival-orange/30`}
                            >
                              <div className="space-y-6">
                                {/* Locations */}
                                <div className="space-y-4">
                                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                                    <Route className="w-5 h-5 text-festival-orange" />
                                    Detailed Route ({day.locations.length}{" "}
                                    stops)
                                  </h3>

                                  {day.locations.map(
                                    (location, locationIndex) => (
                                      <div
                                        key={locationIndex}
                                        className="bg-white rounded-xl shadow-lg p-6 border border-festival-orange/20 hover:shadow-xl transition-all duration-300"
                                      >
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                                          <div className="flex items-start gap-4 flex-1">
                                            <div
                                              className={`w-12 h-12 bg-gradient-to-r ${day.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}
                                            >
                                              <span className="text-lg">
                                                {locationIndex + 1}
                                              </span>
                                            </div>
                                            <div className="flex-1">
                                              <h4 className="text-xl font-bold text-gray-800 mb-2">
                                                {location.name}
                                              </h4>
                                              {location.exit && (
                                                <Badge className="bg-blue-100 text-blue-800 mb-2">
                                                  <Navigation className="w-3 h-3 mr-1" />
                                                  Exit: {location.exit}
                                                </Badge>
                                              )}
                                              {location.notes && (
                                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg mb-3">
                                                  <div className="flex items-start gap-2">
                                                    <Info className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                                                    <p className="text-sm text-yellow-800 leading-relaxed">
                                                      {location.notes}
                                                    </p>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                          {location.mapUrl && (
                                            <Button
                                              className="bg-gradient-to-r from-festival-orange to-festival-saffron text-white hover:shadow-lg transition-all duration-300"
                                              onClick={() =>
                                                openGoogleMaps(location.mapUrl!)
                                              }
                                            >
                                              <Navigation className="w-4 h-4 mr-2" />
                                              View Route
                                              <ExternalLink className="w-3 h-3 ml-2" />
                                            </Button>
                                          )}
                                        </div>

                                        <div>
                                          <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                            <Star className="w-4 h-4 text-festival-orange" />
                                            Pandals to Visit (
                                            {location.pandals.length})
                                          </h5>
                                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {location.pandals.map(
                                              (pandal, pandalIndex) => (
                                                <div
                                                  key={pandalIndex}
                                                  className="group p-4 bg-gradient-to-br from-festival-orange/5 to-festival-saffron/5 rounded-lg border border-festival-orange/20 hover:border-festival-orange/40 hover:shadow-md transition-all duration-300"
                                                >
                                                  <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                                                      {pandalIndex + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                      <span className="text-sm font-semibold text-gray-800 group-hover:text-festival-orange transition-colors">
                                                        {pandal.name}
                                                      </span>
                                                      {pandal.area && (
                                                        <p className="text-xs text-gray-500 mt-1">
                                                          {pandal.area}
                                                        </p>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              ),
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    ),
                                  )}
                                </div>

                                {/* Choices Section */}
                                {day.choices && (
                                  <div className="bg-gradient-to-r from-festival-gold/10 to-festival-saffron/10 rounded-xl p-6 border-2 border-festival-orange/20">
                                    <h4 className="font-bold text-festival-orange mb-4 flex items-center gap-2 text-lg">
                                      <Target className="w-5 h-5" />
                                      {day.choices.title}
                                    </h4>
                                    <div className="space-y-3">
                                      {day.choices.options.map(
                                        (option, idx) => (
                                          <div
                                            key={idx}
                                            className="flex items-start gap-3 p-4 bg-white rounded-lg border border-festival-orange/20 hover:border-festival-orange/40 hover:shadow-md transition-all duration-300"
                                          >
                                            <div className="w-8 h-8 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                              {String.fromCharCode(65 + idx)}
                                            </div>
                                            <span className="text-gray-800 font-medium leading-relaxed">
                                              {option}
                                            </span>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* Special Contact Message */}
                                {day.specialNote && (
                                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                                      <Heart className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-pink-700 mb-4 text-lg">
                                      Need Personalized Help?
                                    </h4>
                                    <p className="text-pink-700 mb-6 leading-relaxed text-lg">
                                      {day.specialNote}
                                    </p>
                                    <Button
                                      className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                      onClick={() =>
                                        (window.location.href = "/contact")
                                      }
                                    >
                                      <Users className="w-5 h-5 mr-2" />
                                      Get Personal Guidance
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ownersPlan.map((day) => (
                <Card
                  key={day.day}
                  className="overflow-hidden shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader
                    className={`bg-gradient-to-r ${day.color} text-white`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                        {day.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white">
                          Day {day.day} - {day.dayName}
                        </CardTitle>
                        <Badge className="bg-white/20 text-white border-white/30 text-xs mt-1">
                          {day.totalTime}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-white/90 text-sm">
                      {day.theme}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {day.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Areas:</span>
                        <span className="font-medium">
                          {day.zones.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Locations:</span>
                        <span className="font-medium">
                          {day.locations.length}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Pandals:</span>
                        <span className="font-medium">
                          {day.locations.reduce(
                            (total, location) =>
                              total + location.pandals.length,
                            0,
                          )}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-festival-orange to-festival-saffron text-white"
                      onClick={() => {
                        setViewMode("timeline");
                        setSelectedDay(day.day);
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Summary Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-white to-festival-gold/5 rounded-2xl p-8 shadow-xl border border-festival-orange/20">
              <div className="w-20 h-20 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full flex items-center justify-center text-white mx-auto mb-6">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Complete Durga Puja Experience
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
                This comprehensive 7-day plan covers every major area of
                Kolkata, ensuring you don't miss any significant pandals. From
                heritage Bonedi Baris to modern themed pandals, experience the
                complete spectrum of Durga Puja celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-festival-orange to-festival-saffron text-white font-bold"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Get Personal Guide
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-festival-orange text-festival-orange hover:bg-festival-orange hover:text-white"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Share This Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

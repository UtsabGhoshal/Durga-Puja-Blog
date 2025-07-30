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
  Star,
  Route,
  User,
  Heart,
  Camera,
  Users,
  ChevronDown,
  ChevronUp,
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
  icon: any;
  specialNote?: string;
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
        mapUrl: "https://www.google.com/maps/dir/J94P%2B7G7+Belgachia+Metro+Station",
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
        mapUrl: "https://www.google.com/maps/dir/Shyambazar+5+Point",
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
        notes: "Bus routes: 13C, 18B/1, 18C, S-131, SD-8, S-62 to Deshapriya Park",
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
        notes: "Final day of festivities - participate in farewell rituals and immersion ceremonies",
      },
    ],
    specialNote: "Having Problem to hop around this durga puja? Contact me for personalized guidance!",
  },
];

// Function to open Google Maps
const openGoogleMaps = (url: string) => {
  window.open(url, "_blank");
};

export default function OwnersPlan() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section - Simplified */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-12 md:py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/18362801/pexels-photo-18362801.jpeg"
            alt="Gorgeous Durga Puja temple scene"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-indigo-700/85 to-blue-800/90"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <User className="w-4 h-4 mr-2" />
                Personal Journey
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-festival-gold via-festival-amber to-festival-saffron bg-clip-text text-transparent">
                Owner's Plan
              </span>
              <span className="block text-blue-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                My Personal Durga Puja Journey 2025
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              My day-wise documented plan for experiencing Kolkata's Durga Puja celebrations with detailed routes and pandal visits
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-festival-orange to-festival-saffron text-white font-semibold px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                View My Plan
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4">
                <Route className="w-5 h-5 mr-2" />
                Follow Routes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Stats - Simplified */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                value: "7",
                label: "Days Documented",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-festival-orange to-festival-saffron",
              },
              {
                value: "135+",
                label: "Pandals Listed",
                icon: <Star className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600",
              },
              {
                value: "21",
                label: "Key Areas",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-emerald-500 to-green-600",
              },
              {
                value: "Complete",
                label: "Puja Coverage",
                icon: <Route className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-600",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner's Day-wise Plan - Ultra Simplified */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              My Personal Durga Puja Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Day-wise documented journey with specific pandals, routes, and personal choices
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {ownersPlan.map((day) => (
              <Card key={day.day} className="overflow-hidden shadow-lg border-0 bg-gradient-to-r from-white to-gray-50">
                <CardHeader
                  className={`cursor-pointer bg-gradient-to-r ${day.color} text-white transition-colors`}
                  onClick={() => setSelectedDay(selectedDay === day.day ? null : day.day)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {day.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl lg:text-2xl text-white mb-2">
                          Day {day.day} - {day.dayName}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base lg:text-lg">
                          {day.theme}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge className="bg-white/20 text-white border-white/30">
                            {day.zones.join(" & ")}
                          </Badge>
                          <Badge className="bg-white/20 text-white border-white/30">
                            {day.locations.length} Locations
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
                </CardHeader>

                {selectedDay === day.day && (
                  <CardContent className="p-6 lg:p-8 bg-gradient-to-br from-gray-50/80 to-festival-orange/5">
                    <div className="space-y-6">
                      {/* Locations */}
                      <div className="space-y-4">
                        {day.locations.map((location, locationIndex) => (
                          <div key={locationIndex} className="p-4 bg-white rounded-xl shadow-md border border-festival-orange/20">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                              <div className="flex items-start gap-3 flex-1">
                                <div className={`w-12 h-12 bg-gradient-to-r ${day.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                                  <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-lg lg:text-xl font-bold text-gray-800">
                                    {location.name}
                                  </h4>
                                  {location.exit && (
                                    <Badge className="bg-blue-100 text-blue-800 mt-1">
                                      Exit: {location.exit}
                                    </Badge>
                                  )}
                                  {location.notes && (
                                    <p className="text-sm text-gray-600 mt-2">
                                      {location.notes}
                                    </p>
                                  )}
                                </div>
                              </div>
                              {location.mapUrl && (
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-festival-orange to-festival-saffron text-white"
                                  onClick={() => openGoogleMaps(location.mapUrl!)}
                                >
                                  <Navigation className="w-4 h-4 mr-2" />
                                  View Route
                                </Button>
                              )}
                            </div>

                            <div>
                              <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <Star className="w-4 h-4 text-festival-orange" />
                                Pandals to Visit ({location.pandals.length})
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {location.pandals.map((pandal, pandalIndex) => (
                                  <div
                                    key={pandalIndex}
                                    className="p-3 bg-gradient-to-r from-festival-orange/5 to-festival-saffron/5 rounded-lg border border-festival-orange/20"
                                  >
                                    <div className="flex items-start gap-2">
                                      <Heart className="w-3 h-3 text-festival-orange flex-shrink-0 mt-0.5" />
                                      <span className="text-sm font-medium text-gray-800">
                                        {pandal.name}
                                      </span>
                                    </div>
                                    {pandal.area && (
                                      <p className="text-xs text-gray-500 mt-1 ml-5">
                                        {pandal.area}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Choices Section */}
                      {day.choices && (
                        <div className="p-4 bg-gradient-to-r from-festival-gold/10 to-festival-saffron/10 rounded-xl border border-festival-orange/20">
                          <h4 className="font-bold text-festival-orange mb-4 flex items-center gap-2">
                            <Route className="w-5 h-5" />
                            {day.choices.title}
                          </h4>
                          <div className="space-y-3">
                            {day.choices.options.map((option, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-festival-orange/20">
                                <div className="w-6 h-6 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                                  {String.fromCharCode(65 + idx)}
                                </div>
                                <span className="text-gray-800 font-medium text-sm">
                                  {option}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Special Contact Message */}
                      {day.specialNote && (
                        <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200 text-center">
                          <h4 className="font-bold text-pink-700 mb-4 flex items-center justify-center gap-2">
                            <Heart className="w-5 h-5" />
                            Need Help?
                          </h4>
                          <p className="text-pink-700 mb-4 leading-relaxed">
                            {day.specialNote}
                          </p>
                          <Button
                            className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold px-8 py-3 shadow-lg"
                            onClick={() => (window.location.href = "/contact")}
                          >
                            <Users className="w-5 h-5 mr-2" />
                            Contact Me
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

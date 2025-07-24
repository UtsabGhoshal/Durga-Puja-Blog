import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Star, Train, Navigation, Route, Heart, Camera, Users, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

interface DayPlan {
  day: number;
  dayName: string;
  theme: string;
  zones: string[];
  stations: {
    name: string;
    zone: string;
    timing: string;
    highlights: string[];
    mustVisit: string[];
    foodSpots?: string[];
    tips: string;
  }[];
  specialEvents?: string[];
  totalTime: string;
  color: string;
  icon: any;
}

const sixDayItinerary: DayPlan[] = [
  {
    day: 1,
    dayName: "Chaturthi",
    theme: "Festival Begins - Northern Heritage",
    zones: ["North"],
    totalTime: "6-8 hours",
    color: "from-blue-500 to-indigo-600",
    icon: <Star className="w-5 h-5" />,
    stations: [
      {
        name: "Sovabazar Sutanuti",
        zone: "North",
        timing: "10:00 AM - 1:00 PM",
        highlights: ["Kumartuli Sarbojonin", "Ahiritola Sarbojonin", "Sovabazar Burtolla"],
        mustVisit: ["Kumartuli Park - Traditional artisan area", "Ahiritola Jubak Brinda"],
        foodSpots: ["Traditional Bengali sweet shops", "Kumartuli street food"],
        tips: "First day of festivities - explore the artisan quarters where idols are made"
      },
      {
        name: "Shyambazar",
        zone: "North",
        timing: "1:30 PM - 5:00 PM",
        highlights: ["Bagbazar Sarbojonin", "Hatibagan Sarbojonin", "Jagat Mukherjee Park"],
        mustVisit: ["Bidhan Sarani Atlas Club", "Shyambazar Friends Union"],
        tips: "Perfect introduction to North Kolkata's pandal culture"
      }
    ],
    specialEvents: ["Chaturthi evening aarti", "Traditional dhak performances", "Bodhon ceremony"]
  },
  {
    day: 2,
    dayName: "Panchami",
    theme: "North Kolkata Heritage Deep Dive",
    zones: ["North"],
    totalTime: "8-10 hours",
    color: "from-emerald-500 to-green-600",
    icon: <Heart className="w-5 h-5" />,
    stations: [
      {
        name: "Belgachia",
        zone: "North",
        timing: "9:00 AM - 12:30 PM",
        highlights: ["Belgachia Sarbojonin", "Tala Park Prattay", "Tala Barowari"],
        mustVisit: ["Belgachia Adi Sarbojonin", "Tala 15 Palli"],
        tips: "Panchami is perfect for exploring community pandals without crowds"
      },
      {
        name: "Girish Park",
        zone: "North",
        timing: "1:00 PM - 4:30 PM",
        highlights: ["Darjeepara Sarbojonin", "Nimtala Sarbojonin", "Kashi Bose Lane"],
        mustVisit: ["Chaltabagan Lohapatty", "Lalabagan Sarbojonin", "Sahitya Parishad"],
        tips: "Cover both exits to see maximum pandals in this station"
      },
      {
        name: "Noapara & Baranagar",
        zone: "North",
        timing: "5:00 PM - 8:00 PM",
        highlights: ["Dadabhai Sangha", "Bandhudal Sporting", "Belgharia Bani Mandir"],
        mustVisit: ["Baranagar Netaji Colony"],
        tips: "Evening visit to experience local community celebrations"
      }
    ],
    specialEvents: ["Panchami cultural programs", "Traditional music performances"]
  },
  {
    day: 3,
    dayName: "Shashti",
    theme: "Central Kolkata Exploration",
    zones: ["Central", "North"],
    totalTime: "8-10 hours",
    color: "from-festival-orange to-festival-saffron",
    icon: <Camera className="w-5 h-5" />,
    stations: [
      {
        name: "Mahatma Gandhi Road",
        zone: "Central",
        timing: "9:00 AM - 1:00 PM",
        highlights: ["College Square", "Santosh Mitra Square", "Md Ali Park"],
        mustVisit: ["Chorebagan Sarbojonin", "Subodh Mallick Square"],
        foodSpots: ["Central Kolkata street food", "Famous rosogolla shops"],
        tips: "Central area with easy metro connectivity and famous pandals"
      },
      {
        name: "Shyambazar (Revisit)",
        zone: "North",
        timing: "1:30 PM - 4:30 PM",
        highlights: ["Missed pandals from Day 1", "Different timing experience"],
        mustVisit: ["Nalin Sarkar Street", "North Tridhara", "Shyampukur Adi Sarbojonin"],
        tips: "Different atmosphere in afternoon - perfect for photography"
      },
      {
        name: "Girish Park (Evening)",
        zone: "North",
        timing: "5:00 PM - 8:00 PM",
        highlights: ["Evening lighting and crowd experience"],
        mustVisit: ["Shimla Byam Samity", "Vivekananda Sporting"],
        tips: "Experience the same pandals with evening lighting and energy"
      }
    ],
    specialEvents: ["Shashti Kalparambha", "Evening cultural performances"]
  },
  {
    day: 4,
    dayName: "Saptami",
    theme: "South Kolkata Grand Opening",
    zones: ["South"],
    totalTime: "10-12 hours",
    color: "from-purple-500 to-indigo-600",
    icon: <Users className="w-5 h-5" />,
    stations: [
      {
        name: "Netaji Bhawan (Bhawanipur)",
        zone: "South",
        timing: "9:00 AM - 1:00 PM",
        highlights: ["75 Pally", "62 Pally", "Bhawanipur Sarbojonin"],
        mustVisit: ["Maddox Square", "Paddapukur Sarbojonin", "68 Pally"],
        foodSpots: ["Bhawanipur food joints", "Authentic Bengali cuisine"],
        tips: "Saptami marks the grand opening - South Kolkata's most elaborate themes"
      },
      {
        name: "Jatin Das Park (Hazra)",
        zone: "South",
        timing: "1:30 PM - 5:00 PM",
        highlights: ["Hazra Park Sarbojonin", "Kalighat Yuba Maitry"],
        mustVisit: ["Kalighat Milan Sangha", "Kalighat Mahashakti"],
        tips: "Afternoon visit to avoid peak Saptami evening crowds"
      },
      {
        name: "Kalighat",
        zone: "South",
        timing: "5:30 PM - 9:00 PM",
        highlights: ["66 Pally", "Deshapriya Park", "Tridhara Sammilani"],
        mustVisit: ["Ballygunge Cultural Association", "Hindustan Park Sarbojonin"],
        tips: "Evening golden hour perfect for photography at these aesthetic pandals"
      }
    ],
    specialEvents: ["Saptami morning Nabapatrika snan", "Grand inauguration ceremonies"]
  },
  {
    day: 5,
    dayName: "Ashtami",
    theme: "Peak Festival Day - South Focus",
    zones: ["South"],
    totalTime: "12-14 hours",
    color: "from-red-500 to-pink-600",
    icon: <Route className="w-5 h-5" />,
    stations: [
      {
        name: "Kalighat (Morning)",
        zone: "South",
        timing: "7:00 AM - 11:00 AM",
        highlights: ["Chetla Pally", "Suruchi Sangha", "Alipore Sarbojonin"],
        mustVisit: ["Nepal Bhattacharya Street", "Badamtala Ashar Sangha"],
        tips: "Early morning Ashtami visit before crowds - perfect for Pushpanjali"
      },
      {
        name: "Rabindra Sarobar",
        zone: "South",
        timing: "11:30 AM - 3:00 PM",
        highlights: ["Mudiali Club", "Shiv Mandir Sarbojonin", "Lake Youth"],
        mustVisit: ["Pratipaditya Trikon Park"],
        tips: "Mid-day exploration of Tollygunge area pandals"
      },
      {
        name: "Mahanayak Uttam Kumar",
        zone: "South",
        timing: "3:30 PM - 6:30 PM",
        highlights: ["Buroshibtolla", "Swiss Park", "Tarun Sangha"],
        mustVisit: ["All three pandals in this area"],
        tips: "Afternoon visit before evening Ashtami rush"
      },
      {
        name: "Netaji Bhawan (Evening)",
        zone: "South",
        timing: "7:00 PM - 11:00 PM",
        highlights: ["Evening Ashtami celebrations", "Dhunuchi dance"],
        mustVisit: ["Kishore Sangha", "Saraswati Sangha", "Peyara Bagan"],
        tips: "Experience peak Ashtami energy and Sandhi Puja preparations"
      }
    ],
    specialEvents: ["Ashtami Pushpanjali", "Sandhi Puja at midnight", "Dhunuchi dance competitions"]
  },
  {
    day: 6,
    dayName: "Navami & Dashami",
    theme: "Final Celebrations & Immersion",
    zones: ["All"],
    totalTime: "Full Day",
    color: "from-yellow-500 to-orange-600",
    icon: <Zap className="w-5 h-5" />,
    stations: [
      {
        name: "Jatin Das Park",
        zone: "South",
        timing: "8:00 AM - 11:00 AM",
        highlights: ["Final darshan", "Navami morning rituals"],
        mustVisit: ["All major Kalighat area pandals"],
        tips: "Early morning final prayers and rituals"
      },
      {
        name: "Mahatma Gandhi Road",
        zone: "Central",
        timing: "11:30 AM - 2:00 PM",
        highlights: ["Central Kolkata final visits"],
        mustVisit: ["Sealdah Railway Athletic", "Entally Durga Puja"],
        tips: "Quick central Kolkata coverage before immersion"
      },
      {
        name: "Shyambazar",
        zone: "North",
        timing: "2:30 PM - 5:00 PM",
        highlights: ["Join immersion processions", "Cultural farewell programs"],
        mustVisit: ["Major pandals for immersion ceremonies"],
        tips: "Experience the emotional farewell and immersion preparations"
      },
      {
        name: "All Zones (Evening)",
        zone: "All",
        timing: "5:30 PM - 10:00 PM",
        highlights: ["Grand immersion processions", "Bijoya celebrations"],
        mustVisit: ["Follow processions to Hooghly River"],
        tips: "Follow major processions and join the celebration - Asche bochor abar hobe!"
      }
    ],
    specialEvents: ["Navami Hom", "Dashami immersion", "Bijoya Dashami", "Sindur Khela", "Final aarti"]
  }
];

// Function to open Google Maps directions for the station
const openStationDirections = (stationName: string) => {
  const encodedStation = encodeURIComponent(`${stationName} Metro Station Kolkata`);
  const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedStation}&travelmode=transit`;
  window.open(url, '_blank');
};

export default function SixDayPlan() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-amber text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-full"
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/20 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
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
                <Calendar className="w-4 h-4 mr-2" />
                Perfect 6-Day Plan
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 30, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white animate-shimmer">
                6-Day Durga Puja
              </span>
              <motion.span 
                className="block text-white/90 text-2xl md:text-4xl mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Metro Route Itinerary 2025
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 20, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From Chaturthi to Dashami - a perfectly planned itinerary covering all major pandals across North, Central & South Kolkata using metro routes!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 20, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-festival-orange hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-festival-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Full Plan
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm">
                  <Train className="w-5 h-5 mr-2" />
                  Metro Routes
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quick Overview Stats */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5 border-b-4 border-gradient-to-r border-festival-orange/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Days Covered", icon: <Calendar className="w-8 h-8" />, color: "from-festival-orange to-festival-saffron" },
              { value: "14+", label: "Metro Stations", icon: <Train className="w-8 h-8" />, color: "from-blue-500 to-blue-600" },
              { value: "100+", label: "Pandals", icon: <Star className="w-8 h-8" />, color: "from-emerald-500 to-green-600" },
              { value: "3", label: "Zones", icon: <MapPin className="w-8 h-8" />, color: "from-purple-500 to-indigo-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Day-wise Itinerary */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              Complete 6-Day Itinerary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Chaturthi to Dashami - every day planned with metro routes, timings, and must-visit pandals
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {sixDayItinerary.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-festival-lg transition-all duration-500 border-0 bg-gradient-to-r from-white to-gray-50">
                  <CardHeader 
                    className={`cursor-pointer bg-gradient-to-r ${day.color} text-white`}
                    onClick={() => setSelectedDay(selectedDay === day.day ? null : day.day)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <motion.div 
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg backdrop-blur-sm"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {day.icon}
                        </motion.div>
                        <div>
                          <CardTitle className="text-2xl text-white mb-2">
                            Day {day.day} - {day.dayName}
                          </CardTitle>
                          <CardDescription className="text-white/90 text-lg">
                            {day.theme} • {day.totalTime}
                          </CardDescription>
                          <div className="flex items-center gap-3 mt-3">
                            <Badge className="bg-white/20 text-white border-white/30">
                              {day.zones.join(" & ")} Kolkata
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30">
                              {day.stations.length} Stations
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedDay === day.day ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-white"
                      >
                        <Clock className="w-6 h-6" />
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
                        <CardContent className="p-8 bg-gradient-to-br from-gray-50/80 to-festival-orange/5">
                          <div className="space-y-8">
                            {/* Special Events */}
                            {day.specialEvents && (
                              <motion.div 
                                className="p-6 bg-gradient-to-r from-festival-gold/10 to-festival-saffron/10 rounded-xl border border-festival-orange/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <h4 className="font-bold text-festival-orange mb-3 flex items-center gap-2">
                                  <Star className="w-5 h-5" />
                                  Special Events
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {day.specialEvents.map((event, idx) => (
                                    <Badge key={idx} className="bg-festival-orange/10 text-festival-orange border-festival-orange/30">
                                      {event}
                                    </Badge>
                                  ))}
                                </div>
                              </motion.div>
                            )}

                            {/* Station Details */}
                            <div className="space-y-6">
                              {day.stations.map((station, stationIndex) => (
                                <motion.div
                                  key={stationIndex}
                                  className="p-6 bg-white rounded-xl shadow-md border border-festival-orange/20 hover:shadow-lg transition-all duration-300"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: stationIndex * 0.1 }}
                                >
                                  <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                      <motion.div 
                                        className={`w-12 h-12 bg-gradient-to-r ${day.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <Train className="w-5 h-5" />
                                      </motion.div>
                                      <div>
                                        <h4 className="text-xl font-bold text-gray-800">{station.name}</h4>
                                        <div className="flex items-center gap-3 mt-1">
                                          <Badge className="bg-blue-100 text-blue-800">
                                            {station.zone} Zone
                                          </Badge>
                                          <Badge className="bg-festival-orange/10 text-festival-orange">
                                            {station.timing}
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>
                                    <motion.div
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <Button
                                        size="sm"
                                        className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white"
                                        onClick={() => openStationDirections(station.name)}
                                      >
                                        <Navigation className="w-4 h-4 mr-2" />
                                        Navigate
                                      </Button>
                                    </motion.div>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <Star className="w-4 h-4 text-festival-orange" />
                                        Highlights
                                      </h5>
                                      <ul className="space-y-2">
                                        {station.highlights.map((highlight, idx) => (
                                          <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                            <MapPin className="w-3 h-3 text-festival-orange mt-1 flex-shrink-0" />
                                            {highlight}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <div>
                                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-red-500" />
                                        Must Visit
                                      </h5>
                                      <ul className="space-y-2">
                                        {station.mustVisit.map((mustVisit, idx) => (
                                          <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                            <Star className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
                                            {mustVisit}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  {station.foodSpots && (
                                    <div className="mt-4 p-4 bg-festival-gold/5 rounded-lg">
                                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        🍽️ Food Spots
                                      </h5>
                                      <div className="flex flex-wrap gap-2">
                                        {station.foodSpots.map((food, idx) => (
                                          <Badge key={idx} variant="outline" className="text-festival-orange border-festival-orange">
                                            {food}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                    <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                      💡 Pro Tips
                                    </h5>
                                    <p className="text-blue-700 text-sm">{station.tips}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips Section */}
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
                Essential Tips for Your Journey
              </h2>
              <p className="text-xl text-gray-600">
                Make the most of your 6-day Durga Puja experience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Metro Timing",
                  desc: "Metro runs 7 AM - 10:45 PM. Plan your day accordingly, especially for evening pandal visits.",
                  icon: <Clock className="w-6 h-6" />,
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  title: "Crowd Management", 
                  desc: "Visit popular pandals early morning or late evening to avoid peak crowds.",
                  icon: <Users className="w-6 h-6" />,
                  color: "from-emerald-500 to-green-600"
                },
                {
                  title: "Emergency Contact",
                  desc: "Keep metro helpline numbers handy. Download offline maps as backup.",
                  icon: <Navigation className="w-6 h-6" />,
                  color: "from-red-500 to-pink-600"
                },
                {
                  title: "Food & Water",
                  desc: "Carry water bottles. Try local street food but choose busy, hygienic stalls.",
                  icon: <Heart className="w-6 h-6" />,
                  color: "from-festival-orange to-festival-saffron"
                },
                {
                  title: "Photography",
                  desc: "Best lighting for photos is during golden hour (evening). Respect pandal photography rules.",
                  icon: <Camera className="w-6 h-6" />,
                  color: "from-purple-500 to-indigo-600"
                },
                {
                  title: "Cultural Respect",
                  desc: "Dress modestly, remove shoes when required, and follow queue systems at popular pandals.",
                  icon: <Star className="w-6 h-6" />,
                  color: "from-yellow-500 to-orange-600"
                }
              ].map((tip, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)"
                  }}
                >
                  <motion.div 
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tip.color} rounded-full text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tip.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

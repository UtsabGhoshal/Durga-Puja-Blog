import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, Users, Footprints, Star, Mail, Phone, Navigation, Calendar, Camera, Award } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const storyRef = useRef(null);
  const achievementsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true });
  const isAchievementsInView = useInView(achievementsRef, { once: true });

  const stats = [
    {
      value: "100+",
      label: "Pandals Covered",
      subtext: "Every Year",
      icon: <Star className="w-8 h-8" />,
      color: "from-festival-orange to-festival-saffron"
    },
    {
      value: "65+",
      label: "Kilometers Walked",
      subtext: "On Foot",
      icon: <Footprints className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      value: "5+",
      label: "Years Experience",
      subtext: "Guiding Friends",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      value: "∞",
      label: "Passion for",
      subtext: "Durga Puja",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-600"
    }
  ];

  const achievements = [
    {
      title: "Pandal Explorer Extraordinaire",
      description: "Successfully visited 100+ pandals every year, discovering hidden gems and popular attractions across Kolkata",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-festival-orange to-festival-saffron"
    },
    {
      title: "Walking Marathon Champion",
      description: "Covers 65+ kilometers on foot during each Durga Puja season, experiencing the festival like a true local",
      icon: <Footprints className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Community Guide & Mentor",
      description: "Guides several friends every year, sharing knowledge about routes, timing, and the best pandal experiences",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Digital Bridge Builder",
      description: "Created this comprehensive website to reach everyone who needs guidance for their Durga Puja journey",
      icon: <Navigation className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-deep-orange text-white py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5559377/pexels-photo-5559377.jpeg"
            alt="Beautiful Durga Puja celebration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-festival-orange/90 via-festival-saffron/80 to-festival-deep-orange/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-20 h-20 bg-white/15 rounded-full"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-16 h-16 bg-white/20 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30 shadow-2xl mb-6 overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 50px rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd7b5eeb133e34f1590f348887f3a3783%2Ff3fcfbb862574039b56f512a44118f9e?format=webp&width=800"
                  alt="Utsab Ghoshal - Durga Puja Guide"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 50, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">Utsab Ghoshal</span>
              <motion.div 
                className="text-2xl md:text-3xl mt-4 text-white/90 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Your Durga Puja Guide & Explorer
              </motion.div>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 30, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate explorer covering 100+ pandals every year, walking 65+ km on foot across Kolkata. 
              Here to share my journey and help you discover the magic of Durga Puja!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 30, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-lg backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                100+ Pandals Yearly
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-lg backdrop-blur-sm">
                <Footprints className="w-4 h-4 mr-2" />
                65+ KM Walking
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-lg backdrop-blur-sm">
                <Users className="w-4 h-4 mr-2" />
                Community Guide
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="py-20 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isStatsInView ? 0 : 30, opacity: isStatsInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              My Durga Puja Journey in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Years of exploration, dedication, and passion for Kolkata's greatest festival
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.25)"
                }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
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
                <p className="text-gray-800 font-semibold text-lg">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* My Story Section */}
      <motion.section 
        ref={storyRef}
        className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isStoryInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isStoryInView ? 0 : 30, opacity: isStoryInView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
                My Story
              </h2>
              <p className="text-xl text-gray-600">
                How a passion became a mission to help others
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl p-8 md:p-12 shadow-festival-lg border border-festival-orange/10 relative overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isStoryInView ? 0 : 50, opacity: isStoryInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-festival-orange/10 to-festival-saffron/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className="p-4 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Heart className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-800">The Beginning</h3>
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    What started as a personal fascination with Durga Puja has evolved into something much bigger. 
                    Every year, I embark on an incredible journey across Kolkata, covering <span className="font-bold text-festival-orange">100+ pandals</span> 
                    and walking <span className="font-bold text-festival-orange">65+ kilometers</span> on foot to experience 
                    the festival in its truest form.
                  </p>

                  <p>
                    Over the years, I've guided several friends through this magical experience, sharing the routes, 
                    timing, hidden gems, and the cultural significance behind each pandal. Their joy and appreciation 
                    made me realize that this knowledge shouldn't be limited to just my close circle.
                  </p>

                  <p>
                    That's when I decided to create this comprehensive website – <span className="font-bold text-festival-orange">
                    to reach everyone who needs guidance</span> for their Durga Puja journey. Whether you're a first-time 
                    visitor to Kolkata or a local looking to explore new areas, this site is my way of sharing the 
                    passion and knowledge I've gathered over years of exploration.
                  </p>
                </div>

                <motion.div 
                  className="mt-8 p-6 bg-gradient-to-r from-festival-gold/10 to-festival-saffron/10 rounded-xl border border-festival-orange/20"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: isStoryInView ? 1 : 0.9, opacity: isStoryInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-festival-orange font-semibold text-lg italic text-center">
                    "Every pandal has a story, every route has its charm, and every step taken on foot 
                    brings you closer to the true spirit of Durga Puja."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        ref={achievementsRef}
        className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAchievementsInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isAchievementsInView ? 0 : 30, opacity: isAchievementsInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              What Makes Me Your Ideal Guide
            </h2>
            <p className="text-xl text-gray-600">
              Experience, passion, and dedication to sharing the best of Durga Puja
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isAchievementsInView ? 1 : 0, y: isAchievementsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px -12px rgba(255, 107, 53, 0.2)"
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`p-3 bg-gradient-to-r ${achievement.color} rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-festival-orange via-festival-saffron to-festival-deep-orange text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Explore Together?</h2>
            <p className="text-xl mb-8 text-white/90">
              Have questions about routes, timing, or need personalized guidance? 
              I'm here to help make your Durga Puja experience unforgettable!
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-festival-orange hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

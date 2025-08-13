import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  BookOpen,
  Camera,
  Sparkles,
  Users,
  Clock,
  Star,
  Heart,
  Zap,
  Crown,
  Map,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MahalayaCountdown from "@/components/MahalayaCountdown";

export default function Index() {
  const heroRef = useRef(null);
  const highlightsRef = useRef(null);
  const featuredRef = useRef(null);
  const aboutRef = useRef(null);
  const culturalRef = useRef(null);
  const galleryRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isHighlightsInView = useInView(highlightsRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isCulturalInView = useInView(culturalRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });

  const featuredSections = [
    {
      title: "Rituals & Traditions",
      description:
        "Discover the sacred rituals and age-old traditions that make Durga Puja so special",
      icon: <Sparkles className="w-8 h-8" />,
      link: "/rituals",
      color: "from-festival-orange to-festival-saffron",
      hoverColor: "from-festival-orange-dark to-festival-saffron-dark",
      image:
        "https://images.pexels.com/photos/16132278/pexels-photo-16132278.jpeg",
    },
    {
      title: "History & Origins",
      description:
        "Learn about the fascinating history and mythological origins of Durga Puja",
      icon: <BookOpen className="w-8 h-8" />,
      link: "/history",
      color: "from-festival-gold to-festival-amber",
      hoverColor: "from-festival-gold-dark to-yellow-500",
      image:
        "https://images.pexels.com/photos/25473186/pexels-photo-25473186.jpeg",
    },
    {
      title: "Photo Gallery",
      description:
        "Experience the visual splendor of Kolkata's most magnificent pandals",
      icon: <Camera className="w-8 h-8" />,
      link: "/gallery",
      color: "from-festival-maroon to-festival-crimson",
      hoverColor: "from-festival-maroon-light to-red-600",
      image:
        "https://images.pexels.com/photos/31739353/pexels-photo-31739353.jpeg",
    },
  ];

  const navigationSections = [
    {
      title: "About Durga Puja",
      link: "/about",
      icon: <Heart className="w-5 h-5" />,
      description: "Learn about the festival",
    },
    {
      title: "History & Mythology",
      link: "/history",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Ancient stories & origins",
    },
    {
      title: "Rituals & Traditions",
      link: "/rituals",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Sacred ceremonies",
    },
    {
      title: "Photo Gallery",
      link: "/gallery",
      icon: <Camera className="w-5 h-5" />,
      description: "Visual celebrations",
    },
    {
      title: "Bonedi Baris",
      link: "/bonedi-baris",
      icon: <Crown className="w-5 h-5" />,
      description: "Heritage houses",
    },
    {
      title: "Area Guide",
      link: "/area-guide",
      icon: <MapPin className="w-5 h-5" />,
      description: "Explore different areas",
    },
    {
      title: "Metro Routes",
      link: "/metro-routes",
      icon: <Map className="w-5 h-5" />,
      description: "Transportation guide",
    },
    {
      title: "Owner's Plan",
      link: "/owners-plan",
      icon: <Users className="w-5 h-5" />,
      description: "Personal journey",
    },
    {
      title: "Blog Posts",
      link: "/blog",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Articles & insights",
    },
    {
      title: "About Me",
      link: "/about-me",
      icon: <Users className="w-5 h-5" />,
      description: "Know the author",
    },
    {
      title: "Contact",
      link: "/contact",
      icon: <Heart className="w-5 h-5" />,
      description: "Get in touch",
    },
  ];

  const highlights = [
    {
      title: "5 Days of Celebration",
      description: "From Shashthi to Dashami",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "700+ Pandals",
      description: "Across Kolkata",
      icon: <MapPin className="w-6 h-6" />,
      color: "from-festival-orange to-festival-saffron",
    },
    {
      title: "Millions of Devotees",
      description: "Every year",
      icon: <Users className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "400+ Years",
      description: "Of tradition",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen h-screen bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-gold text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ minHeight: "100svh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/19241118/pexels-photo-19241118.jpeg"
            alt="Magnificent Durga Puja celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-festival-orange/80 via-festival-saffron/70 to-festival-gold/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-festival-gold/30 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-festival-vermillion/30 rounded-full blur-lg"
            animate={{
              y: [0, 25, 0],
              scale: [1, 0.8, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-20 h-20 bg-festival-amber/30 rounded-full blur-md"
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center w-full">
            <motion.div
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-xl px-6 py-3 shadow-glow animate-pulse-slow backdrop-blur-sm">
                <Crown className="w-5 h-5 mr-2" />
                শুভ দুর্গা পূজা ২০২৫
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-4 sm:px-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 50,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent drop-shadow-lg"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Durga Puja Kolkata
              </motion.span>
              <motion.span
                className="block text-festival-gold text-3xl md:text-5xl mt-4 drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHeroInView ? 1 : 0,
                  scale: isHeroInView ? 1 : 0.8,
                }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Your Complete Guide
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-white leading-relaxed max-w-3xl mx-auto drop-shadow-md px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore the magnificent world of Durga Puja in Kolkata - from
              ancient traditions to modern celebrations. Discover A-Z
              information about Bengal's grandest festival.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/rituals">
                  <Button
                    size="lg"
                    className="bg-white text-festival-orange hover:bg-gray-100 text-lg sm:text-xl px-6 sm:px-10 py-6 sm:py-8 shadow-festival-lg font-bold w-full sm:w-auto"
                  >
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    Explore Traditions
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-lg sm:text-xl px-6 sm:px-10 py-6 sm:py-8 backdrop-blur-sm font-bold w-full sm:w-auto"
                  >
                    <Camera className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                    View Gallery
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Navigation Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0 mt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { label: "History", link: "/history", icon: "📚" },
                { label: "Bonedi Baris", link: "/bonedi-baris", icon: "🏛️" },
                { label: "Area Guide", link: "/area-guide", icon: "🗺️" },
                { label: "Metro Routes", link: "/metro-routes", icon: "🚇" },
                { label: "Blog", link: "/blog", icon: "✍️" },
              ].map((item, index) => (
                <Link key={index} to={item.link}>
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white hover:bg-white/30 transition-all duration-300 cursor-pointer text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Mahalaya Countdown Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-white via-festival-gold/5 to-festival-saffron/5 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <MahalayaCountdown />
        </div>
      </motion.section>

      {/* Navigation Menu Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
              Explore Every Aspect
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Navigate through our comprehensive guide to Durga Puja in Kolkata
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {navigationSections.map((section, index) => (
              <Link key={index} to={section.link}>
                <motion.div
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-festival hover:shadow-festival-lg transition-all duration-300 border border-festival-orange/10 hover:border-festival-orange/30 text-center cursor-pointer h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full text-white mb-3 group-hover:shadow-glow transition-all duration-300"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-festival-orange transition-colors duration-300 text-sm md:text-base mb-2">
                    {section.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {section.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <motion.section
        ref={highlightsRef}
        className="py-20 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isHighlightsInView ? "visible" : "hidden"}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 group relative overflow-hidden"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-festival-orange/10 to-festival-saffron/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full text-white mb-6 shadow-lg group-hover:shadow-glow relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold bg-gradient-to-r from-festival-orange to-festival-saffron bg-clip-text text-transparent mb-3 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-gray-600 font-medium relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Sections with Images */}
      <motion.section
        ref={featuredRef}
        className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isFeaturedInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Discover the Magic
            </motion.h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dive deep into the various aspects of Durga Puja celebrations with
              our comprehensive sections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-festival-lg transition-all duration-500 border-0 overflow-hidden bg-white/90 backdrop-blur-sm h-full">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${section.color} opacity-80`}
                    ></div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-white"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {section.icon}
                    </motion.div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-gray-800 group-hover:text-festival-orange transition-colors duration-300">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={section.link}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white transition-all duration-300 text-lg py-6 shadow-lg hover:shadow-festival">
                          <Zap className="w-5 h-5 mr-2" />
                          Learn More
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Visual Gallery Section */}
      <motion.section
        ref={galleryRef}
        className="py-24 bg-gradient-to-br from-festival-maroon/5 via-festival-orange/5 to-festival-saffron/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isGalleryInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isGalleryInView ? 0 : 30,
              opacity: isGalleryInView ? 1 : 0,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
              Visual Journey
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the beauty and grandeur of Durga Puja through stunning
              visuals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.pexels.com/photos/7686385/pexels-photo-7686385.jpeg",
                title: "Festival Lights",
                description: "Illuminated celebrations",
              },
              {
                image:
                  "https://images.pexels.com/photos/16132278/pexels-photo-16132278.jpeg",
                title: "Traditional Attire",
                description: "Bengali cultural heritage",
              },
              {
                image:
                  "https://images.pexels.com/photos/31739353/pexels-photo-31739353.jpeg",
                title: "Divine Decorations",
                description: "Colorful artistic displays",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isGalleryInView ? 1 : 0,
                  y: isGalleryInView ? 0 : 30,
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isGalleryInView ? 1 : 0,
              y: isGalleryInView ? 0 : 20,
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link to="/gallery">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-xl px-10 py-6 shadow-festival-lg"
                >
                  <Camera className="w-6 h-6 mr-3" />
                  View Complete Gallery
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Durga Puja Section */}
      <motion.section
        ref={aboutRef}
        className="py-24 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAboutInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-festival-orange/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-festival-saffron/10 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isAboutInView ? 0 : -50,
                opacity: isAboutInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-festival-orange bg-clip-text text-transparent mb-8">
                About Durga Puja
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isAboutInView ? 1 : 0,
                    y: isAboutInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Durga Puja is the most significant festival in Bengal,
                  celebrating the victory of Goddess Durga over the demon
                  Mahishasura. This five-day festival transforms Kolkata into a
                  vibrant canvas of art, culture, and devotion.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isAboutInView ? 1 : 0,
                    y: isAboutInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  From magnificent pandals showcasing artistic excellence to the
                  rhythmic beats of dhak, from the aroma of bhog to the sound of
                  conch shells - Durga Puja is a sensory experience that binds
                  the community together.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isAboutInView ? 1 : 0,
                    y: isAboutInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  This blog is your comprehensive guide to understanding every
                  aspect of this beautiful festival, curated from authentic
                  sources and personal experiences.
                </motion.p>
              </div>
              <motion.div
                className="mt-10 flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isAboutInView ? 1 : 0,
                  y: isAboutInView ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Link to="/about">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-xl px-8 py-6 shadow-festival-lg"
                    >
                      <BookOpen className="w-6 h-6 mr-3" />
                      Read Full Story
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/area-guide">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-festival-orange text-festival-orange hover:bg-festival-orange/5 text-xl px-8 py-6"
                    >
                      <Map className="w-6 h-6 mr-3" />
                      Explore Areas
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: isAboutInView ? 0 : 50,
                opacity: isAboutInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="bg-gradient-to-br from-festival-orange to-festival-saffron rounded-2xl p-10 text-white shadow-festival-lg relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 35px 60px -12px rgba(255, 107, 53, 0.4)",
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🕉️
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6 text-festival-gold">
                    Sacred Mantras
                  </h3>
                  <div className="space-y-4 text-xl">
                    <motion.p
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      সর্বমঙ্গলমাঙ্গল্যে শ���বে সর্বা��্থসাধিকে
                    </motion.p>
                    <motion.p
                      animate={{ opacity: [1, 0.8, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    >
                      শরণ্যে ��্র্যম্বকে গৌরি নারায়ণি নমোস্তুতে
                    </motion.p>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <div className="flex space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        >
                          <Star className="w-6 h-6 fill-festival-gold text-festival-gold" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cultural Significance */}
      <motion.section
        ref={culturalRef}
        className="py-24 bg-gradient-to-br from-festival-maroon/5 via-festival-orange/5 to-festival-saffron/5"
        variants={containerVariants}
        initial="hidden"
        animate={isCulturalInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
              Cultural Significance
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Durga Puja is more than a religious festival - it's a celebration
              of art, culture, and the triumph of good over evil that unites
              millions across Bengal and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Art & Sculpture",
                desc: "Magnificent clay artistry",
                emoji: "🎨",
                color: "from-pink-500 to-rose-600",
              },
              {
                title: "Music & Dance",
                desc: "Cultural performances",
                emoji: "🎵",
                color: "from-purple-500 to-indigo-600",
              },
              {
                title: "Food & Feast",
                desc: "Traditional Bengali cuisine",
                emoji: "🍽️",
                color: "from-festival-orange to-festival-saffron",
              },
              {
                title: "Community Spirit",
                desc: "Unity and togetherness",
                emoji: "🤝",
                color: "from-emerald-500 to-green-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 group border border-festival-orange/10 relative overflow-hidden"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.35)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-festival-orange/10 to-festival-saffron/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="text-6xl mb-6 relative z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {item.emoji}
                </motion.div>
                <motion.h3
                  className={`text-2xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3 relative z-10`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-gray-600 text-lg relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Beautiful Image Gallery Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
              Visual Journey Through Durga Puja
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the beauty, artistry, and cultural magnificence of
              Kolkata's Durga Puja celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                src: "https://images.pexels.com/photos/5559377/pexels-photo-5559377.jpeg",
                alt: "Intricate Durga idol during Durga Puja celebrations in Kolkata, showcasing vibrant artistry",
                title: "Divine Artistry",
                description:
                  "Marvel at the intricate craftsmanship of Durga idols",
              },
              {
                src: "https://images.pexels.com/photos/28832088/pexels-photo-28832088.jpeg",
                alt: "A captivating image of an intricately designed Durga idol during a Kolkata festival",
                title: "Festival Grandeur",
                description: "Witness the grandeur of Kolkata's celebration",
              },
              {
                src: "https://images.pexels.com/photos/27526846/pexels-photo-27526846.jpeg",
                alt: "Vibrant Durga idol in a dark tunnel, depicting a festive Durga Puja scene",
                title: "Night Celebrations",
                description: "Experience the magical evening atmosphere",
              },
              {
                src: "https://images.pexels.com/photos/18362801/pexels-photo-18362801.jpeg",
                alt: "Vibrant statue of a Hindu goddess adorned with decorations in a Kolkata temple",
                title: "Sacred Beauty",
                description: "Discover the spiritual essence of the festival",
              },
              {
                src: "https://images.pexels.com/photos/12173961/pexels-photo-12173961.jpeg",
                alt: "Intricate black and white sculpture of Hindu Goddess Durga with flowers and ornaments",
                title: "Traditional Art",
                description: "Appreciate the timeless artistic traditions",
              },
              {
                src: "https://images.pexels.com/photos/19241118/pexels-photo-19241118.jpeg",
                alt: "Magnificent statue of Goddess Durga adorned in gold during religious festival",
                title: "Golden Glory",
                description: "Be mesmerized by the golden magnificence",
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 bg-white">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <motion.div
                    className="p-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-festival-orange transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {image.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Camera className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-white font-semibold px-10 py-6 text-xl shadow-festival-lg"
              >
                <Camera className="w-6 h-6 mr-3" />
                Explore Full Gallery
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-festival-gold/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-festival-saffron/20 rounded-full blur-lg animate-bounce"></div>
      </motion.section>

      {/* Enhanced Featured Sections with Background Images */}
      <motion.section
        className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-festival-gold to-festival-amber bg-clip-text text-transparent">
              Discover Your Path
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every journey through Durga Puja tells a unique story. Choose your
              adventure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Heritage Routes",
                description:
                  "Explore century-old Bonedi Baris and their traditional celebrations",
                icon: "🏛️",
                color: "from-yellow-400 to-orange-500",
                bgImage:
                  "https://images.pexels.com/photos/12173961/pexels-photo-12173961.jpeg",
              },
              {
                title: "Metro Guide",
                description:
                  "Navigate easily with our comprehensive metro route planning",
                icon: "🚇",
                color: "from-blue-400 to-indigo-500",
                bgImage:
                  "https://images.pexels.com/photos/5559377/pexels-photo-5559377.jpeg",
              },
              {
                title: "Personal Plan",
                description:
                  "Follow my documented journey and discover hidden gems",
                icon: "📋",
                color: "from-green-400 to-emerald-500",
                bgImage:
                  "https://images.pexels.com/photos/28832088/pexels-photo-28832088.jpeg",
              },
              {
                title: "Cultural Insights",
                description:
                  "Learn the deep traditions and spiritual significance",
                icon: "📚",
                color: "from-purple-400 to-pink-500",
                bgImage:
                  "https://images.pexels.com/photos/18362801/pexels-photo-18362801.jpeg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.2)",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 text-center">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3
                    className={`text-xl font-bold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="text-festival-gold font-semibold">
                      Explore →
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

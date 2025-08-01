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
  Crown,
  Star,
  Heart,
  Sparkles,
  Globe,
  Users,
  Calendar,
  Music,
  Palette,
  BookOpen,
  Award,
  Zap,
  Sun,
  Moon,
  Camera,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const aspectsRef = useRef(null);
  const unescoRef = useRef(null);
  const significanceRef = useRef(null);
  const communityRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true });
  const isAspectsInView = useInView(aspectsRef, { once: true });
  const isUnescoInView = useInView(unescoRef, { once: true });
  const isSignificanceInView = useInView(significanceRef, { once: true });
  const isCommunityInView = useInView(communityRef, { once: true });

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
    hidden: { y: 30, opacity: 0 },
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

  const aspects = [
    {
      title: "A Divine Festival",
      description:
        "Sacred celebration honoring Goddess Durga, the fierce yet compassionate form of Shakti",
      icon: <Crown className="w-8 h-8" />,
      color: "from-festival-gold to-festival-amber",
      emoji: "🕉️",
    },
    {
      title: "A Cultural Phenomenon",
      description:
        "Vibrant expression of Bengali art, music, dance, and community spirit",
      icon: <Palette className="w-8 h-8" />,
      color: "from-festival-orange to-festival-saffron",
      emoji: "🎨",
    },
    {
      title: "A Global Heritage",
      description:
        "UNESCO-recognized intangible cultural heritage celebrated worldwide",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      emoji: "🌍",
    },
  ];

  const festivalElements = [
    {
      title: "Spiritual Rituals",
      description:
        "Sacred ceremonies and prayers connecting devotees with the divine",
      icon: <Sun className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Musical Heritage",
      description: "Traditional dhak, conch shells, and devotional songs",
      icon: <Music className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Artistic Expression",
      description: "Mesmerizing pandals and beautifully crafted idols",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Cultural Performances",
      description:
        "Dance, drama, and cultural programs throughout the celebration",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Community Unity",
      description:
        "Bringing together people from all walks of life in celebration",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-400 to-pink-500",
    },
    {
      title: "Cosmic Balance",
      description: "Restoration of harmony between good and evil forces",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-400 to-violet-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-deep-orange text-white overflow-hidden flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5559377/pexels-photo-5559377.jpeg"
            alt="Beautiful Durga idol showcasing divine artistry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-festival-orange/85 via-festival-saffron/80 to-festival-deep-orange/85"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Sparkles className="w-6 h-6 text-festival-gold" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-xl px-8 py-4 shadow-glow backdrop-blur-sm">
                <span className="text-2xl mr-3">🌺</span>
                About Durga Puja
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 50,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                A Divine Festival
              </motion.span>
              <motion.span
                className="block text-festival-gold text-2xl md:text-4xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHeroInView ? 1 : 0,
                  scale: isHeroInView ? 1 : 0.8,
                }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                A Cultural Phenomenon
              </motion.span>
              <motion.span
                className="block text-white text-xl md:text-3xl mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHeroInView ? 1 : 0,
                  scale: isHeroInView ? 1 : 0.8,
                }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                A Global Heritage
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-12 text-white/95 leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Durga Puja is not just a festival—it's the heartbeat of Bengal, a
              celebration where art, spirituality, and community come together
              in a grand spectacle of devotion and joy.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
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
                  className="bg-white text-festival-orange hover:bg-gray-100 text-xl px-10 py-8 shadow-festival-lg font-bold"
                >
                  <BookOpen className="w-6 h-6 mr-3" />
                  Explore the Story
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-8 backdrop-blur-sm font-bold"
                  >
                    <Camera className="w-6 h-6 mr-3" />
                    View Celebrations
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-sm mb-2">Discover the divine story</p>
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

      {/* Festival Aspects */}
      <motion.section
        ref={aspectsRef}
        className="py-24 bg-gradient-to-br from-white via-festival-gold/5 to-festival-saffron/10"
        variants={containerVariants}
        initial="hidden"
        animate={isAspectsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
              Three Sacred Dimensions
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the multifaceted nature of Durga Puja, a celebration that
              transcends boundaries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aspects.map((aspect, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-festival hover:shadow-festival-lg transition-all duration-500 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-festival-orange/5 to-festival-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="pb-6 relative">
                    <motion.div
                      className="text-6xl mb-6"
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
                      {aspect.emoji}
                    </motion.div>

                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${aspect.color} rounded-full text-white mb-6 shadow-lg group-hover:shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {aspect.icon}
                    </motion.div>

                    <CardTitle className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-festival-orange transition-colors duration-300">
                      {aspect.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {aspect.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Story Section */}
      <motion.section
        ref={storyRef}
        className="py-24 bg-gradient-to-br from-festival-maroon/5 via-festival-orange/5 to-festival-saffron/5 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isStoryInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-festival-gold/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-festival-saffron/10 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isStoryInView ? 0 : 30,
                opacity: isStoryInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-festival-orange bg-clip-text text-transparent mb-8">
                The Sacred Story
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isStoryInView ? 0 : -50,
                  opacity: isStoryInView ? 1 : 0,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isStoryInView ? 1 : 0,
                      y: isStoryInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Celebrated over several days, this sacred occasion honors{" "}
                    <strong className="text-festival-orange">
                      Goddess Durga
                    </strong>
                    , the fierce yet compassionate form of Shakti who triumphs
                    over evil and restores cosmic balance.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isStoryInView ? 1 : 0,
                      y: isStoryInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    At the heart of the festival lies the powerful story of{" "}
                    <strong className="text-festival-saffron">
                      Ma Durga's victory over the demon Mahishasura
                    </strong>
                    , symbolizing the victory of good over evil, light over
                    darkness, and truth over falsehood.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isStoryInView ? 1 : 0,
                      y: isStoryInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    It is both a{" "}
                    <strong className="text-festival-gold">
                      spiritual journey
                    </strong>{" "}
                    and a deeply emotional time for millions, marked by rituals,
                    music, cultural performances, and artistic expression
                    through mesmerizing
                    <strong className="text-festival-orange">
                      {" "}
                      pandals
                    </strong>{" "}
                    (temporary temple structures) and idols.
                  </motion.p>
                </div>

                <motion.div
                  className="mt-12 flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isStoryInView ? 1 : 0,
                    y: isStoryInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Link to="/history">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-xl px-8 py-6"
                      >
                        <BookOpen className="w-6 h-6 mr-3" />
                        Read Full History
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/rituals">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-festival-orange text-festival-orange hover:bg-festival-orange/5 text-xl px-8 py-6"
                      >
                        <Crown className="w-6 h-6 mr-3" />
                        Sacred Rituals
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: isStoryInView ? 0 : 50,
                  opacity: isStoryInView ? 1 : 0,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-festival-orange to-festival-saffron rounded-3xl p-12 text-white shadow-festival-lg relative overflow-hidden"
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
                      className="text-8xl mb-8"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      ⚔️
                    </motion.div>

                    <h3 className="text-4xl font-bold mb-8 text-festival-gold">
                      Victory of Good over Evil
                    </h3>

                    <div className="space-y-6 text-xl">
                      <motion.div
                        className="flex items-center justify-center gap-4"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Sun className="w-8 h-8 text-festival-gold" />
                        <span>Light over Darkness</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-center gap-4"
                        animate={{ opacity: [1, 0.8, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        <Star className="w-8 h-8 text-festival-gold" />
                        <span>Truth over Falsehood</span>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-center gap-4"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                      >
                        <Heart className="w-8 h-8 text-festival-gold" />
                        <span>Love over Hatred</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Festival Elements Grid */}
      <motion.section
        className="py-24 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
              Elements of the Festival
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the rich tapestry of traditions that make Durga Puja
              extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivalElements.map((element, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 group relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-festival-orange/5 to-festival-saffron/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${element.color} rounded-full text-white mb-6 shadow-lg group-hover:shadow-xl relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {element.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-festival-orange transition-colors duration-300 relative z-10">
                  {element.title}
                </h3>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* UNESCO Recognition Section */}
      <motion.section
        ref={unescoRef}
        className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isUnescoInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Star className="w-4 h-4 text-festival-gold" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isUnescoInView ? 0 : 30,
                opacity: isUnescoInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-festival-gold/20 text-festival-gold border-festival-gold/30 text-2xl px-8 py-4 shadow-glow backdrop-blur-sm">
                <Globe className="w-8 h-8 mr-3" />
                🌍 UNESCO Recognition
              </Badge>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: isUnescoInView ? 0 : 50,
                opacity: isUnescoInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-festival-gold via-festival-amber to-festival-gold bg-clip-text text-transparent">
                Global Heritage Status
              </span>
            </motion.h2>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-white/20"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isUnescoInView ? 0 : 30,
                opacity: isUnescoInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="text-6xl mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🏆
              </motion.div>

              <p className="text-xl md:text-2xl leading-relaxed text-white/95 mb-8">
                In <strong className="text-festival-gold">December 2021</strong>
                , Durga Puja was inscribed on UNESCO's Representative List of
                the Intangible Cultural Heritage of Humanity—a proud moment that
                elevated this centuries-old tradition to a global stage.
              </p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                variants={containerVariants}
                initial="hidden"
                animate={isUnescoInView ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "UNESCO Heritage",
                    subtitle: "Global Recognition",
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: "Inclusive Spirit",
                    subtitle: "Community Unity",
                  },
                  {
                    icon: <Palette className="w-8 h-8" />,
                    title: "Artistic Excellence",
                    subtitle: "Cultural Expression",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-festival-gold/20 rounded-full text-festival-gold mb-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.subtitle}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl leading-relaxed text-white/90 mb-12 max-w-4xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isUnescoInView ? 0 : 20,
                opacity: isUnescoInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              This recognition is not only a testament to the richness of
              Bengali culture but also to the
              <strong className="text-festival-gold">
                {" "}
                inclusive, artistic, and communal spirit
              </strong>{" "}
              that the festival represents.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isUnescoInView ? 0 : 20,
                opacity: isUnescoInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-festival-gold text-gray-900 hover:bg-festival-gold-dark text-xl px-10 py-8 shadow-festival-lg font-bold"
                >
                  <ExternalLink className="w-6 h-6 mr-3" />
                  UNESCO Official Page
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/area-guide">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-festival-gold text-festival-gold hover:bg-festival-gold/10 text-xl px-10 py-8 backdrop-blur-sm font-bold"
                  >
                    <MapPin className="w-6 h-6 mr-3" />
                    Explore Celebrations
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Community & Significance */}
      <motion.section
        ref={communityRef}
        className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCommunityInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isCommunityInView ? 0 : 30,
                opacity: isCommunityInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-6">
                The Heartbeat of Bengal
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                More than a festival, Durga Puja is a celebration that unites
                millions in joy, devotion, and cultural pride
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-8"
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isCommunityInView ? 0 : -50,
                  opacity: isCommunityInView ? 1 : 0,
                }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-festival border border-festival-orange/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-festival-orange to-festival-saffron rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Community Unity
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Durga Puja transcends religious boundaries, bringing
                    together people from all walks of life in a celebration of
                    shared cultural heritage and community spirit.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-festival border border-festival-orange/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Emotional Journey
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    For millions of devotees, Durga Puja is deeply personal—a
                    time of reflection, prayer, and connection with the divine
                    that touches hearts across generations.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-festival border border-festival-orange/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Global Celebration
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    From Kolkata to London, New York to Sydney, Durga Puja
                    celebrations connect the Bengali diaspora worldwide,
                    preserving tradition across continents.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: isCommunityInView ? 0 : 50,
                  opacity: isCommunityInView ? 1 : 0,
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-festival-orange to-festival-saffron rounded-3xl p-12 text-white shadow-festival-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="text-center relative z-10">
                    <motion.div
                      className="text-8xl mb-8"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🌟
                    </motion.div>

                    <h3 className="text-4xl font-bold mb-8 text-festival-gold">
                      Cultural Legacy
                    </h3>

                    <div className="space-y-6 text-xl">
                      <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Calendar className="w-6 h-6 text-festival-gold" />
                          <span className="font-semibold">400+ Years</span>
                        </div>
                        <p className="text-lg text-white/90">
                          of continuous tradition
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Users className="w-6 h-6 text-festival-gold" />
                          <span className="font-semibold">Millions</span>
                        </div>
                        <p className="text-lg text-white/90">
                          of participants worldwide
                        </p>
                      </div>

                      <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Palette className="w-6 h-6 text-festival-gold" />
                          <span className="font-semibold">Artistic</span>
                        </div>
                        <p className="text-lg text-white/90">
                          expression and creativity
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Final CTA */}
            <motion.div
              className="text-center mt-20"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isCommunityInView ? 0 : 30,
                opacity: isCommunityInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/area-guide">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-festival-orange to-festival-saffron hover:from-festival-orange-dark hover:to-festival-saffron-dark text-xl px-10 py-8 shadow-festival-lg font-bold"
                    >
                      <MapPin className="w-6 h-6 mr-3" />
                      Explore Pandals
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/gallery">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-festival-orange text-festival-orange hover:bg-festival-orange/5 text-xl px-10 py-8"
                    >
                      <Camera className="w-6 h-6 mr-3" />
                      View Celebrations
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

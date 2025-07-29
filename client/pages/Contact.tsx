import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart, Star, Users, Navigation } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const reasonsRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });
  const isReasonsInView = useInView(reasonsRef, { once: true });

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Me",
      value: "utsab.ghoshal04@gmail.com",
      description: "Best for detailed queries and planning",
      color: "from-blue-500 to-indigo-600",
      action: "mailto:utsab.ghoshal04@gmail.com"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Me",
      value: "+91 9088993780",
      description: "Quick questions and urgent guidance",
      color: "from-green-500 to-emerald-600",
      action: "tel:+919088993780"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      value: "+91 9088993780",
      description: "Real-time chat and location sharing",
      color: "from-green-600 to-green-700",
      action: "https://wa.me/919088993780"
    }
  ];

  const reasons = [
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Route Planning",
      description: "Get personalized routes based on your preferences, timing, and location",
      color: "from-festival-orange to-festival-saffron"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Pandal Recommendations",
      description: "Discover must-visit pandals and hidden gems based on your interests",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timing Guidance",
      description: "Learn the best times to visit specific pandals to avoid crowds",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group Coordination",
      description: "Help coordinate routes and timings for groups and families",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Insights",
      description: "Share insider knowledge about food spots, parking, and local tips",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Cultural Context",
      description: "Learn about the significance and stories behind different pandals",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const handleContact = (action: string) => {
    if (action.startsWith('mailto:') || action.startsWith('tel:') || action.startsWith('https:')) {
      window.open(action);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/27526846/pexels-photo-27526846.jpeg"
            alt="Vibrant Durga Puja celebration scene"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 via-teal-700/90 to-cyan-800/95"></div>
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
                className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30 shadow-2xl mb-6"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 50px rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 50, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">Contact Me</span>
              <motion.div 
                className="text-2xl md:text-3xl mt-4 text-white/90 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Let's Plan Your Perfect Durga Puja Journey
              </motion.div>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 30, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ready to explore Kolkata's Durga Puja like never before? Reach out for personalized guidance, 
              route planning, and insider tips from someone who walks the walk!
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: isHeroInView ? 0 : 30, opacity: isHeroInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-lg backdrop-blur-sm">
                <Clock className="w-4 h-4 mr-2" />
                Quick Response
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-lg backdrop-blur-sm">
                <Heart className="w-4 h-4 mr-2" />
                Personal Touch
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-lg backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Expert Guidance
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Methods Section */}
      <motion.section 
        ref={contactRef}
        className="py-20 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isContactInView ? 1 : 0, y: isContactInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isContactInView ? 0 : 30, opacity: isContactInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred way to connect - I'm here to help!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isContactInView ? 1 : 0, y: isContactInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleContact(method.action)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full border-0 shadow-festival hover:shadow-festival-lg transition-all duration-500 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-festival-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="text-center pb-4 relative">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-full text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {method.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-festival-orange transition-colors duration-300">
                      {method.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4 relative">
                    <motion.div 
                      className="text-lg font-semibold text-gray-800 group-hover:text-festival-orange transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {method.value}
                    </motion.div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description}
                    </p>
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-festival-orange text-festival-orange hover:bg-festival-orange hover:text-white transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Connect Now
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Contact Me Section */}
      <motion.section 
        ref={reasonsRef}
        className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isReasonsInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isReasonsInView ? 0 : 30, opacity: isReasonsInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-festival-orange to-festival-saffron bg-clip-text text-transparent mb-4">
              How I Can Help You
            </h2>
            <p className="text-xl text-gray-600">
              From route planning to cultural insights - your personalized Durga Puja guide
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-500 border border-festival-orange/10 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isReasonsInView ? 1 : 0, y: isReasonsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(255, 107, 53, 0.2)"
                }}
              >
                <div className="text-center">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${reason.color} rounded-full text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-festival-orange transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick Contact Info */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-festival-orange via-festival-saffron to-festival-deep-orange text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Quick Contact Details</h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Mail className="w-5 h-5 text-white/80" />
                      <span className="text-lg">utsab.ghoshal04@gmail.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Phone className="w-5 h-5 text-white/80" />
                      <span className="text-lg">+91 9088993780</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin className="w-5 h-5 text-white/80" />
                      <span className="text-lg">Kolkata, West Bengal</span>
                    </motion.div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <motion.div
                    className="space-y-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-white text-festival-orange hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg w-full md:w-auto"
                      onClick={() => handleContact('mailto:utsab.ghoshal04@gmail.com')}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                    <br />
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm w-full md:w-auto"
                      onClick={() => handleContact('tel:+919088993780')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Crown, Star, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About Durga Puja", href: "/about", icon: "📖" },
    { name: "Rituals", href: "/rituals", icon: "🕉️" },
    { name: "History", href: "/history", icon: "📚" },
    { name: "Bonedi Baris", href: "/bonedi-baris", icon: "🏛️" },
    { name: "Metro Routes", href: "/metro-routes", icon: "🚇" },
    { name: "Owner's Plan", href: "/owners-plan", icon: "📋" },
    { name: "Area Guide", href: "/area-guide", icon: "🗺️" },
    { name: "About Me", href: "/about-me", icon: "👤" },
    { name: "Contact", href: "/contact", icon: "📧" },
    { name: "Photo Gallery", href: "/gallery", icon: "📸" },
    { name: "Blog", href: "/blog", icon: "✍️" },
  ];

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  };

  const navItemVariants = {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -2,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <motion.header
      className="bg-gradient-to-r from-festival-orange via-festival-saffron to-festival-deep-orange shadow-festival-lg sticky top-0 z-50 backdrop-blur-sm relative overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ x: [0, 60], y: [0, 60] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Decorative top border with animation */}
      <motion.div
        className="h-1 bg-gradient-to-r from-festival-gold via-festival-amber to-festival-gold relative overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-20 max-w-full overflow-hidden">
          {/* Enhanced Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <Link
              to="/"
              className="flex items-center space-x-3 sm:space-x-4 group min-w-0 flex-shrink-0"
            >
              <motion.div
                className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden flex-shrink-0"
                whileHover={{
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Rotating background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-festival-gold via-festival-amber to-festival-saffron opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-festival-gold rounded-full"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="text-festival-orange text-xl sm:text-2xl font-bold relative z-10">
                  দু
                </span>

                {/* Floating sparkles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, Math.cos((i * 120 * Math.PI) / 180) * 20],
                      y: [0, Math.sin((i * 120 * Math.PI) / 180) * 20],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-festival-gold" />
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-white min-w-0">
                <motion.h1
                  className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent truncate"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Durga Puja Kolkata
                </motion.h1>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-xs text-festival-gold-light hidden sm:block">
                    Complete Guide & Blog
                  </p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Crown className="w-3 h-3 text-festival-gold hidden sm:block" />
                  </motion.div>
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                initial="initial"
                whileHover="hover"
                custom={index}
              >
                <Link
                  to={item.href}
                  className="relative px-4 py-3 text-white hover:text-festival-gold transition-all duration-300 font-medium text-sm rounded-xl group overflow-hidden"
                >
                  {/* Background Effects */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-festival-gold/20 to-festival-amber/20 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Bottom glow line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-festival-gold to-festival-amber"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xs opacity-80">{item.icon}</span>
                    <span>{item.name}</span>

                    {/* Hover star */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="w-3 h-3 fill-festival-gold text-festival-gold" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Special CTA Button */}
            <motion.div
              className="ml-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-festival-gold to-festival-amber hover:from-festival-gold-dark hover:to-yellow-500 text-festival-orange font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-4 h-4 mr-2" />
                Explore
              </Button>
            </motion.div>
          </nav>

          {/* Enhanced Mobile menu button */}
          <motion.div className="lg:hidden" whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 hover:text-festival-gold transition-all duration-300 p-3 min-h-[44px] min-w-[44px] rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-gradient-to-r from-festival-orange via-festival-saffron to-festival-deep-orange"
            >
              <div className="py-4 border-t border-white/20">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      custom={index}
                    >
                      <Link
                        to={item.href}
                        className="group relative text-white hover:text-festival-gold transition-all duration-300 py-3 px-4 rounded-xl block overflow-hidden min-h-[48px] flex items-center text-sm font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-xl"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-festival-gold rounded-r"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.span
                          className="relative z-10 flex items-center space-x-3"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="truncate">{item.name}</span>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ✨
                          </motion.div>
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced Decorative bottom glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-festival-gold to-transparent opacity-50"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-2 right-4 text-festival-gold/30"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      <motion.div
        className="absolute bottom-2 left-4 text-festival-gold/30"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <Crown className="w-4 h-4" />
      </motion.div>
    </motion.header>
  );
}

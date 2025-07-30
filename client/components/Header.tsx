import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Durga Puja", href: "/about" },
    { name: "Rituals", href: "/rituals" },
    { name: "History", href: "/history" },
    { name: "Bonedi Baris", href: "/bonedi-baris" },
    { name: "Metro Routes", href: "/metro-routes" },
    { name: "Owner's Plan", href: "/owners-plan" },
    { name: "Area Guide", href: "/area-guide" },
    { name: "About Me", href: "/about-me" },
    { name: "Contact", href: "/contact" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05, 
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.5 }
    }
  };

  const navItemVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -2, 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
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
        damping: 20
      }
    })
  };

  return (
    <motion.header 
      className="bg-gradient-to-r from-festival-orange via-festival-saffron to-festival-deep-orange shadow-festival-lg sticky top-0 z-50 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-festival-gold via-festival-amber to-festival-gold"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 max-w-full overflow-hidden">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group min-w-0 flex-shrink-0">
              <motion.div
                className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden flex-shrink-0"
                whileHover={{ boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-festival-gold to-festival-amber opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-festival-orange text-lg sm:text-2xl font-bold relative z-10">দু</span>
                <motion.div
                  className="absolute top-1 right-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-festival-gold" />
                </motion.div>
              </motion.div>
              <div className="text-white min-w-0">
                <motion.h1
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-festival-gold bg-clip-text text-transparent truncate"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Durga Puja Kolkata
                </motion.h1>
                <motion.p
                  className="text-xs opacity-90 text-festival-gold-light hidden sm:block"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Complete Guide & Blog
                </motion.p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
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
                  className="relative px-4 py-2 text-white hover:text-festival-gold transition-colors duration-300 font-medium text-sm rounded-lg group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-festival-gold"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.div
            className="lg:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 hover:text-festival-gold transition-all duration-300 p-3 min-h-[44px] min-w-[44px]"
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

        {/* Mobile Navigation */}
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
                        className="group relative text-white hover:text-festival-gold transition-all duration-300 py-3 px-4 rounded-lg block overflow-hidden min-h-[48px] flex items-center text-sm font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-lg"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-festival-gold"
                          initial={{ scaleY: 0 }}
                          whileHover={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.span 
                          className="relative z-10 flex items-center space-x-2"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="truncate">{item.name}</span>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ���
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

      {/* Decorative bottom glow */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-festival-gold to-transparent opacity-50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.header>
  );
}

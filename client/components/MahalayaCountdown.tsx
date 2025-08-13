import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function MahalayaCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Mahalaya is September 22nd
      let mahalayaDate = new Date(currentYear, 8, 22); // Month is 0-indexed

      // If this year's Mahalaya has passed, calculate for next year
      if (now > mahalayaDate) {
        mahalayaDate = new Date(currentYear + 1, 8, 22);
      }

      const difference = mahalayaDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    {
      label: "Days",
      value: timeLeft.days,
      color: "from-festival-orange to-festival-saffron",
    },
    {
      label: "Hours",
      value: timeLeft.hours,
      color: "from-festival-gold to-festival-amber",
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
      color: "from-festival-vermillion to-festival-crimson",
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
      color: "from-festival-maroon to-festival-maroon-light",
    },
  ];

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  const isCountdownActive =
    timeLeft.days > 0 ||
    timeLeft.hours > 0 ||
    timeLeft.minutes > 0 ||
    timeLeft.seconds > 0;

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="bg-gradient-to-br from-festival-orange/10 via-festival-gold/10 to-festival-saffron/10 backdrop-blur-sm border-festival-orange/30 shadow-festival-lg overflow-hidden">
        <CardContent className="p-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Calendar className="w-8 h-8 text-festival-orange" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-festival-orange via-festival-gold to-festival-saffron bg-clip-text text-transparent">
                মহালয়া আসছে
              </h2>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-8 h-8 text-festival-gold" />
              </motion.div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              {isCountdownActive
                ? "Countdown to Mahalaya - September 22nd"
                : "🎉 Mahalaya is here! শুভ মহালয়া! 🎉"}
            </p>
          </motion.div>

          {isCountdownActive ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  className={`relative bg-gradient-to-br ${unit.color} rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />

                  <motion.div
                    key={unit.value} // This will trigger animation on value change
                    className="relative z-10"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-3xl md:text-5xl font-bold mb-2"
                      animate={
                        unit.label === "Seconds"
                          ? {
                              scale: [1, 1.1, 1],
                              color: ["#ffffff", "#ffd700", "#ffffff"],
                            }
                          : {}
                      }
                      transition={{ duration: 1 }}
                    >
                      {unit.value.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm md:text-base font-semibold uppercase tracking-wider opacity-90">
                      {unit.label}
                    </div>
                  </motion.div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
                  <div
                    className="absolute bottom-2 left-2 w-2 h-2 bg-white/30 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div
                className="text-6xl md:text-8xl mb-4"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🕉️
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-festival-orange to-festival-gold bg-clip-text text-transparent mb-2">
                মহালয়ার শুভেচ্ছা!
              </h3>
              <p className="text-lg text-gray-700">
                The auspicious day of Mahalaya has arrived!
              </p>
            </motion.div>
          )}

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-8 bg-festival-gold/30 rounded-full blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 right-4 w-6 h-6 bg-festival-orange/40 rounded-full blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

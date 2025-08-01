import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Heart,
  Share2,
  Download,
  ExternalLink,
  Upload,
  Star,
  MapPin,
  Calendar,
  Users,
  Eye,
  Filter,
  Grid3X3,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const galleryCategories = [
  "All",
  "Pandals",
  "Idols",
  "Decorations",
  "Cultural Events",
  "Street Celebrations",
  "Traditional Art",
];

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/5559377/pexels-photo-5559377.jpeg",
    alt: "Intricate Durga idol during Durga Puja celebrations in Kolkata",
    title: "Divine Artistry",
    description: "Marvel at the intricate craftsmanship of Durga idols",
    category: "Idols",
    area: "Kumartuli",
    year: "2024",
    likes: 1234,
    views: 5670,
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/28832088/pexels-photo-28832088.jpeg",
    alt: "A captivating image of an intricately designed Durga idol during a Kolkata festival",
    title: "Festival Grandeur",
    description: "Witness the grandeur of Kolkata's celebration",
    category: "Pandals",
    area: "Shyambazar",
    year: "2024",
    likes: 987,
    views: 4321,
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/27526846/pexels-photo-27526846.jpeg",
    alt: "Vibrant Durga idol in a dark tunnel, depicting a festive Durga Puja scene",
    title: "Night Celebrations",
    description: "Experience the magical evening atmosphere",
    category: "Street Celebrations",
    area: "Belgachia",
    year: "2024",
    likes: 756,
    views: 3210,
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/18362801/pexels-photo-18362801.jpeg",
    alt: "Vibrant statue of a Hindu goddess adorned with decorations in a Kolkata temple",
    title: "Sacred Beauty",
    description: "Discover the spiritual essence of the festival",
    category: "Idols",
    area: "Kalighat",
    year: "2024",
    likes: 1098,
    views: 6543,
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/12173961/pexels-photo-12173961.jpeg",
    alt: "Intricate black and white sculpture of Hindu Goddess Durga with flowers and ornaments",
    title: "Traditional Art",
    description: "Appreciate the timeless artistic traditions",
    category: "Traditional Art",
    area: "Sovabazar",
    year: "2024",
    likes: 654,
    views: 2876,
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/19241118/pexels-photo-19241118.jpeg",
    alt: "Magnificent statue of Goddess Durga adorned in gold during religious festival",
    title: "Golden Glory",
    description: "Be mesmerized by the golden magnificence",
    category: "Decorations",
    area: "Bhawanipur",
    year: "2024",
    likes: 1567,
    views: 8765,
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/7686385/pexels-photo-7686385.jpeg",
    alt: "Festival lights illuminating Durga Puja celebrations",
    title: "Festival Lights",
    description: "Illuminated celebrations across the city",
    category: "Decorations",
    area: "Salt Lake",
    year: "2024",
    likes: 432,
    views: 1987,
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/16132278/pexels-photo-16132278.jpeg",
    alt: "Traditional Bengali attire during Durga Puja",
    title: "Cultural Heritage",
    description: "Bengali cultural heritage on display",
    category: "Cultural Events",
    area: "Ballygunge",
    year: "2024",
    likes: 789,
    views: 3654,
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/31739353/pexels-photo-31739353.jpeg",
    alt: "Colorful artistic displays during Durga Puja",
    title: "Artistic Displays",
    description: "Colorful and vibrant pandal decorations",
    category: "Pandals",
    area: "Tollygunge",
    year: "2024",
    likes: 1234,
    views: 5432,
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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

  const handleSubmitPhotos = () => {
    window.open("https://forms.gle/JJVNgcvr3hcFXZLz8", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-deep-orange text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-festival-gold/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-festival-vermillion/20 rounded-full blur-lg"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 shadow-glow">
                <Camera className="w-5 h-5 mr-2" />
                Photo Gallery
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 30,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-festival-gold to-white bg-clip-text text-transparent">
                Visual Journey
              </span>
              <motion.span
                className="block text-festival-gold text-2xl md:text-4xl mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHeroInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Through Durga Puja
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
                opacity: isHeroInView ? 1 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience the visual splendor of Kolkata's most magnificent Durga
              Puja pandals, artistic idols, and vibrant celebrations through our
              curated photo collection.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHeroInView ? 0 : 20,
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
                  onClick={handleSubmitPhotos}
                  className="bg-white text-festival-orange hover:bg-gray-100 text-lg px-8 py-6 shadow-festival-lg font-bold"
                >
                  <Upload className="w-5 h-5 mr-3" />
                  Submit Your Photos
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm font-bold"
                >
                  <Grid3X3 className="w-5 h-5 mr-3" />
                  View Gallery
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-white via-festival-gold/5 to-festival-saffron/5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: galleryImages.length,
                label: "Photos",
                icon: <Camera className="w-8 h-8" />,
                color: "from-festival-orange to-festival-saffron",
              },
              {
                value: new Set(galleryImages.map((img) => img.category)).size,
                label: "Categories",
                icon: <Filter className="w-8 h-8" />,
                color: "from-festival-gold to-festival-amber",
              },
              {
                value: new Set(galleryImages.map((img) => img.area)).size,
                label: "Areas",
                icon: <MapPin className="w-8 h-8" />,
                color: "from-blue-500 to-indigo-600",
              },
              {
                value: "2024",
                label: "Current Year",
                icon: <Calendar className="w-8 h-8" />,
                color: "from-emerald-500 to-green-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-festival hover:shadow-festival-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isStatsInView ? 1 : 0,
                  y: isStatsInView ? 0 : 30,
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full text-white mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Browse by Category
              </h2>
              <p className="text-gray-600">
                Filter photos by different aspects of Durga Puja celebrations
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {galleryCategories.map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "bg-festival-orange hover:bg-festival-orange-dark text-white"
                        : "border-festival-orange text-festival-orange hover:bg-festival-orange/5"
                    } transition-all duration-300`}
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Card className="overflow-hidden shadow-festival hover:shadow-festival-lg transition-all duration-500 border-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Overlay Info */}
                      <motion.div
                        className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <h3 className="font-bold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-2">
                          {image.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {image.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {image.likes}
                          </div>
                        </div>
                      </motion.div>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.button
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Share2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-800">
                          {image.title}
                        </h3>
                        <Badge className="bg-festival-orange/10 text-festival-orange">
                          {image.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{image.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {image.area}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {image.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {image.likes}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Submit Photos CTA */}
      <motion.section
        className="py-20 bg-gradient-to-br from-festival-orange via-festival-saffron to-festival-deep-orange text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-festival-gold/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-festival-vermillion/20 rounded-full blur-lg"
            animate={{
              y: [0, 15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                📸
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Share Your Durga Puja Moments
              </h2>

              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Have amazing photos from this year's Durga Puja? Share them with
                our community! Your photos could be featured in our gallery and
                help others experience the beauty of Kolkata's grandest
                festival.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    onClick={handleSubmitPhotos}
                    className="bg-white text-festival-orange hover:bg-gray-100 text-xl px-10 py-6 shadow-festival-lg font-bold"
                  >
                    <Upload className="w-6 h-6 mr-3" />
                    Submit Photos Now
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-6 backdrop-blur-sm font-bold"
                  >
                    <Users className="w-6 h-6 mr-3" />
                    Join Community
                  </Button>
                </motion.div>
              </div>

              <div className="mt-8 text-sm text-white/80">
                <p>
                  ✨ All submissions are reviewed before publication
                  <br />
                  📱 High-quality photos preferred • 🎨 Creative compositions
                  welcome
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

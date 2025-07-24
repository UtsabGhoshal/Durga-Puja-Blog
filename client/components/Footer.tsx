import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-festival-maroon to-festival-orange-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-festival-gold">About This Blog</h3>
            <p className="text-white/90 leading-relaxed">
              A comprehensive guide to Durga Puja celebrations in Kolkata, featuring authentic information,
              traditional rituals, and the cultural heritage of this magnificent festival.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-festival-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/90 hover:text-festival-gold transition-colors">About Durga Puja</a></li>
              <li><a href="/rituals" className="text-white/90 hover:text-festival-gold transition-colors">Rituals & Traditions</a></li>
              <li><a href="/history" className="text-white/90 hover:text-festival-gold transition-colors">History</a></li>
              <li><a href="/gallery" className="text-white/90 hover:text-festival-gold transition-colors">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Cultural Note */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-festival-gold">Durga Puja Greetings</h3>
            <div className="text-2xl mb-2">শুভ দুর্গা পূজা</div>
            <p className="text-white/90">
              May Maa Durga bless you with happiness, prosperity, and success. 
              This blog is dedicated to preserving and sharing the beautiful traditions of Bengal.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-400" /> for Bengali culture and traditions
          </p>
          <p className="text-white/60 mt-2 text-sm">
            © {new Date().getFullYear()} Durga Puja Kolkata Blog. Preserving traditions, one story at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}

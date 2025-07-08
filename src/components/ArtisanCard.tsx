import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ArtisanCardProps {
  artisan: {
    image: string;
    name: string;
    profession: string;
    rating: number;
  };
  onClick: () => void;
}

const ArtisanCard = ({ artisan, onClick }: ArtisanCardProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative h-64">
      <img 
        src={artisan.image} 
        alt={artisan.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Badge "Agréé" amélioré */}
      <div className="absolute top-0 right-0 transform rotate-45 translate-x-8 -translate-y-2 bg-emerald-500 text-white py-1 px-12 shadow-lg">
        <span className="text-sm font-semibold flex items-center justify-center gap-1">
          ✅ Agréé
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-semibold">{artisan.name}</h3>
        <p className="text-sm opacity-90">{artisan.profession}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(artisan.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
            />
          ))}
          <span className="ml-2 text-sm">{artisan.rating}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ArtisanCard;
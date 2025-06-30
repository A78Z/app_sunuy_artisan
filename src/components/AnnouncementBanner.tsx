import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-50 to-orange-50 overflow-hidden">
      <div className="flex items-center h-12">
        <div className="flex-shrink-0 bg-[#E53935] text-white px-4 py-2 flex items-center">
          <span className="font-bold text-sm">Annonce</span>
        </div>
        
        <div className="flex-1 overflow-hidden px-4">
          <motion.div
            animate={{
              x: [400, -1200],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap text-primary-800"
          >
            📱 Nouvelle version disponible, l'application Suñuy Artisan valorise le savoir-faire des artisans sénégalais. 🛠️ 🏡 Pour réparations, rénovations ou autres prestations, connectez-vous aux meilleurs talents locaux.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
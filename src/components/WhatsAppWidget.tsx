import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppWidget = () => {
  const [showMenu, setShowMenu] = useState(false);
  const phoneNumber = "221766248505";

  const links = [
    { 
      text: "📝 Devenez adhérent !", 
      url: "https://devenez-adherent-sunuy-artisan.netlify.app/",
      description: "Rejoignez notre communauté d'artisans"
    },
    { 
      text: "🛠 Demande de Service", 
      url: "https://demande-service-sunuy-artisan.netlify.app/",
      description: "Trouvez un artisan qualifié"
    },
    { 
      text: "💬 Discussion WhatsApp", 
      url: `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Bonjour, j'aimerais en savoir plus sur Suñuy Artisan !")}`,
      description: "Chattez avec notre équipe"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 mb-2"
          >
            <div className="bg-white rounded-lg shadow-xl p-4 w-72">
              <div className="space-y-3">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-primary-800">
                      {link.text}
                    </div>
                    <div className="text-sm text-primary-600 mt-1">
                      {link.description}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMenu(!showMenu)}
        className="bg-primary-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center
                 hover:bg-primary-700 transition-colors duration-200 relative"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full animate-ping bg-primary-400 opacity-25" />
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Advertisement {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  sponsor: string;
}

const AnnouncementBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Données des publicités - facilement modifiables
  const advertisements: Advertisement[] = [
    {
      id: '1',
      title: 'Nouvelle version disponible',
      description: "Grâce à l'appli Suñuy Artisan, nous digitalisons l'artisanat, facilitons l'accès à la commande publique, boostons sa compétitivité et valorisons notre riche patrimoine culturel.",
      image: '/logo-sunuy-art.png',
      link: 'https://apps.apple.com/sn/app/su%C3%B1uy-artisan/id6745223088?l=fr-FR',
      sponsor: 'Suñuy Artisan'
    },
    {
      id: '2',
      title: 'Projet Mobilier National',
      description: "Découvrez les initiatives du PMN pour la valorisation de l'artisanat sénégalais et l'accès à la commande publique pour nos artisans qualifiés.",
      image: '/logo-pmn.png',
      link: 'https://pmn.sn',
      sponsor: 'PMN'
    },
    {
      id: '3',
      title: 'Ministère du Tourisme et de l\'Artisanat',
      description: "Soutien aux artisans dans le cadre du New Deal Technologique. Développement de l'économie numérique et valorisation du patrimoine culturel.",
      image: '/tourisme.png',
      link: '#',
      sponsor: 'Ministère'
    }
  ];

  // Rotation automatique
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 6000); // Change toutes les 6 secondes

    return () => clearInterval(timer);
  }, [isAutoPlaying, advertisements.length]);

  const goToAd = (index: number) => {
    setCurrentAd(index);
    setIsAutoPlaying(false);
    // Reprendre l'auto-play après 10 secondes
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextAd = () => {
    goToAd((currentAd + 1) % advertisements.length);
  };

  const prevAd = () => {
    goToAd(currentAd === 0 ? advertisements.length - 1 : currentAd - 1);
  };

  const handleAdClick = (link: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 overflow-hidden shadow-sm">
      <div className="relative h-16 flex items-center">
        {/* Étiquette Sponsorisé */}
        <div className="flex-shrink-0 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 flex items-center shadow-md">
          <span className="font-bold text-sm">Sponsorisé</span>
        </div>
        
        {/* Contenu publicitaire */}
        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAd}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center h-full px-4 cursor-pointer group"
              onClick={() => handleAdClick(advertisements[currentAd].link)}
            >
              {/* Contenu principal */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {/* Image/Logo */}
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm p-1 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={advertisements[currentAd].image}
                    alt={advertisements[currentAd].sponsor}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Texte */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-primary-800 text-sm truncate">
                      {advertisements[currentAd].title}
                    </h3>
                    {advertisements[currentAd].link && advertisements[currentAd].link !== '#' && (
                      <ExternalLink className="w-3 h-3 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-primary-700 text-xs leading-tight line-clamp-2 hidden sm:block">
                    {advertisements[currentAd].description}
                  </p>
                  {/* Version mobile - texte plus court */}
                  <p className="text-primary-700 text-xs leading-tight truncate sm:hidden">
                    {advertisements[currentAd].description.substring(0, 60)}...
                  </p>
                </div>
              </div>

              {/* Indicateur de lien externe */}
              {advertisements[currentAd].link && advertisements[currentAd].link !== '#' && (
                <div className="flex-shrink-0 ml-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-3 h-3 text-primary-600" />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contrôles de navigation */}
        <div className="flex-shrink-0 flex items-center gap-2 px-4">
          {/* Boutons précédent/suivant */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={prevAd}
              className="w-6 h-6 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105"
            >
              <ChevronLeft className="w-3 h-3 text-primary-600" />
            </button>
            <button
              onClick={nextAd}
              className="w-6 h-6 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105"
            >
              <ChevronRight className="w-3 h-3 text-primary-600" />
            </button>
          </div>

          {/* Indicateurs de pagination */}
          <div className="flex items-center gap-1">
            {advertisements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToAd(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentAd === index
                    ? 'w-6 h-2 bg-primary-600'
                    : 'w-2 h-2 bg-primary-300 hover:bg-primary-400'
                }`}
              >
                <span className="sr-only">Publicité {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Compteur */}
          <div className="hidden sm:block text-xs text-primary-600 font-medium bg-white/60 px-2 py-1 rounded-full">
            {currentAd + 1} / {advertisements.length}
          </div>
        </div>

        {/* Barre de progression */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-200">
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-orange-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity
            }}
            key={currentAd}
          />
        </div>

        {/* Effet de hover sur toute la bannière */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default AnnouncementBanner;
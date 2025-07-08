import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronDown, Play, Pause } from 'lucide-react';

const categories = [
  {
    id: 'plumbing',
    name: 'Plomberie',
    image: '/plomberie.webp',
  },
  {
    id: 'mechanic',
    name: 'Mécanique',
    image: '/mechanic.webp',
  },
  {
    id: 'electricity',
    name: 'Électricité',
    image: '/electrician.webp',
  },
  {
    id: 'appliances',
    name: 'Électroménager',
    image: '/electromanager.webp',
  },
  {
    id: 'ac',
    name: 'Climatisation',
    image: '/repairing.webp',
  },
  {
    id: 'carpentry',
    name: 'Menuiserie Bois',
    image: '/woodworker.webp',
  },
  {
    id: 'painting',
    name: 'Peinture',
    image: '/peinture.webp',
  },
  {
    id: 'wallpaper',
    name: 'Tapisserie',
    image: '/canape.webp',
  },
  {
    id: 'hairdressing',
    name: 'Coiffure',
    image: '/coiffure.webp',
  },
  {
    id: 'restaurant',
    name: 'Restauration',
    image: '/restauration.webp',
  },
   {
    id: 'agri-food',
    name: 'Agroalimentaire',
    image: '/agroalimentaire.webp',
  },
  {
    id: 'furnishings',
    name: 'Ameublement',
    image: '/ameublement.webp',
  },
  {
    id: 'solar',
    name: 'Panneaux solaires',
    image: '/solaire.webp',
  },
  {
    id: 'masonry',
    name: 'Maçonnerie',
    image: '/maconnerie.webp',
  },
  {
    id: 'leather',
    name: 'Maroquinerie',
    image: '/maroquinerie.webp',
  },
  {
    id: 'sewing',
    name: 'Confection couture',
    image: '/coutrier.webp',
  },
  {
    id: 'jewelry',
    name: 'Bijouterie',
    image: '/bijouterie.webp',
  },
  {
    id: 'laundry',
    name: 'Blanchisserie',
    image: '/blanchisserie.webp',
  },
  {
    id: 'transport',
    name: 'Transport',
    image: '/transport-1.webp',
  },
  {
    id: 'shoemaking',
    name: 'Cordonnerie',
    image: '/coordonnerie.webp',
  },
  {
    id: 'locksmith',
    name: 'Serrurerie',
    image: '/serrurerie.webp',
  },
  {
    id: 'tiling',
    name: 'Carrelage',
    image: '/carrelage.webp',
  },
  {
    id: 'metal-work',
    name: 'Menuiserie métallique',
    image: '/menuiserie-metallique.webp',
  },
  {
    id: 'aluminum-work',
    name: 'Menuiserie aluminium',
    image: '/menuiserie-aluminium.webp',
  }
];

const DownloadModal = ({ isOpen, onClose, categoryName }: { isOpen: boolean; onClose: () => void; categoryName: string }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-white/20"
          onClick={e => e.stopPropagation()}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary-400/20 rounded-full blur-xl" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary-300/20 rounded-full blur-xl" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-3xl">📱</span>
            </motion.div>

            <h3 className="text-2xl font-bold text-white">
              Téléchargez l'app Suñuy Artisan<br/> - {categoryName}
            </h3>
            <p className="text-white/90">
              Accédez à tous nos services artisanaux directement depuis votre smartphone !
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="space-y-4">
                <motion.a
                  href="https://apps.apple.com/sn/app/su%C3%B1uy-artisan/id6745223088?l=fr-FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/Download_on_the_App_Store.png"
                    alt="Télécharger sur l'App Store" 
                    className="h-12"
                 />
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.sunuyartisan.app&hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                   src="/Google_Play_Store_badge_fr.png"
                   alt="Télécharger sur Google Play" 
                   className="h-12"
                  />
                </motion.a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="bg-white p-3 rounded-2xl shadow-lg"
                >
                  <img
                    src="/qr.png"
                    alt="QR Code Suñuy Artisan"
                    className="w-24 h-24 object-contain"
                  />
                </motion.div>
                <p className="text-xs font-semibold text-white/90 text-center">
                  SCANNEZ LE CODE QR<br />POUR TÉLÉCHARGER L'APP
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const AnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const words = "Nos Catégories de Services".split(" ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 relative">
        <span className="inline-block relative">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mx-1"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            >
              {word}
            </motion.span>
          ))}
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: words.length * 0.2,
              ease: "easeOut"
            }}
          />
        </span>
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: (words.length * 0.2) + 0.2
        }}
        className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed"
      >
        Découvrez dans l'application Suñuy Artisan plusieurs catégories de services artisanaux,<br/> réalisés par 
        des professionnels de confiance, qualifiés pour toutes vos interventions à domicile.
      </motion.p>
    </motion.div>
  );
};

const Categories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsModalOpen(true);
  };

  const toggleShowCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  // Séparer les catégories en deux groupes
  const initialCategories = categories.slice(0, 8);
  const additionalCategories = categories.slice(8);

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-primary-25 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle />

        <div ref={ref}>
          {/* Affichage des 8 premières catégories avec design amélioré */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {initialCategories.map((category, index) => (
              <motion.div
                key={category.id}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={categoryVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl 
                           transition-all duration-500 transform cursor-pointer bg-white border border-primary-100"
                onClick={() => handleCategoryClick(category.name)}
              >
                {/* Enhanced background with gradient overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60 z-10" />
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Floating icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm 
                             rounded-full flex items-center justify-center shadow-lg z-20
                             group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
                  >
                    <span className="text-xl">🛠️</span>
                  </motion.div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 text-center drop-shadow-lg
                               group-hover:scale-110 transition-transform duration-300"
                    >
                      {category.name}
                    </motion.h3>
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '40%' }}
                      className="h-1 bg-gradient-to-r from-primary-400 to-white rounded-full
                               group-hover:from-white group-hover:to-primary-200 transition-all duration-300"
                    />

                    {/* Hover effect button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full
                               border border-white/30 text-white text-sm font-medium
                               opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      Télécharger l'app →
                    </motion.div>
                  </div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                                group-hover:border-primary-300 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Affichage des catégories supplémentaires avec animation améliorée */}
          <AnimatePresence>
            {showAllCategories && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  {additionalCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      whileHover={{ 
                        y: -8, 
                        scale: 1.03,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl 
                                 transition-all duration-500 transform cursor-pointer bg-white border border-primary-100"
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/60 z-10" />
                        <motion.img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-700 
                                   group-hover:scale-110"
                        />
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.3 }}
                          className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm 
                                   rounded-full flex items-center justify-center shadow-lg z-20
                                   group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
                        >
                          <span className="text-xl">🛠️</span>
                        </motion.div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
                          <h3 className="text-xl font-bold text-white mb-3 text-center drop-shadow-lg
                                       group-hover:scale-110 transition-transform duration-300">
                            {category.name}
                          </h3>
                          
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '40%' }}
                            transition={{ duration: 0.8, delay: index * 0.05 + 0.5 }}
                            className="h-1 bg-gradient-to-r from-primary-400 to-white rounded-full
                                     group-hover:from-white group-hover:to-primary-200 transition-all duration-300"
                          />

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full
                                     border border-white/30 text-white text-sm font-medium
                                     opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            Découvrir →
                          </motion.div>
                        </div>

                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                                      group-hover:border-primary-300 transition-colors duration-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton élégant amélioré pour afficher plus/moins */}
          <div className="flex justify-center">
            <motion.button
              onClick={toggleShowCategories}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                         text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl 
                         transition-all duration-500 flex items-center gap-4 font-semibold text-lg
                         border-2 border-white/20 backdrop-blur-sm"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Play/Pause icon */}
              <motion.div
                animate={{ rotate: showAllCategories ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isAutoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </motion.div>
              
              {/* Button text */}
              <span className="relative z-10">
                {showAllCategories ? 'Afficher moins de services' : 'Afficher plus de services'}
              </span>
              
              {/* Chevron icon */}
              <motion.div
                animate={{ rotate: showAllCategories ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>

              {/* Pulsation effect */}
              <motion.div
                className="absolute inset-0 bg-primary-400 rounded-full opacity-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </div>

          {/* Indicateur du nombre de services amélioré */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary-200">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <p className="text-primary-700 font-medium">
                {showAllCategories 
                  ? `Affichage de tous les ${categories.length} services disponibles`
                  : `Affichage de 8 services sur ${categories.length} disponibles`
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        categoryName={selectedCategory}
      />
    </section>
  );
};

export default Categories;
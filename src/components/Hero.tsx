import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Smartphone, X, Play, Pause } from 'lucide-react';

const TypewriterText = ({ text }: { text: string }) => {
  const words = text.split(' ');

  return (
    <motion.div className="flex flex-wrap justify-center gap-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.15,
            type: "spring",
            stiffness: 100
          }}
          className="inline-block"
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );
};

const DownloadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-primary-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Téléchargez l'app Suñuy Artisan
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
                <div className="bg-white p-2 rounded-lg">
                  <img
                    src="/qr.png"
                    alt="QR Code Suñuy Artisan"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-white/90">
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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    "/slide-3.webp",
    "/slide-5.webp",
    "/slide-4.webp"
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with smooth transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut"
            }}
            style={{
              backgroundImage: `url("${slide}")`,
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40 backdrop-blur-[1px]"></div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Content Container */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Enhanced Title with better typography */}
          <div className="relative mb-8 mt-48">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute -inset-8 bg-white rounded-full blur-3xl"
            />

          </div>

          {/* Enhanced Subtitle */}


          {/* Enhanced Download Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="relative"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl"
            />

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 131, 255, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r 
                       from-primary-600 via-primary-500 to-primary-600 hover:from-primary-500 hover:via-primary-400 hover:to-primary-500
                       text-white text-xl lg:text-2xl font-bold rounded-full shadow-2xl 
                       transition-all duration-500 min-w-[320px] border-2 border-white/20
                       backdrop-blur-sm group overflow-hidden"
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />

              <Smartphone className="w-7 h-7 transition-transform group-hover:rotate-12 relative z-10" />
              <span className="relative z-10">Je télécharge Suñuy Artisan</span>
              <Download className="w-6 h-6 transition-transform group-hover:translate-y-1 relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Slide Controls */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex items-center gap-6 hidden">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 
                     hover:bg-white/30 transition-all duration-300 text-white"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>

          {/* Enhanced Slide Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${currentSlide === index
                    ? 'w-12 h-3 bg-white shadow-lg'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                  }`}
              >
                {currentSlide === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}

      </div>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
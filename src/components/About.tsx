import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const mainTitle = "SUÑUY ARTISAN".split('');
  const subTitle = "La révolution digitale de l'artisanat sénégalais".split(' ');

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="mb-2">
        {mainTitle.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              ease: "easeOut"
            }}
            className="inline-block text-3xl md:text-4xl font-bold text-primary-800"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      
      <div className="relative">
        {subTitle.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: mainTitle.length * 0.05 + i * 0.1,
              ease: "easeOut"
            }}
            className="inline-block text-3xl md:text-4xl font-bold text-primary-800 mx-1"
          >
            {word}
          </motion.span>
        ))}
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: (mainTitle.length * 0.05) + (subTitle.length * 0.1),
            ease: "easeOut"
          }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 origin-left"
        />
      </div>
    </div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cards = [
    {
      image: "/connectez-vous.webp",
      title: "Connectez-vous",
      description: "Connectez-vous à des artisans qualifiés partout au Sénégal pour vos besoins de réparation. Trouvez rapidement des professionnels fiables et compétents pour un service sur mesure et de qualité."
    },
    {
      image: "/decouvrez.webp",
      title: "Découvrez",
      description: "Découvrez des artisans qualifiés près de chez vous pour tous vos besoins de réparation. Bénéficiez d'un service rapide, fiable et sur mesure, assuré par des experts passionnés de leur métier."
    },
    {
      image: "/reservation_de_Service.webp",
      title: "Réservation de Service",
      description: "Simplifiez la gestion de vos prestations avec notre service de réservation. Planifiez vos rendez-vous en quelques clics et offrez à vos clients une expérience rapide, fluide et professionnelle."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-primary-25 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 0.1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute -inset-8 bg-primary-200 rounded-3xl blur-2xl"
              />
              <img
                src="/Bandeau-sunuy-artisan.png"
                alt="L'appli Sunuy Artisan"
                className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border-4 border-white/50"
              />
            </div>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary-100"
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Image container with enhanced effects */}
              <div className="relative w-full h-56 overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  variants={imageVariants}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">
                    {index === 0 ? '🔗' : index === 1 ? '🔍' : '📅'}
                  </span>
                </motion.div>
              </div>

              {/* Content with enhanced typography */}
              <div className="relative p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="text-2xl font-bold text-primary-800 mb-4 group-hover:text-primary-600 transition-colors duration-300"
                >
                  {card.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className="text-primary-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300"
                >
                  {card.description}
                </motion.p>

                {/* Decorative bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 origin-left"
                />
              </div>

              {/* Card border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
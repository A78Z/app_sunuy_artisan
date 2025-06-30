import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="profile" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col md:flex-row gap-12 items-center">
          {/* Photo with caption */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[35%]"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-primary-200 bg-white">
              <img
                src="/photo_coordo_officielle.webp"
                alt="Ibrahima Tall"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <motion.h3 
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
                custom={0}
                className="text-xl font-semibold text-primary-800"
              >
                Monsieur Ibrahima TALL
              </motion.h3>
              <motion.p
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
                custom={1}
                className="text-primary-600"
              >
                Coordonnateur du Projet Mobilier National
              </motion.p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[65%]"

          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-6 border-b border-primary-200 pb-3">
              Le Mot du Coordonnateur
              </h2>
              <div className="space-y-4 text-primary-700">
                <p className="leading-relaxed">
                Depuis sa nomination à la tête du Projet Mobilier National, <strong>Monsieur Ibrahima TALL</strong> <br/>a initié une série de réformes structurantes,
           plaçant la <strong>digitalisation de l’artisanat</strong> <br/>au cœur de sa stratégie. Parmi ces innovations figure <strong>Suñuy Artisan</strong>, 
           une application mobile conçue pour accélérer l’ancrage du Sénégal dans sa <strong>Vision 2050</strong>. Véritable pont entre tradition
           et modernité, cette plateforme facilite l’accès aux artisans qualifiés à l’échelle nationale, tout en dynamisant un 
           secteur clé pour l’économie locale.
                </p>
                <p className="leading-relaxed">
                Soutenue par le <strong>Président Bassirou Diomaye FAYE</strong> et le <strong>Premier Ministre Ousmane SONKO</strong>, la Vision 2050 ambitionne 
           de moderniser l’<strong>artisanat</strong> par une <strong>transformation numérique</strong>. Son objectif : préserver le patrimoine culturel tout 
           en <strong>structurant le secteur</strong> pour une <strong>croissance durable et inclusive</strong>. <strong>Suñuy Artisan</strong> s’aligne sur cette dynamique en
           offrant aux <strong>artisans</strong> plus de <strong>visibilité</strong> et aux <strong>clients</strong> un accès simplifié <br/> à des <strong>services professionnels, 
           rapides et sécurisés</strong>. Qu’il s’agisse de <strong>réparations</strong>, de <strong>rénovations</strong> ou d’autres <strong>prestations</strong>, 
           l’application allie <strong>rapidité</strong> et <strong>fiabilité</strong>, tout en mettant en avant l’<strong>expertise locale</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
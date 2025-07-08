import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NewDealTechnologique = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        {/* Motif géométrique inspiré du logo */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="1"/>
            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Réseau de connexions */}
        <div className="absolute top-1/4 right-20 w-48 h-48 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <defs>
              <pattern id="network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor"/>
                <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="20" y1="20" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#network)"/>
          </svg>
        </div>

        {/* Silhouette du Monument de la Renaissance */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <path d="M100 20 L120 60 L140 100 L160 140 L180 180 L20 180 L40 140 L60 100 L80 60 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Colonne gauche - Logo et éléments visuels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Container principal du logo avec effets */}
            <div className="relative">
              {/* Effet de glow derrière le logo */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl"
              />
              
              {/* Logo principal */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <img 
                  src="/NDT_blanc.png" 
                  alt="New Deal Technologique" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Éléments décoratifs autour du logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-cyan-400 rounded-full opacity-30"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-blue-400 rounded-full opacity-40"
            />

            {/* Particules flottantes */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`
                }}
              />
            ))}
          </motion.div>

          {/* Colonne droite - Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Titre principal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Vision 2050
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                New Deal{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Technologique
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl text-primary-100 leading-relaxed">
                Le <strong className="text-white">New Deal Technologique</strong> du Sénégal s'inscrit dans une vision 
                ambitieuse de transformation numérique portée par le <strong className="text-cyan-300">Président Bassirou Diomaye FAYE</strong> et 
                le <strong className="text-cyan-300">Premier Ministre Ousmane SONKO</strong>.
              </p>
              
              <p className="text-lg text-primary-200 leading-relaxed">
                Cette initiative révolutionnaire vise à positionner le Sénégal comme un hub technologique 
                en Afrique de l'Ouest, en digitalisant les secteurs clés de l'économie, notamment 
                l'<strong className="text-white">artisanat traditionnel</strong>.
              </p>
            </motion.div>

            {/* Points clés avec icônes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { icon: "🚀", title: "Innovation", desc: "Technologies de pointe" },
                { icon: "🌍", title: "Inclusion", desc: "Accès pour tous" },
                { icon: "💼", title: "Économie", desc: "Croissance durable" },
                { icon: "🎯", title: "Vision", desc: "Sénégal 2050" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-primary-200 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                <p className="text-cyan-100 text-lg leading-relaxed">
                  <strong className="text-white">Suñuy Artisan</strong> incarne parfaitement cette vision en créant 
                  un pont numérique entre le patrimoine artisanal sénégalais et les opportunités 
                  du <strong className="text-cyan-300">21ème siècle</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewDealTechnologique;
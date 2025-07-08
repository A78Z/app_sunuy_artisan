import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EULA from './EULA';

const AnimatedFooterTitle = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.h3
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-lg font-semibold mb-4 relative inline-block"
    >
      {children}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 origin-left"
      />
    </motion.h3>
  );
};

const AnimatedLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <motion.a
    href={href}
    className={`relative inline-block text-primary-200 hover:text-white transition-colors duration-300 ${className}`}
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <span className="relative">
      {children}
      <motion.span
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </span>
  </motion.a>
);

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-primary-200 hover:text-white transition-colors"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.a>
);

const ScrollToTopLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.a
      href={to}
      onClick={handleClick}
      className="relative inline-block text-primary-200 hover:text-white transition-colors duration-300"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </motion.a>
  );
};

const AnimatedWebsiteLink = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute inset-0 bg-primary-200 rounded-lg blur-md -z-10"
      />
      <a
        href="https://pmn.sn"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-105"
      >
        <div className="flex items-center justify-between">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold text-white mb-2"
            >
              Visitez notre site internet
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-primary-200 font-medium"
            >
              Projet du Mobilier National
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-200 group-hover:text-white transition-colors duration-300"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-primary-400 to-primary-200 transform origin-left"
        />
      </a>
    </motion.div>
  );
};

const AnimatedCopyright = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const text = "© 2025 Ministère du Tourisme et de l'Artisanat | Projet du Mobilier National | Suñuy Artisan";
  const words = text.split('|');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="pt-6 text-center text-primary-200"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-6"
      />
      
      <div className="flex flex-wrap justify-center items-center gap-2">
        {words.map((part, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            className="inline-block"
          >
            {index === words.length - 1 ? (
              <>
                <motion.span
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="font-semibold text-primary-300"
                >
                  {part.trim()}
                </motion.span>
              </>
            ) : (
              <>{part.trim()} |</>
            )}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isEulaOpen, setIsEulaOpen] = useState(false);

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerVariants}
          custom={0}
          className="flex justify-center items-center gap-12 mb-12 pb-8 border-b border-primary-700"
        >
          <div className="w-48 h-auto">
            <img 
              src="/NDT_blanc.png" 
              alt="Logo Sénégal 50" 
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-48 h-auto">
            <img 
              src="/senegal-2050.png" 
              alt="Logo Sénégal 50" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerVariants}
          custom={1}
          className="mb-8 border-b border-primary-700 pb-8"
        >
          <AnimatedFooterTitle>L'Artisanat au Sénégal</AnimatedFooterTitle>
          
          {/* Nouvelle mise en page améliorée avec grille asymétrique */}
          <div className="relative">
            {/* Motif décoratif de fond */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="bg-primary-300 rounded-full w-2 h-2"
                  />
                ))}
              </div>
            </div>

            {/* Contenu principal avec nouvelle disposition */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Colonne gauche - Plus large */}
              <div className="lg:col-span-7 space-y-8">
                {/* Premier paragraphe avec icône décorative */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></div>
                  <div className="pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-start gap-4 mb-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary-200 mb-3">Patrimoine et Tradition</h4>
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-primary-200 leading-relaxed text-lg"
                    >
                      L'artisanat sénégalais, riche de plusieurs siècles de tradition, représente un pilier essentiel de l'économie 
                      et de la culture du pays. Ce secteur emploie plus de 400 000 artisans à travers le pays, contribuant 
                      significativement au PIB national et à la préservation du patrimoine culturel.
                    </motion.p>
                  </div>
                </div>

                {/* Deuxième paragraphe avec icône décorative */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></div>
                  <div className="pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-start gap-4 mb-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🛠️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary-200 mb-3">Savoir-faire Diversifié</h4>
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-primary-200 leading-relaxed text-lg"
                    >
                      Les artisans sénégalais excellent dans diverses disciplines : la sculpture sur bois, la maroquinerie, 
                      la bijouterie, la poterie, le tissage, et la teinture. Chaque région du pays possède ses spécialités 
                      artisanales uniques, reflétant la diversité culturelle du Sénégal.
                    </motion.p>
                  </div>
                </div>

                {/* NOUVELLE CARTE - Commande Publique et Opportunités */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></div>
                  <div className="pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="flex items-start gap-4 mb-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🧾</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary-200 mb-3">Commande Publique et Opportunités</h4>
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="text-primary-200 leading-relaxed text-lg"
                    >
                      La commande publique représente un levier stratégique pour intégrer les artisans sénégalais dans les grands projets nationaux. 
                      Grâce à notre plateforme, les artisans accèdent plus facilement aux appels d'offres publics, renforçant leur visibilité et leur 
                      accès à des marchés formels. C'est une opportunité unique de valoriser leur savoir-faire tout en participant activement au 
                      développement économique local.
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Séparateur vertical décoratif */}
              <div className="hidden lg:block lg:col-span-1 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-500 to-transparent transform -translate-x-1/2"></div>
                <motion.div
                  animate={{ y: [0, 50, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/4 w-3 h-3 bg-primary-400 rounded-full transform -translate-x-1/2"
                ></motion.div>
              </div>

              {/* Colonne droite - Plus compacte */}
              <div className="lg:col-span-4 space-y-8">
                {/* Troisième paragraphe avec icône décorative */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></div>
                  <div className="pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex items-start gap-4 mb-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary-200 mb-3">Défis Modernes</h4>
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-primary-200 leading-relaxed text-lg"
                    >
                      Malgré son importance, le secteur fait face à plusieurs défis : l'accès limité aux marchés internationaux, 
                      le manque de digitalisation, et la difficulté à valoriser justement le travail artisanal. C'est dans ce 
                      contexte que Suñuy Artisan s'engage à créer des ponts entre les artisans et le marché national.
                    </motion.p>
                  </div>
                </div>

                {/* Quatrième paragraphe avec icône décorative */}
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></div>
                  <div className="pl-8">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex items-start gap-4 mb-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-primary-200 mb-3">Innovation Digitale</h4>
                      </div>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="text-primary-200 leading-relaxed text-lg"
                    >
                      Notre plateforme préserve les savoir-faire ancestraux en les adaptant au commerce moderne, permettant aux 
                      artisans de vivre dignement de leur art tout en perpétuant leurs traditions. <strong>Réparations, rénovations ou autres
                      prestations</strong> : l'appli allie rapidité, fiabilité et expertise locale pour valoriser l'artisanat de proximité.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section logos avec animation améliorée */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-12 mt-16 pt-8 border-t border-primary-700/50"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white p-2 shadow-2xl">
                <img 
                  src="/tourisme.png"
                  alt="Suñuy Artisan Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white p-2 shadow-2xl">
                <img 
                  src="/logo-sunuy-art.png"  
                  alt="Ministère du Tourisme et de l'Artisanat Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerVariants}
            custom={2}
            className="space-y-4 flex flex-col justify-start"
          >
            <div className="flex items-center mb-4">
              <motion.img 
                whileHover={{ scale: 2.05 }}
                src="/logo-sunuy-footer.png"
                alt="Suñuy Artisan" 
                className="h-16 w-16 object-cover object-center"
              />
            </div>
            <p className="text-primary-200">
             Avec Suñuy Artisan, les artisans accèdent enfin aux opportunités de la commande publique, tout en profitant d'une solution digitale qui booste leur activité et valorise notre savoir-faire culturel.
            </p>
            <AnimatedWebsiteLink />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerVariants}
            custom={3}
          >
            <AnimatedFooterTitle>Contact</AnimatedFooterTitle>
            <div className="space-y-2">
              <AnimatedLink href="mailto:contact@sunuyartisan.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info.sunuyartisan@pmn.sn
              </AnimatedLink>
              <AnimatedLink href="tel:+221123456789" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +221 76 624 85 05
              </AnimatedLink>
              <div className="flex items-center text-primary-200">
                <MapPin className="w-5 h-5 mr-2" />
                Diamniadio cité Senegindia Villa 009-TYPE A
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerVariants}
            custom={4}
          >
            <AnimatedFooterTitle>Liens Utiles</AnimatedFooterTitle>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink to="/legal">
                  CGU et EULA de l'Application Suñuy Artisan
                </ScrollToTopLink>
              </li>
              <li>
                <AnimatedLink href="#about">Suñuy Artisan</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#features">Fonctionnalités principales</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#solution">Avantages pour l'Artisan</AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="#commande-publique">Commande Publique</AnimatedLink>
              </li>
              <li>
                <ScrollToTopLink to="/concours">
                  Concours National de Reproduction de Prototypes
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink to="/contact">
                  Contactez-nous
                </ScrollToTopLink>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerVariants}
            custom={5}
            className="space-y-6"
          >
            <div>
              <AnimatedFooterTitle>Suivez-nous</AnimatedFooterTitle>
              <div className="flex space-x-4">
                <SocialIcon href="https://web.facebook.com/profile.php?viewas=100000686899395&id=61559819632773">
                  <Facebook className="w-6 h-6" />
                </SocialIcon>
                <SocialIcon href="https://x.com/MobilierProjet">
                  <Twitter className="w-6 h-6" />
                </SocialIcon>
                <SocialIcon href="#">
                  <Instagram className="w-6 h-6" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/company/projet-mobilier-national/?viewAsMember=trueclearn">
                  <Linkedin className="w-6 h-6" />
                </SocialIcon>
                <SocialIcon href="https://whatsapp.com/channel/0029VaxEu5UKgsNz7tJ3MU3k">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
            <div>
              <p className="text-primary-200 text-sm mb-4">
                Téléchargez Suñuy Artisan dès aujourd'hui sur l'App Store et Google Play, ou scannez le QR code pour un accès rapide à l'application !
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col space-y-4">
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
                <div className="flex flex-col items-center space-y-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="h-[84px] flex items-center bg-white p-2 rounded-lg"
                  >
                    <img 
                      src="/qr.png" 
                      alt="QR Code Suñuy Artisan" 
                      className="h-full w-auto object-contain"
                    />
                  </motion.div>
                  <p className="text-xs font-semibold text-primary-200">
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatedCopyright />
      </div>
      
      <EULA isOpen={isEulaOpen} onClose={() => setIsEulaOpen(false)} />
    </footer>
  );
};

export default Footer;
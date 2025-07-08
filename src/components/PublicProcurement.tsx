import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  FileText, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Volume2,
  Play,
  Pause
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AgrementModal from './AgrementModal';
import { ArtisanGrid } from './ArtisanGrid';
import PublicProcurementFilters from './PublicProcurementFilters';

const AudioExplanation = () => {
  const [playingAudio, setPlayingAudio] = useState<'french' | 'wolof' | null>(null);
  const frenchAudioRef = useRef<HTMLAudioElement>(null);
  const wolofAudioRef = useRef<HTMLAudioElement>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleAudioPlay = (language: 'french' | 'wolof') => {
    const currentAudio = language === 'french' ? frenchAudioRef.current : wolofAudioRef.current;
    const otherAudio = language === 'french' ? wolofAudioRef.current : frenchAudioRef.current;
    
    // Arrêter l'autre audio s'il joue
    if (otherAudio && !otherAudio.paused) {
      otherAudio.pause();
      otherAudio.currentTime = 0;
    }
    
    // Arrêter l'audio actuel s'il joue déjà
    if (playingAudio === language && currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setPlayingAudio(null);
      return;
    }
    
    // Jouer l'audio sélectionné
    if (currentAudio) {
      currentAudio.play()
        .then(() => {
          setPlayingAudio(language);
        })
        .catch((error) => {
          console.error('Erreur lors de la lecture audio:', error);
          alert('Impossible de lire le fichier audio. Vérifiez que le fichier existe et que votre navigateur supporte le format.');
        });
    }
  };

  // Gérer la fin de lecture audio
  const handleAudioEnded = () => {
    setPlayingAudio(null);
  };

  const AudioButton = ({ 
    language, 
    label, 
    flag 
  }: { 
    language: 'french' | 'wolof'; 
    label: string; 
    flag: string;
  }) => {
    const isPlaying = playingAudio === language;
    
    return (
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleAudioPlay(language)}
        className={`
          flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg transition-all duration-300
          ${isPlaying 
            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
            : 'bg-white hover:bg-primary-50 text-primary-700 border-2 border-primary-200 hover:border-primary-300'
          }
        `}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">{flag}</span>
          <div className={`
            p-2 rounded-full transition-colors duration-300
            ${isPlaying ? 'bg-white/20' : 'bg-primary-100'}
          `}>
            {isPlaying ? (
              <Pause className={`w-5 h-5 ${isPlaying ? 'text-white' : 'text-primary-600'}`} />
            ) : (
              <Play className={`w-5 h-5 ${isPlaying ? 'text-white' : 'text-primary-600'}`} />
            )}
          </div>
        </div>
        
        <div className="text-left">
          <div className="font-semibold text-lg">
            {isPlaying ? 'En cours de lecture...' : label}
          </div>
          <div className={`text-sm ${isPlaying ? 'text-white/80' : 'text-primary-500'}`}>
            {isPlaying ? 'Cliquez pour arrêter' : 'Cliquez pour écouter'}
          </div>
        </div>

        {/* Indicateur de lecture animé */}
        {isPlaying && (
          <div className="flex items-center gap-1 ml-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-4 bg-white rounded-full"
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        )}
      </motion.button>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-12 border border-primary-100"
    >
      {/* Éléments audio cachés */}
      <audio
        ref={frenchAudioRef}
        onEnded={handleAudioEnded}
        preload="metadata"
      >
        <source src="/audios/ecouter_francais.ogg" type="audio/ogg" />
        <source src="/audios/ecouter_francais.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>

      <audio
        ref={wolofAudioRef}
        onEnded={handleAudioEnded}
        preload="metadata"
      >
        <source src="/audios/ecouter_en_wolof.ogg" type="audio/ogg" />
        <source src="/audios/ecouter_en_wolof.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>

      <div className="text-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-full mb-4"
        >
          <Volume2 className="w-5 h-5" />
          <span className="font-semibold">Explication Audio</span>
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-primary-800 mb-2"
        >
          Comment accéder à la commande publique ?
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-primary-600 text-lg max-w-3xl mx-auto"
        >
          Écoutez les explications détaillées sur les conditions d'accès et les documents requis 
          pour rejoindre notre réseau d'artisans agréés.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AudioButton 
            language="french" 
            label="Écouter en Français" 
            flag="🇫🇷"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AudioButton 
            language="wolof" 
            label="Écouter en Wolof" 
            flag="🇸🇳"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center mt-6"
      >
        <p className="text-primary-500 text-sm">
          💡 Ces explications audio vous aideront à comprendre toutes les étapes nécessaires 
          pour devenir un artisan agréé et accéder aux opportunités de commande publique.
        </p>
      </motion.div>
    </motion.div>
  );
};

const AnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const title = "Commande Publique".split('');
  const subtitle = "Accédez aux opportunités de marchés publics et développez votre activité avec des contrats institutionnels".split(' ');

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="relative inline-block">
        <div className="relative">
          {title.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.03,
                ease: "easeOut"
              }}
              className="inline-block text-3xl md:text-4xl font-bold text-primary-800"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: title.length * 0.03,
              ease: "easeOut"
            }}
            className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-500 origin-left"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: title.length * 0.03 + 0.3
          }}
          className="absolute -left-4 -right-4 top-1/2 -bottom-2 bg-primary-100 -z-10 rounded-full blur-xl"
        />
      </div>
      
      <div className="mt-6 max-w-3xl mx-auto"> 
        {subtitle.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: (title.length * 0.03) + (i * 0.1),
              ease: "easeOut"
            }}
            className="inline-block text-lg text-primary-600 mx-1"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const PublicProcurement = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    metier: '',
    region: '',
    department: ''
  });
  const [filteredCount, setFilteredCount] = useState(21);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Accès aux marchés institutionnels",
      description: "Participez aux appels d'offres des administrations, collectivités locales et établissements publics"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Accompagnement personnalisé",
      description: "Bénéficiez d'un support dédié pour constituer vos dossiers et répondre aux appels d'offres"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Notifications en temps réel",
      description: "Recevez instantanément les opportunités correspondant à votre profil et votre localisation"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification qualité",
      description: "Valorisez votre expertise avec notre label d'artisan agréé reconnu par les institutions"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Inscription et vérification",
      description: "Créez votre profil et soumettez vos documents professionnels pour validation"
    },
    {
      number: "02", 
      title: "Agrément obtenu",
      description: "Recevez votre certification d'artisan agréé après validation de votre dossier"
    },
    {
      number: "03",
      title: "Accès aux opportunités",
      description: "Consultez et candidatez aux appels d'offres adaptés à votre métier"
    },
    {
      number: "04",
      title: "Suivi et accompagnement",
      description: "Bénéficiez d'un accompagnement tout au long du processus de candidature"
    }
  ];

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleFilteredCountChange = (count: number) => {
    setFilteredCount(count);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <section id="commande-publique" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle />

        {/* Section Audio Explicative */}
        <AudioExplanation />

        {/* Section des avantages */}
        <div ref={ref} className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary-800 text-center mb-12"
          >
            Pourquoi rejoindre notre réseau d'artisans agréés ?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-primary-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section du processus */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary-800 text-center mb-12"
          >
            Comment ça marche ?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-500">
                  <div className="text-3xl font-bold text-primary-500 mb-3">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold text-primary-800 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-primary-600 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white mb-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Prêt à rejoindre notre réseau d'artisans agréés ?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Accédez aux opportunités de commande publique et développez votre activité 
            avec des contrats institutionnels sécurisés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demande-agrement"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg 
                       font-semibold hover:bg-primary-50 transition-colors duration-300"
            >
              <FileText className="w-5 h-5" />
              Déposer une demande d'agrément
            </Link>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg 
                       font-semibold hover:bg-white hover:text-primary-700 transition-colors duration-300"
            >
              <CheckCircle className="w-5 h-5" />
              Formulaire rapide
            </button>
          </div>
        </motion.div>

        {/* Section des artisans agréés */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary-800 text-center mb-8"
          >
            Nos artisans agréés
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-600 text-center mb-8 max-w-3xl mx-auto"
          >
            Découvrez notre réseau d'artisans certifiés, sélectionnés pour leur expertise 
            et leur capacité à répondre aux exigences de la commande publique.
          </motion.p>

          <PublicProcurementFilters 
            onFiltersChange={handleFiltersChange}
            filteredCount={filteredCount}
            isLoading={isLoading}
          />
          
          <ArtisanGrid 
            filters={filters}
            onFilteredCountChange={handleFilteredCountChange}
            onLoadingChange={handleLoadingChange}
          />
        </div>
      </div>

      <AgrementModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default PublicProcurement;
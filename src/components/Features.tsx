import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Store, 
  CreditCard, 
  Truck, 
  MessageSquare, 
  Star,
  Palette
} from 'lucide-react';

const AnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const title = "Fonctionnalités principales".split('');

  return (
    <div ref={ref} className="text-center mb-16">
      <div className="relative inline-block">
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
      
      <div className="mt-8 max-w-6xl mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: title.length * 0.03 + 0.2
          }}
          className="text-lg text-primary-600 leading-relaxed"
        >
          <strong>Suñuy Artisan</strong> simplifie la mise en relation avec les artisans locaux grâce à la{' '}
          <strong>réservation en ligne</strong>, une <strong>messagerie intégrée</strong> et la{' '}
          <strong>géolocalisation</strong>. Trouvez, contactez et évaluez facilement des professionnels 
          proches de chez vous.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: title.length * 0.03 + 0.4
          }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border-l-4 border-primary-500"
        >
          <p className="text-lg text-primary-700 leading-relaxed">
            Avec l'intégration de la <strong>Commande Publique</strong>, les artisans peuvent désormais{' '}
            <strong>accéder aux opportunités offertes par les marchés publics</strong>, soumettre leurs 
            candidatures directement depuis la plateforme et développer leur activité à plus grande échelle.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
        icon: (
          <img 
            src="/compte-multi-profils.webp"
            alt="Compte multi-profils"
            className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
            
          />
        ),
        title: "Compte multi-profils",
        description: "Permet aux utilisateurs (clients, artisans, administrateurs) de s'inscrire via des formulaires adaptés à leur profil, avec vérification des documents professionnels pour les artisans et authentification sécurisée (SMS OPT)."
    },
    {
      icon: (
        <img
          src="/recherche_avancee_artisans.webp"
          alt="Recherche avancée d'artisans"
          className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
          
        />
      ),
      title: "Recherche avancée d'artisans",
      description: "Filtrez les artisans par métier, localisation, disponibilité, notes et budget. Géolocalisation intégrée et suggestions en temps réel pour des résultats personnalisés et précis."
  },
  {
    icon: (
      <img
        src="/reservation-en-temps-reel.webp"
        alt="Réservation en temps réel"
        className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
        
      />
    ),
    title: "Réservation en temps réel",
    description: "Planifiez un rendez-vous en choisissant un créneau disponible dans le calendrier de l'artisan, avec confirmation immédiate, rappels."
},
// Nouvelles fonctionnalités pour la Commande Publique
{
  icon: (
    <img
      src="/soumission-appels-offres.webp"
      alt="Soumission facilitée aux appels d'offres"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      
    />
  ),
  title: "Soumission facilitée aux appels d'offres",
  description: "Les acteurs publics peuvent désormais proposer leurs marchés à nos artisans agréés, grâce à une interface dotée de filtres par secteur, région et échéance."
},
{
  icon: (
    <img
      src="/alertes-temps-reel.webp"
      alt="Alertes personnalisées en temps réel"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      
    />
  ),
  title: "Alertes personnalisées en temps réel",
  description: "Artisans, recevez instantanément des notifications dès qu'un marché public adapté à votre profil est publié, pour ne manquer aucune opportunité."
},
{
  icon: (
    <img
      src="/assistance-dossiers.webp"
      alt="Assistance à la préparation des dossiers"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      
    />
  ),
  title: "Assistance à la préparation des dossiers",
  description: "Bénéficiez d'un accompagnement pour monter vos dossiers d'appel d'offres : documents requis, modèles, et conseils pratiques inclus."
},
{
  icon: (
    <img
      src="/Reseau-artisans-agrees.webp"
      alt="Réseau d'artisans agréés"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      
    />
  ),
  title: "Réseau d'artisans agréés",
  description: "Faites appel à notre réseau d'artisans certifiés, sélectionnés selon leur savoir-faire, pour vos projets dans le cadre des marchés publics."
},
{
  icon: (
    <img
      src="/historique-candidatures.webp"
      alt="Historique et suivi des candidatures"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      
    />
  ),
  title: "Historique et suivi des candidatures",
  description: "Artisan, suivez en temps réel depuis votre espace l'historique des marchés publics proposés et l'évolution de vos candidatures et échanges."
},
{
  icon: (
    <img
      src="/statistiques-opportunites.webp"
      alt="Statistiques et opportunités par métier"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      
    />
  ),
  title: "Statistiques et opportunités par métier",
  description: "Accédez à des données utiles sur les tendances du marché public selon votre métier : volumes, régions actives et types de demandes fréquentes."
}
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-primary-500 mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-primary-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
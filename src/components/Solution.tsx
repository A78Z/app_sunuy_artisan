import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingBag, 
  Globe, 
  TrendingUp, 
  Shield, 
  Rocket,
  Users
} from 'lucide-react';

const AnimatedTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const title = "Avantages pour l'Artisan".split('');
  const subtitle = "Notre plateforme valorise le savoir-faire des artisans en leur offrant plus de visibilité, un accompagnement personnalisé et un accès simplifié aux opportunités de commande publique, pour développer leur activité et collaborer avec des clients privés comme des institutions.".split(' ');

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
      
      <div className="mt-6 max-w-2xl mx-auto">
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

const Solution = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: (
        <img 
          src="/recherche-personnalisee.webp"
          alt="Visibilité accrue"
          className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
        />
      ),
      title: (
        <h3 className="text-xl font-semibold text-center mt-4">
          Visibilité accrue
        </h3>
      ),
      description: (
        <p className="text-center text-primary-600 mt-2">
          Bénéficiez d'une meilleure présence en ligne grâce à Suñuy Artisan et touchez davantage de clients dans votre zone géographique locale.
        </p>
      ) 
  },
    {
        icon: (
          <img 
            src="/rendez-vous.webp"
            alt="Gestion simplifiée des RDV"
            className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
          />
        ),
        title: (
          <h3 className="text-xl font-semibold text-center mt-4">
            Gestion simplifiée des RDV
          </h3>
        ),
        description: (
          <p className="text-center text-primary-600 mt-2">
            Organisez plus facilement votre emploi du temps grâce à une interface claire qui centralise toutes vos demandes de rendez-vous clients.
          </p>
        ) 
    },
    {
      icon: (
        <img 
          src="/communication.webp"
          alt="Communication sécurisée"
          className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
        />
      ),
      title: (
        <h3 className="text-xl font-semibold text-center mt-4">
          Communication sécurisée
        </h3>
      ),
      description: (
        <p className="text-center text-primary-600 mt-2">
          Messagerie directe pour clarifier les demandes, partager des devis ou photos, et négocier les détails 
          en évitant les appels non souhaités ou les malentendus.
        </p>
      ) 
    },
  {
    icon: (
      <img 
        src="/Notoriete-professionnelle.webp"
        alt="Notoriété professionnelle"
        className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
      />
    ),
    title: (
      <h3 className="text-xl font-semibold text-center mt-4">
        Notoriété professionnelle
      </h3>
    ),
    description: (
      <p className="text-center text-primary-600 mt-2">
        Améliorez votre image grâce aux avis clients, à votre profil complet et à la mise en avant de vos réalisations et compétences artisanales.
      </p>
    ) 
  },
{
  icon: (
    <img 
      src="/Acces-opportunites.webp"
      alt="Accès à des opportunités"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
    />
  ),
  title: (
    <h3 className="text-xl font-semibold text-center mt-4">
      Accès à des opportunités
    </h3>
  ),
  description: (
    <p className="text-center text-primary-600 mt-2">
      Recevez des demandes de clients qualifiés dans votre secteur et saisissez de nouvelles opportunités pour développer votre activité.
    </p>
  ) 
},
{
  icon: (
    <img 
      src="/Zero-frais-agence.webp"
      alt="Zéro frais"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
    />
  ),
  title: (
    <h3 className="text-xl font-semibold text-center mt-4">
      Zéro frais
    </h3>
  ),
  description: (
    <p className="text-center text-primary-600 mt-2">
      Générez plus de bénéfices en gardant 100 % de vos revenus : aucun pourcentage prélevé sur les transactions ni frais d'intermédiaire.
    </p>
  ) 
},
// Nouveaux avantages pour la commande publique
{
  icon: (
    <img 
      src="/acces-appels-offres.webp"
      alt="Accès simplifié aux appels d'offres"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
    />
  ),
  title: (
    <h3 className="text-xl font-semibold text-center mt-4">
      Accès simplifié aux appels d'offres
    </h3>
  ),
  description: (
    <p className="text-center text-primary-600 mt-2">
      Bénéficiez d'un accès direct et clair aux opportunités de commande publique adaptées à votre profil.
    </p>
  ) 
},
{
  icon: (
    <img 
      src="/accompagnement-personnalise.webp"
      alt="Accompagnement personnalisé"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
    />
  ),
  title: (
    <h3 className="text-xl font-semibold text-center mt-4">
      Accompagnement personnalisé
    </h3>
  ),
  description: (
    <p className="text-center text-primary-600 mt-2">
      Un suivi dédié pour vous guider dans chaque étape de la réponse aux appels d'offres, facilitant vos démarches.
    </p>
  ) 
},
{
  icon: (
    <img 
      src="/visibilite-institutions.webp"
      alt="Visibilité renforcée auprès des institutions"
      className="w-full h-auto rounded-xl shadow-md object-cover transform transition duration-300 hover:scale-105"
    />
  ),
  title: (
    <h3 className="text-xl font-semibold text-center mt-4">
      Visibilité renforcée auprès des institutions
    </h3>
  ),
  description: (
    <p className="text-center text-primary-600 mt-2">
      Augmentez vos chances de collaboration grâce à une meilleure visibilité auprès des clients publics.
    </p>
  ) 
},
  ];

  return (
    <section id="solution" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
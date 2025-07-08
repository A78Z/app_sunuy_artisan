import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CGU = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-primary-800 mb-8">
              CGU "SUÑUY ARTISAN"
            </h1>
            <h2 className="text-2xl font-semibold text-primary-700 mb-6">
              TERMES ET CONDITIONS D'UTILISATION DE L'APPLICATION "SUÑUY ARTISAN"
            </h2>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">1. Introduction</h3>
              <p className="text-primary-600 mb-4">
                Bienvenue sur l'application Suñuy Artisan, une plateforme permettant de connecter les utilisateurs à des artisans qualifiés et fiables au Sénégal. En accédant à l'application ou en l'utilisant, vous acceptez les présents termes et conditions. Veuillez les lire attentivement avant d'utiliser nos services.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">2. Définitions</h3>
              <ul className="list-disc pl-6 text-primary-600 space-y-2">
                <li><strong>Utilisateur</strong> : Toute personne qui utilise l'application, qu'elle soit client ou artisan.</li>
                <li><strong>Artisan</strong> : Un professionnel inscrit sur l'application pour offrir des services.</li>
                <li><strong>Client</strong> : Un utilisateur cherchant à réserver un service artisanal.</li>
                <li><strong>Plateforme</strong> : L'application mobile Suñuy Artisan et ses services associés.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">3. Inscription et Création de Compte</h3>
              <ol className="list-decimal pl-6 text-primary-600 space-y-2">
                <li>Pour accéder à l'application, chaque utilisateur doit créer un compte en fournissant des informations exactes et complètes.</li>
                <li>Vous êtes responsable de la sécurité de vos identifiants de connexion.</li>
                <li>L'utilisation de fausses informations peut entraîner la suspension ou la suppression de votre compte.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">4. Utilisation de la Plateforme</h3>
              <ol className="list-decimal pl-6 text-primary-600 space-y-2">
                <li>Les utilisateurs peuvent rechercher, réserver et évaluer les services d'artisans.</li>
                <li>Les artisans doivent maintenir un profil professionnel, précis et à jour.</li>
                <li>Tout usage inapproprié ou illégal de l'application est strictement interdit.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">5. Responsabilités des Parties</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">5.1 Responsabilité de l'Utilisateur</h4>
                  <ul className="list-disc pl-6 text-primary-600 space-y-2">
                    <li>Vous êtes responsable des interactions que vous effectuez via l'application.</li>
                    <li>Vous devez respecter toutes les lois et règlements applicables.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">5.2 Responsabilité de Suñuy Artisan</h4>
                  <ul className="list-disc pl-6 text-primary-600 space-y-2">
                    <li>Nous agissons en tant qu'intermédiaire entre les clients et les artisans.</li>
                    <li>Nous effectuons des vérifications préliminaires pour assurer leur fiabilité.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">6. Paiements</h3>
              <p className="text-primary-600">
                Les paiements pour les services sont effectués directement entre le client et l'artisan.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">7. Politique de Confidentialité</h3>
              <ul className="list-disc pl-6 text-primary-600 space-y-2">
                <li>Nous collectons et utilisons vos données personnelles conformément à notre Politique de Confidentialité.</li>
                <li>Vos informations ne seront jamais partagées avec des tiers sans votre consentement explicite, sauf si requis par la loi.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">8. Limitation de Responsabilité</h3>
              <ul className="list-disc pl-6 text-primary-600 space-y-2">
                <li>Suñuy Artisan ne pourra être tenu responsable des litiges ou dommages survenant entre un client et un artisan.</li>
                <li>Nous ne sommes pas responsables des défaillances techniques pouvant survenir sur la plateforme.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">9. Suspension et Suppression de Compte</h3>
              <p className="text-primary-600">
                Nous nous réservons le droit de suspendre ou de supprimer un compte utilisateur en cas de non-respect des présents termes et conditions.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">10. Modifications des Termes et Conditions</h3>
              <p className="text-primary-600">
                Nous pouvons modifier ces termes à tout moment. Les utilisateurs seront informés des changements, et leur utilisation continue de l'application après les modifications implique leur acceptation.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">11. Contact</h3>
              <p className="text-primary-600">
                Pour toute question ou préoccupation concernant ces termes et conditions, veuillez nous contacter via : {' '}
                <a 
                  href="mailto:info.sunuyartisan@pmn.sn"
                  className="text-primary-700 hover:text-primary-800 underline"
                >
                  info.sunuyartisan@pmn.sn
                </a>
              </p>
            </section>

            <div className="mt-12 p-6 bg-primary-50 rounded-lg">
              <p className="text-primary-700 font-medium text-center">
                En utilisant l'application Suñuy Artisan, vous acceptez ces termes et conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CGU;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, FileText, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

type Tab = 'cgu' | 'eula';

const Legal = () => {
  const [activeTab, setActiveTab] = useState<Tab>('cgu');

  const TabButton = ({ tab, label, icon: Icon }: { tab: Tab; label: string; icon: React.ElementType }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        activeTab === tab
          ? 'bg-primary-600 text-white shadow-lg'
          : 'bg-gray-100 text-primary-600 hover:bg-gray-200'
      }`}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );

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

          <div className="flex justify-center gap-4 mb-8">
            <TabButton tab="cgu" label="CGU de Suñuy Artisan" icon={FileText} />
            <TabButton tab="eula" label="EULA - Accord de Licence" icon={FileCheck} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              {activeTab === 'cgu' ? (
                <div>
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
                      <p className="text-primary-600">
                      Le PMN s'engage à protéger les données personnelles des utilisateurs conformément à la législation en vigueur. 
                      Il se réserve le droit de mettre en œuvre toutes les mesures nécessaires pour garantir la sécurité et la confidentialité de ces données.
                    </p>
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
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">10. Responsabilité en cas de litige</h3>
                    <p className="text-primary-600">
                      En cas de litige entre un artisan et un client, le PMN décline toute responsabilité quant aux différends pouvant survenir
                      entre les parties. Toutefois, si une procédure judiciaire est engagée et que le PMN est sollicité par les autorités compétentes
                      (forces de l’ordre, juridictions sénégalaises) via un mandat ou une réquisition légale, le PMN s’engage à collaborer en fournissant
                      les informations requises, notamment celles relatives à la localisation ou aux données personnelles concernées.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">11. Modifications des Termes et Conditions</h3>
                    <p className="text-primary-600">
                      Nous pouvons modifier ces termes à tout moment. Les utilisateurs seront informés des changements, et leur utilisation continue de l'application après les modifications implique leur acceptation.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">12. Contact</h3>
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
                </div>
              ) : (
                <div>
                  <h1 className="text-4xl font-bold text-primary-800 mb-8">
                    EULA - Accord de Licence Utilisateur Final
                  </h1>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">1. Acceptation des Conditions</h3>
                    <p className="text-primary-600 mb-4">
                      En utilisant l'application Suñuy Artisan, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">2. Comportement des utilisateurs</h3>
                    <p className="text-primary-600 mb-4">
                       En tant qu'utilisateur de Suñuy Artisan, vous vous engagez à :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Fournir des informations exactes et véridiques</li>
                      <li>Respecter les autres utilisateurs</li>
                      <li>Honorer vos engagements et rendez-vous</li>
                      <li>Ne pas utiliser l'application à des fins illégales</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">3. Système de modération</h3>
                    <p className="text-primary-600 mb-4">
                       Suñuy Artisan met à disposition plusieurs outils de modération pour assurer un environnement sûr et respectueux :
                    </p>
                    <p className="text-primary-600 mb-4">
                       Vous pouvez signaler :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Un utilisateur pour comportement inapproprié</li>
                      <li>Un avis inapproprié ou faux</li>
                      <li>Un contenu illégal ou offensant</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">3.2 Blocage d'utilisateurs</h3>
                    <p className="text-primary-600 mb-4">
                       Vous pouvez bloquer un utilisateur pour :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Empêcher toute communication avec cet utilisateur</li>
                      <li>Ne plus voir son profil ou ses publications</li>
                      <li>Éviter tout contact non désiré</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">3.3 Gestion des signalements</h3>
                    <p className="text-primary-600 mb-4">
                       Vous pouvez gérer vos signalements dans la section "Gestion des signalements" :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Voir la liste des utilisateurs que vous avez signalés</li>
                      <li>Voir la liste des avis que vous avez signalés</li>
                      <li>Suivre l'état de vos signalements</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">3.4 Gestion des utilisateurs bloqués</h3>
                    <p className="text-primary-600 mb-4">
                       Dans la section "Gestion des signalements", vous pouvez :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Voir la liste des utilisateurs que vous avez bloqués</li>
                      <li>Débloquer un utilisateur à tout moment</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">4. Tolérance zéro</h3>
                    <p className="text-primary-600 mb-4">
                       Suñuy Artisan applique une politique de tolérance zéro concernant :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Le harcèlement et la discrimination</li>
                      <li>Les propos haineux ou offensants</li>
                      <li>Les fausses informations ou fraudes</li>
                      <li>Le non-respect des engagements</li>
                      <li>Les comportements abusifs</li>
                    </ul>
                  </section>
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">5. Sanctions</h3>
                    <p className="text-primary-600 mb-4">
                       En cas de violation de ces conditions, Suñuy Artisan se réserve le
                       droit de :
                    </p>
                    <ul className="list-disc pl-6 text-primary-600 space-y-2">
                      <li>Supprimer le contenu inapproprié</li>
                      <li>Suspendre temporairement le compte</li>
                      <li>Bannir définitivement l'utilisateur</li>
                      <li>Porter plainte auprès des autorités compétentes</li>
                    </ul>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">6. Protection des données</h3>
                    <p className="text-primary-600 mb-4">
                      Vos données personnelles sont protégées conformément à notre politique de confidentialité. Nous collectons et traitons uniquement les données nécessaires au bon fonctionnement de l'application.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">7. Modifications</h3>
                    <p className="text-primary-600 mb-4">
                      Suñuy Artisan se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront notifiés des changements importants.
                    </p>
                  </section>
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">8. Contact</h3>
                    <p className="text-primary-600 mb-4">
                     Pour toute question concernant ces conditions ou pour signaler un problème, veuillez nous contacter via la page Contact de l'application.
                    </p>
                  </section>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Legal;
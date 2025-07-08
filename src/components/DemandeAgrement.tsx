import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, CheckCircle, User, Building, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import AgrementModal from './AgrementModal';

const DemandeAgrement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemandeClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-4"
            >
              Comment accéder à la commande publique ?
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-600 max-w-3xl mx-auto"
            >
              Découvrez les conditions et documents nécessaires pour rejoindre notre réseau d'artisans agréés 
              et accéder aux opportunités de commande publique.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Conditions d'accès */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 rounded-lg">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary-800">Conditions d'accès</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <div className="p-2 bg-primary-200 rounded-full mt-1">
                  <User className="w-4 h-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-1">Artisan professionnel enregistré</h3>
                  <p className="text-primary-600 text-sm">Vous devez être officiellement enregistré en tant qu'artisan professionnel</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <div className="p-2 bg-primary-200 rounded-full mt-1">
                  <Clock className="w-4 h-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-1">Justification sur le domaine</h3>
                  <p className="text-primary-600 text-sm">Justifier d'une expérience avérée dans le domaine</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <div className="p-2 bg-primary-200 rounded-full mt-1">
                  <Building className="w-4 h-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-1">Disposer d'un atelier fixe</h3>
                  <p className="text-primary-600 text-sm">Avoir un lieu de travail permanent et équipé pour exercer votre activité</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <div className="p-2 bg-primary-200 rounded-full mt-1">
                  <Award className="w-4 h-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-1">Disposer d'un quitus fiscal</h3>
                  <p className="text-primary-600 text-sm">Être en règle avec l'administration fiscale et sociale</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Documents requis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-primary-800">Documents requis</h2>
            </div>

            <div className="space-y-4">
              {[
                { title: "Copie de la CNI", desc: "Carte nationale d'identité en cours de validité (recto-verso)" },
                { title: "NINEA", desc: "Numéro d'Identification National des Entreprises et Associations" },
                { title: "Certificat de résidence", desc: "Facture d'électricité, d'eau ou attestation de domicile récente" }, 
                { title: "Attestation de formation", desc: "Certificat ou diplôme attestant de votre formation professionnelle" },
                { title: "Photos de réalisations", desc: "Portfolio de vos travaux récents (minimum 5 photos de qualité)" }
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="p-2 bg-blue-200 rounded-full mt-1">
                    <FileText className="w-4 h-4 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">{doc.title}</h3>
                    <p className="text-primary-600 text-sm">{doc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pourquoi rejoindre notre réseau ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Reconnaissance officielle</h4>
                <p className="text-primary-100 text-sm">Certification de votre expertise par les institutions publiques</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Building className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Accès aux marchés publics</h4>
                <p className="text-primary-100 text-sm">Opportunités de contrats avec les administrations et collectivités</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-2">Accompagnement personnalisé</h4>
                <p className="text-primary-100 text-sm">Support dédié pour vos démarches et développement d'activité</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bouton de demande */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={handleDemandeClick}
            className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 
                     text-white px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl 
                     transition-all duration-300 transform hover:scale-105 active:scale-95
                     text-xl font-bold flex items-center gap-4 mx-auto"
          >
            {/* Effet de brillance au survol */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            <FileText className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Déposer une demande d'agrément</span>
            
            {/* Effet de pulsation subtile */}
            <motion.div
              className="absolute inset-0 bg-primary-400 rounded-2xl opacity-0"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </button>
          
          <p className="text-primary-600 mt-4 text-sm">
            Le traitement de votre demande prend généralement 5 à 10 jours ouvrables
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AgrementModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default DemandeAgrement;
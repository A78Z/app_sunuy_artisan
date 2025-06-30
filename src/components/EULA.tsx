import React from 'react';
import { motion } from 'framer-motion';
import { X, Shield, AlertTriangle, UserCheck, Lock, RefreshCw, Mail } from 'lucide-react';

interface EULAProps {
  isOpen: boolean;
  onClose: () => void;
}

const EULA: React.FC<EULAProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Acceptation des conditions",
      content: "En utilisant l'application Suñuy Artisan, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Comportement des utilisateurs",
      content: [
        "Fournir des informations exactes et véridiques",
        "Respecter les autres utilisateurs",
        "Honorer vos engagements et rendez-vous",
        "Ne pas utiliser l'application à des fins illégales"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Système de modération",
      subsections: [
        {
          title: "Outils de modération disponibles :",
          items: [
            "Signaler un utilisateur pour comportement inapproprié",
            "Signaler un avis inapproprié ou faux",
            "Signaler un contenu illégal ou offensant"
          ]
        },
        {
          title: "Blocage d'utilisateurs :",
          items: [
            "Empêcher toute communication",
            "Ne plus voir son profil ou ses publications",
            "Éviter tout contact non désiré"
          ]
        },
        {
          title: "Gestion des signalements :",
          items: [
            "Voir les utilisateurs ou avis signalés",
            "Suivre l'état des signalements"
          ]
        },
        {
          title: "Gestion des utilisateurs bloqués :",
          items: [
            "Voir la liste des utilisateurs bloqués",
            "Débloquer un utilisateur à tout moment"
          ]
        }
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Politique de tolérance zéro",
      content: [
        "Harcèlement, discrimination, propos haineux",
        "Informations fausses ou comportement abusif",
        "Non-respect des engagements"
      ],
      additional: {
        title: "Suñuy Artisan se réserve le droit de :",
        items: [
          "Supprimer le contenu inapproprié",
          "Suspendre ou bannir un utilisateur",
          "Signaler aux autorités si nécessaire"
        ]
      }
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Protection des données",
      content: "Vos données personnelles sont protégées selon notre politique de confidentialité. Seules les données nécessaires sont collectées."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Modifications",
      content: "Ces conditions peuvent être modifiées. Les utilisateurs seront notifiés en cas de changements importants."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact",
      content: "Pour toute question ou signalement, contactez-nous via la page Contact de l'application."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary-800">Accord de Licence Utilisateur Final</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="px-6 py-8 space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-800">{section.title}</h3>
              </div>

              {Array.isArray(section.content) ? (
                <ul className="space-y-2 pl-12">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-primary-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-primary-600 pl-12">{section.content}</p>
              )}

              {section.subsections && (
                <div className="pl-12 space-y-4">
                  {section.subsections.map((subsection, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="font-medium text-primary-700">{subsection.title}</h4>
                      <ul className="space-y-2 pl-6">
                        {subsection.items.map((item, j) => (
                          <li key={j} className="text-primary-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary-400 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.additional && (
                <div className="pl-12 mt-4">
                  <h4 className="font-medium text-primary-700 mb-2">{section.additional.title}</h4>
                  <ul className="space-y-2 pl-6">
                    {section.additional.items.map((item, i) => (
                      <li key={i} className="text-primary-600 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <button
            onClick={onClose}
            className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium
                     hover:bg-primary-700 transition-colors duration-200"
          >
            J'ai compris et j'accepte
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EULA;
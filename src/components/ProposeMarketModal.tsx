import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send, CheckCircle } from 'lucide-react';

interface Artisan {
  id: string;
  name: string;
  profession: string;
}

interface ProposeMarketModalProps {
  isOpen: boolean;
  onClose: () => void;
  artisan: Artisan | null;
}

const ProposeMarketModal: React.FC<ProposeMarketModalProps> = ({ isOpen, onClose, artisan }) => {
  const [formData, setFormData] = useState({
    intitule: '',
    description: '',
    budget: '',
    dateDebut: '',
    duree: '',
    typeMarche: 'Fourniture',
    pieceJointe: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const typesMarche = [
    'Fourniture',
    'Travaux',
    'Services',
    'Maintenance',
    'Réparation',
    'Installation',
    'Rénovation',
    'Construction'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, pieceJointe: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Réinitialiser après succès
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
        setFormData({
          intitule: '',
          description: '',
          budget: '',
          dateDebut: '',
          duree: '',
          typeMarche: 'Fourniture',
          pieceJointe: null
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !artisan) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-primary-800">
              Proposer un marché à {artisan.name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Proposition envoyée avec succès !
                </h3>
                <p className="text-green-600">
                  {artisan.name} recevra votre proposition et vous contactera bientôt.
                </p>
              </div>
            ) : (
              <>
                {/* Intitulé du marché */}
                <div>
                  <label htmlFor="intitule" className="block text-sm font-medium text-gray-700 mb-2">
                    Intitulé du marché <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="intitule"
                    name="intitule"
                    required
                    value={formData.intitule}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Saisissez l'intitulé du marché"
                  />
                </div>

                {/* Description du marché */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description du marché <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Décrivez le marché en détail"
                  />
                </div>

                {/* Budget estimé */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget estimé (FCFA) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Montant en FCFA"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                      FCFA
                    </span>
                  </div>
                </div>

                {/* Date de début et Durée */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="dateDebut" className="block text-sm font-medium text-gray-700 mb-2">
                      Date de début souhaitée <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateDebut"
                      name="dateDebut"
                      required
                      value={formData.dateDebut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="duree" className="block text-sm font-medium text-gray-700 mb-2">
                      Durée estimée (en jours) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="duree"
                        name="duree"
                        required
                        min="1"
                        value={formData.duree}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Nombre de jours"
                      />
                    </div>
                  </div>
                </div>

                {/* Type de marché */}
                <div>
                  <label htmlFor="typeMarche" className="block text-sm font-medium text-gray-700 mb-2">
                    Type de marché <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="typeMarche"
                    name="typeMarche"
                    required
                    value={formData.typeMarche}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    {typesMarche.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Pièce jointe */}
                <div>
                  <label htmlFor="pieceJointe" className="block text-sm font-medium text-gray-700 mb-2">
                    Pièce jointe (PDF ou image)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="pieceJointe"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Choisir un fichier</span>
                        <input
                          id="pieceJointe"
                          name="pieceJointe"
                          type="file"
                          className="sr-only"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">ou glisser-déposer</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, PNG, JPG jusqu'à 10MB
                    </p>
                    {formData.pieceJointe && (
                      <p className="text-xs text-green-600 mt-2">
                        Fichier sélectionné: {formData.pieceJointe.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors 
                             disabled:opacity-50 disabled:cursor-not-allowed font-medium
                             flex items-center justify-center gap-2 min-w-[180px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer la proposition
                      </>
                    )}
                  </button>
                </div>

                {/* Message d'erreur */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500" />
                    <p className="text-red-700">
                      Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                    </p>
                  </div>
                )}
              </>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProposeMarketModal;
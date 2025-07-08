import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileText, User, Phone, MapPin, Award, Camera } from 'lucide-react';

interface AgrementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgrementModal: React.FC<AgrementModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nomComplet: '',
    telephone: '',
    email: '',
    activiteProfessionnelle: '',
    anneesExperience: '',
    adresseComplete: '',
    certifieExactitude: false
  });

  const [files, setFiles] = useState({
    cni: null as File | null,
    ninea: null as File | null,
    justificatifResidence: null as File | null,
    attestationFormation: null as File | null,
    photosRealisations: [] as File[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const activitesProfessionnelles = [
    'Menuisier Bois',
    'Maçon',
    'Plombier',
    'Électricien',
    'Carreleur',
    'Peintre',
    'Mécanicien',
    'Climatisation',
    'Tapisserie',
    'Électroménager',
    'Restauration',
    'Agroalimentaire',
    'Ameublement',
    'Confection couture',
    'Maroquinerie',
    'Blanchisserie',
    'Cordonnerie',
    'Menuiserie métallique',
    'Menuiserie aluminium',
    'Bijouterie',
    'Autre'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (field: keyof typeof files, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (field === 'photosRealisations') {
        setFiles(prev => ({
          ...prev,
          [field]: Array.from(e.target.files || [])
        }));
      } else {
        setFiles(prev => ({
          ...prev,
          [field]: e.target.files![0]
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      
      // Réinitialiser le formulaire après succès
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
        setFormData({
          nomComplet: '',
          telephone: '',
          email: '',
          activiteProfessionnelle: '',
          anneesExperience: '',
          adresseComplete: '',
          certifieExactitude: false
        });
        setFiles({
          cni: null,
          ninea: null,
          justificatifResidence: null,
          attestationFormation: null,
          photosRealisations: []
        });
      }, 2000);
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const FileUploadField = ({ 
    label, 
    field, 
    accept = "image/*,.pdf", 
    multiple = false,
    icon: Icon = Upload
  }: { 
    label: string; 
    field: keyof typeof files; 
    accept?: string; 
    multiple?: boolean;
    icon?: React.ElementType;
  }) => (
    <div>
      <label className="block text-sm font-medium text-primary-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="border-2 border-dashed border-primary-300 rounded-lg p-4 text-center hover:border-primary-400 transition-colors">
        <Icon className="mx-auto h-8 w-8 text-primary-400 mb-2" />
        <div className="flex text-sm text-primary-600">
          <label
            htmlFor={field}
            className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
          >
            <span>Choisir un fichier</span>
            <input
              id={field}
              name={field}
              type="file"
              className="sr-only"
              accept={accept}
              multiple={multiple}
              required
              onChange={(e) => handleFileChange(field, e)}
            />
          </label>
        </div>
        <p className="text-xs text-primary-500 mt-1">
          {multiple ? 'PNG, JPG, PDF jusqu\'à 10MB chacun' : 'PNG, JPG, PDF jusqu\'à 10MB'}
        </p>
        {files[field] && (
          <p className="text-xs text-green-600 mt-2">
            {multiple 
              ? `${(files[field] as File[]).length} fichier(s) sélectionné(s)`
              : `Fichier sélectionné: ${(files[field] as File).name}`
            }
          </p>
        )}
      </div>
    </div>
  );

  if (!isOpen) return null;

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
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-primary-800">
              Demande d'agrément
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
            {/* Informations personnelles */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary-800 border-b border-primary-200 pb-2">
                Informations personnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nomComplet" className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
                    <User className="w-4 h-4" />
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nomComplet"
                    name="nomComplet"
                    required
                    value={formData.nomComplet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
                    <Phone className="w-4 h-4" />
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="77 123 45 67"
                  />
                </div>

                <div>
                  <label htmlFor="activiteProfessionnelle" className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
                    <Award className="w-4 h-4" />
                    Activité professionnelle <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="activiteProfessionnelle"
                    name="activiteProfessionnelle"
                    required
                    value={formData.activiteProfessionnelle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Sélectionnez votre métier</option>
                    {activitesProfessionnelles.map(activite => (
                      <option key={activite} value={activite}>{activite}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="anneesExperience" className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
                    <Award className="w-4 h-4" />
                    Nombre d'années d'expérience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="anneesExperience"
                    name="anneesExperience"
                    required
                    value={formData.anneesExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="3-5 ans">3-5 ans</option>
                    <option value="6-10 ans">6-10 ans</option>
                    <option value="11-15 ans">11-15 ans</option>
                    <option value="Plus de 15 ans">Plus de 15 ans</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="adresseComplete" className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
                    <MapPin className="w-4 h-4" />
                    Adresse complète <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="adresseComplete"
                    name="adresseComplete"
                    required
                    rows={3}
                    value={formData.adresseComplete}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Adresse complète de votre atelier/entreprise"
                  />
                </div>
              </div>
            </div>

            {/* Pièces justificatives */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary-800 border-b border-primary-200 pb-2">
                Pièces justificatives
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FileUploadField 
                  label="Copie de la CNI" 
                  field="cni" 
                  icon={FileText}
                />
                
                <FileUploadField 
                  label="NINEA" 
                  field="ninea" 
                  icon={FileText}
                />
                
                <FileUploadField 
                  label="Certificat de résidence"  
                  field="justificatifResidence" 
                  icon={FileText}
                />
                
                <FileUploadField 
                  label="Attestation de formation" 
                  field="attestationFormation" 
                  icon={Award}
                />
                
                <div className="md:col-span-2">
                  <FileUploadField 
                    label="Photos de réalisations" 
                    field="photosRealisations" 
                    accept="image/*"
                    multiple={true}
                    icon={Camera}
                  />
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-primary-50 p-6 rounded-lg">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="certifieExactitude"
                  name="certifieExactitude"
                  required
                  checked={formData.certifieExactitude}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-primary-300 rounded"
                />
                <label htmlFor="certifieExactitude" className="ml-3 text-sm text-primary-700">
                  <span className="text-red-500">*</span> Je certifie que les informations fournies sont exactes et complètes. 
                  Je m'engage à respecter les conditions d\'accès à la commande publique et à maintenir 
                  la qualité de mes prestations.
                </label>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-green-700 font-medium">
                  Votre demande d'agrément a été soumise avec succès ! Vous recevrez une réponse sous 5 à 10 jours ouvrables.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-3 h-3 text-white" />
                </div>
                <p className="text-red-700">
                  Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.certifieExactitude}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg 
                         hover:from-primary-700 hover:to-primary-800 transition-all duration-300 
                         disabled:opacity-50 disabled:cursor-not-allowed font-medium
                         flex items-center justify-center gap-2 min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    Soumettre la demande
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgrementModal;
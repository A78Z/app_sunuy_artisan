import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Award, FileText, Upload, Camera, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';

const ConcoursPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    cin: '',
    region: '',
    department: '',
    commune: '',
    village: '',
    profession: '',
    workshop: '',
    phone: '',
    email: '',
    ninea: '',
    approval: '',
    photos: [] as File[],
    certificate: null as File | null,
    motivation: '',
    yearsExperience: '',
    applicationNumber: ''
  });

  const [availableDepartments, setAvailableDepartments] = useState<{name: string; communes: string[]}[]>([]);
  const [availableCommunes, setAvailableCommunes] = useState<string[]>([]);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formData.region) {
      const selectedRegion = locations.find(loc => loc.region === formData.region);
      setAvailableDepartments(selectedRegion?.departments || []);
      setFormData(prev => ({ ...prev, department: '', commune: '' }));
    } else {
      setAvailableDepartments([]);
      setAvailableCommunes([]);
    }
  }, [formData.region]);

  useEffect(() => {
    if (formData.department) {
      const selectedDepartment = availableDepartments.find(dept => dept.name === formData.department);
      setAvailableCommunes(selectedDepartment?.communes || []);
      setFormData(prev => ({ ...prev, commune: '' }));
    } else {
      setAvailableCommunes([]);
    }
  }, [formData.department, availableDepartments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const applicationNumber = `CND-2025-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
      setFormData(prev => ({ ...prev, applicationNumber }));
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (field: 'photos' | 'certificate', e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (field === 'photos') {
        setFormData(prev => ({
          ...prev,
          photos: Array.from(e.target.files || [])
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          certificate: e.target.files![0]
        }));
      }
    }
  };

  const handleCINChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      cin: value,
      gender: value.charAt(0) === '1' ? 'Homme' : value.charAt(0) === '2' ? 'Femme' : prev.gender
    }));
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg mb-4">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Clôture des candidatures : 15 juillet 2025 à 23h59</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-4"
            >
              Concours National de Reproduction de Prototypes
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed"
            >
              Le Projet Mobilier National lance un concours national de reproduction de prototypes pour stimuler 
              la créativité et l'innovation en design mobilier. Tous les artisans sénégalais sont invités à y participer.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="mb-6">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary-800 mb-4">
                Candidature soumise avec succès !
              </h2>
              <p className="text-primary-600 text-lg">
                Merci de contribuer à l'innovation dans le mobilier national.
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
              <p className="font-semibold text-green-800 mb-2">Votre numéro de candidature :</p>
              <p className="text-3xl font-mono text-green-700 bg-white py-3 px-6 rounded-lg inline-block">
                {formData.applicationNumber}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => window.print()}
              >
                <FileText className="w-5 h-5" />
                Imprimer le récépissé
              </button>
              <Link
                to="/"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Formulaire de Candidature</h2>
              </div>
              <p className="text-center text-primary-100">
                Remplissez soigneusement tous les champs requis pour valider votre participation
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Informations personnelles */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary-800 border-b border-primary-200 pb-2">
                  Informations personnelles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-2">
                      Prénom et Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      placeholder="Prénom et Nom"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.firstName}
                      onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-primary-700 mb-2">
                      Genre <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="gender"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.gender}
                      onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cin" className="block text-sm font-medium text-primary-700 mb-2">
                      Carte nationale d'identité (CNI) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="cin"
                      required
                      placeholder="Numéro de la CNI"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.cin}
                      onChange={handleCINChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Numéro de téléphone"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Upload CNI */}
                <div>
                  <label className="block text-sm font-medium text-primary-700 mb-2">
                    Téléverser la carte d'identité (recto et verso) <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-primary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                    <Camera className="mx-auto h-12 w-12 text-primary-400 mb-3" />
                    <div className="flex text-sm text-primary-600">
                      <label
                        htmlFor="photo"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Téléversez une photo</span>
                        <input id="photo" name="photo" type="file" className="sr-only" accept="image/*" required />
                      </label>
                    </div>
                    <p className="text-xs text-primary-500 mt-1">PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </div>

              {/* Localisation */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary-800 border-b border-primary-200 pb-2">
                  Région (Lieu de travail)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-primary-700 mb-2">
                      Région <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="region"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.region}
                      onChange={e => setFormData({ ...formData, region: e.target.value })}
                    >
                      <option value="">Sélectionnez une région</option>
                      {locations.map(location => (
                        <option key={location.region} value={location.region}>
                          {location.region}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-primary-700 mb-2">
                      Département <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="department"
                      required
                      disabled={!formData.region}
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                      value={formData.department}
                      onChange={e => setFormData({ ...formData, department: e.target.value })}
                    >
                      <option value="">Sélectionnez un département</option>
                      {availableDepartments.map(dept => (
                        <option key={dept.name} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="commune" className="block text-sm font-medium text-primary-700 mb-2">
                      Commune <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="commune"
                      required
                      disabled={!formData.department}
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                      value={formData.commune}
                      onChange={e => setFormData({ ...formData, commune: e.target.value })}
                    >
                      <option value="">Sélectionnez une commune</option>
                      {availableCommunes.map(commune => (
                        <option key={commune} value={commune}>
                          {commune}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Informations professionnelles */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary-800 border-b border-primary-200 pb-2">
                  Informations professionnelles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-primary-700 mb-2">
                      Métier <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="profession"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.profession}
                      onChange={e => setFormData({ ...formData, profession: e.target.value })}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="Menuisier bois">Menuisier bois</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-primary-700 mb-2">
                      Expérience <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="experience"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.yearsExperience}
                      onChange={e => setFormData({ ...formData, yearsExperience: e.target.value })}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="Moins de 2 ans">Moins de 2 ans</option>
                      <option value="2-5 ans">2-5 ans</option>
                      <option value="6-10 ans">6-10 ans</option>
                      <option value="Plus de 10 ans">Plus de 10 ans</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="workshop" className="block text-sm font-medium text-primary-700 mb-2">
                      Nom de l'atelier ou de l'entreprise <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="workshop"
                      required
                      placeholder="Nom de l'atelier ou de l'entreprise"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.workshop}
                      onChange={e => setFormData({ ...formData, workshop: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="ninea" className="block text-sm font-medium text-primary-700 mb-2">
                      NINEA <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="ninea"
                      required
                      placeholder="Numéro d'identification national"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.ninea}
                      onChange={e => setFormData({ ...formData, ninea: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="approval" className="block text-sm font-medium text-primary-700 mb-2">
                      Numéro d'agrément (facultatif)
                    </label>
                    <input
                      type="text"
                      id="approval"
                      placeholder="Numéro d'agrément"
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      value={formData.approval}
                      onChange={e => setFormData({ ...formData, approval: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Pièces justificatives */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary-800 border-b border-primary-200 pb-2">
                  Pièces justificatives
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Photo(s) de réalisations <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-primary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                      <Upload className="mx-auto h-12 w-12 text-primary-400 mb-3" />
                      <div className="flex text-sm text-primary-600">
                        <label
                          htmlFor="photos"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Téléverser des photos</span>
                          <input
                            id="photos"
                            name="photos"
                            type="file"
                            className="sr-only"
                            multiple
                            accept="image/*"
                            required
                            onChange={e => handleFileChange('photos', e)}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-primary-500 mt-1">PNG, JPG jusqu'à 10MB</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Certificat artisanal (facultatif)
                    </label>
                    <div className="border-2 border-dashed border-primary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                      <FileText className="mx-auto h-12 w-12 text-primary-400 mb-3" />
                      <div className="flex text-sm text-primary-600">
                        <label
                          htmlFor="certificate"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Téléverser un certificat</span>
                          <input
                            id="certificate"
                            name="certificate"
                            type="file"
                            className="sr-only"
                            accept=".pdf,image/*"
                            onChange={e => handleFileChange('certificate', e)}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-primary-500 mt-1">PDF, PNG, JPG jusqu'à 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-primary-700 mb-2">
                  Pourquoi souhaitez-vous participer ? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="motivation"
                  required
                  rows={4}
                  placeholder="Expliquez en quelques mots pourquoi vous souhaitez participer"
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  value={formData.motivation}
                  onChange={e => setFormData({ ...formData, motivation: e.target.value })}
                />
              </div>

              {/* Conditions */}
              <div className="space-y-4 bg-primary-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="accuracy"
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-primary-300 rounded"
                  />
                  <label htmlFor="accuracy" className="ml-3 text-sm text-primary-700">
                    Je certifie l'exactitude des informations fournies
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="gdpr"
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-primary-300 rounded"
                  />
                  <label htmlFor="gdpr" className="ml-3 text-sm text-primary-700">
                    J'accepte que mes données soient utilisées dans le cadre du concours (RGPD/Sénégal)
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma candidature
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-700">
                    Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ConcoursPage;
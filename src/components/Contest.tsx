import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Phone, MapPin, Building, FileCheck, Award, History, Mail, ArrowLeft, Calendar, Clock, Upload, X, Camera, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';

const Contest = () => {
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
    
    try {
      const applicationNumber = `CND-2025-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
      setFormData(prev => ({ ...prev, applicationNumber }));
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
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
    <div id="contest" className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md p-6 space-y-8">
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center justify-center space-x-2">
              <span className="text-lg font-semibold text-primary-800">
                🔔 Clôture des candidatures : 15 juillet 2025 à 23h59
              </span>
            </div>
            <h1 className="text-3xl font-bold text-primary-800 mb-4">
              Concours National de Reproduction de Prototypes
            </h1>
            <p className="text-primary-600">
              Le Projet Mobilier National lance un concours national de reproduction de prototypes pour stimuler la créativité et l'innovation en design mobilier. Tous les artisans sénégalais sont invités à y participer.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom et Nom
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  placeholder="Prénom et Nom"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.firstName}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  id="gender"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.gender}
                  onChange={e => setFormData({ ...formData, gender: e.target.value })}
                >
                  <option value="">Sélectionnez</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>

              <div>
                <label htmlFor="cin" className="block text-sm font-medium text-gray-700 mb-1">
                  Carte nationale d'identité (CNI)
                </label>
                <input
                  type="text"
                  id="cin"
                  required
                  placeholder="Numéro de la CNI"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.cin}
                  onChange={handleCINChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Numéro de téléphone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléverser la carte d'identité (recto et verso)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="photo"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Téléversez une photo</span>
                        <input id="photo" name="photo" type="file" className="sr-only" accept="image/*" required />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Région (Lieu de travail)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                    Région
                  </label>
                  <select
                    id="region"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Département
                  </label>
                  <select
                    id="department"
                    required
                    disabled={!formData.region}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                  <label htmlFor="commune" className="block text-sm font-medium text-gray-700 mb-1">
                    Commune
                  </label>
                  <select
                    id="commune"
                    required
                    disabled={!formData.department}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
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

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Informations professionnelles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                    Métier
                  </label>
                  <select
                    id="profession"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.profession}
                    onChange={e => setFormData({ ...formData, profession: e.target.value })}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Menuisier bois">Menuisier bois</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Expérience
                  </label>
                  <select
                    id="experience"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-1">
                    Références professionnelles ou partenaires (facultatif)
                  </label>
                  <textarea
                    id="references"
                    rows={3}
                     placeholder="Références professionnelles ou partenaires"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Localisation précise</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gps" className="block text-sm font-medium text-gray-700 mb-1">
                    GPS ou point de repère proche (facultatif)
                  </label>
                  <input
                    type="text"
                    id="gps"
                   placeholder="Ex. : près de l'école Keur Khadija"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="workshop" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom de l'atelier ou de l'entreprise
                  </label>
                  <input
                    type="text"
                    id="workshop"
                    required
                    placeholder="Nom de l'atelier ou de l'entreprise"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.workshop}
                    onChange={e => setFormData({ ...formData, workshop: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="ninea" className="block text-sm font-medium text-gray-700 mb-1">
                    NINEA
                  </label>
                  <input
                    type="text"
                    id="ninea"
                    required
                    placeholder="Numéro d'identification national"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.ninea}
                    onChange={e => setFormData({ ...formData, ninea: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="approval" className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro d'agrément (facultatif)
                  </label>
                  <input
                    type="text"
                    id="approval"
                     placeholder="Numéro d'agrément"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={formData.approval}
                    onChange={e => setFormData({ ...formData, approval: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Pièces justificatives</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo(s) de réalisations
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
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
                    <p className="text-xs text-gray-500">PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Certificat artisanal (facultatif)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <FileCheck className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
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
                    <p className="text-xs text-gray-500">PDF, PNG, JPG jusqu'à 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                Pourquoi souhaitez-vous participer ?
              </label>
              <textarea
                id="motivation"
                required
                rows={4}
                 placeholder="Expliquez en quelques mots pourquoi vous souhaitez participer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={formData.motivation}
                onChange={e => setFormData({ ...formData, motivation: e.target.value })}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="accuracy"
                  required
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="accuracy" className="ml-2 text-sm text-gray-600">
                  Je certifie l'exactitude des informations fournies
                </label>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="gdpr"
                  required
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="gdpr" className="ml-2 text-sm text-gray-600">
                  J'accepte que mes données soient utilisées dans le cadre du concours (RGPD/Sénégal)
                </label>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                Envoyer ma candidature
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 p-6 rounded-lg space-y-4">
                <div className="text-center text-green-800">
                  <p className="text-lg font-semibold mb-2">
                    Votre candidature a été soumise avec succès.
                  </p>
                  <p>
                    Merci de contribuer à l'innovation dans le mobilier national.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                  <p className="font-medium mb-2">Votre numéro de candidature :</p>
                  <p className="text-2xl font-mono text-center bg-green-50 py-2 rounded">
                    {formData.applicationNumber}
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 border border-green-500 rounded text-green-600 hover:bg-green-50"
                    onClick={() => {
                      // Handle PDF download
                    }}
                  >
                    <FileCheck className="w-5 h-5" />
                    Télécharger mon dossier
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contest;
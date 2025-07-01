import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Eye, EyeOff, Phone, Lock, User, Building, Mail } from 'lucide-react';

interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

type AuthStep = 'login' | 'register' | 'profile-selection' | 'register-particulier' | 'register-administration';

const AuthModals: React.FC<AuthModalsProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({
    phone: '',
    password: ''
  });

  const [particulierData, setParticulierData] = useState({
    fullName: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [administrationData, setAdministrationData] = useState({
    institutionName: '',
    entityType: '',
    institutionalEmail: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleParticulierChange = (field: string, value: string) => {
    setParticulierData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdministrationChange = (field: string, value: string) => {
    setAdministrationData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation de connexion
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
      // Reset
      setCurrentStep('login');
      setLoginData({ phone: '', password: '' });
    }, 1500);
  };

  const handleParticulierSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'inscription
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
      // Reset
      setCurrentStep('login');
      setParticulierData({ fullName: '', phone: '', password: '', confirmPassword: '' });
    }, 1500);
  };

  const handleAdministrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'inscription
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
      // Reset
      setCurrentStep('login');
      setAdministrationData({ institutionName: '', entityType: '', institutionalEmail: '' });
    }, 1500);
  };

  const handleProfileSelection = (profileType: 'particulier' | 'administration') => {
    if (profileType === 'particulier') {
      setCurrentStep('register-particulier');
    } else {
      setCurrentStep('register-administration');
    }
  };

  const resetAndClose = () => {
    setCurrentStep('login');
    setLoginData({ phone: '', password: '' });
    setParticulierData({ fullName: '', phone: '', password: '', confirmPassword: '' });
    setAdministrationData({ institutionName: '', entityType: '', institutionalEmail: '' });
    setShowPassword(false);
    setShowConfirmPassword(false);
    onClose();
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'login': return 'Connexion';
      case 'register': return 'Inscription';
      case 'profile-selection': return 'Compte';
      case 'register-particulier': return 'Inscription du particulier';
      case 'register-administration': return 'Information de profil';
      default: return 'Connexion';
    }
  };

  const getBackStep = () => {
    switch (currentStep) {
      case 'register': return 'login';
      case 'profile-selection': return 'register';
      case 'register-particulier': return 'profile-selection';
      case 'register-administration': return 'profile-selection';
      default: return 'login';
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={resetAndClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-100 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center gap-3">
              {currentStep !== 'login' && (
                <button
                  onClick={() => setCurrentStep(getBackStep() as AuthStep)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-600" />
                </button>
              )}
              <h2 className="text-xl font-bold text-gray-800">
                {getStepTitle()}
              </h2>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            <AnimatePresence mode="wait">
              {/* Page de connexion */}
              {currentStep === 'login' && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Connectez-vous
                    </h3>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-6">
                    {/* Champ téléphone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                          <img 
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA5NjM5Ii8+CjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRkZEMTAwIi8+CjxyZWN0IHg9IjE2IiB3aWR0aD0iOCIgaGVpZ2h0PSIyNCIgZmlsbD0iI0NFMTEyNiIvPgo8L3N2Zz4K"
                            alt="Sénégal"
                            className="w-5 h-4 rounded-sm"
                          />
                          <span className="text-blue-600 font-medium">+221</span>
                        </div>
                        <input
                          type="tel"
                          required
                          value={loginData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-20 pr-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                          placeholder="77 123 45 67"
                        />
                      </div>
                    </div>

                    {/* Champ mot de passe */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mot de passe
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={loginData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="w-full pl-12 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                          placeholder="Mot de passe"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Mot de passe oublié */}
                    <div className="text-right">
                      <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Mot de passe oublié ?
                      </button>
                    </div>

                    {/* Bouton de connexion */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg
                               hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 
                               disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Connexion...
                        </>
                      ) : (
                        'Se connecter'
                      )}
                    </button>

                    {/* Lien inscription */}
                    <div className="text-center">
                      <span className="text-gray-600">Avez vous un compte ? </span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep('register')}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Inscrivez-vous
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Page d'inscription (redirection vers sélection de profil) */}
              {currentStep === 'register' && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Créer un compte
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Pour créer votre compte, veuillez d'abord sélectionner votre profil.
                    </p>
                    
                    <button
                      onClick={() => setCurrentStep('profile-selection')}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg
                               hover:bg-blue-700 transition-colors duration-200"
                    >
                      Continuer vers la sélection de profil
                    </button>

                    <div className="text-center mt-6">
                      <span className="text-gray-600">Déjà un compte ? </span>
                      <button
                        type="button"
                        onClick={() => setCurrentStep('login')}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Connectez-vous
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Page de sélection de profil */}
              {currentStep === 'profile-selection' && (
                <motion.div
                  key="profile-selection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Création de votre compte
                    </h3>
                    <p className="text-gray-600">
                      Sélectionnez votre profil pour poursuivre la création de votre compte.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Carte Particulier */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-200 cursor-pointer"
                      onClick={() => handleProfileSelection('particulier')}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                          <User className="w-10 h-10 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          Particulier
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Pour les clients particuliers recherchant des services artisanaux
                        </p>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                                         hover:bg-blue-700 transition-colors duration-200">
                          Continuer
                        </button>
                      </div>
                    </motion.div>

                    {/* Carte Administration */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-200 cursor-pointer"
                      onClick={() => handleProfileSelection('administration')}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                          <Building className="w-10 h-10 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          Administration
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Pour les institutions publiques et administrations
                        </p>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                                         hover:bg-blue-700 transition-colors duration-200">
                          Continuer
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Formulaire d'inscription Particulier */}
              {currentStep === 'register-particulier' && (
                <motion.div
                  key="register-particulier"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Rejoignez notre communauté de particuliers
                    </h3>
                  </div>

                  <form onSubmit={handleParticulierSubmit} className="space-y-6">
                    {/* Prénom et nom */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom et nom
                      </label>
                      <input
                        type="text"
                        required
                        value={particulierData.fullName}
                        onChange={(e) => handleParticulierChange('fullName', e.target.value)}
                        className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                        placeholder="Votre prénom et nom"
                      />
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                          <img 
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDA5NjM5Ii8+CjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRkZEMTAwIi8+CjxyZWN0IHg9IjE2IiB3aWR0aD0iOCIgaGVpZ2h0PSIyNCIgZmlsbD0iI0NFMTEyNiIvPgo8L3N2Zz4K"
                            alt="Sénégal"
                            className="w-5 h-4 rounded-sm"
                          />
                          <span className="text-blue-600 font-medium">+221</span>
                        </div>
                        <input
                          type="tel"
                          required
                          value={particulierData.phone}
                          onChange={(e) => handleParticulierChange('phone', e.target.value)}
                          className="w-full pl-20 pr-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                          placeholder="77 123 45 67"
                        />
                      </div>
                    </div>

                    {/* Mot de passe */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mot de passe
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={particulierData.password}
                          onChange={(e) => handleParticulierChange('password', e.target.value)}
                          className="w-full pl-4 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                          placeholder="Votre mot de passe"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirmer mot de passe */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmer mot de passe
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={particulierData.confirmPassword}
                          onChange={(e) => handleParticulierChange('confirmPassword', e.target.value)}
                          className="w-full pl-4 pr-12 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
                          placeholder="Confirmer votre mot de passe"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Bouton d'inscription */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg
                               hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 
                               disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Inscription...
                        </>
                      ) : (
                        "Confirmer l'inscription"
                      )}
                    </button>

                    {/* Conditions d'utilisation */}
                    <div className="text-center text-sm text-gray-600">
                      En vous inscrivant, vous acceptez notre{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                        EULA et conditions d'utilisation
                      </a>
                      {' '}et notre{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                        politique de confidentialité
                      </a>
                      . Pour plus d'informations,{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                        consultez notre site web
                      </a>
                      .
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Formulaire d'inscription Administration */}
              {currentStep === 'register-administration' && (
                <motion.div
                  key="register-administration"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Mettre à jour les informations d'administration
                    </h3>
                  </div>

                  <form onSubmit={handleAdministrationSubmit} className="space-y-6">
                    {/* Nom de l'Institution */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l'Institution <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={administrationData.institutionName}
                        onChange={(e) => handleAdministrationChange('institutionName', e.target.value)}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg bg-gray-50"
                        placeholder="Ministère du Tourisme et de l'Artisanat"
                      />
                    </div>

                    {/* Type d'entité */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type d'entité <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-3">
                        {['Ministère (Dage)', "Agence d'exécution", 'Société nationale', 'Projet programme', 'Autre'].map((type) => (
                          <label key={type} className="flex items-center">
                            <input
                              type="radio"
                              name="entityType"
                              value={type}
                              checked={administrationData.entityType === type}
                              onChange={(e) => handleAdministrationChange('entityType', e.target.value)}
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              required
                            />
                            <span className="ml-3 text-gray-700">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Email institutionnel */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email institutionnel <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={administrationData.institutionalEmail}
                        onChange={(e) => handleAdministrationChange('institutionalEmail', e.target.value)}
                        className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg bg-gray-50"
                        placeholder="contact@institution.gouv.sn"
                      />
                    </div>

                    {/* Bouton de mise à jour */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg
                               hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 
                               disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Mise à jour...
                        </>
                      ) : (
                        'Mettre à jour'
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModals;
import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, MapPin, Phone, Building, Award, Calendar, FileText, X, User, Mail, MessageSquare, ChevronDown } from 'lucide-react';
import ProposeMarketModal from './ProposeMarketModal';
import AuthModals from './AuthModals';

interface Artisan {
  id: string;
  name: string;
  profession: string;
  rating: number;
  image: string;
  agreed: boolean;
  region?: string;
  department?: string;
  commune?: string;
  address?: string;
  phone?: string;
  whatsapp?: string;
  company?: string;
  cardNumber?: string;
  approvalNumber?: string;
  publicMarkets?: string[];
  experience?: string;
  specialties?: string[];
  description?: string;
  certifications?: string[];
  availability?: string;
}

interface FilterState {
  search: string;
  metier: string;
  region: string;
  department: string;
}

interface ArtisanGridProps {
  filters: FilterState;
  onFilteredCountChange: (count: number) => void;
  onLoadingChange: (loading: boolean) => void;
}

const mockArtisans: Artisan[] = [
  // Artisans existants
  {
    id: '1',
    name: 'Mamadou Diallo',
    profession: 'Menuisier Bois',
    rating: 4.8,
    image: '/menuisier.webp',
    agreed: true,
    region: 'Dakar',
    department: 'Dakar',
    commune: 'Médina',
    address: '123 Rue de la Médina',
    phone: '+221 77 123 45 67',
    whatsapp: '+221771234567',
    company: 'Diallo & Fils Menuiserie',
    cardNumber: 'CART-2024-001',
    approvalNumber: 'AGR-2024-001',
    experience: '15 ans d\'expérience',
    specialties: ['Mobilier sur mesure', 'Rénovation', 'Ameublement'],
    description: 'Artisan menuisier expérimenté spécialisé dans la création de mobilier sur mesure et la rénovation. Passionné par le travail du bois noble.',
    certifications: ['CAP Menuiserie', 'Formation PMN 2023'],
    availability: 'Disponible sous 48h',
    publicMarkets: [
      'Rénovation mobilier école primaire Médina (2023)',
      'Fourniture mobilier mairie de Dakar (2022)'
    ]
  },
  {
    id: '2',
    name: 'Fatou Sow',
    profession: 'Maçon',
    rating: 4.5,
    image: '/masson.webp',
    agreed: true,
    region: 'Thiès',
    department: 'Thiès',
    commune: 'Thiès Nord',
    address: '456 Avenue Léopold Sédar Senghor',
    phone: '+221 76 987 65 43',
    whatsapp: '+221769876543',
    company: 'Sow Construction',
    cardNumber: 'CART-2024-002',
    approvalNumber: 'AGR-2024-002',
    experience: '12 ans d\'expérience',
    specialties: ['Construction', 'Rénovation', 'Carrelage'],
    description: 'Maçon qualifiée avec une expertise reconnue dans la construction et la rénovation. Spécialisée dans les finitions de qualité.',
    certifications: ['BEP Maçonnerie', 'Certification Qualité PMN'],
    availability: 'Disponible immédiatement',
    publicMarkets: [
      'Construction centre de santé Thiès (2023)',
      'Rénovation école élémentaire (2022)'
    ]
  },
  {
    id: '3',
    name: 'Ibrahima Tall',
    profession: 'Électricien',
    rating: 4.6,
    image: '/electricien.webp',
    agreed: true,
    region: 'Kaolack',
    department: 'Kaolack',
    commune: 'Kaolack',
    address: '321 Boulevard Général de Gaulle',
    phone: '+221 77 234 56 78',
    whatsapp: '+221772345678',
    company: 'Ba Électricité Services',
    cardNumber: 'CART-2024-004',
    approvalNumber: 'AGR-2024-004',
    experience: '8 ans d\'expérience',
    specialties: ['Électricité industrielle', 'Automatisme', 'Maintenance'],
    description: 'Spécialiste en électricité industrielle et automatisme. Intervient sur des projets complexes nécessitant une expertise technique avancée.',
    certifications: ['BTS Électrotechnique', 'Formation Schneider Electric'],
    availability: 'Disponible sur rendez-vous',
    publicMarkets: [
      'Rénovation électrique hôpital régional (2023)',
      'Installation solaire école primaire (2022)'
    ]
  },
  {
    id: '4',
    name: 'Fatou Diop',
    profession: 'Carreleur',
    rating: 4.4,
    image: '/carreleur.webp',
    agreed: true,
    region: 'Ziguinchor',
    department: 'Ziguinchor',
    commune: 'Ziguinchor',
    address: '654 Rue du Commerce',
    phone: '+221 76 345 67 89',
    whatsapp: '+221763456789',
    company: 'Diop Carrelage',
    cardNumber: 'CART-2024-005',
    approvalNumber: 'AGR-2024-005',
    experience: '7 ans d\'expérience',
    specialties: ['Carrelage', 'Faïence', 'Mosaïque'],
    description: 'Artisan carreleur experte en pose de carrelage, faïence et mosaïque. Réalise des finitions impeccables pour tous types de surfaces.',
    certifications: ['CAP Carrelage', 'Formation techniques modernes'],
    availability: 'Disponible sous 3 jours',
    publicMarkets: [
      'Carrelage centre culturel Ziguinchor (2023)',
      'Rénovation sol mairie (2022)'
    ]
  },
  {
    id: '5',
    name: 'Moussa Fall',
    profession: 'Peintre',
    rating: 4.9,
    image: '/peintre.webp',
    agreed: true,
    region: 'Thiès',
    department: 'Thiès',
    commune: 'Thiès-Nord',
    address: 'Quartier Diakhao, Rue 4',
    phone: '+221 78 567 89 01',
    whatsapp: '+221785678901',
    company: 'Fall Déco & Peinture',
    cardNumber: 'CART-2024-006',
    approvalNumber: 'AGR-2024-006',
    experience: '20 ans d\'expérience',
    specialties: ['Peinture décorative', 'Façades', 'Intérieur'],
    description: 'Artisan peintre spécialisée dans la décoration intérieure et extérieure. Maîtrise parfaitement les techniques modernes de peinture.',
    certifications: ['CAP Peinture', 'Formation couleurs et décoration'],
    availability: 'Disponible sous 2 jours',
    publicMarkets: [
      'Peinture Hôtel Résidence Niakh Niakhal (2023)',
      'Finitions murales École Sainte-Thérèse (2021)'
    ]
  },
  {
    id: '6',
    name: 'Cheikh Mbaye',
    profession: 'Mécanicien',
    rating: 4.7,
    image: '/mecanique.webp',
    agreed: true,
    region: 'Tambacounda',
    department: 'Tambacounda',
    commune: 'Tambacounda',
    address: '12 Quartier Gourel',
    phone: '+221 78 123 45 67',
    whatsapp: '+221781234567',
    company: 'Garage Mbaye',
    cardNumber: 'CART-2024-008',
    approvalNumber: 'AGR-2024-008',
    experience: '14 ans d\'expérience',
    specialties: ['Mécanique auto', 'Diagnostic', 'Réparation moteur'],
    description: 'Mécanicien automobile expérimenté. Spécialiste du diagnostic et de la réparation de tous types de véhicules.',
    certifications: ['CAP Mécanique', 'Formation diagnostic électronique'],
    availability: 'Disponible du lundi au samedi',
    publicMarkets: [
      'Maintenance véhicules municipaux (2023)',
      'Réparation parc automobile préfecture (2022)'
    ]
  },
  {
    id: '7',
    name: 'Cheikh Mboup',
    profession: 'Climatisation',
    rating: 4.5,
    image: '/climatisation.webp',
    agreed: true,
    region: 'Dakar',
    department: 'Guédiawaye',
    commune: 'Guédiawaye',
    address: '78 Cité Djily Mbaye',
    phone: '+221 76 789 01 23',
    whatsapp: '+221767890123',
    company: 'Mboup Froid Services',
    cardNumber: 'CART-2024-008',
    approvalNumber: 'AGR-2024-008',
    experience: '11 ans d\'expérience',
    specialties: ['Installation climatisation', 'Maintenance', 'Réfrigération'],
    description: 'Technicien en climatisation et réfrigération. Expert en installation et maintenance de systèmes de climatisation.',
    certifications: ['BEP Froid et Climatisation', 'Certification frigoriste'],
    availability: 'Disponible 7j/7',
    publicMarkets: [
      'Installation climatisation centre de santé (2023)',
      'Maintenance système hôpital (2022)'
    ]
  },
  {
    id: '8',
    name: 'Mame Diarra Sy',
    profession: 'Tapisserie',
    rating: 4.3,
    image: '/tapisserie.webp',
    agreed: true,
    region: 'Thiès',
    department: 'Mbour',
    commune: 'Mbour',
    address: '23 Quartier Escale',
    phone: '+221 77 890 12 34',
    whatsapp: '+221778901234',
    company: 'Atelier Sy Déco',
    cardNumber: 'CART-2024-010',
    approvalNumber: 'AGR-2024-010',
    experience: '13 ans d\'expérience',
    specialties: ['Tapisserie d\'ameublement', 'Réfection fauteuils', 'Décoration'],
    description: 'Artisan tapissier spécialisé dans la réfection de mobilier et la décoration d\'intérieur. Travail soigné et matériaux de qualité.',
    certifications: ['CAP Tapisserie', 'Formation décoration'],
    availability: 'Disponible sur rendez-vous',
    publicMarkets: [
      'Réfection mobilier mairie Mbour (2023)',
      'Tapisserie sièges conseil départemental (2022)'
    ]
  },
  {
    id: '9',
    name: 'Abdoulaye Kane',
    profession: 'Électroménager',
    rating: 4.8,
    image: '/electromenager.webp',
    agreed: true,
    region: 'Ziguinchor',
    department: 'Ziguinchor',
    commune: 'Ziguinchor',
    address: 'Avenue Senghor, Quartier Lyndiane',
    phone: '+221 78 345 67 89',
    whatsapp: '+221783456789',
    company: 'Kane Réparations Électro',
    cardNumber: 'CART-2024-010',
    approvalNumber: 'AGR-2024-010',
    experience: '8 ans d\'expérience',
    specialties: ['Réparation électroménager', 'Diagnostic', 'Pièces détachées'],
    description: 'Technicien spécialisé dans la réparation d\'électroménager. Intervention rapide et efficace sur tous types d\'appareils.',
    certifications: ['BEP Électrotechnique', 'Formation réparation électroménager'],
    availability: 'Disponible en urgence',
    publicMarkets: [
      'Réhabilitation appareils CHR de Ziguinchor (2023)',
      'Maintenance équipements électroménagers ENDA (2022)'
    ]
  },
  {
    id: '10',
    name: 'Awa Ndiaye',
    profession: 'Restauration',
    rating: 4.6,
    image: '/restauration2.webp',
    agreed: true,
    region: 'Saint-Louis',
    department: 'Podor',
    commune: 'Podor',
    address: '34 Rue du Fleuve',
    phone: '+221 76 456 78 90',
    whatsapp: '+221764567890',
    company: 'Chez Awa Traiteur',
    cardNumber: 'CART-2024-011',
    approvalNumber: 'AGR-2024-011',
    experience: '16 ans d\'expérience',
    specialties: ['Cuisine collective', 'Traiteur', 'Événementiel'],
    description: 'Chef cuisinier spécialisé dans la restauration collective et l\'événementiel. Cuisine traditionnelle et moderne.',
    certifications: ['CAP Cuisine', 'Formation HACCP'],
    availability: 'Disponible selon planning',
    publicMarkets: [
      'Restauration scolaire collège Podor (2023)',
      'Traiteur événements municipaux (2022)'
    ]
  },
  {
    id: '11',
    name: 'El Hadji Sow',
    profession: 'Agroalimentaire',
    rating: 4.4,
    image: '/agroalimentaire22.webp',
    agreed: true,
    region: 'Kolda',
    department: 'Kolda',
    commune: 'Kolda',
    address: '67 Quartier Sikilo',
    phone: '+221 77 567 89 01',
    whatsapp: '+221775678901',
    company: 'Sow Transformation Agro',
    cardNumber: 'CART-2024-012',
    approvalNumber: 'AGR-2024-012',
    experience: '10 ans d\'expérience',
    specialties: ['Transformation fruits', 'Conserves', 'Produits bio'],
    description: 'Spécialisée dans la transformation agroalimentaire. Production de conserves et produits dérivés de fruits locaux.',
    certifications: ['Formation transformation alimentaire', 'Certification bio'],
    availability: 'Disponible toute l\'année',
    publicMarkets: [
      'Production jus de fruits locaux pour PNDL (2023)',
      'Fourniture produits transformés cantines scolaires (2022)'
    ]
  },
  {
    id: '12',
    name: 'Abdou Seck',
    profession: 'Ameublement',
    rating: 4.7,
    image: '/ameublement23.webp',
    agreed: true,
    region: 'Fatick',
    department: 'Fatick',
    commune: 'Fatick',
    address: '89 Avenue Léopold Sédar Senghor',
    phone: '+221 78 678 90 12',
    whatsapp: '+221786789012',
    company: 'Seck Ameublement',
    cardNumber: 'CART-2024-013',
    approvalNumber: 'AGR-2024-013',
    experience: '12 ans d\'expérience',
    specialties: ['Mobilier bureau', 'Aménagement', 'Design'],
    description: 'Créateur de mobilier et spécialiste en aménagement d\'espaces. Conception sur mesure pour particuliers et entreprises.',
    certifications: ['CAP Ébénisterie', 'Formation design mobilier'],
    availability: 'Disponible sur projet',
    publicMarkets: [
      'Ameublement bureaux préfecture Fatick (2023)',
      'Mobilier salle conseil municipal (2022)'
    ]
  },
  {
    id: '13',
    name: 'Bineta Thiam',
    profession: 'Confection couture',
    rating: 4.5,
    image: '/confection-couture.webp',
    agreed: true,
    region: 'Louga',
    department: 'Louga',
    commune: 'Louga',
    address: '12 Quartier Keur Serigne Louga',
    phone: '+221 76 789 01 23',
    whatsapp: '+221767890123',
    company: 'Thiam Couture',
    cardNumber: 'CART-2024-015',
    approvalNumber: 'AGR-2024-015',
    experience: '14 ans d\'expérience',
    specialties: ['Confection vêtements', 'Uniformes', 'Broderie'],
    description: 'Couturière experte en confection de vêtements sur mesure. Spécialisée dans les uniformes et la broderie traditionnelle.',
    certifications: ['CAP Couture', 'Formation broderie artisanale'],
    availability: 'Disponible du lundi au vendredi',
    publicMarkets: [
      'Tenues scolaires pour établissements publics (2023)',
      'Uniformes pour groupements de femmes (2022)'
    ]
  },
  {
    id: '14',
    name: 'Mamadou Camara',
    profession: 'Maroquinerie',
    rating: 4.6,
    image: '/maroquinerie12.webp',
    agreed: true,
    region: 'Sédhiou',
    department: 'Sédhiou',
    commune: 'Sédhiou',
    address: '45 Rue de la Paix',
    phone: '+221 77 890 12 34',
    whatsapp: '+221778901234',
    company: 'Camara Maroquinerie',
    cardNumber: 'CART-2024-016',
    approvalNumber: 'AGR-2024-016',
    experience: '11 ans d\'expérience',
    specialties: ['Maroquinerie artisanale', 'Sacs cuir', 'Accessoires'],
    description: 'Artisan maroquinier spécialisé dans la création d\'articles en cuir. Travail traditionnel et moderne du cuir.',
    certifications: ['CAP Maroquinerie', 'Formation travail du cuir'],
    availability: 'Disponible sur commande',
    publicMarkets: [
      'Fourniture accessoires cuir administration (2023)',
      'Maroquinerie protocole préfecture (2022)'
    ]
  },
  {
    id: '15',
    name: 'Awa Diallo',
    profession: 'Blanchisserie',
    rating: 4.3,
    image: '/blanchisserie14.webp',
    agreed: true,
    region: 'Matam',
    department: 'Matam',
    commune: 'Matam',
    address: '23 Quartier Escale',
    phone: '+221 78 901 23 45',
    whatsapp: '+221789012345',
    company: 'Diallo Pressing',
    cardNumber: 'CART-2024-017',
    approvalNumber: 'AGR-2024-017',
    experience: '9 ans d\'expérience',
    specialties: ['Pressing', 'Nettoyage à sec', 'Repassage'],
    description: 'Spécialisée dans le nettoyage et l\'entretien textile. Service de pressing professionnel et nettoyage à sec.',
    certifications: ['Formation pressing professionnel', 'Certification nettoyage'],
    availability: 'Disponible 6j/7',
    publicMarkets: [
      'Entretien linge hôpital régional (2023)',
      'Pressing uniformes forces de sécurité (2022)'
    ]
  },
  {
    id: '16',
    name: 'Ibrahima Sow',
    profession: 'Cordonnerie',
    rating: 4.4,
    image: '/cordonnerie15.webp',
    agreed: true,
    region: 'Kaffrine',
    department: 'Kaffrine',
    commune: 'Kaffrine',
    address: '56 Avenue Cheikh Anta Diop',
    phone: '+221 76 012 34 56',
    whatsapp: '+221760123456',
    company: 'Sow Cordonnerie',
    cardNumber: 'CART-2024-018',
    approvalNumber: 'AGR-2024-018',
    experience: '15 ans d\'expérience',
    specialties: ['Réparation chaussures', 'Cordonnerie artisanale', 'Maroquinerie'],
    description: 'Cordonnier traditionnel expert en réparation et création de chaussures. Maîtrise parfaite des techniques artisanales.',
    certifications: ['CAP Cordonnerie', 'Formation artisanat traditionnel'],
    availability: 'Disponible du lundi au samedi',
    publicMarkets: [
      'Réparation chaussures personnel municipal (2023)',
      'Entretien chaussures forces de l\'ordre (2022)'
    ]
  },
  {
    id: '17',
    name: 'Aliou Ndoye',
    profession: 'Menuiserie métallique',
    rating: 4.8,
    image: '/menuiserie-metallique6.webp',
    agreed: true,
    region: 'Kédougou',
    department: 'Kédougou',
    commune: 'Kédougou',
    address: '78 Quartier Bantata',
    phone: '+221 77 123 45 67',
    whatsapp: '+221771234567',
    company: 'Ndoye Métal Services',
    cardNumber: 'CART-2024-019',
    approvalNumber: 'AGR-2024-019',
    experience: '13 ans d\'expérience',
    specialties: ['Soudure', 'Portails métalliques', 'Structures'],
    description: 'Spécialisée en menuiserie métallique et soudure. Création de portails, grilles et structures métalliques sur mesure.',
    certifications: ['CAP Soudure', 'Formation menuiserie métallique'],
    availability: 'Disponible sur devis',
    publicMarkets: [
      'Portails métalliques école primaire (2023)',
      'Grilles de sécurité bâtiments publics (2022)'
    ]
  },
  {
    id: '18',
    name: 'Alassane Ndour',
    profession: 'Menuiserie aluminium',
    rating: 4.5,
    image: '/menuiserie-aluminium7.webp',
    agreed: true,
    region: 'Dakar',
    department: 'Rufisque',
    commune: 'Rufisque',
    address: '34 Cité Serigne Ahmadou Bamba',
    phone: '+221 78 234 56 78',
    whatsapp: '+221782345678',
    company: 'Ndour Aluminium',
    cardNumber: 'CART-2024-020',
    approvalNumber: 'AGR-2024-020',
    experience: '10 ans d\'expérience',
    specialties: ['Fenêtres aluminium', 'Façades', 'Vérandas'],
    description: 'Expert en menuiserie aluminium. Spécialisé dans la pose de fenêtres, portes et façades en aluminium.',
    certifications: ['CAP Menuiserie aluminium', 'Formation pose façades'],
    availability: 'Disponible sous 48h',
    publicMarkets: [
      'Fenêtres aluminium lycée Rufisque (2023)',
      'Façade aluminium centre de santé (2022)'
    ]
  },
  {
    id: '19',
    name: 'Mamadou Camara',
    profession: 'Bijouterie',
    rating: 4.7,
    image: '/bijouterie18.webp',
    agreed: true,
    region: 'Thiès',
    department: 'Tivaouane',
    commune: 'Tivaouane',
    address: '12 Quartier Médina',
    phone: '+221 76 345 67 89',
    whatsapp: '+221763456789',
    company: 'Camara Or & Argent',
    cardNumber: 'CART-2024-021',
    approvalNumber: 'AGR-2024-021',
    experience: '12 ans d\'expérience',
    specialties: ['Bijoux traditionnels', 'Orfèvrerie', 'Réparation'],
    description: 'Bijoutier artisan spécialisé dans la création de bijoux traditionnels sénégalais. Maîtrise de l\'orfèvrerie.',
    certifications: ['CAP Bijouterie', 'Formation orfèvrerie traditionnelle'],
    availability: 'Disponible sur rendez-vous',
    publicMarkets: [
      'Confection de bijoux traditionnels pour festivals culturels (2023)',
      'Fourniture médailles artisanales pour associations locales (2022)'
    ]
  }
];

// Composant Skeleton Loader
const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 animate-pulse">
    {/* Image skeleton */}
    <div className="h-48 bg-gray-200"></div>
    
    {/* Content skeleton */}
    <div className="p-6">
      {/* Name skeleton */}
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      
      {/* Profession skeleton */}
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      
      {/* Rating skeleton */}
      <div className="flex items-center mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="ml-2 h-4 w-8 bg-gray-200 rounded"></div>
      </div>
      
      {/* Buttons skeleton */}
      <div className="space-y-3">
        <div className="h-12 bg-gray-200 rounded-lg"></div>
        <div className="h-12 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  </div>
);

// Modal pour voir le profil complet
const ProfileModal = ({ 
  isOpen, 
  onClose, 
  artisan 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  artisan: Artisan | null;
}) => {
  if (!isOpen || !artisan) return null;

  // Fonction pour formater la localisation
  const formatLocation = (artisan: Artisan) => {
    const parts = [];
    if (artisan.region) parts.push(artisan.region);
    if (artisan.department && artisan.department !== artisan.region) parts.push(artisan.department);
    return parts.join(', ') || 'Non spécifiée';
  };

  // Fonction pour formater le numéro de téléphone pour les liens
  const formatPhoneForLink = (phone: string) => {
    return phone.replace(/\s+/g, '');
  };

  return (
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
            Profil de l'artisan
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-6 py-8">
          {/* Section principale */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Photo et infos de base */}
            <div className="md:w-1/3">
              <div className="relative">
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                {artisan.agreed && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md">
                      <CheckCircle className="w-4 h-4" />
                      Agréé
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-primary-800">{artisan.name}</h3>
                <p className="text-lg text-primary-600 font-medium">{artisan.profession}</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(artisan.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-semibold text-gray-700">
                    {artisan.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Informations détaillées */}
            <div className="md:w-2/3 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  À propos
                </h4>
                <p className="text-primary-600 leading-relaxed">
                  {artisan.description}
                </p>
              </div>

              {/* Expérience et disponibilité */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Expérience
                  </h5>
                  <p className="text-primary-600">{artisan.experience}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Disponibilité
                  </h5>
                  <p className="text-green-600">{artisan.availability}</p>
                </div>
              </div>

              {/* Spécialités */}
              <div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  Spécialités
                </h4>
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties?.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-primary-800 mb-3">
                  Certifications
                </h4>
                <div className="space-y-2">
                  {artisan.certifications?.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-500" />
                      <span className="text-primary-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-primary-800 mb-4">
              Informations de contact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="font-medium text-primary-800">Téléphone</p>
                  <p className="text-primary-600">{artisan.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="font-medium text-primary-800">Entreprise</p>
                  <p className="text-primary-600">{artisan.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="font-medium text-primary-800">Localisation</p>
                  <p className="text-primary-600">{formatLocation(artisan)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="font-medium text-primary-800">Adresse</p>
                  <p className="text-primary-600">{artisan.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="font-medium text-primary-800">Carte professionnelle</p>
                  <p className="text-primary-600">{artisan.cardNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary-500" />
                <div>
                  <p className="font-medium text-primary-800">N° Agrément</p>
                  <p className="text-primary-600">{artisan.approvalNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marchés publics réalisés */}
          {artisan.publicMarkets && artisan.publicMarkets.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary-800 mb-4">
                Marchés publics réalisés
              </h4>
              <div className="space-y-3">
                {artisan.publicMarkets.map((market, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium">{market}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions de contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Fermer
            </button>
            
            {/* Bouton d'appel téléphonique */}
            {artisan.phone && (
              <a
                href={`tel:${formatPhoneForLink(artisan.phone)}`}
                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg 
                         hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-medium
                         flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-5 h-5" />
                Appeler l'artisan
              </a>
            )}

            {/* Bouton WhatsApp (affiché seulement si le numéro WhatsApp existe) */}
            {artisan.whatsapp && (
              <a
                href={`https://wa.me/${artisan.whatsapp.replace(/\s+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg 
                         hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium
                         flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-5 h-5" />
                Contacter via WhatsApp
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ArtisanCard = ({ artisan, isLoggedIn, onLoginRequired }: { 
  artisan: Artisan; 
  isLoggedIn: boolean; 
  onLoginRequired: () => void; 
}) => {
  const [showProposeModal, setShowProposeModal] = React.useState(false);
  const [showProfileModal, setShowProfileModal] = React.useState(false);

  const handleProposeMarket = () => {
    if (!isLoggedIn) {
      onLoginRequired();
      return;
    }
    setShowProposeModal(true);
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl"
      >
        {/* Badge "Agréé" */}
        {artisan.agreed && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
              <CheckCircle className="w-3 h-3" />
              Agréé
            </div>
          </div>
        )}

        {/* Image de l'artisan */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={artisan.image}
            alt={artisan.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Contenu de la carte */}
        <div className="p-6">
          {/* Nom et profession */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-primary-800 mb-1">
              {artisan.name}
            </h3>
            <p className="text-primary-600 font-medium">
              {artisan.profession}
            </p>
          </div>

          {/* Note */}
          <div className="flex items-center mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(artisan.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-semibold text-gray-700">
              {artisan.rating}
            </span>
          </div>

          {/* Boutons d'action */}
          <div className="space-y-3">
            <button
              onClick={handleProposeMarket}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold 
                       hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Proposer un marché
            </button>
            
            <button
              onClick={() => setShowProfileModal(true)}
              className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold 
                       hover:border-primary-500 hover:text-primary-600 transition-colors duration-200"
            >
              Voir le profil complet
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modals */}
      {isLoggedIn && (
        <ProposeMarketModal 
          isOpen={showProposeModal}
          onClose={() => setShowProposeModal(false)}
          artisan={artisan}
        />
      )}
      
      <ProfileModal 
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        artisan={artisan}
      />
    </>
  );
};

export const ArtisanGrid: React.FC<ArtisanGridProps> = ({ 
  filters, 
  onFilteredCountChange, 
  onLoadingChange 
}) => {
  const [filteredArtisans, setFilteredArtisans] = React.useState<Artisan[]>(mockArtisans);
  const [visibleArtisans, setVisibleArtisans] = React.useState(8); // Commencer par 8 artisans
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false); // État pour le loader

  // Fonction de filtrage
  const filterArtisans = React.useCallback((filters: FilterState) => {
    onLoadingChange(true);
    
    // Simulation d'un délai de recherche
    setTimeout(() => {
      let filtered = mockArtisans;

      // Filtre par recherche textuelle
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(artisan => 
          artisan.name.toLowerCase().includes(searchTerm) ||
          artisan.profession.toLowerCase().includes(searchTerm) ||
          artisan.region?.toLowerCase().includes(searchTerm) ||
          artisan.department?.toLowerCase().includes(searchTerm) ||
          artisan.commune?.toLowerCase().includes(searchTerm) ||
          artisan.company?.toLowerCase().includes(searchTerm) ||
          artisan.specialties?.some(specialty => 
            specialty.toLowerCase().includes(searchTerm)
          )
        );
      }

      // Filtre par métier
      if (filters.metier) {
        filtered = filtered.filter(artisan => 
          artisan.profession === filters.metier
        );
      }

      // Filtre par région
      if (filters.region) {
        filtered = filtered.filter(artisan => 
          artisan.region === filters.region
        );
      }

      // Filtre par département
      if (filters.department) {
        filtered = filtered.filter(artisan => 
          artisan.department === filters.department
        );
      }

      setFilteredArtisans(filtered);
      onFilteredCountChange(filtered.length);
      onLoadingChange(false);
      
      // Réinitialiser le nombre d'artisans visibles quand les filtres changent
      setVisibleArtisans(8);
    }, 300);
  }, [onFilteredCountChange, onLoadingChange]);

  // Appliquer les filtres quand ils changent
  React.useEffect(() => {
    filterArtisans(filters);
  }, [filters, filterArtisans]);

  // Fonction pour afficher plus d'artisans avec loader
  const showMoreArtisans = () => {
    setIsLoadingMore(true);
    
    // Simulation du chargement
    setTimeout(() => {
      setVisibleArtisans(prev => Math.min(prev + 8, filteredArtisans.length));
      setIsLoadingMore(false);
    }, 1500); // 1.5 secondes de chargement
  };

  // Gérer la demande de connexion
  const handleLoginRequired = () => {
    setShowAuthModal(true);
  };

  // Gérer la connexion réussie
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  // Artisans à afficher (slice basé sur visibleArtisans)
  const artisansToShow = filteredArtisans.slice(0, visibleArtisans);
  const hasMoreArtisans = visibleArtisans < filteredArtisans.length;

  return (
    <div className="w-full">
      {/* Message si aucun résultat */}
      {filteredArtisans.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Aucun artisan trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche pour obtenir plus de résultats.
            </p>
          </div>
        </motion.div>
      )}

      {/* Grille des artisans - 2 colonnes sur desktop/tablette, 1 sur mobile */}
      {filteredArtisans.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {artisansToShow.map((artisan, index) => (
            <motion.div
              key={artisan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ArtisanCard 
                artisan={artisan} 
                isLoggedIn={isLoggedIn}
                onLoginRequired={handleLoginRequired}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Skeleton Loader - affiché pendant le chargement de nouveaux artisans */}
      {isLoadingMore && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={`skeleton-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <SkeletonCard />
            </motion.div>
          ))}
        </div>
      )}

      {/* Bouton "Afficher plus d'artisans" ou message de fin */}
      {filteredArtisans.length > 0 && (
        <div className="text-center">
          {hasMoreArtisans ? (
            <div className="space-y-4">
              {/* Bouton "Afficher plus d'artisans" */}
              <motion.button
                onClick={showMoreArtisans}
                disabled={isLoadingMore}
                whileHover={{ scale: isLoadingMore ? 1 : 1.05, y: isLoadingMore ? 0 : -2 }}
                whileTap={{ scale: isLoadingMore ? 1 : 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                         text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl 
                         transition-all duration-500 flex items-center gap-4 font-semibold text-lg
                         border-2 border-white/20 backdrop-blur-sm mx-auto
                         disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {/* Button shine effect */}
                {!isLoadingMore && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                )}
                
                {/* Button text */}
                <span className="relative z-10">
                  {isLoadingMore ? 'Chargement...' : 'Afficher plus d\'artisans'}
                </span>
                
                {/* Chevron icon ou spinner */}
                <motion.div
                  className="relative z-10"
                >
                  {isLoadingMore ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </motion.div>

                {/* Pulsation effect - désactivé pendant le chargement */}
                {!isLoadingMore && (
                  <motion.div
                    className="absolute inset-0 bg-primary-400 rounded-full opacity-0"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>

              {/* Indicateur du nombre d'artisans */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-primary-200">
                  <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  <p className="text-primary-700 font-medium">
                    • Affichage de {visibleArtisans} artisans sur {filteredArtisans.length} disponibles
                  </p>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Message quand tous les artisans sont affichés */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 inline-block">
                <p className="text-primary-700 font-medium text-lg">
                  ✅ Tous les artisans correspondants sont affichés ({filteredArtisans.length} au total)
                </p>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Modal d'authentification */}
      <AuthModals 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default ArtisanGrid;
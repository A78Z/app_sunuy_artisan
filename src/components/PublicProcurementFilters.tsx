import React, { useState, useEffect } from 'react';
import { Search, RotateCcw } from 'lucide-react';
import { locations } from '../data/locations';

interface FilterState {
  search: string;
  metier: string;
  region: string;
  department: string;
}

interface PublicProcurementFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  filteredCount: number;
  isLoading?: boolean;
}

const PublicProcurementFilters: React.FC<PublicProcurementFiltersProps> = ({ 
  onFiltersChange, 
  filteredCount, 
  isLoading = false 
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    metier: '',
    region: '',
    department: ''
  });

  const [availableDepartments, setAvailableDepartments] = useState<{name: string; communes: string[]}[]>([]);

  const metiers = [
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
    'Bijouterie'
  ];

  useEffect(() => {
    if (filters.region) {
      const selectedRegion = locations.find(loc => loc.region === filters.region);
      setAvailableDepartments(selectedRegion?.departments || []);
      setFilters(prev => ({ ...prev, department: '' }));
    } else {
      setAvailableDepartments([]);
    }
  }, [filters.region]);

  // Transmettre les changements de filtres au composant parent
  useEffect(() => {
    onFiltersChange(filters);
  }, [filters, onFiltersChange]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    const resetState = {
      search: '',
      metier: '',
      region: '',
      department: ''
    };
    setFilters(resetState);
    setAvailableDepartments([]);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-primary-100 p-6 mb-8">
      {/* Barre de recherche */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher un métier ou une localité..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-lg"
          />
        </div>
      </div>

      {/* Filtres par dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Filtre Métier */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
            <div className="w-5 h-5 bg-primary-100 rounded flex items-center justify-center">
              <span className="text-primary-600 text-xs">🔧</span>
            </div>
            Métier / Secteur d'activité
          </label>
          <select
            value={filters.metier}
            onChange={(e) => handleFilterChange('metier', e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-primary-700"
          >
            <option value="">Sélectionner des métiers</option>
            {metiers.map(metier => (
              <option key={metier} value={metier}>{metier}</option>
            ))}
          </select>
        </div>

        {/* Filtre Région */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
            <div className="w-5 h-5 bg-primary-100 rounded flex items-center justify-center">
              <span className="text-primary-600 text-xs">🌍</span>
            </div>
            Région
          </label>
          <select
            value={filters.region}
            onChange={(e) => handleFilterChange('region', e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-primary-700"
          >
            <option value="">Sélectionner une région</option>
            {locations.map(location => (
              <option key={location.region} value={location.region}>
                {location.region}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre Département */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-primary-700 mb-2">
            <div className="w-5 h-5 bg-primary-100 rounded flex items-center justify-center">
              <span className="text-primary-600 text-xs">📍</span>
            </div>
            Département
          </label>
          <select
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            disabled={!filters.region}
            className="w-full px-4 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200 text-primary-700"
          >
            <option value="">Sélectionner un département</option>
            {availableDepartments.map(dept => (
              <option key={dept.name} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={resetFilters}
          className="flex items-center gap-2 px-4 py-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
};

export default PublicProcurementFilters;
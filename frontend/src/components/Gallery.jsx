import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { brainrots } from '../data/mock';
import BrainrotCard from './BrainrotCard';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');

  // Get unique rarities for filter
  const rarities = [...new Set(brainrots.map(brainrot => brainrot.rarity))];

  // Filter brainrots based on search and rarity
  const filteredBrainrots = brainrots.filter(brainrot => {
    const matchesSearch = brainrot.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === '' || brainrot.rarity === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  return (
    <section id="gallery" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="display-md text-primary mb-6">
            Coleção <span className="text-accent-primary">Premium</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto text-secondary">
            Escolha entre os Brainrots mais raros e poderosos do Steal a Brainrot. 
            Cada personagem foi cuidadosamente selecionado para maximizar seus ganhos.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
            <input
              type="text"
              placeholder="Buscar Brainrot..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          {/* Rarity Filter */}
          <div className="relative sm:w-48">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
            <select
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value)}
              className="input-field pl-12 appearance-none cursor-pointer"
            >
              <option value="">Todas Raridades</option>
              {rarities.map(rarity => (
                <option key={rarity} value={rarity}>{rarity}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="card-grid">
          {filteredBrainrots.map(brainrot => (
            <BrainrotCard
              key={brainrot.id}
              brainrot={brainrot}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredBrainrots.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-muted" size={32} />
            </div>
            <h3 className="h3 text-primary mb-3">Nenhum Brainrot encontrado</h3>
            <p className="text-secondary">
              Tente ajustar seus filtros ou busque por outro termo.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
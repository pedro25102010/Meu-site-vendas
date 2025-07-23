import React from 'react';
import { MessageCircle, Zap, DollarSign, Package } from 'lucide-react';
import { catalogBrainrots, contactInfo } from '../data/mock';

const CatalogCard = ({ brainrot }) => {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de comprar o ${brainrot.name} (${brainrot.type}) por ${brainrot.price}. Como posso prosseguir?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${contactInfo.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getTypeColor = (type) => {
    if (type.includes('Diamond')) return '#00FFFF';
    if (type.includes('Gold')) return '#FFD700';
    if (type.includes('Candy')) return '#FF69B4';
    if (type.includes('Bubblegum')) return '#FF6B35';
    return '#FF6B35';
  };

  return (
    <div className="bg-secondary border border-subtle rounded-xl p-6 hover-lift transition-all duration-300 group">
      {/* Emoji Header */}
      <div className="text-center mb-4">
        <div className="text-4xl mb-2">{brainrot.emoji}</div>
        <h3 className="h4 text-primary font-semibold">{brainrot.name}</h3>
      </div>

      {/* Type Badge */}
      <div className="flex justify-center mb-4">
        <span 
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-black"
          style={{ backgroundColor: getTypeColor(brainrot.type) }}
        >
          {brainrot.type}
        </span>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between py-2 px-3 bg-tertiary rounded-lg">
          <div className="flex items-center space-x-2">
            <Zap className="text-accent-primary" size={16} />
            <span className="body-sm text-secondary">Geração/s</span>
          </div>
          <span className="font-semibold text-accent-primary">{brainrot.moneyPerSecond}</span>
        </div>

        <div className="flex items-center justify-between py-2 px-3 bg-tertiary rounded-lg">
          <div className="flex items-center space-x-2">
            <DollarSign className="text-green-400" size={16} />
            <span className="body-sm text-secondary">Preço</span>
          </div>
          <span className="font-bold text-green-400 text-lg">{brainrot.price}</span>
        </div>

        {brainrot.quantity && (
          <div className="flex items-center justify-between py-2 px-3 bg-tertiary rounded-lg">
            <div className="flex items-center space-x-2">
              <Package className="text-blue-400" size={16} />
              <span className="body-sm text-secondary">Estoque</span>
            </div>
            <span className="font-semibold text-blue-400">{brainrot.quantity}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="body-sm text-muted text-center mb-6">{brainrot.description}</p>

      {/* CTA Button */}
      <button
        onClick={handleWhatsAppClick}
        className="btn-primary w-full flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform"
      >
        <MessageCircle size={18} />
        <span>Comprar Agora</span>
      </button>
    </div>
  );
};

const Catalog = () => {
  return (
    <section id="catalog" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-bg border border-accent-primary/20 rounded-full px-4 py-2 mb-6">
            <Package className="text-accent-primary" size={20} />
            <span className="text-accent-primary font-semibold">Disponível Agora</span>
          </div>
          
          <h2 className="display-md text-primary mb-6">
            Catálogo de <span className="text-accent-primary">Brainrots</span>
          </h2>
          <p className="body-lg text-secondary max-w-2xl mx-auto">
            Explore nossa seleção premium de Brainrots disponíveis para compra imediata. 
            Preços especiais e entrega instantânea!
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catalogBrainrots.map(brainrot => (
            <CatalogCard
              key={brainrot.id}
              brainrot={brainrot}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary border border-accent-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="h2 text-primary mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="body-md text-secondary mb-6">
              Entre em contato conosco! Temos outros Brainrots especiais que podem interessar você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Consultar WhatsApp</span>
              </a>
              <a href="#gallery" className="btn-secondary">
                Ver Galeria Completa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
import React from 'react';
import { MessageCircle, Zap, DollarSign, Package, Star } from 'lucide-react';
import { catalogBrainrots, getTopSellers, contactInfo } from '../data/mock';

const CatalogCard = ({ brainrot, isTopSeller = false, topSellerRank }) => {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de comprar o ${brainrot.name} (${brainrot.type}) por ${brainrot.price}. Como posso prosseguir?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${contactInfo.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const getTypeColor = (type) => {
    if (type.includes('Diamond')) return '#00FFFF';
    if (type.includes('Gold')) return '#FFD700';
    if (type.includes('Candy')) return '#FF69B4';
    if (type.includes('Bubblegum')) return '#FF6B35';
    return '#FF6B35';
  };

  const getTopSellerBadge = (rank) => {
    const badges = {
      1: { text: '#1 MAIS VENDIDO', color: '#FFD700' },
      2: { text: '#2 MAIS VENDIDO', color: '#C0C0C0' },
      3: { text: '#3 MAIS VENDIDO', color: '#CD7F32' }
    };
    return badges[rank] || { text: 'TOP', color: '#FF6B35' };
  };

  return (
    <div className={`bg-secondary border ${isTopSeller ? 'border-accent-primary shadow-lg shadow-accent-primary/20' : 'border-subtle'} rounded-xl p-6 hover-lift transition-all duration-300 group relative overflow-hidden`}>
      {/* Top Seller Badge */}
      {isTopSeller && (
        <div className="absolute top-0 right-0 z-10">
          <div 
            className="px-3 py-1 text-xs font-bold text-black rounded-bl-lg"
            style={{ backgroundColor: getTopSellerBadge(topSellerRank).color }}
          >
            {getTopSellerBadge(topSellerRank).text}
          </div>
        </div>
      )}

      {/* Top Seller Glow Effect */}
      {isTopSeller && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-yellow-400 to-accent-primary opacity-75"></div>
      )}

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

      {/* Limited Stock Warning */}
      {brainrot.stockRemaining && (
        <div className="mb-4 p-2 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-center text-sm font-semibold text-red-400">
            🔥 Apenas {brainrot.stockRemaining} unidades restantes!
          </p>
        </div>
      )}

      {/* Description */}
      <p className="body-sm text-muted text-center mb-6">{brainrot.description}</p>

      {/* CTA Button */}
      <button
        onClick={handleWhatsAppClick}
        className={`${isTopSeller ? 'btn-primary glow-effect' : 'btn-primary'} w-full flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform`}
      >
        <MessageCircle size={18} />
        <span>Comprar Agora</span>
      </button>
    </div>
  );
};

const TopSellerCard = ({ brainrot }) => {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de comprar o ${brainrot.name} (${brainrot.type}) por ${brainrot.price}. Como posso prosseguir?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${contactInfo.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-secondary border-2 border-accent-primary rounded-xl p-6 hover-lift transition-all duration-300 group relative overflow-hidden shadow-lg shadow-accent-primary/20">
      {/* Golden Glow Effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-accent-primary to-yellow-400"></div>
      
      {/* Rank Badge */}
      <div className="absolute top-3 right-3">
        <div className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-sm">#{brainrot.topSellerRank}</span>
        </div>
      </div>

      {/* Content */}
      <div className="text-center mb-4">
        <div className="text-5xl mb-3">{brainrot.emoji}</div>
        <h3 className="h4 text-primary font-semibold mb-2">{brainrot.name}</h3>
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Zap className="text-accent-primary" size={16} />
          <span className="font-semibold text-accent-primary">{brainrot.moneyPerSecond}</span>
        </div>
        <div className="text-green-400 font-bold text-xl mb-4">{brainrot.price}</div>
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="btn-primary w-full flex items-center justify-center space-x-2 glow-effect group-hover:scale-105 transition-transform"
      >
        <MessageCircle size={18} />
        <span>Comprar Agora</span>
      </button>
    </div>
  );
};

const Catalog = () => {
  const topSellers = getTopSellers();
  const regularProducts = catalogBrainrots.filter(item => !item.isTopSeller);

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

        {/* Top Sellers Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="flex items-center justify-center space-x-2 h2 text-primary mb-4">
              <Star className="text-yellow-400" size={28} />
              <span>Mais Vendidos</span>
              <Star className="text-yellow-400" size={28} />
            </h3>
            <p className="body-md text-secondary">Os Brainrots favoritos dos nossos clientes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {topSellers.map(brainrot => (
              <TopSellerCard
                key={`top-${brainrot.id}`}
                brainrot={brainrot}
              />
            ))}
          </div>
        </div>

        {/* All Products Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="h2 text-primary mb-4">Todos os Produtos</h3>
            <p className="body-md text-secondary">Confira nossa linha completa de Brainrots</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogBrainrots.map(brainrot => (
              <CatalogCard
                key={brainrot.id}
                brainrot={brainrot}
                isTopSeller={brainrot.isTopSeller}
                topSellerRank={brainrot.topSellerRank}
              />
            ))}
          </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
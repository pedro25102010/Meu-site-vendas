import React from 'react';
import { MessageCircle, Zap, DollarSign, Star } from 'lucide-react';
import { contactInfo } from '../data/mock';

const BrainrotCard = ({ brainrot }) => {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de comprar o Brainrot *${brainrot.name}* (${brainrot.rarity}) por ${brainrot.price}. Como posso prosseguir?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${contactInfo.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case 'Brainrot God':
        return <Star className="text-orange-400" size={20} />;
      case 'Candy':
        return <Zap className="text-pink-400" size={20} />;
      case 'Bubblegum':
        return <DollarSign className="text-red-400" size={20} />;
      default:
        return <Star className="text-gray-400" size={20} />;
    }
  };

  return (
    <div className="feature-card group hover-lift">
      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={brainrot.image}
          alt={brainrot.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <div 
            className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: brainrot.rarityColor }}
          >
            {getRarityIcon(brainrot.rarity)}
            <span>{brainrot.rarity}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="h3 text-primary mb-2">{brainrot.name}</h3>
          <p className="body-sm text-muted">{brainrot.description}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between py-3 px-4 bg-tertiary rounded-lg">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Zap className="text-accent-primary mr-1" size={16} />
              <span className="body-sm font-semibold text-primary">Ganho/s</span>
            </div>
            <span className="text-accent-primary font-bold">{brainrot.moneyPerSecond}</span>
          </div>
          
          <div className="w-px h-8 bg-border-primary"></div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <DollarSign className="text-green-400 mr-1" size={16} />
              <span className="body-sm font-semibold text-primary">Preço</span>
            </div>
            <span className="text-green-400 font-bold text-lg">{brainrot.price}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWhatsAppClick}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <MessageCircle size={20} />
          <span>Comprar pelo WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default BrainrotCard;
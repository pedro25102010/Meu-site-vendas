import React from 'react';
import { MessageCircle, Users, Clock, Shield } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os Brainrots disponíveis. Podem me ajudar?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${contactInfo.whatsappLink}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDiscordClick = () => {
    // In a real app, this would open Discord or copy the Discord username
    navigator.clipboard.writeText(contactInfo.discord);
    alert('Discord copiado para a área de transferência!');
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="display-md text-primary mb-6">
              Entre em <span className="text-accent-primary">Contato</span>
            </h2>
            <p className="body-lg text-secondary max-w-2xl mx-auto">
              Nossa equipe está sempre pronta para ajudar. Entre em contato através 
              dos nossos canais oficiais e tire todas as suas dúvidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Card */}
            <div className="feature-card text-center hover-lift">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-green-400" size={32} />
              </div>
              <h3 className="h3 text-primary mb-3">WhatsApp</h3>
              <p className="body-md text-secondary mb-6">
                Resposta rápida e atendimento personalizado via WhatsApp.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-green-400 font-semibold">{contactInfo.whatsapp}</p>
                <p className="body-sm text-muted">Online: 9h às 22h</p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary"
              >
                Conversar no WhatsApp
              </button>
            </div>

            {/* Discord Card */}
            <div className="feature-card text-center hover-lift">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-indigo-400" size={32} />
              </div>
              <h3 className="h3 text-primary mb-3">Discord</h3>
              <p className="body-md text-secondary mb-6">
                Junte-se à nossa comunidade no Discord para suporte e novidades.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-indigo-400 font-semibold">{contactInfo.discord}</p>
                <p className="body-sm text-muted">Comunidade ativa 24/7</p>
              </div>
              <button
                onClick={handleDiscordClick}
                className="btn-secondary"
              >
                Copiar Discord
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-tertiary rounded-xl">
              <Clock className="text-accent-primary mx-auto mb-3" size={24} />
              <h4 className="h4 text-primary mb-2">Entrega Rápida</h4>
              <p className="body-sm text-muted">Receba seu Brainrot em até 24 horas</p>
            </div>

            <div className="text-center p-6 bg-tertiary rounded-xl">
              <Shield className="text-accent-primary mx-auto mb-3" size={24} />
              <h4 className="h4 text-primary mb-2">100% Seguro</h4>
              <p className="body-sm text-muted">Transações seguras e confiáveis</p>
            </div>

            <div className="text-center p-6 bg-tertiary rounded-xl">
              <Users className="text-accent-primary mx-auto mb-3" size={24} />
              <h4 className="h4 text-primary mb-2">Suporte 24/7</h4>
              <p className="body-sm text-muted">Equipe sempre disponível para ajudar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
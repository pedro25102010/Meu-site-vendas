import React from 'react';
import { MessageCircle, Users, Star, Zap } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Section */}
        <div className="space-y-6">
          <div>
            <h3 className="h3 text-primary mb-3">
              <span className="text-accent-primary">Loja</span> Brainrot BR
            </h3>
            <p className="body-md text-secondary max-w-sm">
              A melhor loja de Brainrots do Brasil. Domine o Steal a Brainrot 
              com os personagens mais raros e poderosos do jogo.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="h4 text-primary mb-6">Links Rápidos</h4>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="text-secondary hover:text-accent-primary transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#catalog" className="text-secondary hover:text-accent-primary transition-colors">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#contact" className="text-secondary hover:text-accent-primary transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="h4 text-primary mb-6">Categorias</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Star className="text-orange-400" size={16} />
              <span className="text-secondary">Brainrot God</span>
            </li>
            <li className="flex items-center space-x-2">
              <Zap className="text-pink-400" size={16} />
              <span className="text-secondary">Candy</span>
            </li>
            <li className="flex items-center space-x-2">
              <Star className="text-red-400" size={16} />
              <span className="text-secondary">Bubblegum</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="h4 text-primary mb-6">Contato</h4>
          <div className="space-y-4">
            <div>
              <p className="body-sm text-muted mb-1">WhatsApp</p>
              <p className="text-secondary">{contactInfo.whatsapp}</p>
            </div>
            <div>
              <p className="body-sm text-muted mb-1">Discord</p>
              <p className="text-secondary">{contactInfo.discord}</p>
            </div>
            <div>
              <p className="body-sm text-muted mb-1">Horário</p>
              <p className="text-secondary">9h às 22h (Todos os dias)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-subtle mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="body-sm text-muted">
            © {currentYear} Loja Brainrot BR. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="body-sm text-muted hover:text-accent-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="body-sm text-muted hover:text-accent-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
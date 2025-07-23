import React, { useState } from 'react';
import { Menu, X, MessageCircle, Users } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary border-b border-subtle fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              <span className="text-accent-primary">Loja</span> Brainrot BR
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">
              Início
            </a>
            <a href="#catalog" className="text-secondary hover:text-primary transition-colors">
              Catálogo
            </a>
            <a href="#gallery" className="text-secondary hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#contact" className="text-secondary hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
            <button className="btn-ghost flex items-center space-x-2">
              <Users size={20} />
              <span>Discord</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary border-t border-subtle">
              <a
                href="#home"
                className="block px-3 py-2 text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Brainrots
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-secondary hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="border-t border-subtle pt-3 mt-3">
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-secondary hover:text-primary transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <button className="flex items-center space-x-2 px-3 py-2 text-secondary hover:text-primary transition-colors">
                  <Users size={20} />
                  <span>Discord</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
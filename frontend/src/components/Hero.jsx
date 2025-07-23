import React from 'react';
import { Zap, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-primary min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent-bg border border-accent-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="text-accent-primary" size={20} />
            <span className="text-accent-primary font-semibold">Steal a Brainrot - Roblox</span>
          </div>

          {/* Main Heading */}
          <h1 className="display-lg text-primary mb-6 max-w-4xl mx-auto">
            Os Melhores <span className="text-accent-primary">Brainrots</span> do Roblox
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto mb-12">
            Domine o jogo Steal a Brainrot com os personagens mais raros e poderosos. 
            Ganhe milhares por segundo e seja o maior sigma do servidor!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#catalog" className="btn-primary">
              Ver Catálogo Disponível
            </a>
            <a href="#contact" className="btn-secondary">
              Entrar em Contato
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="text-accent-primary mr-2" size={24} />
                <span className="h2 text-primary">500+</span>
              </div>
              <p className="text-muted">Brainrots Vendidos</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="text-accent-primary mr-2" size={24} />
                <span className="h2 text-primary">99%</span>
              </div>
              <p className="text-muted">Taxa de Satisfação</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="text-accent-primary mr-2" size={24} />
                <span className="h2 text-primary">24h</span>
              </div>
              <p className="text-muted">Entrega Rápida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Button } from './ui/button';
import Icon from './ui/icon';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-library-primary to-library-secondary py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Откройте для себя мир знаний в нашей библиотеке
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Тысячи книг, уютная атмосфера и современные технологии для комфортного чтения и обучения.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-white text-library-primary hover:bg-gray-100 rounded-full">
              <Icon name="BookOpen" className="mr-2 h-5 w-5" />
              Начать чтение
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Текущие события
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

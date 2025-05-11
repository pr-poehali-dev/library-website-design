
import React from 'react';
import { Card, CardContent } from './ui/card';
import Icon from './ui/icon';

const LibraryInfo: React.FC = () => {
  const features = [
    {
      icon: 'Clock',
      title: 'Режим работы',
      description: 'Пн-Пт: 9:00 - 20:00\nСб: 10:00 - 18:00\nВс: Выходной',
    },
    {
      icon: 'Map',
      title: 'Адрес',
      description: 'ул. Пушкина, д. 123\nг. Москва, 123456',
    },
    {
      icon: 'Phone',
      title: 'Контакты',
      description: 'Телефон: +7 (123) 456-78-90\nEmail: library@example.com',
    },
    {
      icon: 'Info',
      title: 'О библиотеке',
      description: 'Основана в 1995 году\nБолее 50,000 книг\nСовременный читальный зал',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-10">Информация о библиотеке</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 transition-all duration-300 hover:border-library-primary hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-library-accent flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="h-6 w-6 text-library-primary" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-3">{feature.title}</h3>
                  <p className="text-library-muted whitespace-pre-line">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryInfo;

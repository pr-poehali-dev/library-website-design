
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Icon from './ui/icon';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Library" className="h-8 w-8 text-library-primary" />
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-library-primary">Библиотека</h1>
            </Link>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md search-input rounded-full">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск книг, авторов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-library-background border-library-accent focus:border-library-primary focus:ring-1 focus:ring-library-primary"
              />
              <Icon 
                name="Search" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-library-muted" 
              />
            </div>
          </div>
          
          <nav className="flex items-center gap-6">
            <Link to="/catalog" className="nav-link text-library-text hover:text-library-primary transition-colors">
              Каталог
            </Link>
            <Link to="/events" className="nav-link text-library-text hover:text-library-primary transition-colors">
              События
            </Link>
            <Link to="/about" className="nav-link text-library-text hover:text-library-primary transition-colors">
              О нас
            </Link>
            <Button className="bg-library-primary hover:bg-library-secondary text-white rounded-full">
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

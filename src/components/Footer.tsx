
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Icon from './ui/icon';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Icon name="Library" className="h-7 w-7 text-library-primary" />
              <h2 className="text-2xl font-playfair font-bold text-library-primary">Библиотека</h2>
            </Link>
            <p className="text-library-muted mb-4">
              Мы стремимся сделать чтение доступным и увлекательным для всех. Наша библиотека — это место, где знания встречаются с вдохновением.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-library-muted hover:text-library-primary transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-library-muted hover:text-library-primary transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-library-muted hover:text-library-primary transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-library-muted hover:text-library-primary transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-library-muted hover:text-library-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-library-muted hover:text-library-primary transition-colors">Каталог книг</Link>
              </li>
              <li>
                <Link to="/events" className="text-library-muted hover:text-library-primary transition-colors">События</Link>
              </li>
              <li>
                <Link to="/services" className="text-library-muted hover:text-library-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/about" className="text-library-muted hover:text-library-primary transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-library-muted hover:text-library-primary transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reading-room" className="text-library-muted hover:text-library-primary transition-colors">Читальный зал</Link>
              </li>
              <li>
                <Link to="/book-borrowing" className="text-library-muted hover:text-library-primary transition-colors">Выдача книг</Link>
              </li>
              <li>
                <Link to="/digital-resources" className="text-library-muted hover:text-library-primary transition-colors">Электронные ресурсы</Link>
              </li>
              <li>
                <Link to="/study-spaces" className="text-library-muted hover:text-library-primary transition-colors">Учебные зоны</Link>
              </li>
              <li>
                <Link to="/workshops" className="text-library-muted hover:text-library-primary transition-colors">Мастер-классы</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Подписаться на новости</h3>
            <p className="text-library-muted mb-4">Получайте информацию о новых поступлениях и событиях.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="rounded-l-md border-library-accent focus-visible:ring-library-primary"
              />
              <Button className="rounded-r-md bg-library-primary hover:bg-library-secondary">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-library-muted text-sm">
          <p>© 2025 Городская Библиотека. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-library-primary transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-library-primary transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

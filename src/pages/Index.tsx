
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import FeaturedBooks from '@/components/FeaturedBooks';
import LibraryInfo from '@/components/LibraryInfo';
import Footer from '@/components/Footer';
import { Book } from '@/components/BookCard';

const Index = () => {
  // Моковые данные для книг
  const popularBooks: Book[] = [
    {
      id: '1',
      title: 'Мастер и Маргарита',
      author: 'Михаил Булгаков',
      coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500&auto=format&fit=crop',
      rating: 5,
      isPopular: true,
      category: 'Классика'
    },
    {
      id: '2',
      title: 'Война и мир',
      author: 'Лев Толстой',
      coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=500&auto=format&fit=crop',
      rating: 4,
      isPopular: true,
      category: 'Классика'
    },
    {
      id: '3',
      title: 'Преступление и наказание',
      author: 'Федор Достоевский',
      coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=500&auto=format&fit=crop',
      rating: 4,
      isPopular: true,
      category: 'Классика'
    },
    {
      id: '4',
      title: 'Гарри Поттер и философский камень',
      author: 'Дж. К. Роулинг',
      coverImage: 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76?q=80&w=500&auto=format&fit=crop',
      rating: 5,
      isPopular: true,
      category: 'Фэнтези'
    },
    {
      id: '5',
      title: '1984',
      author: 'Джордж Оруэлл',
      coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=500&auto=format&fit=crop',
      rating: 5,
      isPopular: true,
      category: 'Антиутопия'
    }
  ];

  const newBooks: Book[] = [
    {
      id: '6',
      title: 'Тревожные люди',
      author: 'Фредрик Бакман',
      coverImage: 'https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?q=80&w=500&auto=format&fit=crop',
      rating: 4,
      isNew: true,
      category: 'Современная проза'
    },
    {
      id: '7',
      title: 'Клуб убийств по четвергам',
      author: 'Ричард Осман',
      coverImage: 'https://images.unsplash.com/photo-1548048026-5a1a941d93d3?q=80&w=500&auto=format&fit=crop',
      rating: 4,
      isNew: true,
      category: 'Детектив'
    },
    {
      id: '8',
      title: 'Маленькая жизнь',
      author: 'Ханья Янагихара',
      coverImage: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=500&auto=format&fit=crop',
      rating: 5,
      isNew: true,
      category: 'Современная проза'
    },
    {
      id: '9',
      title: 'Дюна',
      author: 'Фрэнк Герберт',
      coverImage: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=500&auto=format&fit=crop',
      rating: 5,
      isNew: true,
      category: 'Научная фантастика'
    },
    {
      id: '10',
      title: 'Убийство в Восточном экспрессе',
      author: 'Агата Кристи',
      coverImage: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=500&auto=format&fit=crop',
      rating: 4,
      isNew: true,
      category: 'Детектив'
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <HeroBanner />
        <FeaturedBooks 
          title="Популярные книги" 
          books={popularBooks} 
          viewAllLink="/popular"
          icon="TrendingUp"
        />
        <FeaturedBooks 
          title="Новые поступления" 
          books={newBooks}
          viewAllLink="/new"
          icon="BookPlus"
        />
        <LibraryInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

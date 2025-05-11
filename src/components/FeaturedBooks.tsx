
import React from 'react';
import BookCard, { Book } from './BookCard';
import { Button } from './ui/button';
import Icon from './ui/icon';

interface FeaturedBooksProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
  icon?: string;
}

const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ 
  title, 
  books,
  viewAllLink,
  icon
}) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            {icon && <Icon name={icon} className="h-6 w-6 text-library-primary" />}
            <h2 className="text-2xl md:text-3xl font-playfair font-bold">{title}</h2>
          </div>
          {viewAllLink && (
            <Button variant="ghost" className="text-library-primary hover:text-library-secondary">
              Смотреть все
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

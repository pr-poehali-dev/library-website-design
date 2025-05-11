
import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
  category?: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <Card className="book-card h-full overflow-hidden border border-gray-200 hover:border-library-primary bg-white">
        <div className="relative pt-[140%] overflow-hidden">
          <img 
            src={book.coverImage} 
            alt={`Обложка книги ${book.title}`} 
            className="book-image-hover absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            {book.isNew && (
              <Badge className="bg-library-primary text-white">Новинка</Badge>
            )}
            {book.isPopular && (
              <Badge className="bg-library-secondary text-white">Популярное</Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-playfair font-medium text-lg mb-1 line-clamp-2">{book.title}</h3>
          <p className="text-library-muted text-sm">{book.author}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg 
                key={index} 
                className={`w-4 h-4 ${index < book.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          {book.category && (
            <span className="text-xs text-library-muted">{book.category}</span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BookCard;

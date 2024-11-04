'use client';
import React, { useEffect, useState } from 'react';
import BookList from './components/BookList';

interface Book {
  id: number;
  name: string;
  category: string;
  available_books: number;
}

const exampleData: Book[] = [
  {
    id: 1,
    name: 'Example Book 1',
    category: 'Fiction',
    available_books: 5,
  },
  {
    id: 2,
    name: 'Example Book 2',
    category: 'Non-Fiction',
    available_books: 3,
  },
];

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(exampleData);
  }, []);

  return (
    <div>
      <h1>Welcome to the Library Management System</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;

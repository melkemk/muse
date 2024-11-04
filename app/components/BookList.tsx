'use client';

import React from 'react';

interface Book {
    id: number;
    name: string;
    category: string;
    available_books: number;
}

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Available Books</h2>
            <ul style={listStyle}>
                {books.map((book) => (
                    <li key={book.id} style={itemStyle}>
                        <strong>{book.name}</strong> - {book.category} ({book.available_books} available)
                    </li>
                ))}
            </ul>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle: React.CSSProperties = {
    marginBottom: '20px',
};

const listStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: '0',
    width: '100%',
};

const itemStyle: React.CSSProperties = {
    marginBottom: '10px',
    padding: '10px',
    borderBottom: '1px solid #ccc',
};

export default BookList;

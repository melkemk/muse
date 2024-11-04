'use client';

import React, { useState, useEffect } from 'react';
import { lendBook, fetchBooks } from '../utils/api';

interface Book {
    id: number;
    name: string;
    category: string;
    available_books: number;
}

const Lend: React.FC = () => {
    const [formData, setFormData] = useState({
        userId: '',
        bookId: '',
        expected_return_date: '',
    });
    const [books, setBooks] = useState<Book[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await lendBook(formData);
        // Handle success or error messages
    };

    // Fetch books on component mount
    useEffect(() => {
        const loadBooks = async () => {
            const booksData = await fetchBooks();
            setBooks(booksData);
        };
        loadBooks();
    }, []);

    return (
        <form onSubmit={handleSubmit} style={formStyle} className='mt-10'>
            <h2 style={headerStyle}>Lend a Book</h2>
            <select name="bookId" onChange={handleChange} required style={inputStyle}>
                <option value="">Select a book</option>
                {books.map((book) => (
                    <option key={book.id} value={book.id}>
                        {book.name} - {book.available_books} available
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="userId"
                placeholder="User ID"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="date"
                name="expected_return_date"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Lend Book</button>
        </form>
    );
};

const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle: React.CSSProperties = {
    marginBottom: '20px',
};

const inputStyle: React.CSSProperties = {
    marginBottom: '10px',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default Lend;

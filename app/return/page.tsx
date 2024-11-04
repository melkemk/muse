'use client';

import React, { useState } from 'react';
import { returnBook } from '../utils/api';

const Return: React.FC = () => {
    const [formData, setFormData] = useState({
        userId: '',
        bookId: '',
        return_date: '',
        late_fee: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await returnBook(formData);
        // Handle success or error messages
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle} className='mt-10'>
            <h2 style={headerStyle}>Return a Book</h2>
            <input
                type="text"
                name="userId"
                placeholder="User ID"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="text"
                name="bookId"
                placeholder="Book ID"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="date"
                name="return_date"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="number"
                name="late_fee"
                placeholder="Late Fee"
                onChange={handleChange}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Return Book</button>
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

export default Return;

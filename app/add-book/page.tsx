'use client';

import React, { useState } from 'react';
import { addBook } from '../utils/api';

const AddBooks: React.FC = () => {
    const [suceess, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        category: 'historical',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addBook(formData);
        setSuccess(true);
        // Handle success or error messages
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle} className='mt-10'>
            {suceess && <p>Successfully added book</p>}
            <h2 style={headerStyle}>Add a Book</h2>
            <input
                type="text"
                name="name"
                placeholder="Book Name"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <select
                name="category"
                onChange={handleChange}
                required
                style={inputStyle}
                value={formData.category}
            >
                <option value="historical">Historical</option>
                <option value="academic">Academic</option>
                <option value="fiction">Fiction</option>
            </select>
            <button type="submit" style={buttonStyle}>Add Book</button>
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

export default AddBooks;
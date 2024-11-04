'use client';

import React, { useState } from 'react';
import { registerUser } from '../utils/api';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        is_admin: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await registerUser(formData);
        // Handle success or error messages
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle} className='mt-10'>
            <h2 style={headerStyle}>Register User</h2>
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <label style={labelStyle}>
                Admin:
                <input
                    type="checkbox"
                    name="is_admin"
                    onChange={() => setFormData({ ...formData, is_admin: !formData.is_admin })}
                />
            </label>
            <button type="submit" style={buttonStyle}>Register</button>
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

const labelStyle: React.CSSProperties = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};


export default Register;

'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav style={navStyle}>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/register" style={linkStyle}>Register User</Link>
            <Link href="/lend" style={linkStyle}>Lend a Book</Link>
            <Link href="/return" style={linkStyle}>Return a Book</Link>
            <Link href="/add-book" style={linkStyle}>add Book</Link>
            <Link href="/taken-books" style={linkStyle}>taken Books</Link>
            <Link href="/about" style={linkStyle}>About </Link>
        </nav>
    );
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const linkStyle: React.CSSProperties = {
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#007BFF',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
};

export default Navbar;

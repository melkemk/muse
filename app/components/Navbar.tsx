'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav style={navStyle}>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/register" style={linkStyle}>Register</Link>
            <Link href="/lend" style={linkStyle}>Lend a Book</Link>
            <Link href="/return" style={linkStyle}>Return a Book</Link>
            <Link href="/add-book" style={linkStyle}>Add Book</Link>
            <Link href="/taken-books" style={linkStyle}>Taken Books</Link>
            <Link href="/about" style={linkStyle}>About</Link>
            <style jsx>{`
                nav a:hover {
                    color: #ffffff;
                    background-color: #007BFF;
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
            `}</style>
        </nav>
    );
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '15px 20px',
    backgroundColor: '#ffffff',
    borderBottom: '2px solid #e5e5e5',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
};

const linkStyle: React.CSSProperties = {
    padding: '10px 15px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    borderRadius: '8px',
    backgroundColor: '#f8f8f8',
};

export default Navbar;

'use client';

import React, { useEffect, useState } from 'react';
// import { fetchTakenBooks } from '../utils/api';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

interface Book {
    id: number;
    name: string;
    category: string;
}

interface LendingRecord {
    id: number;
    user: User;
    book: Book;
    expected_return_date: string;
}

const exampleData: LendingRecord[] = [
    {
        id: 1,
        user: {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
        },
        book: {
            id: 1,
            name: 'Example Book 1',
            category: 'Fiction',
        },
        expected_return_date: '2023-12-01',
    },
    {
        id: 2,
        user: {
            id: 2,
            first_name: 'Jane',
            last_name: 'Smith',
            email: 'jane.smith@example.com',
        },
        book: {
            id: 2,
            name: 'Example Book 2',
            category: 'Non-Fiction',
        },
        expected_return_date: '2023-12-15',
    },
];

const TakenBooks: React.FC = () => {
    const [takenBooks, setTakenBooks] = useState<LendingRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                setLoading(true);
                // const booksData = await fetchTakenBooks();
                setTakenBooks(exampleData);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Failed to fetch taken books');
            } finally {
                setLoading(false);
            }
        };
        loadBooks();
    }, []);

    if (loading) {
        return (
            <div style={containerStyle}>
                <h2 style={headerStyle}>Taken Books (Example Data)</h2>
                <ul style={listStyle}>
                    {exampleData.map((record) => (
                        <li key={record.id} style={itemStyle}>
                            <strong>Book:</strong> {record.book.name} - {record.book.category}<br />
                            <strong>User:</strong> {record.user.first_name} {record.user.last_name} ({record.user.email})<br />
                            <strong>Expected Return Date:</strong> {record.expected_return_date}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Taken Books</h2>
            <ul style={listStyle}>
                {takenBooks.map((record) => (
                    <li key={record.id} style={itemStyle}>
                        <strong>Book:</strong> {record.book.name} - {record.book.category}<br />
                        <strong>User:</strong> {record.user.first_name} {record.user.last_name} ({record.user.email})<br />
                        <strong>Expected Return Date:</strong> {record.expected_return_date}
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

export default TakenBooks;
import React from 'react';

interface BookCardProps {
    bookId: string;
    title: string;
    author: string;
    isbn: string;
    status: 'Available' | 'Borrowed' | 'Missing';
    onBorrow: (bookId: string) => void;
    onReturn: (bookId: string) => void;
    onUpdate?: (bookId: string) => void; // Optional for admin actions
    userRole: 'student' | 'librarian' | 'admin';
}

const BookCard: React.FC<BookCardProps> = ({ 
    bookId, 
    title, 
    author, 
    isbn, 
    status, 
    onBorrow, 
    onReturn, 
    onUpdate, 
    userRole 
}) => {
    return (
        <div className="book-card">
            <h3>{title}</h3>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>ISBN:</strong> {isbn}</p>
            <p>
                <strong>Status:</strong> 
                <span className={`status ${status.toLowerCase()}`}>{status}</span>
            </p>
            <div className="actions">
                {status === 'Available' && userRole === 'student' && (
                    <button onClick={() => onBorrow(bookId)}>Borrow</button>
                )}
                {status === 'Borrowed' && (
                    <button onClick={() => onReturn(bookId)}>Return</button>
                )}
                {userRole === 'admin' && onUpdate && (
                    <button onClick={() => onUpdate(bookId)}>Update</button>
                )}
            </div>
        </div>
    );
};

export default BookCard;

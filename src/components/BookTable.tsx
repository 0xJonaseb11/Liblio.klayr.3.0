import React from 'react';

interface Book {
    bookId: string;
    title: string;
    author: string;
    isbn: string;
    status: string;
}

interface BookTableProps {
    books: Book[];
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
    return (
        <div>
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.bookId}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;

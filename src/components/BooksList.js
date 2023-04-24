import React, { useEffect, useState } from "react";
import { booksApi } from "../rest/BooksApi";
import { Card, Button, Row, Col, Container, Spinner } from 'react-bootstrap';
import ListLength from "./ListLength";

export function BooksList({initialBooks}) {
    const [books, setBooks] = useState(initialBooks);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await booksApi.get();
                const sortedData = [...data].sort((a, b) => b.id - a.id);
                setBooks(sortedData);
                setLoading(false);
            } catch(e) {
                console.error('Oops, looks like fetchBooks had an issue.', e);
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await booksApi.delete(id);
            setBooks(books.filter(book => book.id !== id));
        } catch(e) {
            console.error("Oops, looks like deleting the book didn't work.", e);
        }
    }

    const handleUpdateReadStatus = async (book, readStatus) => {
        try {
            const updatedBook = { ...book, readStatus, id: book.id };
            await booksApi.put(updatedBook);
            setBooks(books.map(b => b.id === book.id ? updatedBook : b));
        } catch(e) {
            console.error("Oops, looks like updating read status didn't work.", e);
        }
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const data = await booksApi.get();
                const sortedData = [...data].sort((a, b) => b.id - a.id);
                setBooks(sortedData);
            } catch(e) {
                console.error("Oops, looks like there's an issue getting books", e);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            { books.length === 0 && (
                <h2>No books to show</h2>
            )}

            { books.length > 0 && (
                <div>
                    <ListLength books={books} />
                    <Container className="container" fluid='sm'>
                        <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
                            {books.map((book) => (
                                <Col key={book.id}>
                                    <Card  className="book-card" style={{height: '100%'}}>
                                        <Card.Img variant='top' id='cover' src={book.image}  />
                                        <Card.Body>
                                            <Card.Title><h2>{book.title}</h2></Card.Title>
                                            <Card.Body>
                                                by <strong>{book.author}</strong>
                                                <Row className='book-info gx-1'>
                                                    <Col>
                                                        {book.genre}
                                                    </Col>
                                                    <Col>
                                                        <select value={book.readStatus} onChange={(e) => handleUpdateReadStatus(book, e.target.value)}>
                                                            <option value="Read">Read</option>
                                            <option value="Currently Reading">Currently Reading</option>
                                            <option value="Save For Later">Save For Later</option>
                                        </select>
                                    </Col>
                                </Row>
                            </Card.Body>
                            
                            <Button id='delete-btn' onClick={() => handleDelete(book.id)}>Delete</Button> 
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
            </Container>
            </div>
            )}
        </div>
    );
}

export default BooksList;
import React, { useState } from "react";
import { booksApi } from "../rest/BooksApi";
import { Form, FormGroup, Button, Row, Col } from 'react-bootstrap';


export function BookForm({ addBook = () => {} }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [readStatus, setReadStatus] = useState('Currently Reading');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      genre,
      readStatus
    };

    try {
      const addedBook = await booksApi.post(newBook);
      addBook(addedBook);  
      setTitle('');
      setAuthor('');
      setGenre('');
      setReadStatus('Currently Reading');
      const books = await booksApi.get();
      console.log(books);
    } catch(e) {
      console.error("Oops, looks like adding the book didn't work.", e);
    }
  }
    
  return (
    <div>
      <h2>Add Book</h2>
      <Form id='book-form' onSubmit={handleSubmit}>
        <h2 id='bookform-h2'>ADD BOOK</h2>
        <Row>
          <Col>
            <FormGroup className="mb-1" controlId="formTitle">
              <Form.Label className='label'>Title</Form.Label>
              <Form.Control type='text' placeholder='Enter Title' value={title} onChange={(event) => setTitle(event.target.value)} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="mb-2" controlId="formAuthor">
              <Form.Label className='label'>Author</Form.Label>
              <Form.Control type='text' placeholder='Enter Author' value={author} onChange={(event) => setAuthor(event.target.value)} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-3" controlId="formGenre">
              <Form.Label className='label'>Genre</Form.Label>
              <Form.Control type='text' placeholder='Enter Genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="mb-4" controlId="formReadStatus">
              <Form.Label className='label'>Read Status</Form.Label>
              <Form.Select value={readStatus} onChange={(event) => setReadStatus(event.target.value)}>
                <option>Select Read Status</option>
                <option value="Currently Reading">Currently Reading</option>
                <option value="Save For Later">Save For Later</option>
                <option value="Read">Read</option>
              </Form.Select>
            </FormGroup>
          </Col>
        </Row>
        <Button type='submit' className='button'>Add Book</Button>
      </Form>
    </div>
  );
}

export default BookForm;
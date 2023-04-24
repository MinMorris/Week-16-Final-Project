import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container }  from 'react-bootstrap';
import { BooksList } from './components/BooksList'; 
import { BookForm } from './components/BookForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact  from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([newBook, ...books]);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={
            <>
              <BookForm onAddBook={addBook} />
              <BooksList initialBooks={books} />
               
            </>
          } />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

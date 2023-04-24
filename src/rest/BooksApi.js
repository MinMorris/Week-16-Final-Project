const BOOKS_ENDPOINT = 'https://6446b7920431e885f01a0522.mockapi.io/Books/Books';

class BooksApi {
  async get() {
    try {
      const resp = await fetch(BOOKS_ENDPOINT);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log('Oops, looks like fetchBooks had an issue.', e);
    }
  }

  async put(books) {
    try {
      const resp = await fetch(`${BOOKS_ENDPOINT}/${books.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(books)
      });
      return await resp.json();
    } catch (e) {
      console.log('Oops, looks like updating book had an issue.', e);
    }
  }

  async delete(id) {
    try {
      const resp = await fetch(`${BOOKS_ENDPOINT}/${id}`, {
        method: 'DELETE'
      });
      return await resp.json();
    } catch (e) {
      console.error(`Oops, looks like deleting book didn't work.`, e);
    }
  }

  async post(books) {
    try {
      const resp = await fetch(BOOKS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(books)
      });
      return await resp.json();
    } catch (e) {
      console.log('Oops, looks like adding book had an issue.', e);
    }
  }
  async getById(id) {
    try {
      const resp = await fetch(`${BOOKS_ENDPOINT}/${id}`);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log('Oops, looks like getById had an issue.', e);
    }
  }
  
  async create(books) {
    try {
      const resp = await fetch(BOOKS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(books)
      });
      return await resp.json();
    } catch (e) {
      console.log('Oops, looks like creating book had an issue.', e);
    }
  }
}

export const booksApi = new BooksApi();
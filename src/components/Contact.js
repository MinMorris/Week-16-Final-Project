import { useState } from 'react';
import React from 'react';
import { Table } from 'react-bootstrap';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  
  
  return (
    <div>
     <p id='contact-design'></p>
     <p id='contact'></p>
     <center>
  <h1 id='contact-h2'>CONTACT US</h1> 
  </center>
      <form onSubmit={handleSubmit}>
        <div id= 'submit-form' className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div id= 'submit-form' className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div id= 'submit-form' className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary custom-submit-btn">
          Submit
          </button>



          
          <p id='contact-p'>Connect with us on LinkedIn!</p>
      <Table id='linkedin' striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Min Morris</td>
            <td>
              <a href="https://www.linkedin.com/in/your-linkedin-profile">
              https://www.linkedin.com/in/minmorris/
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
      </form>
    </div>
  );
}

export default Contact;



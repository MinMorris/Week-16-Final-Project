import React from 'react';
import { Container } from 'react-bootstrap';
import Collage from './Collage';
import 'bootstrap/dist/css/bootstrap.min.css';





function Home() {
  return (
   <Container id='home-con' className="home-container">
      <br></br>

      <Collage id='home-c' />
      <center>
      <h1 id='home-h1'>WELCOME TO YOUR BOOKSHELF!</h1>
     
      <br></br>
      
      <h2 id='home-h2'>Do You Love To Read?</h2>
      
      
     <h4 id= 'play' >If so, you're in the right place! Welcome to your BookShelf. This is the app where you can add and save books you have read and would like to read. </h4>
     <h4 id= 'play' >HAPPY READING!</h4>
     
     </center>

     <br></br>
     <br></br>
     

     <br></br>
     
     <br></br>
     <p id='home-p'></p>

     <p id='home-p'></p>

     <p id='home-p'></p>
    
<br></br>
<br></br>
<br></br>
      
    </Container >

  );
}

export default Home;

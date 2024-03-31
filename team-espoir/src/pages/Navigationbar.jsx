import React from 'react'

function Navigationbar(){
  return (
    
  <nav class="navbar navbar-expand-lg top-2 ">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <a className='navbar-brand text-black font-bold'>Team-Espoir</a>
      <div class="collapase navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-black" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="#">Contact us</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success  text-black" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}


export default Navigationbar;

/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='text-white '>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;*/
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Topbar() {
  return ( 
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Numerical Method</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic- navbar-nav">
        <Nav className="me-auto">
       
          
          <Nav.Link href='/'>Home</Nav.Link>
          

          <NavDropdown title="Root of equation" id="basic-nav-dropdown">
            <NavDropdown.Item href='/Bisection' >Bisection</NavDropdown.Item>
            <NavDropdown.Item href='/Falseposition'>Falesposition</NavDropdown.Item>
            <NavDropdown.Item href='/Onepoint' >Onepoint</NavDropdown.Item>
            <NavDropdown.Item href='/Newton' >Newton-Raphson</NavDropdown.Item>
            <NavDropdown.Item href='/Secant' >Secant</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="Interpolation" id="basic-nav-dropdown">
          <NavDropdown.Item href='/newtondivide' >Newton Divide</NavDropdown.Item>
          </NavDropdown>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}


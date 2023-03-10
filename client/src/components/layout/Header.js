import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = ()=>  {
  return (
    <Navbar bg="success" expand="md">
      <Container>
        <Navbar.Brand href="#home">ET</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className='nav-link text-light'>Login</Link>
            <Link to="/register" className='nav-link text-light'>Register</Link>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

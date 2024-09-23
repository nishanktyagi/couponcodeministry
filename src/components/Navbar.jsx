import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'

function NavbarMenu() {
  return (
    <Container fluid className="p-0">
      <Navbar expand="lg" bg="dark" className="p-0 text-bg-dark sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="d-block logoImg"
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end d-sm-block">
            <Nav
              className="ml-auto my-2 my-lg-0 text-light"
              navbarScroll
            >
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/amazon" className="nav-link">Amazon</Link>
              <Link to="/travel" className="nav-link">Travel</Link>
              <Link to="/health" className="nav-link">Health & Welness</Link>
              <Link to="/e-commerce" className="nav-link">E-commerce</Link>
              <Link to="/beauty" className="nav-link">Beauty & Products</Link>
              <Link to="/shoes" className="nav-link">Shoes</Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

function scrollIntoView(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  })
  document.getElementById('navbarScroll').classList.remove('show');
  document.getElementsByClassName('navbar-toggler')[0].classList.add('collapsed')
}

export default NavbarMenu;
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Footer/Images/logo2.png";
import './navbar.css';

function Navigation() {
  return (
    <Navbar bg="light" id='navbar'>
      <Container fluid>
        <Navbar.Brand href="/">
        <img height="60px" width="90px" src={logo} alt="..." />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/category" className="me-2">Women</Nav.Link>
            <Nav.Link href="/category" className="me-2">Men</Nav.Link>
            <Nav.Link href="/category" className="me-2">Kids</Nav.Link>
            <Nav.Link href="/category" className="me-2">Shoes & Bags</Nav.Link>
            <Nav.Link href="/category" className="me-2">Beauty</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What are you looking for?"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          
          <NavDropdown title="More" id="navbarScrollingDropdown"  className="me-2">
              <NavDropdown.Item href="#">Download App</NavDropdown.Item>
              <NavDropdown.Item href="#">
               Online Gift Card
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Online Offers</NavDropdown.Item>
              <NavDropdown.Item href="#">In Store Offers</NavDropdown.Item>
              <NavDropdown.Item href="#">Store Locator</NavDropdown.Item>
              <NavDropdown.Item href="#">Store Details</NavDropdown.Item>
              <NavDropdown.Item href="#">Lifestyle EDGE</NavDropdown.Item>
              <NavDropdown.Item href="#">Shop on Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="#">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#">SBI Offer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/signup" className="me-2">Sign Up/Sign In</Nav.Link>
            <Nav.Link href="/" className="me-2"><i className="fa fa-heart-o"></i></Nav.Link>
            <Nav.Link href="/" className="me-2"><i className="fa fa-shopping-bag"></i></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
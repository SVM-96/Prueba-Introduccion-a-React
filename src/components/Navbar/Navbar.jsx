import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#" className="text-warning">
          Digimon World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Digimons
            </Nav.Link>
            <NavDropdown
              title="Worlds"
              id="basic-nav-dropdown"
              className="text-light"
            >
              <NavDropdown.Item href="#" className="text-dark">
                Digital World
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="text-dark">
                Real World
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" className="text-dark">
                Dark World
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;

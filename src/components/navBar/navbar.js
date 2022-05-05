import {Nav, Navbar, Container, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { CartWidget } from "../cartWidget/CartWidget"
export const Navbar2 = () => {
    return (<Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">DELIVERIND</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="#action2">Nuevos Ingresos</Nav.Link>
          <NavDropdown title="Catálogo" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Buzos</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Camperas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Remeras</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar "
            className="me-2"
            aria-label=""
        />
          <Button variant="outline-success">Buscar</Button>
          <Button variant="outline-danger" className="mx-2"><CartWidget></CartWidget></Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
}  
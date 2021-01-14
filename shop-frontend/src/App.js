import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Button, Navbar, Nav, NavDropdown, Form, FormControl,
  Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardDeck
} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Jirayu Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <DropdownButton
                menuAlign="right"
                title="Cart"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Item eventKey="1">
                  <Container>
                    <Row>
                      <Col xs={6} md={4}>
                        <Image src="https://picsum.photos/seed/picsum/30/30" rounded />
                      </Col>
                    </Row>
                    <Row>
                      Item 1
                    </Row>
                  </Container>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2">
                  <Container>
                    <Row>
                      <Col xs={6} md={4}>
                        <Image src="https://picsum.photos/seed/picsum/30/30" rounded />
                      </Col>
                    </Row>
                    <Row>
                      Item 2
                    </Row>
                  </Container>
                </Dropdown.Item>
                <Dropdown.Divider />
              </DropdownButton>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container fluid>
        <Col style={{ height: '200px' }}>
        </Col>
        <Row
          className="justify-content-md-center">
          <Col></Col>
          <Col md={8}>
            <CardDeck>
              <Card style={{ color: "#000" }}>
                <Card.Img src="https://picsum.photos/seed/picsum/100/100" />
                <Card.Body>
                  <Card.Title>Item 1</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card style={{ color: "#000" }}>
                <Card.Img src="https://picsum.photos/seed/picsum/100/100" />
                <Card.Body>
                  <Card.Title>Item 2</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card style={{ color: "#000" }}>
                <Card.Img src="https://picsum.photos/seed/picsum/100/100" />
                <Card.Body>
                  <Card.Title>Item 3</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

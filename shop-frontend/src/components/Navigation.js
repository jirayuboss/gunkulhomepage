import React from 'react';

import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Button, Navbar, Nav, NavDropdown, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';

const Navigation = () => {
    return (
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
                        {
                            [
                                'Item 1',
                                'Item 2',
                                'Item 3',
                                'Item 4',
                                'Item 5',
                                'Item 6',
                                'Item 7',
                                'Item 8',
                                'Item 9',
                                'Item 10'
                            ].map((variant, index) => (
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
                            ))}
                        <Dropdown.Divider />
                    </DropdownButton>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
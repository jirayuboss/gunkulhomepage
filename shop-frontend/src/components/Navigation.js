import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Button, Navbar, Nav, ListGroup, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total: 0
        };
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Jirayu Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <DropdownButton
                            menuAlign="right"
                            title="Cart"
                            id="dropdown-menu-align-right"
                            onClick={() => {
                                this.setState({
                                    cart: global.cart,
                                    total: global.total
                                })
                            }}
                        >
                            {
                                this.state.cart.map((variant, index) => (
                                    <Dropdown.Item eventKey="2">
                                        <ListGroup horizontal>
                                            <ListGroup.Item>
                                                <Col xs={6} md={4}>
                                                    <Image style={{ maxWidth: 30 }} src={variant.image} rounded />
                                                </Col>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ width: 200, fontSize: 12, 'white-space': 'pre-wrap', 'overflow-wrap': 'break-word', border: 0 }}>
                                                {variant.title}
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ fontSize: 16, color: '#FF4500', border: 0 }}>
                                                ฿{variant.price}
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ border: 0 }}>
                                                <Button variant="outline-danger" size="sm" onClick={async () => {
                                                    var updatedCart = await global.cart.filter((_, i) => i !== index)
                                                    var updatedTotal = updatedCart.reduce((a, v) => a = a + v.price, 0)
                                                    global.cart = updatedCart
                                                    global.total = updatedTotal
                                                }}>Delete</Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Dropdown.Item>
                                ))}
                            <Dropdown.Divider />
                            <Container>
                                <Col style={{ textAlign: 'right' }}>
                                    Total: ฿{this.state.total} 
                                    <span> </span>
                                    <Button variant="secondary" size="sm" disabled>
                                        Pay (Coming soon!)
                                    </Button>
                                </Col>
                            </Container>
                        </DropdownButton>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
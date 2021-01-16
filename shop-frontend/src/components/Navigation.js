import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Button, Navbar, Nav, ListGroup, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';

class Navigation extends Component{
    render() {
        console.log('this is props:');
        console.log(this.props.cart);
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
                                this.props.cart.map((variant, index) => (
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
                                                    var updatedCart = await this.state.cart.filter((_, i) => i !== index)
                                                    var updatedTotal = updatedCart.reduce((a, v) => a = a + v.price, 0)
                                                    this.setState({
                                                        cart: updatedCart,
                                                        total: updatedTotal
                                                    })
                                                    console.log(updatedTotal)
                                                }}>Delete</Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Dropdown.Item>
                                ))}
                            <Dropdown.Divider />
                        </DropdownButton>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
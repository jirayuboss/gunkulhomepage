import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import {
    Button, Navbar, Nav, ListGroup, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';
import Navigation from './Navigation';
import updateCart from '../App';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            total: 0
        };
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        console.log(this.state.cart)
        return (
            <div className="App">
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
                                                        var updatedCart = await this.state.cart.filter((_, i) => i !== index)
                                                        var updatedTotal = await updatedCart.reduce((a,v) =>  a = a + v.price , 0 )
                                                        this.setState({
                                                            cart: updatedCart,
                                                            total: updatedTotal
                                                        })
                                                    }}>Delete</Button>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Dropdown.Item>
                                    ))}
                                <Dropdown.Divider />
                                <Container>
                                    <Col style={{ textAlign: 'right' }}>
                                        Total: ฿{this.state.total}
                                    </Col>
                                </Container>
                            </DropdownButton>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Container fluid>
                    <Col style={{ height: '200px' }}>
                    </Col>
                    <Row
                        className="justify-content-md-center">
                        <Col>
                        </Col>
                        <Col md={8}>
                            <CardColumns>
                                {
                                    this.state.products.map((variant, index) => (
                                        <Card>
                                            <Card.Img variant="top" src={variant.image} />
                                            <Card.Body>
                                                <Card.Title class="font-weight-bold">{variant.title}</Card.Title>
                                                <Card.Text>
                                                    {variant.description}
                                                </Card.Text>
                                                <Container>
                                                    <Row>
                                                        <Col className="text-left" xs={6} style={{ fontSize: 20, color: '#FF4500' }}>฿{variant.price}</Col>
                                                        <Col xs={6}>
                                                            <Button variant="primary" onClick={() => {
                                                                this.state.cart.push({
                                                                    title: variant.title,
                                                                    image: variant.image,
                                                                    price: variant.price
                                                                });

                                                                this.setState({
                                                                    cart: this.state.cart,
                                                                    total: this.state.cart.reduce((a,v) =>  a = a + v.price , 0 )
                                                                });
                                                            }}>+ Add to Cart</Button>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Body>
                                        </Card>
                                    )) || <Skeleton />
                                }
                            </CardColumns>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Home;

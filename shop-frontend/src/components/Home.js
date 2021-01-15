import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import {
    Button, Navbar, Nav, NavDropdown, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
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
        return (
            <div className="App">
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
                                                            <Button variant="primary">+ Add to Cart</Button>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Card.Body>
                                        </Card>
                                    ))
                                }
                            </CardColumns>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;

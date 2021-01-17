import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import {
    Button, Navbar, Nav, ListGroup, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';
import Navigation from './Navigation'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsCount: 0,
            products: [],
            cart: [],
            total: 0,
            items: 10,
            seeMoreButtonText: 'See more'
        };
    }

    seeLess() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.setState({
                    products: response.data,
                    items: this.state.items - 10
                });
                if (this.state.items <= this.state.productsCount) {
                    this.setState({
                        seeMoreButtonText: 'See more',
                        items: 10
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    seeMore() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.setState({
                    products: response.data,
                    items: this.state.items + 10
                });
                if (this.state.items >= this.state.productsCount) {
                    this.setState({
                        seeMoreButtonText: 'See less'
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.setState({
                    products: response.data,
                    productsCount: response.data.length
                });
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
                                    this.state.products.slice(0, this.state.items).map((variant, index) => (
                                        <Card>
                                            <a href={'http://localhost:3000/product/' + variant.id}>
                                                <Card.Img variant="top" src={variant.image} />
                                            </a>
                                            <Card.Body>
                                                <a href={'http://localhost:3000/product/' + variant.id}>
                                                    <Card.Title class="font-weight-bold">{variant.title}</Card.Title>
                                                </a>
                                                <Container>
                                                    <Row>
                                                        <Col className="text-left" xs={6} style={{ fontSize: 20, color: '#FF4500' }}>฿{variant.price}</Col>
                                                        <Col xs={6}>
                                                            <Button variant="primary" onClick={() => {
                                                                global.cart.push({
                                                                    title: variant.title,
                                                                    image: variant.image,
                                                                    price: variant.price
                                                                });
                                                                global.total = global.cart.reduce((a, v) => a = a + v.price, 0)
                                                            }}>+ Add to Cart</Button>
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
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col>
                            </Col>
                            <Col>
                                <Button variant="secondary" size="lg" onClick={() => {
                                    console.log()
                                    if (this.state.seeMoreButtonText == 'See more') {
                                        this.seeMore()
                                    }
                                    else {
                                        this.seeLess()
                                    }
                                }} block>
                                    {this.state.seeMoreButtonText}
                                </Button>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </div >
        );
    }
}

export default Home;

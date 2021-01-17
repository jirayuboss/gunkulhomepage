import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import {
    Button, Navbar, Nav, ListGroup, Form, FormControl,
    Dropdown, Container, DropdownButton, Card, Row, Col, Image, CardColumns
} from 'react-bootstrap';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }

    componentDidMount() {
        var url = "https://fakestoreapi.com/products/" + this.props.match.params.id;
        axios.get(url)
            .then(response => {
                this.setState({ product: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="App">
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <Card>
                                <Card.Img className="align-middle" style={{ maxWidth: 500, justifyContent: 'center' }} variant="top" src={this.state.product.image} />
                                <Card.Body>
                                    <Card.Title>{this.state.product.title}</Card.Title>
                                    <Card.Text>
                                        {this.state.product.description}
                                    </Card.Text>
                                    <Button variant="primary" href="/">Back to Home</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Product;

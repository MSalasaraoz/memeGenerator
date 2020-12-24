import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ items, getItems }) => {
    return (
        <Container>
            <Row>
                {items.map((item) => {
                    <Col key={item._id}>
                        <Card style={{ width: "18rem" }}>
                            <Link to={"/meme/" + item._id}>
                                <Card.Img variant="top" src={getItems(items.Link)} />
                                <Card.Body>
                                    <Card.Title className="text-dark">{item.itemName}</Card.Title>
                                    <Button variant="danger"> Ir al meme</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                }
                )
                }
            </Row>
        </Container>
    );
};

export default Cards;
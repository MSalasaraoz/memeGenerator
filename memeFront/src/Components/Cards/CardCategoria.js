import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardCategoria = () => {
    const [categoria, setCategoria] = useState([]);
    const [hasError, setErrors] = useState(false);

    async function fetchData() {
        const url = "https://proyecto-extra-rolling.herokuapp.com/api/categorys";
        const res = await fetch(url);
        console.log(res);
        res
            .json()
            .then((res) => setCategoria(res))
            .catch((err) => console.log("err" + err));
            console.log(hasError);
            console.log(categoria);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container>
            <Row>{
                categoria.map(item => (
                    <Col key={item._id}>
                        <Card style={{ width: "18rem" }}>
                                <Card.Body>
                                    <Card.Title className="text-dark">{item.name}</Card.Title>
                                    
                                </Card.Body>
                           
                        </Card>
                    </Col>
                
                ))
                }
            </Row>
        </Container>
    );
};

export default CardCategoria;

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Button, Container, Row,Col} from "react-bootstrap";
import {Link} from "react-router-dom";

const Cards = ({memes, getmemes}) => {
return(
<Container>
<Row>
{memes.map((meme) => {
<Col key={meme._id}>
<Card style= {{width: "18rem"}}>
<Link to={"/meme/"+ meme._id}>
<Card.Img variant="top" src={getmemes.Link}/>
<Card.Body>
<Card.Title className="text-dark">{meme.itemName}</Card.Title>
<Button variant="danger"> Ir al meme</Button>
</Card.Body>
</Link>
</Card>
</Col>
})}
</Row>
</Container>
);};

export default Cards;
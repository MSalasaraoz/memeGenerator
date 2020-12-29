import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";

const Cards = (props) => {
  const [memes, setMemes] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    const url = "https://proyecto-extra-rolling.herokuapp.com/api/items/";
    const res = await fetch(url);
    console.log(res);
    res
      .json()
      .then((res) => setMemes(res))
      .catch((err) => console.log("err" + err));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <div>
        {memes.map((meme) => (
          <ul key={meme._id}>
            <h3>{meme.itemName}</h3>
            <img src={meme.itemLink}></img>
            <h3>{meme.itemCommentary}</h3>
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default Cards;

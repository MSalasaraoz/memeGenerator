import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cards from "../Tarjetas/Cards";

const CardCategoria = () => {
  const [categorias, setCategoria] = useState([]);
  const [memes, setMemes] = useState([]);
  const [hasError] = useState(false);

  async function fetchData() {
    const url = "https://proyecto-extra-rolling.herokuapp.com/api/categorys";
    const res = await fetch(url);
    res
      .json()
      .then((res) => {
        setCategoria(res);
      })
      .catch((err) => console.log("err" + err));
    const urlItems = "https://proyecto-extra-rolling.herokuapp.com/api/items/";
    const resItems = await fetch(urlItems);
    resItems
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
        {categorias.map((categoria) => (
          <ul key={categoria._id}>
            <h3>{categoria.name}</h3>
            {memes
              .filter((x) => x.itemCategory == categoria._id)
              .map((meme) => (
                <li key={meme._id}>
                  <h1>{meme.itemName}</h1>
                  <img src = {meme.itemLink}></img>
                </li>
              ))}
          </ul>
        ))}
      </div>
    </Container>
  );
};

export default CardCategoria;

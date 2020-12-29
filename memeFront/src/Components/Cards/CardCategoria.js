import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from '../Tarjetas/Cards';

const CardCategoria = (props) => {
    const [categoria, setCategoria] = useState([]);
    const [meme, setMeme] = useState([]);
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
            <div>
               <h3>{meme.itemCategory}</h3> 
                {categoria.map(item => (
                   
                        <ul key={item._id}>
                             
                        <h3>{item.name}</h3>  
                        if ({item._id}=={item.itemCategory}) {
                           <Cards />  
                        }
                        </ul>
                ))
                }               
            </div>
        </Container>
    );
};

export default CardCategoria;

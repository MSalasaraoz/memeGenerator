const express = require("express");
const app = express();
const morgan = require("morgan")
//linkeamos el dotenv
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('./database');

//creacion del puerto 
const port = process.env.port || 4000;
// middleware morgan
app.use(morgan('dev'));

app.use('/api',require('./routes'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const item = {
//     itemId : "2",
//     itemName : "nombre",
//     itemLink: "link",
//     itemCategory : "categoria",
//     itemComentary : "comentario" 
//     } 

//  const category = {
//      catId : "1",    
//      catCategory : "categoria"
// } 

//  const commentary = {
//     commentaryId : "",
//     commentaryUser : "" 
//  } 
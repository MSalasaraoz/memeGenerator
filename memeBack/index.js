const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
//linkeamos el dotenv
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require('dotenv');
dotenv.config();
//manejo de base datos
const mongoose = require('./database');
//creacion del puerto
const port = process.env.port || 4000;
// middlewares
app.use(morgan('dev'));
//ruta
app.use('/api', require('./routes'));
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



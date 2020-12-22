const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
//linkeamos el dotenv
const dotenv = require("dotenv");
dotenv.config();
//manejo de base datos
const mongoose = require("./database");
//const router = require("./routes");
const app = express();
//creacion del puerto
const port = process.env.port || 4000;
// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//ruta
//app.use('/api/routes', router);
//app.use("/api", require("./routes"));
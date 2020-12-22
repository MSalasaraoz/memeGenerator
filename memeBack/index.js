const express = require("express");
const app = express();
const morgan = require("morgan");
//linkeamos el dotenv
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("./database");

//creacion del puerto
const port = process.env.port || 4000;
// middleware morgan
app.use(morgan("dev"));

app.use("/api", require("./routes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 3000;

const item = {
    itemId : "2",
    itemName : "nombre",
    itemLink: "link",
    itemCategory : "categoria",
    itemComentary : "comentario" 
    } 

 const category = {
     catId : "1",    
     catCategory : "categoria"
} 

 const commentary = {
    commentaryId : "",
    commentaryUser : "" 
 } 

app.get("/", (req, res) => {
  res.send("<h1> Hello World!</h1>");
});

// items de la aplicacion 
app.get("/items", (req, res) => {
    res.send(item);
  });

  app.get("/items/:id", (req, res) => {
    res.send(req.params);
  });

app.post("/items", (req, res) => {
  res.send("<h1> Hello World!</h1>");
});

// categorias de la aplicacion 
 app.get("/categories/:id", (req, res) => {
     res.send(category);
   });
  
 app.post("/categories", (req, res) => {
   res.send("<h1> Hello World!</h1>");
 });

// comentarios de la aplicacion 
app.get("/comments/:id", (req, res) => {
     res.send(commentary);
   });
  
 app.post("/comments", (req, res) => {
  res.send("<h1> Hello World!</h1>");
 });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const router = express.Router();
// rutas a los items
router.post("/items/", (req, res) => {
  console.log("Creando item....");
  res.send("Hola soy el nuevo item");
});


// app.get("/", (req, res) => {
//     res.send("<h1> Hello World!</h1>");
//   });
  
//   // items de la aplicacion 
//   app.get("/items", (req, res) => {
//       res.send(item);
//     });
  
//     app.get("/items/:id", (req, res) => {
//       res.send(req.params);
//     });
  
//   app.post("/items", (req, res) => {
//     res.send("<h1> Hello World!</h1>");
//   });
  
//   // categorias de la aplicacion 
//    app.get("/categories/:id", (req, res) => {
//        res.send(category);
//      });
    
//    app.post("/categories", (req, res) => {
//      res.send("<h1> Hello World!</h1>");
//    });
  
//   // comentarios de la aplicacion 
//   app.get("/comments/:id", (req, res) => {
//        res.send(commentary);
//      });
    
//    app.post("/comments", (req, res) => {
//     res.send("<h1> Hello World!</h1>");
//    });
  
module.exports = router;



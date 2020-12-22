const express = require("express");
const router = express.Router();
const {check} = require('express-validator');
const itemController = require('./controllers/itemController');
const categoryController = require('./controllers/categoryController');
const commentaryController = require('./controllers/commentaryController');
// rutas a los items
router.post("/items/",
    [
    check('itemName', 'El nombre del Meme es obligatorio!').not().isEmpty(),
    check('itemLink', 'El Meme es obligatorio!').not().isEmpty(),
    ],itemController.createItem);
//Traer memes/items
router.get('/items/', itemController.index);
//Traer un meme/item
router.get('/item/:id', itemController.findOneItem);
//Borrar un item/meme
router.delete('/item/:id', itemController.deleteItem);
//Borrado de todos los memes 
router.delete('/items/', itemController.deleteAllItems)
//Mostrar memes/items por categoria
//router.get('/item/:id', itemController.findOneItem);

//------- categoria
router.createCategory('/category', categoryController.createCategory);
router.get('/category/:id', categoryController.index);
router.delete('/category/:id', categoryController.deleteCategory);

//------- comentarios
router.createCommentary('/commentary/',commentaryController.createCommentary);
router.get('/commentary/:id', commentaryController.index);
router.delete('/commentary/:id', commentaryController.deleteCommentary);

module.exports = router;
const Item = require("../models/Item");
const { validationResult } = require("express-validator");

exports.createItem = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { itemName, itemLink, itemCategory, itemCommentary, owner } = req.body;
  try {
    //buscamos si existe un item o meme anterior
    let item = await Item.findOne({ itemName });
    if (item) {
      return res.status(400).json({ msg: "El Meme ya existe" });
    }
    item = new Item(req.body);
    console.log(item);
    // guardamos el meme en la bd
    await item.save();
    // const category = await Category.findById(owner);
    // revistar esta linea category.items.push(item)
    res.status(201).json({
      msg: "Meme creado correctamente!!!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error al intentar crear el meme",
    });
  }
};

// mostrar items 
exports.index = async (req, res) => {
  await Item.find({}, function (err, items) {
    if (!err) {
      if (items.length != 0) {
        console.log(items);
        res.status(200).send(items);
      } else {
        res.status(400).json({
          msg: "No existen memes",
        });
      }
    } else {
      console.log(err);
    }
  });
};

exports.findOneItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Meme no encontrado por Id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error" + err });
    });
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            "No se pudo eliminar el Meme " + id + " porque no fue encontrado.",
        });
      } else {
        res.send({ message: "Meme eliminado correctamente" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error" + err });
    });
};

exports.deleteAllItems = (req, res) => {
  Item.deleteMany({})
      .then((data) => {
      res.send({ message: "Memes eliminados!!! " + data.deleteCount });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error al intentar eliminar el meme" });
    });
};

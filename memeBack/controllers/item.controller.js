const Item = require("../models/Items");
const { validationResult } = require("express-validator");

const itemCtrl = {};

itemCtrl.createItem = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { itemName, itemLink, itemCategory, itemCommentary } = req.body;
  try {
    let newItem = await Item.findOne({ itemName });
    if (newItem) {
      return res.status(400).json({ msg: "Este MEME ya existe" });
    }
    newItem = new Item(req.body);

    await newItem.save();
    res.status(201).json({
      msg: "Meme subido correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error al subir el meme",
    });
  }
};

itemCtrl.getItems = async (req, res) => {
  await Item.find({}, function (err, items) {
    if (!err) {
      if (items.length != 0) {
        const arrayItems = [];
        items.forEach((eachitem) => {
          let item = {
            id: eachItem.id,
            itemName: eachItem.itemName,
            itemLink: eachItem.link,
            itemCategory: eachItem.itemCategory,
            itemCommentary: eachItem.itemCommentary,
            ItemDeleted: eachItem.itemDeleted,
          };
          if (!item.itemDeleted) {
            arrayItems.push(item);
          }
        });
        res.status(200).send(arrayItems);
      } else {
        res.status(400).json({
          msg: "No existen Memes",
        });
      }
    } else {
      console.log(err);
    }
  });
};

itemCtrl.getItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.itemDeleted != false) {
        res.status(404).send({ msg: "No se encontró el Meme con el ID " + id });
      } else {
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        msg: "Error " + err,
      });
    });
};

itemCtrl.deleteItem = (req, res) => {
  const id = req.params.id;
  req.body = { itemDeleted: true };

  Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          msg: "No se pudo borrar el Meme con el ID " + id,
        });
      } else {
        res.status(200).send({
          msg: "Meme eliminado exitosamente",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        msg: "error" + err,
      });
    });
};

// ------------------------------------------------------------------------

itemCtrl.getItemsDeleted = async (req, res) => {
  await Item.find({}, function (err, Items) {
    if (!err) {
      if (Items.length != 0) {
        const arrayItemsDeleted = [];
        items.forEach((eachItem) => {
          let item = {
            id: eachItem.id,
            itemName: eachItem.itemName,
            itemLink: eachItem.link,
            itemCategory: eachItem.itemCategory,
            itemCommentary: eachItem.itemCommentary,
            itemDeleted: eachItem.itemDeleted,
          };
          if (item.itemDeleted) {
            arrayItemsDeleted.push(item);
          }
        });
        res.status(200).send(arrayItemsDeleted);
      } else {
        res.status(400).json({
          msg: "No existen Memes borradas",
        });
      }
    } else {
      console.log(err);
    }
  });
};

itemCtrl.getItemDeleted = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.itemDeleted != true) {
        res
          .status(404)
          .send({ msg: "No se encontró el Meme con el ID " + id });
      } else {
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        msg: "Error " + err,
      });
    });
};

itemCtrl.recoverItemDeleted = (req, res) => {
  const id = req.params.id;
  req.body = { itemDeleted: false };

  Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          msg: "No se pudo recuperar la Meme con el ID " + id,
        });
      } else {
        res.status(200).send({
          msg: "Meme recuperada exitosamente",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        msg: "error" + err,
      });
    });
};

module.exports = itemCtrl;

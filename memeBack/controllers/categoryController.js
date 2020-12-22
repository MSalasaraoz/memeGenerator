const Category = require("../models/Category");
const { validationResult } = require("express-validator");

//Crear una categoria
exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  try {
    let newCategory = await Category.findOne({ name });
    if (newCategory) {
      return res.status(400).json({ msg: "Esta Categoria ya existe!" });
    }
    newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json({
      msg: "Categoria creada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error al crear la categoria",
    });
  }
};

//Mostrar todas las categorias
exports.index = async (req, res) => {
  await Category.find({}, function (err, categorys) {
    console.log("devolver categoria " + categorys);
    if (!err) {
      if (categorys.length != 0) {
        console.log(categorys);
        res.status(200).send(categorys);
      } else {
        res.status(400).json({
          msg: "No existen categorias",
        });
      }
    } else {
      console.log(err);
    }
  });
};

//eliminar Categoria
exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            "No se pudo eliminar la categoria" +
            id +
            "porque no fue encontrada.",
        });
      } else {
        res.send({ message: "Categoria eliminada correctamente" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error" + err });
    });
};

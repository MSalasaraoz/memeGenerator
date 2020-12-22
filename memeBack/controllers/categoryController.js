const Category = require("../models/Category");
const Item = require("../models/Item");
const { validationResult } = require("express-validator");

exports.createCategory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {name} = req.body;
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
      msg: "Hubo un error al crea la categoria",
    });
  }
};

/*
categoryCtrl.getCategorys = async (req, res) => {
  await Category.find({}, function (err, categorys) {
    if (!err) {
      if (categorys.length != 0) {
        const arrayCategorys = [];
        categorys.forEach((eachcategory) => {
          let category = {
            categoryId: eachCategory.id,
            categoryName: eachCategory.categoryName,
            CategoryDeleted: eachCategory.categoryDeleted,
          };
          if (!category.CategoryDeleted) {
            arrayCategorys.push(category);
          }
        });
        res.status(200).send(arrayCategorys);
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

categoryCtrl.getCategory = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.categoryDeleted != false) {
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

categoryCtrl.deleteCategory = (req, res) => {
  const id = req.params.id;
  req.body = { categoryDeleted: true };

  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

categoryCtrl.getCategorysDeleted = async (req, res) => {
  await Category.find({}, function (err, Categorys) {
    if (!err) {
      if (Categorys.length != 0) {
        const arrayCategorysDeleted = [];
        categorys.forEach((eachCategory) => {
          let category = {
            id: eachCategory.id,
            categoryName: eachCategory.categoryName,
            categoryDeleted: eachCategory.categoryDeleted,
          };
          if (category.categoryDeleted) {
            arrayCategorysDeleted.push(category);
          }
        });
        res.status(200).send(arrayCategorysDeleted);
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

categoryCtrl.getCategoryDeleted = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.categoryDeleted != true) {
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

categoryCtrl.recoverCategoryDeleted = (req, res) => {
  const id = req.params.id;
  req.body = { categoryDeleted: false };

  Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
*/

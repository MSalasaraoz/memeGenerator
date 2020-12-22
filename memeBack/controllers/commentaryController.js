const Commentary = require("../models/Commentary");
const Item = require("../models/Item");
const { validationResult } = require("express-validator");

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {commentary} = req.body;
  try {
    newCommentary = new Commentary(req.body);
    await newCommentary.save();
    res.status(201).json({
      msg: "Comentario guardado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error al guardar el comentario",
    });
  }
};

// mostrar items 
exports.index = async (req, res) => {
  await Commentary.find({}, function (err, commentarys) {
    if (!err) {
      if (commentarys.length != 0) {
      if (commentarys.commentary == Item._id){
        console.log(commentarys);
        res.status(200).send(commentarys);
      }
      } else {
        res.status(400).json({
          msg: "No existen comentarios",
        });
      }
    } else {
      console.log(err);
    }
  });
};

exports.deleteCommentary = (req, res) => {
  const id = req.params.id;
  Commentary.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message:
            "No se pudo eliminar el comentario " + id + " porque no fue encontrado.",
        });
      } else {
        res.send({ message: "Comentario eliminado correctamente" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error" + err });
    });
};

exports.deleteAllCommentarys = (req, res) => {
  Commentary.deleteMany({})
      .then((data) => {
      res.send({ message: "Comentarios eliminados!!! " + data.deleteCount });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error al intentar eliminar el comentario" });
    });
};
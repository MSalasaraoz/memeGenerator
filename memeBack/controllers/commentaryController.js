const Commentary = require("../models/Commentary");
const Item = require("../models/Item");
const { validationResult } = require("express-validator");

/*

commentaryCtrl.createCommentary = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { commentary} = req.body;
  try {
    let newCommentary = await Commentary.findOne({ commentaryName });
    if (newCommentary) {
      return res.status(400).json({ msg: "Este MEME ya existe" });
    }
    newCommentary = new Commentary(req.body);

    await newCommentary.save();
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

commentaryCtrl.getCommentarys = async (req, res) => {
  await Commentary.find({}, function (err, commentarys) {
    if (!err) {
      if (commentarys.length != 0) {
        const arrayCommentarys = [];
        commentarys.forEach((eachcommentary) => {
          let commentary = {
            id: eachCommentary.id,
            commentaryName: eachCommentary.commentaryName,
            commentaryLink: eachCommentary.link,
            commentaryCategory: eachCommentary.commentaryCategory,
            commentaryCommentary: eachCommentary.commentaryCommentary,
            CommentaryDeleted: eachCommentary.commentaryDeleted,
          };
          if (!commentary.commentaryDeleted) {
            arrayCommentarys.push(commentary);
          }
        });
        res.status(200).send(arrayCommentarys);
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

commentaryCtrl.getCommentary = (req, res) => {
  const id = req.params.id;
  Commentary.findById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.commentaryDeleted != false) {
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

commentaryCtrl.deleteCommentary = (req, res) => {
  const id = req.params.id;
  req.body = { commentaryDeleted: true };

  Commentary.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

commentaryCtrl.getCommentarysDeleted = async (req, res) => {
  await Commentary.find({}, function (err, Commentarys) {
    if (!err) {
      if (Commentarys.length != 0) {
        const arrayCommentarysDeleted = [];
        commentarys.forEach((eachCommentary) => {
          let commentary = {
            id: eachCommentary.id,
            commentaryName: eachCommentary.commentaryName,
            commentaryLink: eachCommentary.link,
            commentaryCategory: eachCommentary.commentaryCategory,
            commentaryCommentary: eachCommentary.commentaryCommentary,
            commentaryDeleted: eachCommentary.commentaryDeleted,
          };
          if (commentary.commentaryDeleted) {
            arrayCommentarysDeleted.push(commentary);
          }
        });
        res.status(200).send(arrayCommentarysDeleted);
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

commentaryCtrl.getCommentaryDeleted = (req, res) => {
  const id = req.params.id;
  Commentary.findById(id)
    .then((data) => {
      console.log(data);
      if (!data || data.commentaryDeleted != true) {
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

commentaryCtrl.recoverCommentaryDeleted = (req, res) => {
  const id = req.params.id;
  req.body = { commentaryDeleted: false };

  Commentary.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

module.exports = commentaryCtrl;
*/
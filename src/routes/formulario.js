var express = require("express");
var router = express.Router();

var formularioController = require("../controllers/formularioController");


router.post("/Enviar", function (req, res) {
    formularioController.Enviar(req, res);
});
router.get("/grafico1", function (req, res) {
    formularioController.grafico1(req, res);
});
router.get("/grafico2", function (req, res) {
    formularioController.grafico2(req, res);
});

module.exports = router;
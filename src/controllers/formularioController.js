var formularioModel = require("../models/formularioModel");

function Enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var objetivo = req.body.objetivoServer;
    var genero = req.body.generoServer;
    var altura = req.body.alturaServer;
    var dias = req.body.diasServer;
    var idUsuario = req.body.idUsuario;
    

    // Faça as validações dos valores
    if (objetivo == undefined) {
        res.status(400).send("Seu objetivo está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu genero está undefined!");
    } else if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else if (dias == undefined) {
        res.status(400).send("Seus dias estão undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        formularioModel.Enviar(objetivo, genero, altura, dias, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do formulário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function grafico1(req, res) {

   

    formularioModel.grafico1().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function grafico2(req, res) {

   

    formularioModel.grafico2().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    Enviar,
    grafico1,
    grafico2
}
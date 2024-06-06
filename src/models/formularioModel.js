var database = require("../database/config")

function Enviar(objetivo, genero, altura, dias, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", objetivo, genero, altura, dias, idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO formulario (objetivo, genero, altura, dias, fkUsuario) VALUES ('${objetivo}', '${genero}', '${altura}', '${dias}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function grafico1() {

    var instrucaoSql = ` select f.objetivo, count(*) as obj from formulario f group by f.objetivo;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico2() {

    var instrucaoSql = `  select f.genero, count(*) as gen from formulario f group by f.genero;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    Enviar,
    grafico1,
    grafico2
}


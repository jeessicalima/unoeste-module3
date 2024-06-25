const express = require('express');
const bodyParser = require('body-parser');


const os = require('os');

const app = express();

app.get('/', (request, response) => {
    return response
    .status(200)
    .json({
        status: true,
        testeAtributo: false,
        testeMerge:(1+1),
        mensagem: "OK"
    });
});

app.get('/redirect', (request, response) => {
    return response.redirect(307, 'http://www.globo.com');
});

app.get('/liveness', (request, response) => {
    //me retorna se a aplicação esta 'viva'
    //viva: esta disponível
    return response
    .status(200)
    .json({
        status: true,
        path:"",
        gid:"",
        uid:""
    });
});

app.get('/readiness', (request, response) => {
    //me retorna se a aplicação esta 'pronta'
    //pronta: esta com todos seus componentes disponiveis para executar as suas funções de responsabilidade
    return response
    .status(500)
    .json({
        status: true,
        mensagem: "readiness",
        os: os.platform(),
        freemem: os.freemem(),
        homedir: os.homedir()
    });
});

module.exports = app;
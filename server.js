const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

//Carrega o BackEnd Atraves da rota raiz
app.use(express.static(__dirname + '/src/view/static'));

requireDir('./src/models');

app.use('/api',require('./src/routes'));

app.listen('8160');
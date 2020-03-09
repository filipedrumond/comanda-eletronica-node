'use strict';

const express = require('express');
var routes = require('./routes');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();

app.use('/build', express.static('html/build'));
app.use('/assets', express.static('html/assets'));

/* NO ROUTES HERE TRATAMENTO PARA O VUE GERENCIAR MAS CUIDADO FUTURO PARA CASO DE POSTS OU TRATAMENTO DE FOTOS ETC */
app.use('*', routes);

app.listen(PORT, HOST);

console.log(`Running on \x1b[33mhttp://${HOST}:${PORT}\x1b[0m`);
console.log(`Or on \x1b[34mdocker\x1b[0m -> \x1b[33mhttp://${HOST}:${505}\x1b[0m`);
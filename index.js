// EPPR Plantilla NodeJS
// Escuela de Programación y Pensamiento Recursivo
// eppr.link
// Autor: @lxps 2020
var express = require('express');
var app = express();

// Antes de iniciar recuerda:
// 1) Iniciar un nuevo proyecto de Node con el comando:
// sudo npm init
// 2) Instalar los módulos express & ejs con el comando:
// sudo npm install --save express ejs

app.set('view engine', 'ejs')
app.use(express.static('public'))
server = app.listen(3000, function () {
    console.log('Node app corriendo en el puerto 3000!');
    console.log('Para iniciar visita: http://10.55.0.1:3000');
});
app.get('/', function (req, res) {
    res.render('index')
});
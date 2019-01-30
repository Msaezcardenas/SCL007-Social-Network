let expres = require('expres');

let app = expres();
let url = require('url');
let puertos = process.env.PORT || 8080;

//dar permisos a los dominios
app.use(function(req, res, next){
    let permitidos = [http]
})
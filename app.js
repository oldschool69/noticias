app = require('./config/server')

//var rotaNoticias = require('./app/routes/noticias')(app);

//var rotaHome = require('./app/routes/home')(app);

//var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function(){ //Esse lixo usa callback a rodo!!!

	console.log("Servidor ON");
});


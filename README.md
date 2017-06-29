#Proyecto Bluemix IBM-Chile (Students)

Proyecto para Banco Santander sobre análisis de Tweets. Este proyecto usa aplicaciones directas de Bluemix y es desarrollado a modo de CEAN stack (Cloudant, ExpressJS, AngularJS y NodeJS).

#Como ejecutarlo por primera vez:

	-Clonar el repositorio (git clone https://www.github.com/sebaatd/Tweets-Santander)
	-En la carpeta principal ejecutar:
		'npm install'
		'bower install'

#Iniciar la aplicación

Ir al archivo 'config.js' y modificar los siguientes datos:

	-config.cloudant.account = "usuarioCloudant"
	-config.cloudant.password = "contraseñaCloudant"

### Correr la aplicación

Como cualquier aplicación express:

    node app.js

Es recomendable instalar nodemon para no estar ejecutando el comando anterior cada vez que se haga un cambio:
	
	'npm install -g nodemon'

## Directory Layout 
    
    app.js              --> app config
    package.json        --> for npm
    bower.json          --> for static JS files
    public/             --> all of the files to be used in on the client side
      bootstrap/        --> all bootstrap files
        css/
        img/
        js/
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        dashboard.js    --> script dashboard
        liquidFillGauge.js --> script gauges
    routes/
      cloudant.js            --> route for serving JSON, contains Cloudant configuration
      routes.js         --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app

# Los colonos de Catan
El siguiente proyecto implementa el fronted del clásico juego de mesa para un subconjunto de sus reglas. 

Para una introducción al juego se recomienda  leer sus reglas [básicas] en principio y luego sus reglas [detalladas].

[básicas]: https://drive.google.com/file/d/1xAtBKKUcGGNYGmStsaMez-lXh7LsySiM/view
[detalladas]: https://drive.google.com/file/d/11sOYT_F_m4w6JRAGLTlwvNwMjfuMlXPN/view

## Getting Started

### Prerequisitos

Se necesita la instalacion de:

 * node 12.10.0
 * npm 6.10.3

### Instalacion
Descargar el repositorio e instalar:
```bash
$ git clone https://gitlab.com/chrism4/auxtmp.git
$ cd auxtmp
$ npm install
```

## Usage

En el directorio raíz del repositorio ejecutar:
```bash
npm start
```
Después de que la aplicación completa su carga ir al navegador en la siguiente ruta: http://localhost:3000


## Running the tests

### Coding Style

Nosotros seguimos el code style [airbnb javascript].
Para ejecutar la prueba de violación de estilo: 

```bash
$ ./node_modules/.bin/eslint yourfile.js
```

[airbnb javascript]: https://github.com/airbnb/javascript

### Unit tests

Para probar los componentes se requiere la instalación del siguiente conjunto de librerías:

```bash
$ npm install @babel/core @babel/preset-env @babel/preset-react @babel/register babel-loader babel-preset-es2015 babel-preset-react babel-preset-react-app-babel-7 chai enzyme enzyme-adapter-react-16 ignore-styles mocha --save-dev
``` 

A continuación editar el archivo *.babelrc* agregando:
```bash
{                                                                                                                                                                                
    "presets": ["react-app"],
    "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
```

Por ultimo editamos la sección *"scripts"* del archivo *package.json* agregado la siguiente linea de *"test"*:
```bash
"scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
	"test": "NODE_ENV=test mocha --require @babel/register --require ignore-styles test/*.test.*",
	"eject": "react-scripts eject"
},
```
Para ejecutar nuestros tests simplemente invocamos:

```bash
$ npm test
```


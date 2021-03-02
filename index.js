const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./app/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


dotenv.config();

require('./app/config/db.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./app/routes');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);


app.listen(port, ()=>{
  console.log('app running on port ',port);
});

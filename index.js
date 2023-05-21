const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


dotenv.config();

require('./app/config/db.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./app/routes');


app.use('/api', routes);


app.listen(port, ()=>{
  console.log('app running on port ',port);
});

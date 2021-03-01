const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DB = process.env.MONGO_URL;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log('DB connection successful'))
  .catch((err)=> console.log(err));
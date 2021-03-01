const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser)

app.listen(port, ()=>{
  console.log('app running on port ',port)
})
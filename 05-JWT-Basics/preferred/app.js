require('dotenv').config()

const express = require('express')
const app = express()
const main = require('./routes/main')

app.use(express.json())

app.use('/api/v1', main)

const port = process.env.PORT || 3000

const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Loading Stuff On Port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  
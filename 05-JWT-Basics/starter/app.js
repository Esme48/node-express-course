require('dotenv').config(); //This is from  module 04
require('express-async-errors');

const express = require('express'); //This is from module 03
const app = express();

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found');//Error Handling Can Be Handled in 03 module
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());//We need to access the data from the post route so this is needed

app.use('/api/v1', mainRouter)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

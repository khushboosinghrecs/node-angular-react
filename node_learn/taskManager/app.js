const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
// require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
// const { TextEncoder, TextDecoder } = require("util");
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
// const port= process.env.PORT || 500;
const port = 8000;

const start = async() =>{
    try{
        // await connectDB(process.env.MONG0_URI)
        await connectDB();
        app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
    }
}

start();
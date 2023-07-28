const express = require('express');
const app = express();
const cors= require('cors');
const dotEnv = require("dotenv");
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.use(cors());
dotEnv.config();

// request parser
app.use(express.json());

// internal imports
const productRouter = require("./api/routers/productRouter");

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successfully!"))
  .catch((err) => console.log(err));


// product api
app.use('/products', productRouter);

app.listen(port, ()=> {
    console.log(`server connected to the port: ${port}`);
})
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
const categoryRouter = require("./api/routers/categoryRouter");

// database connection
mongoose
  .connect(`mongodb+srv://productCrud:0CQve2jZzSVMq174@cluster0.vsbhbi4.mongodb.net/productCrud?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successfully!"))
  .catch((err) => console.log(err));


// category api
app.use("/categories", categoryRouter)

// product api
app.use('/products', productRouter);


// listener
app.listen(port, ()=> {
    console.log(`server connected to the port: ${port}`);
})
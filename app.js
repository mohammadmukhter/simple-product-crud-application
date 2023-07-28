const express = require('express');
const app = express();
const cors= require('cors');
const port = process.env.PORT || 3000;

app.use(cors());


// internal imports
const productRouter = require("./api/routers/productRouter");

app.use('/products', productRouter);

app.listen(port, ()=> {
    console.log(`server connected to the port: ${port}`);
})
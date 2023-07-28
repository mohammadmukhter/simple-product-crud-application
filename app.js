const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res)=> {
    res.json({message: 'server connected...'})
});

app.listen(port, ()=> {
    console.log(`server connected to the port: ${port}`);
})
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const product = require('./models/productmodels');
const productRoute = require('./routes/product.route')
//const product = require('./models/productmodels');

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//routes
app.use("/api/products",productRoute)

app.get('/',(req,res,next)=>{
    res.send('hello world');
})







mongoose.connect('mongodb+srv://admin:WRiHpaFhmOZUVV2N@backenddb.4zseng3.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB').then(()=>{
    console.log('connected');
    app.listen(3000,()=>{
        console.log('server is working');
    })
}).catch(()=>{
    console.log('Not connected');
})
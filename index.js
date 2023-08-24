const { error } = require('console');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
server.use(express.json());

main().catch(error=>console.log(error));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');
    console.log("Database connected");
}
server.get('/', (req,res)=>{
    res.json({status:'success'})
})

server.listen(8000,()=>{
    console.log("Server Started");
})
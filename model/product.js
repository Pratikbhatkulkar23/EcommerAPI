const mongoose = require('mongoose');

const {schema} = mongoose;


const ProductSchema = new schema({
    title:{type:string,require:true},
    description :{type:string,require:true},
    price:{Number},
    rating:{Number,min:[1 ,'number requers']},
})

const product = mongoose.model('product',ProductSchema);
module.exports = product;
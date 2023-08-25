const mongoose=require('mongoose')
const schema=mongoose.Schema

const produitSchema=new schema (
    {

name:{
    type:String,
    required:true
},
price:{
    type:String,
    required:true
},

    }
)

const produit=mongoose.model("product",produitSchema)
module.exports=produit
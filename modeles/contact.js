const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactSchema=new schema (
    {

name:{
    type:String,

},
lastname:{
    type:String,

},
phone:{
    type:String,

},

    }
)

const contact=mongoose.model("repertoire",contactSchema)
module.exports=contact
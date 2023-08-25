const express=require('express')
const productRouter=express.Router()
const produit=require('../modeles/produit')


productRouter.post('/add',async(req,res)=>{
    try {
        const newproduct= new produit(req.body)
        const result=await newproduct.save()
        res.send({newproduct:result,msg:'add product successfuly'})
        
    } catch (error) {
        console.log(error)
    }
})

module.exports=productRouter
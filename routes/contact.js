const express=require('express')
const contactRouter=express.Router()
const contact=require('../modeles/contact')


contactRouter.post('/add',async(req,res)=>{
    try {
        const jdid= new contact(req.body)
        const result=await jdid.save()
        res.send({newcontact:result,msg:'add contact successfuly'})
        
    } catch (error) {
        console.log(error)
    }
})

module.exports=contactRouter
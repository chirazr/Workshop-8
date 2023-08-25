const express=require('express')
require('dotenv').config()
const connectdb=require('./config/dbconnect')

const app = express()
port=process.env.PORT
connectdb()
app.use(express.json())

app.use('/contact',require('./routes/contact'))
app.use('/product',require('./routes/produit'))



app.listen(port,(err)=>err?console.log(err):console.log(`server is runnig in ${port}`))
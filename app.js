const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname , 'public')))
const DataBase_URL = 'mongodb://localhost:27017/MiniCookieSession'
const startServer = async ()=>{
    try{
        await mongoose.connect(DataBase_URL)
        console.log('connect database');
        app.listen(3000,()=>{
            console.log('run server on port 3000');
        })
    }catch(er){
        console.log(er);
    }
}
startServer()
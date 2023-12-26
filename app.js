const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
// =====ROUTES==== //
const homeRoute = require('./routes/home')
const adminRoute = require('./routes/admin')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , 'public')))
const DataBase_URL = 'mongodb://localhost:27017/MiniCookieSession'

// connect ROutes //
app.use(homeRoute)
app.use(adminRoute)

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
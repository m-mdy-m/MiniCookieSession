const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const User = require('./models/user')
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
        const user = await User.findById('658afb8f4184970c05e8875d')
        if(!user){
            const user = await new User({
                name : 'mahdi',
                phone : "09123215467"
            })
            user.save()
            console.log('user created');
        }
        app.listen(3000,()=>{
            console.log('run server on port 3000');
        })
    }catch(er){
        console.log(er);
    }
}
startServer()
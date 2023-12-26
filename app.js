const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
const CMS = require('connect-mongodb-session')(session)
const User = require('./models/user')
// =====ROUTES==== //
const homeRoute = require('./routes/home')
const adminRoute = require('./routes/admin')
const authRoute = require('./routes/auth')

app.set('view engine', 'ejs')
app.set('views', 'views')
const DataBase_URL = 'mongodb://localhost:27017/MiniCookieSession'

const store = new CMS({
    uri : DataBase_URL,
    collection : 'session'
})

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , 'public')))

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized : false,
    store : store
}))

app.use(async ( req,res,next)=>{
    try{
        const user = await User.findById('658afb8f4184970c05e8875d')
        req.user = user
        next()
    }catch(e){
        console.log(e)
    }
})


// connect ROutes //
app.use(homeRoute)
app.use(adminRoute)
app.use(authRoute)

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
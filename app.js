const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose= require("mongoose")
const passport =require("passport")

// we are creating an eviroment file
// require("dotenv").config();


//importing express session
const session =require("express-session")


// importing database file directly
const config = require("./config/database")
const bodyParser =require('body-parser')


const User =require("./models/userModel")
const employeesRoutes =require("./routes/employeesRoutes")
const aboutRoute =require("./routes/aboutRoute")
const contactsRoute =require("./routes/contactsRoute")
const ufarmIndexRoute = require("./routes/ufarmIndexRoute")
const registerRoute = require("./routes/registerRoute")
const signupRoutes = require("./routes/signupRoutes")
const authRoutes = require("./routes/authRoutes")
const ufRoutes = require("./routes/ufRoutes")
const aoRoutes = require("./routes/aoRoutes")
const foRoutes = require("./routes/foRoutes")

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized:false
}))

// * Passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())


// creating a connection between the controller and the database
mongoose.connect(config.database,{
    //useNew collects data from the front end then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db= mongoose.connection
  // checking if db has connected
  db.once("open", ()=>{
    console.log("connected to db")
  })
  db.on("error",(err)=>{
  console.error(err)
  })



  

app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, "public")));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",employeesRoutes)
app.use("/", aboutRoute)
app.use("/",contactsRoute)
app.use("/",ufarmIndexRoute)
app.use("/",registerRoute)
app.use("/",signupRoutes)
app.use("/",authRoutes)
app.use("/",ufRoutes)
//app.use("/",aoRoutes)
app.use("/",foRoutes)

app.get("*", (req,res)=>{
    res.status(404).send("page does not exist")
})










app.listen(3000, ()=> console.log('listening on port 3000'))



















//app.listen(process.env.port||3000);
//serving an html file using nodejs
//__dirname will resolve to your folder
//  router.get('/, req,res') => {
//     res.sendfile(path.join(__dirname + '/index.html'))
//  }
// app.get('/',(req,res) => {
//     res.send('Homepage, Hello World');
// });


// app.get('/about',(req,res) => {
//     res.send('about page . Nice');
//});

//app.listen(3000, ()=> console.log('listening on port 3000'))
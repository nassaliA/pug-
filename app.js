const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/DB")

const employeesRoutes =require("./routes/employeesRoutes")
const aboutRoute =require("./routes/aboutRoute")
const contactsRoute =require("./routes/contactsRoute")
const ufarmIndexRoute = require("./routes/ufarmIndexRoute")
const registerRoute = require("./routes/registerRoute")


app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))



app.use("/",employeesRoutes)
app.use("/", aboutRoute)
app.use("/",contactsRoute)
app.use("/",ufarmIndexRoute)
app.use("/",registerRoute)
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
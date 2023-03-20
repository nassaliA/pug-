const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const employeesRoutes =require("./routes/employeesRoutes")
const aboutRoute =require("./routes/aboutRoute")
const contactsRoute =require("./routes/contactsRoute")



app.set("view engine","pug")
app.set("views","./views")
//app.set("views", path.join(__dirname,"views"))



//router.get("/",(req,res) => { 
//res.render("employees")
//})


//router.get("/about",(req,res) => { 
    //res.render("about", {title: "hello", message: "how are you doing ?"})
    //})

//router.get("/contacts",(req,res) =>{
//res.render("contacts")
//})




app.use("/",employeesRoutes)
app.use("/", aboutRoute)
app.use("/",contactsRoute)

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
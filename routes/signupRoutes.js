const express = require('express');
const router = express.Router();
//imported model
const User = require("../models/userModel")

router.get("/signup",(req,res)=>{
    res.render("signup")
  });

  router.post("/signup", async(req,res)=>{
    try{
      const user = new User(req.body);
    
    let userName = await User.findOne({userName: req.body.userName});
    if(userName) = {return res.send("this unique id already exists")
  }
  else{
    await User.register(user, req.body.password,(error)=> 
    if (error){
      throw error
  }})
    res.redirect("/student")
    
  
  }
})


module.exports = router
const express = require('express');
const router = express.Router();
//imported model
const User = require("../models/userModel");
const passport = require('passport');

router.get("/login",(req,res)=>{
    res.render("login")
  });



router.post("/login",passport.authenticate("local", {failureRedirect: "/login"}), async(req,res=>{
    req.session.user=req.user
    let userExist= await User.findOne({username: req.user.username,password: req.user.password});
}))











  module.exports = router


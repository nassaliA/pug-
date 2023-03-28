const  express = require("express");
const router =express.Router();
const Registration= require("../models/registermodel")

router.get("/register",(req,res)=>{
res.render("register")})



// this should always be the last line in your routes file
module.exports = router


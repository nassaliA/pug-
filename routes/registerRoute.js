const  express = require("express");
const router =express.Router();

router.get("/register",(req,res)=>{
res.render("register")})



// this should always be the last line in your routes file
module.exports = router


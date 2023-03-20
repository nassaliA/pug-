const  express = require("express");
const router =express.Router();

router.get("/about",(req,res)=>{
res.render("about")})



// this should always be the last line in your routes file
module.exports = router
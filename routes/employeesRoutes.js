const  express = require("express");
const router =express.Router();

router.get("/",(req,res)=>{
res.render("employees")})



// this should always be the last line in your routes file
module.exports = router


//assignment convert project to pug, convert projects to mvc,
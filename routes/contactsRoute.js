const  express = require("express");
const router =express.Router();

router.get("/contacts",(req,res)=>{
res.render("contacts")});



// this should always be the last line in your routes file
module.exports = router
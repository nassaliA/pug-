const express = require("express");
const router = express.Router();


router.get("/registeF",(req,res)=>{
    res.render("registeF")
});


module.exports = router
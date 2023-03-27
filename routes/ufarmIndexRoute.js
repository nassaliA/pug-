const express = require("express");
const router = express.Router();


router.get("/ufarmIndex",(req,res)=>{
    res.render("ufarmIndex")
})


module.exports = router


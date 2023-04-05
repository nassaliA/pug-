const express = require('express');
const router = express.Router();
const  connectEnsureLogin = require('connect-ensure-login');


router.get("/ufdash",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("ufdash")})
    
    
    
    // this should always be the last line in your routes file
    module.exports = router
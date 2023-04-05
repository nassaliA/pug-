const express = require('express');
const router = express.Router();
const  connectEnsureLogin = require('connect-ensure-login');


router.get("/aodash",connectEnsureLogin.ensureLoggedIn(),(req,res)=>{
    res.render("aodash")})
    
    
    
    // this should always be the last line in your routes file
    module.exports = router
// const express = require('express');
// const router = express.Router();
// const connectEnsureLogin = require("connect-ensure-login")
// const Products = require("../models/productsModel")
// const multer = require("multer")

// let storage = multer.diskStorage({destination:"/public/images", filename:(req,file,cb)=>{cb(null,file.originalname)}})
// let imageupload = multer({storage:storage})
// // connectEnsureLogin.ensureLoggedIn(),
// router.get("/aodash", (req,res)=>{
//     res.render("aoDash")
// });
// router.post("/aodash", imageupload.single("productimage"),(req,res)=>{
//     console.log(req.file)
//     try {
//       const products= new Products(req.body)  
//       products.productimage= req.file.path
//       products.save()
//       res.redirect("/aodash")
//     } catch (error) {
//         res.send("upload failed ${error}")
//     }
//     // res.render("aoDash")
// });



// module.exports= router
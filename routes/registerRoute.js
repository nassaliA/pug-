const express = require('express');
const router = express.Router();
//imported model
const Register = require("../models/registermodel")

router.get("/register",(req,res)=>{
    res.render("register")
  });



router.post("/register", async(req,res)=>{
    try{
        const register = new Register(req.body);
        await register.save()
        res.redirect("/student")
        console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
})


//we redirect to a path then render a file
// router.get("/student", async(req,res)=>{
//     try{
//         let items = await Register.find();
//         // console.log(items)
//         let fees = await Register.aggregate([
//             {
//                 //"$group": {category: "$parents",
//                 "$group": {_id: "$all", 
//                 totalFees: {$sum: "$fees"}}
//             }
//         ])
// console.log(fees)
//         res.render("student",{students:items, total:fees[0]})
//     }
//     catch(err){
//         console.log(err)
//         res.send("failed to retrive student details")
//     }
//   });

//   router.post("/student/delete", async(req,res)=>{
//     try{
//         //deleteOne is a inbuilt record 
//         await Register.deleteOne({_id:req.body.id});
//         res.redirect("back")
//     }

//     catch(err){
//         console.log(err)
        
//     }
//   });

// router.get("/edit_student/:id", async(req,res)=>{
//     try{
//         const item= await Register.findOne({_id:req.params.id});
//         res.render("student_edit", {student:item});
//     }

//     catch(err){
//         res.send("could not find student");
//         console.log(err)
//     }
// });



// router.post("/edit_student", async(req,res)=>{

//     try{
//         await Register.findOneAndUpdate({_id:req.query.id},req.body)
//         res.redirect("/student")
//     }

//     catch(err){
//         res.send("failed to update student details")
//         console.log(err)
//     }

// });






// this should always be the last line in your routes file
module.exports = router


const express = require('express');
const router = express.Router();



router.get("/edit_student/:id", async(req,res)=>{

    res.render("student_edit")
    // try{
    //     const item= await Register.findOne({_id:req.params.id});
    //     res.render("student_edit", {student:item});
    // }

    // catch(err){
    //     res.send("could not find student");
    //     console.log(err)
    // }
});



router.post("/edit_student", async(req,res)=>{

    // try{
    //     await Register.findOneAndUpdate({_id:req.query.id},req.body)
    //     res.redirect("/student")
    // }

    // catch(err){
    //     res.send("failed to update student details")
    //     console.log(err)
    // }

});






// this should always be the last line in your routes file
module.exports = router
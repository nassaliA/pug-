const express = require('express');
const router = express.Router();

//we redirect to a path then render a file
router.get("/student", async(req,res)=>{
    res.render("student")
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
  });

  router.post("/student/delete", async(req,res)=>{
    try{
        //deleteOne is a inbuilt record 
        await Register.deleteOne({_id:req.body.id});
        res.redirect("back")
    }

    catch(err){
        console.log(err)
        
    }
  });

  // this should always be the last line in your routes file
module.exports = router
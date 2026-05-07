const router = require("express").Router();

router.post("/signup",(req,res)=>{
 res.json({message:"Signup Working"});
});

router.post("/login",(req,res)=>{
 res.json({message:"Login Working"});
});

module.exports = router;

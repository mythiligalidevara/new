const express=require("express")
const route=express.Router();

//middileware
route.use((req,res,next)=>{
    console.log("middleware being used");
    next();
})

route.get("/",(req,res)=>{
    res.send("/ being hit")
})  

route.get("/examples",(req,res)=>{
    res.send("/examples being hit")
})



module.exports=route;

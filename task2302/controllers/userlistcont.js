const mongoose = require('mongoose'); 
const MyusersModel= require("../model/userlistmodel");
// const bcrypt=require("bcryptjs")  ; 
const User=mongoose.model("userInfo");  

let createUser=async function(req,res){
    const {fname,lname,email,password}=req.body;
    
    // const encryptedPassword=await bcrypt.hash(password,10);  //hash is a bcrypt method
    try{
      const oldUser=await User.findOne({email});
      if(oldUser){
        return res.json({error:"user exists"})
  
      }
      await User.create({      //creates new user in mongodb
        fname,
        lname,
        email,
        password   //:encryptedPassword
      });
      res.send({status:"ok"})
    }
    catch(error){
  res.send({status:"error"})
    }
  }
  
  //login api
  let getUser=async function(req,res){
    const {email,password}=req.body;
  const user=await User.findOne({email});
  if(!user){
    return res.json({error:"user not found"})
  
  }
  if(await bcrypt.compare(password,user.password)){
    const token=jwt.sign({email:user.email},JWT_SECRET) //it will signin and create a new token with our random digits
  if(res.status(201)){     //if user successfully logged in ; 201-request successful
  return res.json({status:"ok",data:token});   //also pass token
  }
  else{
    return res.json({status:"error"});  
  }
  }
  res.json({status:"error",error:"invalid password"})   //if both of the above cases fails
  }
  


  let verifyUser= async function(req,res){
    const {token}=req.body;
    try{
      const user=jwt.verify(token,JWT_SECRET);
      console.log(user);
  const useremail=user.email;
  User.findOne({email:useremail}).then((data)=>{
    res.send({status:"ok",data:data});
  
  }).catch((error)=>{
    res.send({status:"error",data:data});
  })
  
  
    }
    catch(error){
  
    }
  }
  
module.exports={createUser,getUser,verifyUser}
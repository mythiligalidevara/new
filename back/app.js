var createError = require('http-errors');
var express = require('express'); //1
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require("cors");
const bcrypt=require("bcryptjs")  ;                 //npm install bcryptjs--to encrypt pwd
const jwt=require("jsonwebtoken")
const JWT_SECRET="m1228r"   //it requires one jwttoken.it is just a random no of chars.it decrypts using this
var _= require("lodash")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();  //2
const mongoose = require('mongoose');   //3
app.use(express.json());   //4
app.use(cors());
const mongoUrl='mongodb+srv://Mythili:0aBaXezG4PiUmXjE@atlascluster.roimqdb.mongodb.net/form?retryWrites=true&w=majority';
mongoose .connect(mongoUrl,{useNewUrlParser:true,})
.then(()=>{
  console.log("connected to database")
})
.catch((e)=>console.log(e));
require("./userDetails")
const User=mongoose.model("userInfo");    //importing model on current project directory

app.post("/register",async(req,res)=>{
  const {fname,lname,email,password}=req.body;

   const encryptedPassword=await bcrypt.hash(password,10);  //hash is a bcrypt method
  try{
    const oldUser=await User.findOne({email})
    if(oldUser){
      return res.json({error:"user exists"})

    }
    await User.create({      //creates new user in mongodb
      fname,
      lname,
      email,
      password:encryptedPassword,
    });
    res.send({status:"ok"})
  }
  catch(error){
res.send({status:"error"})
  }
})

//login api
app.post("/login-user",async (req,res)=>{
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
})

//to get data in table userlist
app.get("/getdata",async (req,res)=>{
  const dat = await User.find()
	res.send(dat)
    
}); 
 

 //to get single user data

 app.get('/getuserbyid/:id', function (req,res){
  let  userid=req.params.id;
  
    User.find(({_id:userid}),function(err,val){
      if(err){
        res.send(err);
      }
        else{
          res.send(val);
        
      }
      ;
    }) 
})






// app.get('/getuserbyid/:id', async (req,res)=>{
//   let  userid=req.params.id;
  
//    const val= User.find({_id:userid})

//       res.send(val);
//     }) 


 

//


// app.put('/getuser/:id', async (req,res)=>{
//     let  userid=req.params.id;
//     let body=req.body;
//      const val=await User.findByIdAndUpdate({_id:userid},body)
  
//         res.send(val);
//       }) 


app.put('/getuser/:id', function (req,res,next){
  const id= req.params.id
  console.log(id)
  const newData=req.body
  console.log(newData)
  User.findByIdAndUpdate(id,{$set:newData},function(err,data){
    if(err){
      res.send(err);
    }
      else{
        res.send(data);
      
    }
  })

})


//to delete data in userlist
app.post("/deleteUser",async(req,res)=>{
const {userid}=req.body;

  try{
    User.deleteOne({_id:userid},function(err,res){
      console.log(err);
    })
    res.send({status:"ok",data:"deleted"});
  }
  catch(error){
console.log(error);
  }
})


app.post("/userData",async (req,res)=>{
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
})


app.listen(4001,()=>{
  console.log("server started")
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

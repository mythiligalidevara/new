const mongoose =require('mongoose');


const UserDetailsSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:{type:String, unique:true},  //to make all new userids to be unique
  password: String  
},
{
  collection:"userInfo"  ,
}
);


mongoose.model('userInfo', UserDetailsSchema);
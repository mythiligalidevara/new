const mongoose =require('mongoose');
const { Schema } = mongoose;

const UserDetailsSchema = new Schema(
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


const userInfo=mongoose.model('userInfo', UserDetailsSchema);
module.exports=userInfo;
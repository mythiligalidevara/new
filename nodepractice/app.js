const express=require("express")
const app=express()
const path=require("path")
const Joi=require("joi")
const bodyParser=require("body-parser")
const people=require("./routes/people")



const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017/db')

// Connect to database
client.connect()
    .then(() => {
        console.log('Connected Successfully!')
        
        //Close the database connection
        // console.log('Exiting..')
        // client.close()
    })
    .catch(error => console.log('Failed to connect!', error))

//insert
// client.db("persons").collection("personlist").insertMany([{
//     name:"mythili",
//     email:"m@gmail.com"
// },
// {
//     name:"sreeram",
//     email:"ram@gmail.com" 
// }]
// ).then((res) => {
//     console.log(res)
    
// })
// .catch((err) => console.log(err))

// //update
// client.db('persons').collection('personlist')
//     .updateOne({ name: 'mythili' },
//         {
//             $set:
//                 { email: 'mythili123@gmail.com' }
//         })
//     .then((res) => {
//         console.log(res)
//         client.close()
//     })
//     .catch((err) => console.log(err))

//delete
// client.db('persons').collection('personlist')
//     .deleteOne({ email: 'm@gmail.com' })
//     .then((res) => {
//         console.log(res)
//         client.close()
//     })
//     .catch((err) => console.log(err))    

client.showdbs



app.use("/public",express.static(path.join(__dirname,"static")))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use("/people",people)
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"static","example.html"))
// })

app.use("/",(req,res,next)=>{
    console.log(req.url,req.method);
    console.log("iam middleware");
    next();
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static","index.html"))
})



app.post("/",(req,res)=>{
   console.log(req.body);     
   //output:[Object: null prototype] {email: 'ram@gmail.com',password: 'Ram@123'}
 //  res.send("successfully posted data")
 //res.json({success:true})
 const schema=Joi.object().keys({
    email:Joi.string().trim().email().required(),
    password:Joi.string().min(5).max(10).required()
 });

//  schema.validate(req.body,(err,result)=>{
//     if(err){
//         console.log(err);
//         res.send("an error has occurred")
//         console.log("hi");
//     }
//     res.send("successfully posted data")
//     console.log(result);
//     console.log("hello");
//  })
 // console.log(unserialize(req.body));
 const [{name:name1,value:value1},{name:name2,value:value2}]=req.body
 const a={email:value1,password:value2}
 console.log(a);
if (schema.validate(a).error) {
    res.send("an error has occurred")
   // res.send(schema.validate(req.body).error.details);
   console.log(schema.validate(a).error.details);
}

else {
    client.db("forms").collection("formdata").insertOne({email:a.email,password:a.password}
        ).then((res) => {
            console.log(res)
            
        })
        .catch((err) => console.log(err))
        
    res.send("successfully posted data")
      //  res.send(schema.validate(req.body));
    }

 })

app.get("/getdata",async(req,res)=>{
   const cursor= client.db("forms").collection("formdata").find({})
    // .then((res) => {
    //         console.log(res)
            
    //     })
    //     .catch((err) => console.log(err))]
    
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log(`Found ${results.length} listing(s):`);
      results.forEach((result) => {
        console.log(result.email,result.password);
      })
   
    }
})

app.listen(3000)

var http = require("http");
const url = require("url");
const ObjectId=require("mongodb").ObjectId

const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017/db");

client
  .connect()
  .then(() => {
    console.log("Connected Successfully!");
  })
  .catch((error) => console.log("Failed to connect!", error));

const { log } = require("console");
const { json } = require("body-parser");
http
  .createServer(async (req, res) => {
    console.log("server running");

    if (req.url == "/forms") {
      const cursor = await client
        .db("forms")
        .collection("formdata")
        .find({})
        .toArray();
      console.log(cursor);
      res.write(JSON.stringify(cursor));
      res.end();
    } 
    else if(req.url=="/del/:id"){
        console.log(req.url);
        console.log(req.headers);
        console.log("hello");
        res.write("del")
        res.end()
    }

    
//     else if ((req.url == "/updates", { queryParams: { id: "test" } })) {
//       const queryObject = url.parse(req.url, true).query;
//       console.log(queryObject); //http://localhost:8080/updates?id=643d81e1bd218bfb5a1dacab
//       console.log(queryObject.id);
//    var oid=new ObjectId(queryObject.id)
    
//       const cursor1 = await client
//       .db("forms")
//       .collection("formdata")
//       .updateOne({_id:oid},{$set:{password:"ramsita"}})
      
// console.log(cursor1);
//       res.write(JSON.stringify(cursor1) );
//       res.end();
//     }
  
   
  })
  .listen(8080);

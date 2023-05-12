// 1)HTTP module

var http=require("http")
http.createServer((req,res)=>{
    // console.log(req.url);
   // res.write("hello world");
   res.write(req.url)
    res.end();
    console.log("server running");
   
}).listen(8080) 

// output:hello world in localhost:8080
// server running in terminal
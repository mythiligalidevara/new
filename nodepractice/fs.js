
//2)filesystem module
//create test.txt file
//a)readfile
// var http=require("http")
// var fs=require("fs")
// http.createServer((req,res)=>{
//     fs.readFile("test.txt",(err,data)=>{
//         res.write(data)
//         res.end();
//     })
// }).listen(8080) 

//output:hello mythili

//b)appendfile
// var http=require("http")
// var fs=require("fs")
// http.createServer((req,res)=>{
//     fs.appendFile("test.txt","welcome",(err,data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8080)

//output:welcome added to test.txt

//c)writefile

// var http=require("http");
// var fs=require("fs")
// http.createServer((req,res)=>{
//     fs.writeFile("test.txt","overridden",(err,data)=>{
//         res.write(data)
//         res.end()
//     })
// }).listen(8080)

//output:content in test.txt replaced with overridden

//d)unlink

var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    fs.unlink("test.txt",(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("file deleted");
        }
    })
}).listen(8080)

//output
//file deleted
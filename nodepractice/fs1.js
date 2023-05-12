const { log } = require("console");
const fs=require("fs");
fs.writeFile("example.txt","this is an example",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file successfully created");
        fs.readFile("example.txt","utf8",(err,file)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(file);  //file successfully created
                //<Buffer 74 68 69 73 20 69 73 20 61 6e 20 65 78 61 6d 70 6c 65>  -> output if utf8 is not mentioned
                //after mentioning utf8 output is --- file successfully created
                //this is an example
            }
        })
    }
})



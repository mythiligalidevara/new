const fs=require("fs")
// fs.mkdir("tutorial",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("folder created");
//         fs.writeFile("./tutorial/example.txt","123",(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("successfully created file");
//             }
//         })
//     }
// })

// fs.rmdir("tutorial",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("folder deleted");
//     }
// })


//====folder with multiple files=======
fs.readdir("tutorial",(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(files);
        for(let file of files){
            fs.unlink("./tutorial/"+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("successfully deleted");
                }
            })
        }
    }
})
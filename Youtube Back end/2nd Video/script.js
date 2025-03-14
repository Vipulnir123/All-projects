// //write file
const fs = require('fs');
fs.writeFile("hey.txt",
    "hello kese ho sab ye finish karna mera job hai ",
    function(err){
    if(err) console.error(err);
    else console.log("file written successfully");

})


// //append file
fs.appendFile("hey.txt","Madarchod Pakka finish karna hai ",function(err){
    if(err) console.error(err);
    else console.log("file written successfully");
})


// //rename file
fs.rename("hey.txt","Hello.txt",function(err){
    if(err) console.error(err);
    else console.log("file renamed sucessfully");
})


//copy file
fs.copyFile("hello.txt",".\hello2.txt",function(err){
    if(err) console.error(err);
    else console.log("file copied sucessfully");

})
//delete file

fs.rm(".hello2.txt",function(err){
    if(err) console.error(err);
    else console.log("file deleted sucessfully");
})

fs.rm("hey.txt",function(err){
    if(err) console.error(err);
    else console.log("file deleted sucessfully");
})
fs.rm("Hello.txt",function(err){
    if(err) console.error(err);
    else console.log("file deleted sucessfully");
})

// read file
// fs.readFile("Hello.txt","utf-8",function(err,data){
//     if(err) console.error(err);
//     else console.log(data);
// })


// http and https
// const http = require('http');
// const server= http.createServer(function(req,res){
//     res.end("Hello World");
// })
// server.listen(8000);
fs.rm("Q:\Work\Projects\All-projects\Youtube Back end\.hello2.txt",function(err){
    if(err) console.error(err);
    else console.log("file deleted sucessfully");
})
fs.rm(".hello2.txt",function(err){
    if(err) console.error(err);
    else console.log("file deleted sucessfully");
})

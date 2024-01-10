//This is Asynchronous Mode of Reading File
// - Line by Line reading not guaranteed
// - Callbacks will happen

const fs = require("fs");
fs.readFile("FileRead.txt","utf-8", (err,data)=>{
    console.log(data);
});
console.log("\nThe Reading of file may take some time so i am printing this message before file content for smooth processing\n");
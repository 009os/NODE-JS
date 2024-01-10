const http = require('http')
const fs = require('fs')
const file= fs.readFileSync('Tolaunchfile.html')

const server = http.createServer((req,res)=>{
    res.write(200,{'content-type':'text/html'});
    res.end(file)
})

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80")
})
import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer((req, res)=>{
	const writeStream = fs.createWriteStream('./14_Networking/http_upload.txt')
req.on('data', (chunk)=>{
	writeStream.write(chunk)
	
})
console.log('got the request');
if(req.url == '/upload.css'){
	const readStream = fs.createReadStream('./14_Networking/upload.css')
res.setHeader("Content-Type", 'text/css')
console.log("css request fired");
readStream.pipe(res)
}
else{
const readStream = fs.createReadStream('./14_Networking/upload.html')
res.setHeader("Content-Type", 'text/html')
readStream.pipe(res)}
// res.end('hello world')
// console.log("object");
})
server.listen(4000, '0.0.0.0',()=>{
	console.log("server is listening on port 4000");
})

import http from 'node:http'
import fs from 'node:fs'

const server = http.createServer((req, res)=>{
	const writeStream = fs.createWriteStream('./14_Networking/http_upload.txt')
req.on('data', (chunk)=>{
	writeStream.write(chunk)
})
})
server.listen(4000, '0.0.0.0',()=>{
	console.log("server is listening on port 4000");
})

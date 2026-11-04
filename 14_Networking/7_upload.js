import net from 'node:net'
import fs from 'node:fs'
const server = net.createServer((socket)=>{
	socket.on('data', (chunk)=>{
		// console.log(chunk.toString());
		const writeStream = fs.createWriteStream('./14_Networking/upload.txt')
		writeStream.write(chunk)
		if(/WebKitFormBoundary.+--/.test(chunk.toString()))
			socket.end('HTTP 1.1 \n\ndata milgay bhosdi')
	})
	// socket.on('end', ()=>{
	// 	socket.end("chal bhosdi data mil gaya")
	// 	console.log("finished");
	// })
	// this doesn't work because because in our case browser is the one who ends the socket first so the end message doesn't even goes to the browser
})
server.listen(4000, '0.0.0.0', ()=>{
	console.log("server listening");
})
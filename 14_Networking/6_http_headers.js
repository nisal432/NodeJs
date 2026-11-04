import net from 'node:net'
import {Buffer} from 'node:buffer'
import fs from 'node:fs'
// import { buffer } from 'node:stream/consumers';
const server = net.createServer((socket)=>{
	socket.on('data', (chunk)=>{
		console.log(chunk.toString());
	})
	const readStream = fs.createReadStream('./14_Networking/chatgptPdf.pdf')
	socket.write('HTTP 1.1 200 OK\r\n')
	socket.write('Access-Control-Allow-Origin: *\r\n')
	socket.write('Content-Type: application/pdf;\n')
	// socket.write('Content-Length: 1024\r\n')
	socket.write('Content-Disposition: attachment; filename="test.pdf"\r\n')// attachment gives error in tcp protocol i guess but inline works perfectly
	socket.write('\r\n\n')
	const buffer1 = Buffer.from('hello bhosdi wala')
	// socket.write(buffer1)
	// socket.end()
	readStream.pipe(socket)
})
server.listen(4000, '0.0.0.0', ()=>{
	console.log("server is listening");
})
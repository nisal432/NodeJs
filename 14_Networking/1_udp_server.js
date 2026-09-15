import dgram from 'node:dgram'
import fs from 'node:fs'
const writeStream = fs.createWriteStream("./udp.txt", {highWaterMark: 4})
console.log(dgram);
const socket = dgram.createSocket('udp4')
socket.bind(4000)//attaching socket to port 4000 if you know you know like this is under the hood of creating a server
// socket.on('message', (msg, remoteAddress)=>{
// 	console.log(msg.toString());
// 	console.log(remoteAddress.address);
// 	socket.send('Messaged received on the Server', remoteAddress.port, remoteAddress.address)
// })

// for(let i = 0; i<100; i++){
// 	process.stdout.write(`\r${i}`)//use \r to reset the cursor and you wont have to clear console
// 	await new Promise((resolve)=>{
// 		// setTimeout(resolve, 100)
// 		//below is a very bad replacement for the settimeout code only for understanding
// 		for(let i = 0; i<10000000;i++){
// 			if(i==9999999)
// 				resolve()
// 		}
// 	})
// }

socket.on('message', (msg, remoteInfo)=>{
	writeStream.write(msg)
})



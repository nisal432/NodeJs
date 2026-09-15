import dgram from 'node:dgram'
import fs from 'node:fs'
import { type } from 'node:os';
const highWaterMark = 10
const readStream = fs.createReadStream('lakh.txt', {highWaterMark: highWaterMark}) 
const stats = fs.statSync("lakh.txt");
const fileSize = stats.size
console.log(fileSize);


console.log(dgram);
const socket = dgram.createSocket('udp4')
// socket.on('message', (msg, remoteAddress) =>{
// 	console.log(msg.toString());
// 	console.log(remoteAddress.address, remoteAddress.port)

// })
// socket.send('Hello this is the data from Client', 4000, '192.168.18.10')

//above sending string now below transfering files i mean at the end both are 0 and 1
let i = 0;
const percentagePerIter = ((highWaterMark /fileSize )*100)


readStream.on('data',async (chunk)=>{
	socket.send(chunk, 4000, '192.168.18.10')
	i += (percentagePerIter)
	process.stdout.write(`\r${i.toFixed(2)}`)
	// await new Promise(resolve => setTimeout(resolve, 5000))
	
})
readStream.on('end', ()=>{
	readStream.close()
	socket.close()
})
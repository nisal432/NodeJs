#!/usr/bin/env node
import net from 'node:net'
const socket = net.createConnection({port: 4000,
	host: '192.168.18.10',
})
// socket.write('hey how are you')
// socket.write('hey how are you')
process.stdout.write('>')
process.stdin.on('data', (chunk)=>{
	process.stdout.write('>')
	socket.write(chunk)
})
socket.on('data', (chunk)=>{
	console.log(chunk.toString());
	process.stdout.write('>')
})
socket.on('error', (err)=>{
	console.log(err.message);
	console.log('Error, Please check if you are using command correctly or if the server is running or not');
	process.stdin.destroy()
})
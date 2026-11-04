import net from 'node:net'
import fs from 'node:fs'
const clientArr = []
const clientSockets = []
let i = 0
let clientToTransfer = null
let bool = true
let headerAdded = false
function messageClient(clientId, message){

}
const server = net.createServer((socket)=>{
	// console.log("object");
	clientArr.push(i)
	clientSockets.push(socket)
	const writestream = fs.createWriteStream('./UnnecessaryFiles/test.pdf', {highWaterMark: socket.writableHighWaterMark})
	i++
	console.log(i);
	socket.on('error', ()=>{
		console.log('client disconnected');
		clientSockets.forEach((clientSocket)=>{
			if(socket !== clientSocket)
		
				clientSocket.write(`Client${clientSockets.indexOf(socket)} disconnected`)
		})
	})
	socket.on('data', (chunk)=>{
		if(chunk.toString().slice(0,8)== '-client '
		){
			clientSockets[parseInt(chunk.toString().slice(8,9))].write(`Client${clientSockets.indexOf(socket)}: `+chunk.toString().slice(10))
		}
		else if(chunk.toString().slice(0, 8) == '-clients'){
			let str = ''
			clientArr.forEach((client, index)=>{
				str += `\n   ${index+1}.	client${index}\n`
			})
			socket.write(str)
		}
		else if(chunk.toString().slice(0, 9) == '-commands'){
			socket.write(`-client: Message a specific client with the number after the command \n -clients: Check how many clients are connected/online and their number \n `)
		}
		else if (chunk.toString().slice(0, 9) == '-transfer'){
			socket.write('--transfer')
			clientToTransfer = clientSockets[parseInt(chunk.toString().slice(16, 17))]
			// console.log(chunk.toString().slice(16, 17));
			
		}
		// else if(clientToTransfer){
		// 	if(!headerAdded)
		// 	socket.write('-clientFileData\n')
		// }
		else if(chunk.toString().slice(0,9) == '-fileData'){
			console.log(chunk.toString().length, 'byte length');
		}
		else{
			// const currentClientSocket = socket
			// clientSockets.forEach((socket)=>{
			// 	if(currentClientSocket !== socket)
			// 	socket.write(`Client${clientSockets.indexOf(socket)}: `+chunk)
			// })
			writestream.write(chunk)
			console.log("else block runned and byte size is ", chunk.length);
			if(bool)
			socket.pause()
			if(bool)
			setTimeout(() => {
				socket.resume()
				bool = false
			}, 7000);
		}
	})

})
server.listen(4000, ()=>{
	console.log('server started');
})
import net from 'node:net'
const clientArr = []
const clientSockets = []
let i = 0
function messageClient(clientId, message){

}
const server = net.createServer((socket)=>{
	console.log("object");
	clientArr.push(i)
	clientSockets.push(socket)
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
		else{
			const currentClientSocket = socket
			clientSockets.forEach((socket)=>{
				if(currentClientSocket !== socket)
				socket.write(`Client${clientSockets.indexOf(socket)}: `+chunk)
			})
		}
	})

})
server.listen(4000, ()=>{
	console.log('server started');
})
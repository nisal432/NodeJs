import net from 'node:net'
const server = net.createServer((socket)=>{
	//the socket here is the socket of the server
	//this callback gets called when the socket receives the data
	// console.log('server is listening');
	socket.on('data', (chunk)=>{
		console.log('Client: ', socket.remoteAddress,  chunk.toString());
		socket.write( 'HTTP\n\nhello back')
		// i think this is to make browser believe that it's a http response and it works check it out yourself
		socket.end()
	})
})
server.listen(80,'0.0.0.0', ()=>{
	console.log('server listening');
})

//basically the code below works connecting to the server created just above 
// const cSocket = net.createConnection({port:80,
// 		host: '127.1.1.1',

		
// 	})
// 	// console.log(clientSocket.address());
// 	cSocket.write('hello world')
// 	cSocket.on('data', (chunk)=>{
// 		console.log('Server: ', cSocket.remoteAddress,  chunk.toString());
// 	})

//basically made a client inside the code of the server
setTimeout(() => {
	const clientSocket = net.createConnection({port:80,
		host: '127.1.1.1',

		
	})
	// console.log(clientSocket.address());
	clientSocket.write('hello world')
	clientSocket.on('data', (chunk)=>{
		console.log('Server: ', clientSocket.remoteAddress,  chunk.toString());
	})
}, 1000);
setTimeout(() => {
	const clientSocket = net.createConnection({port:80,
		host: '192.168.18.10'
	})
	clientSocket.write('hello world')
	clientSocket.on('data', (chunk)=>{
		console.log('Server: ', clientSocket.remoteAddress,  chunk.toString());
	})
}, 3000);



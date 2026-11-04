#!/usr/bin/env node
import { execFile } from "node:child_process";
import { createReadStream, read } from "node:fs";
import net from 'node:net'
let readStream = null
const socket = net.createConnection({
	port: 4000,
	host: '192.168.18.10',
})
// socket.write('hey how are you')
// socket.write('hey how are you')
process.stdout.write('>')
process.stdin.on('data', (chunk) => {
	process.stdout.write('>')
	socket.write(chunk)
})
socket.on('data', (chunk) => {
	if (chunk.toString().trim() == '--transfer') {
		//below is code for opening file explorer like for path of a file and dont get confused


		const script = `
		Add-Type -AssemblyName System.Windows.Forms

		$dialog = New-Object System.Windows.Forms.OpenFileDialog

		if ($dialog.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
    	Write-Output $dialog.FileName
		}
		`;

		execFile(
			'powershell.exe',
			['-NoProfile', '-Command', script],
			(error, stdout) => {
				if (error) {
					console.error(error);
					return;
				}

				const filePath = stdout.trim();
				const fileName = filePath.split('\\')[filePath.split('\\').length -1]
				socket.write(`${fileName}`)
				// socket.write(`${fileName}`)
				// socket.write(`${fileName}`)
				readStream = createReadStream(filePath, {highWaterMark: socket.writableHighWaterMark})
				// readStream.pipe(socket)
				readStream.on('data', (chunk)=>{
					if( !socket.write(chunk))
						socket.pause()

					
				})
				socket.on('drain', ()=>{
					readStream.resume()
				})
				
				readStream.on('end', ()=>{
					readStream.close()
				})
				// console.log(filePath.split('\\'));

				// console.log('Selected file:', filePath);
				
			}
		);
		//above is code for opening file explorer like for path of a file and dont get confused

	}
	else {
		console.log(chunk.toString());
		process.stdout.write('>')
	}
})
socket.on('error', (err) => {
	console.log(err.message);
	console.log('Error, Please check if you are using command correctly or if the server is running or not');
	process.stdin.destroy()
})
socket.on('pause', ()=>{
	console.log('socket paused');
})
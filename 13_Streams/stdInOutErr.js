process.stdout.write('hello\n')
process.stdin.on('data',(chunk)=>{
	// console.log(chunk.toString());
	process.stdout.write(chunk.toString())
})
process.stderr.write('error but same like stdout')

//basically stdout, stdin, stderr are streams(duplex streams) so we can write and read 
//we can add event listeners because streams inherits from the eventEmitter class that's basic

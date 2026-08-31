console.log('Hello there this is from test.js')
process.stdout.write('hello there how are you')
// process.stdin.write('hello this is writing from stdin')
process.stdin.on('data', (chunk)=>{
	console.log(chunk.toString());
})

import fs from 'node:fs'
const readStream = fs.createReadStream('chars.txt', {highWaterMark: 8})
readStream.on('data',(chunks)=>{
	console.log(chunks.toString());
	// console.log(readStream.read());
})
// as i thought when loading data the read() method will work
// but this is what actually happening read code below

readStream.on('readable', ()=>{
	console.log(readStream.read(), ' using first read method on readable event ');
	console.log(readStream.read(), ' using second read method on readable event ');
}) //this is whats happening 
readStream.on('close', ()=>{
	console.log("closed");
})
readStream.on('end', ()=>{
	console.log("ended");
})
// both events are fired without doing anything like by adding the event listener only
// readStream.destroy() only the close event is fired 

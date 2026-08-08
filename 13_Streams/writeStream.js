import fs from 'node:fs'
const readStream = fs.createReadStream('./UnnecessaryFiles/chars.txt', {highWaterMark:4})
const writeStream = fs.createWriteStream('./UnnecessaryFiles/chars2.txt', {highWaterMark:4})
const writeStream2 = fs.createWriteStream('./UnnecessaryFiles/chars3.txt', {highWaterMark:4})
// defining highwatermark is like defining the internal buffer or the memory allowed to be used by the stream

//first let's checkout the wrong way to use the writeStream
readStream.on('data', (chunk)=>{
	writeStream.write(chunk)
	/*seems right as both highwatermark are same but the important thing is that
	the read speed and write speed of the hard disk/ssd are different 
	read speed are generally much more faster
	so data reading will be fast and the write will be slow 
	this will be using a lot of memory. How?-> which i will discuss in notes

	*/
})

//right way
readStream.on('data',(chunk)=>{
	const canContinue = writeStream2.write(chunk)
	if(!canContinue)
		readStream.pause() //giving time for the writeStream to write data without overflowing it's internal buffer

})
writeStream2.on('drain', ()=>{
	readStream.resume() // this event will be fired when the internal buffer of writestream has been drained meaning empty so i guess you know where i am getting at 

})



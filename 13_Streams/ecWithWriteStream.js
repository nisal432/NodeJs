// first of all ec means execution context here
//i am checking writestream with the execution context you will see what i mean by the code below
import fs from 'node:fs'
const writeStream = fs.createWriteStream('writeStreamTest.txt', {highWaterMark:4})
let i = 0
while(i<10000){
	const isBufferFull = !(writeStream.write('A'))
	console.log('buffer full?', isBufferFull);	
	i++
	if(i==9999)
	console.log(writeStream.writableLength);

	
}
//because of this code we can understand the every execution is done in main thread that is one single thread
// so until main thread is cleaned no other asynchronous code will run you get what i am thinking right?
// use break and setimeout to drain the writeStream's internal buffer also i think same logic as on resume and pause method in the readstream


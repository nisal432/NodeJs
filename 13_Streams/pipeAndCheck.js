import fs, { write } from 'node:fs'
const readstream = fs.createReadStream('./UnnecessaryFiles/bigFileAppended.txt', {highWaterMark:  1024})
const writestream = fs.createWriteStream('./UnnecessaryFiles/tempBigFile.txt', {highWaterMark:  1024})
let i = 0
// readstream.on('data', (chunk)=>{
// 	writestream.write(chunk)
// 	i++
// })
// setTimeout(() => {
// 	console.log(i);
// }, 10);

//instead of handling backpressure yourself just use pipe() method
readstream.pipe(writestream)
// think of it like data flowing through readstream attached with pipe to transfer to write stream 
//in simple just attaching a pipe like to transfer water we use pipe
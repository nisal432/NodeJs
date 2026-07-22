import { time } from 'console'
import fs from 'fs'
// const base64Str = fs.readFileSync('bigFile.mp4', 'base64') to basically create a file with huge size
// fs.appendFileSync('bigFileAppended.txt', base64Str)

// console.log(fs);
console.time()
let i = 0;
const stream =  fs.createReadStream('bigFileAppended.txt')
console.log(stream);
// New finding await keyword only works when a function returns promise other wise no
// await stream.on('data', (chunks)=>{
// 	i++
// 	if(i<10)
//  console.log(chunks);
// })

const check =  stream.on('data', (chunks)=>{
	i++
	if(i<10)
 console.log(chunks);
})
stream.on('end',()=>{


	console.timeEnd()
	console.log('end event fired');
})
console.log({check});
console.log(i);
console.log("object");

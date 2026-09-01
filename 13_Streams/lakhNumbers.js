// import { AsyncLocalStorage } from 'node:async_hooks'
// import { off } from 'node:cluster'
import fs from 'node:fs'
// console.time()
// const variable = 2
// const writeStream = fs.createWriteStream('lakh.txt', {highWaterMark:10000})

// for(let i = 1; i<=100000; i++){
// 	writeStream.write(`${i}, `)
// 	// writeStream.write(`${variable}`)
// 	if(i == 100000){
// 		writeStream.end()
// 		console.log(i);
// 	}
// }
// writeStream.on('close',()=>{
// 	console.timeEnd()
// })

//using write stream without handling backpressure takes about 500 ms


//now let's see by using file descriptor and writeSync method
//My custom stream alike
console.time()
const fd = fs.openSync('lakh.txt', 'r+')
const internalBuffer = Buffer.alloc(10001)
let pastChunk // this variable is for referencing the chunk which was added and will be valuable in next iteration when index is more than 10000
let index = 1
const totalCount = 100000
// const tempBuffer = Buffer.alloc(6)
// console.log(1000%10000); just testning
for(let i = 1; i<=totalCount; i++){
	if(index >=10000){
		// console.log('check here ', i);
		const difference = index - 10000
		const offset = pastChunk.length - difference
		fs.writeSync(fd, internalBuffer,1)
		if(difference){
			fs.writeSync(fd,pastChunk,offset )
		}
		index = 1


	}
	const str = `${i}, `
	const tempBuffer = Buffer.from(str)
	pastChunk = tempBuffer
	tempBuffer.copy(internalBuffer, index)
	index += str.length
	if(i === totalCount ){
		fs.writeSync(fd ,internalBuffer,1, index-1)
		fs.writeFileSync(fd, 'hello')
		}

		
	
// internalBuffer.writeUint8(i, i-1)
}
console.timeEnd()
// My custom stream time for writing 1 lakh numbers = 30 ms in average
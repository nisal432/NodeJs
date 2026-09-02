
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
function calculateRemainingBytes(index, totalsize, dataLength){

}
console.time()
const fd = fs.openSync('lakh.txt', 'r+')
const totalSize = 893
const internalBuffer = Buffer.alloc(totalSize)
let pastChunk // this variable is for referencing the chunk which was added and will be valuable in next iteration when index is more than 10000
let index = 1
const totalCount = 100000
// const tempBuffer = Buffer.alloc(6)
// console.log(1000%10000); just testning
for(let i = 1; i<=totalCount; i++){
	if(index >totalSize-1){
		// console.log('check here ', i);
		const difference = (index-1) - (totalSize -1)
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
		// console.log(index);
		// console.log(pastChunk);
		let finalBytesRemainingToAdd = index -1 
		let bytesOverflowed = false
		if(finalBytesRemainingToAdd > totalSize-1){
			finalBytesRemainingToAdd = totalSize-1
			bytesOverflowed = true
			}
		let overFlowBytesAfterFinalRemainingBytes = (index -1) - (totalSize-1)
		fs.writeSync(fd ,internalBuffer,1, finalBytesRemainingToAdd)
		if(bytesOverflowed)
			fs.writeSync(fd, pastChunk,( pastChunk.length- overFlowBytesAfterFinalRemainingBytes))
		// fs.writeFileSync(fd, 'hello')
	}
	
		
	
// internalBuffer.writeUint8(i, i-1)
}
console.timeEnd()
// My custom stream time for writing 1 lakh numbers = 30 ms in average
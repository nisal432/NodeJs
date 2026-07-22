import { time } from 'console'
import { Buffer } from 'buffer';
import fs, { stat } from 'fs'
// const base64Str = fs.readFileSync('bigFile.mp4', 'base64') to basically create a file with huge size
// fs.appendFileSync('bigFileAppended.txt', base64Str)

// console.log(fs);
console.time()
let i = 0;
const stream = fs.createReadStream('bigFileAppended.txt', {highWaterMark: 60000})// creating stream using custom highWatermark
// console.log(stream);
// New finding await keyword only works when a function returns promise other wise no
// await stream.on('data', (chunks)=>{
// 	i++
// 	if(i<10)
//  console.log(chunks);
// })



//to check the size of the file
 const stats = fs.statSync('bigFileAppended.txt')
 const filesize = stats.size
 let progressPercentage = 0

const percentagePerIteration = (stream.readableHighWaterMark/filesize) * 100
console.log('the floor of the percentagePerIteration is ', Math.floor(percentagePerIteration));
console.log('The percentage per iteration is ', percentagePerIteration);
let tempProgressStorage = 0
const check = stream.on('data', (chunks) => {
	progressPercentage += percentagePerIteration

	
	 
	i++

	if (i < 10) {
		console.log(chunks);
		console.log(typeof (chunks));
	}
	if((!tempProgressStorage && (Math.floor(progressPercentage) == 1)) || (tempProgressStorage !=Math.floor(progressPercentage)) ){
		console.log(`Loading: ${Math.floor(progressPercentage)}%`);
		
		setTimeout(()=>console.clear(), 300)
		tempProgressStorage =Math.floor(progressPercentage)
	}
// console.log(i);



})
stream.on('end', () => {


	console.timeEnd()
	console.log('end event fired');
})
// console.log({ check });
// console.log(stream.readableHighWaterMark); to check if the highwatermark is accessible or not
// highwatermark basically means how much memory will be used at a time in a stream


// console.log(i);
// console.log("object");



// const buff = Buffer.alloc(4) just for test purpose as buffer object on console/terminal shows differently rather than normal objects
// console.log(buff);

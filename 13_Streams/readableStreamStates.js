// readableStreamStates
//please open the file mentioned on writefile/appendfile after running this codehi to see the magic i guess 
import fs from 'node:fs'
const readableStream = fs.createReadStream('chars.txt', {highWaterMark:4})
let i = 0
readableStream.on('data', (chunk)=>{
	// console.log(chunk);
	//Writing a code to create a new file and append some characters which will be live seen when you open that file
	if(i == 0)
		fs.writeFileSync('liveText.txt', chunk)
	else{
		setTimeout(() => {
			
			console.log("Appending");
			fs.appendFileSync('liveText.txt', chunk)
		}, i* 1000);
		// console.log('');
		}
	console.log("c m");
	i++


})

// Above one is purely using settimeout version now below one is using resume() and pause() method
readableStream.on('data', (chunk)=>{
	if(readableStream.bytesRead == readableStream.readableHighWaterMark)//bytesread value is equal to highwaterMark in the first
		fs.writeFileSync('liveText2.txt', chunk)
	else{
		fs.appendFileSync('liveText2.txt', chunk)
	}
	readableStream.pause()
	setTimeout(() => {
		readableStream.resume()
	}, 200);
})

console.log(readableStream.readableFlowing);
console.log(readableStream.readableEnded);
console.log(readableStream.isPaused());

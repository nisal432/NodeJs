import {spawn} from 'child_process';
const childProcess1 = spawn('node', ['./13_Streams/childProcessTest/test.js'])
// process.stdin.on('data', (chunk)=>{
// 	console.log(chunk.toString());
// })
childProcess1.stdout.on('data', (chunk)=>{
	console.log(chunk.toString());
})
setTimeout(() => {
	childProcess1.stdin.write('kyu be behen ke land')
	childProcess1.stdin.write('hello')

}, 3000);
// childProcess1.stdin.on('data', (chunk)=>{
// 	console.log(chunk);
// })
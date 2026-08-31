import fs from 'node:fs'
console.log(process.stdin.fd); //0
console.log(process.stdout.fd); // 1
console.log(process.stderr.fd); // 2

fs.open('temp.txt', (err, fd)=>{
	console.log(fd);
})
fs.open('temp.txt', (err, fd)=>{
	console.log(fd);
})
//in conclusion we can open the same file twice and file descriptor will increase 




import fs from "node:fs"


// we will be using the sync open version here because it will be easy and we wont have to use settimeout like you can check
const fd1 = fs.openSync('temp.txt', 'r+') //the second argument is which permission we want to give when opening the file like by default ifwe dont provide anything it will be only read permission r+ means read and write and w+ also means read and write but something is different please research thatif necessary
const buffer = Buffer.alloc(100)
const bytesRead = fs.readSync(fd1,buffer )
console.log(bytesRead);
console.log(buffer.toString());
const buffer2 = Buffer.from("Hello world in the making of this world")

//writing
console.log('\nNow writing file');
fs.write(fd1, buffer2,(err, bytesWritten, data)=>{
	console.log(bytesWritten);
	console.log(data);
} )
fs.writeSync(fd1, 'gula chat \n')
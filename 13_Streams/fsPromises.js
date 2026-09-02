// this file is only to demonstrate how to use streams,  read, write methods using fs/promises version
import fs from 'node:fs/promises'
// because this is promises version we will heavily use await keyword instead of .then and it will make our code feel like synchronous
const fileHandle = await fs.open('temp.txt', 'r+')// this will return a promise but when promise is resolved it will return a fileHandle object and because we are using await it will wait for the promise to resolve and we will get the file handle object instead of a promise
console.log(fileHandle.fd);

const obj = await fileHandle.read() //also returns promise but when resolved will return a obj with buffer and bytesRead
console.log(obj.bytesRead)
console.log(obj.buffer.toString())
// as you can see it doesnt require fd to read/write because filehandle already has fd and it is connected with that file 
//explore write method yourself it's easy man 

//const readStream there is no createreadstream here on will have to do some research maybe it will uploaded on next file/code


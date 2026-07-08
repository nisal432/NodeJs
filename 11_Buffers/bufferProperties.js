import { Buffer } from "node:buffer";
import fs from 'node:fs/promises'
//This is a buffer properties js file but here we will learn more about encoding with the help of the buffer i think
//As we know this buffer is like a uint8array
// but we can write int8,16,32 or any
const buffer1 = Buffer.alloc(8)
buffer1.writeInt16LE(87,0)// writing on 0 index
buffer1.writeInt16LE(87,2)// writing on 2 index because 0 and 1 are already occupied because 16bits are used
console.log(buffer1);
console.log('by using utf-8:', buffer1.toString('utf-8'));
console.log('by using utf-16le:',buffer1.toString('utf16le'));
// so 0 is the unicode for null character but .tostring() method and textdecoder object ignores 0 and shows nothing
// console.log(fs);
 await fs.writeFile('test.txt',buffer1)// this line of code is already run so commenting this because it will overrite i think

 const fileBuffer =  await fs.readFile('test.txt')
 console.log(fileBuffer);




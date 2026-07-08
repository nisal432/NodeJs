import { Buffer, constants } from "node:buffer";

console.log(Buffer.poolSize); // yes this is the static property and yes Buffer.alloc/unsafe/from are all static methods that's why we don't use new keyword just to remind you

const buffer1 = Buffer.allocUnsafe(10)
// console.log(1/0);
console.log(buffer1.buffer.byteLength); // will be 8192 because thats the size of the buffer pool
const buffer2 = Buffer.allocUnsafe(4098) // size is more than half of the bufferpool but to check
//Discovery when you are trying to create more than half of size of buffer pool you will create a separate arraybuffer of that size and not new bufferpool
const buffer3 = Buffer.allocUnsafe(4095)
console.log(constants.MAX_LENGTH);
// constants.MAX_LENGTH shows how many bytes of array buffer we can create at a time but this exceeds like 9 tb or 90 tb i think it has updated since then when the video was published
console.log(constants.MAX_STRING_LENGTH);
const buffer4 = Buffer.from('Well hello there')
const joinedBuffer = Buffer.concat([buffer1, buffer3])// joins two buffer and returns a single new concatinated buffer

// Please use node --inspect-brk filename.js to see the arraybuffers 






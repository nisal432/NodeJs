import { Buffer } from "node:buffer";
console.log(Buffer.poolSize); // yes this is the static property and yes Buffer.alloc/unsafe/from are all static methods that's why we don't use new keyword just to remind you

const buffer1 = Buffer.allocUnsafe(10)
console.log(buffer1.buffer.byteLength); // will be 8192 because thats the size of the buffer pool
const buffer2 = Buffer.allocUnsafe(4098) // size is more than half of the bufferpool but to check
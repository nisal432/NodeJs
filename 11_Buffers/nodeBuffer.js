import { Buffer } from "node:buffer";
// const nodeBuffer =  Buffer(8)  this is deprecated and will throw warning

const nodeBuffer2 = Buffer.alloc(8)
const nodeBuffer3 = Buffer.from('ABCD89')// we can also pass string but mainly we pass arraybufer or array
const nodeBuffer4 = Buffer.allocUnsafe(8)
console.log(nodeBuffer3.toString());
console.log(nodeBuffer3.buffer.byteLength, nodeBuffer4.buffer.byteLength, nodeBuffer2.buffer.byteLength);
// to check the buffer size from each methods
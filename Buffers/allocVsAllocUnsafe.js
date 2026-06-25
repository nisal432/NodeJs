import { Buffer } from "node:buffer";
let buff1 = Buffer.alloc(4000) //allocating 4k bytes that is 4kb
let buff2 = Buffer.allocUnsafe(10000) 
//to check the allocUnsafe text contents
console.log(buff2.toString());
//Run the code and check yourself you may find some of the old contents that was previously stored in ram of provided RAM Of nodejs
// that's why always use buff.unsafe if you will fill it.
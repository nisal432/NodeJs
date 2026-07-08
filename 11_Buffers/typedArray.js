const int8Array = new Uint8Array([80, 82, 79, 67, 79, 68, 82, 82])
console.log(int8Array);
let buffer;
import fs from 'node:fs/promises'
// for(let i = 0;i<1000000;i++){
	// if(i==999999)
	
	// }
buffer = await fs.readFile('./Buffers/test.txt')

console.log(typeof(buffer));
console.log('object last');
let arr = []
buffer.forEach((el)=>{
arr.push(el)
})
const int8Array2 = new Uint8Array(arr)
console.log(int8Array2);
//trying something different like it's not doing anything just making it sense less more but it's okay
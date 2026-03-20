//this program is to test if the ram increases to those with the storage set or will increase as whole when one byte is set or more.
const a = new ArrayBuffer(1024*1024*700)
const view = new DataView(a)
// console.log(view);
view.setInt8(0, 8)
// console.log("hello");
for (let index = 0; index < 100; index++) {
view.setInt8(index, index+1)
	
	
}
setInterval(() => {
	console.log(view);
}, 10000);
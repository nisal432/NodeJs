const {add, product, divide} = require('./math.js')
require('child_process').exec('pwd', (error, stdout)=>{
	console.log(stdout)
})
console.log("helllo");

console.log(add(122, 122, 44));
console.log(product(122, 122, 44));
console.log(divide(122, 122, 44));

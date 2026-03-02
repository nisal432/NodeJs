//this file will includde all the math code and functions
function add(...params){// using rest parameters/params
	let sum =0
	params.forEach((e)=>{
		sum+=e;
	})
return sum;
}

function product(...params){// using rest parameters/params
	let sum =1
	params.forEach((e)=>{
		sum*=e;
	})
return sum;
}

function divide(...params){// using rest parameters/params
	let sum = params[0]
	params.forEach((e,i)=>{
		if(i>0)
		sum/=e;
	})
return sum;
}
module.exports = {
	add,
	product, divide,
}
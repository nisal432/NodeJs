function printNumber(i, max){
	console.log(i);
	clearConsole(i, max)
}
function clearConsole(i, max){
	if(i <100){
		setTimeout(() => {
			
			console.clear()
			i++
			printNumber(i, max)
		}, 100);
	}
}
printNumber(0, 100)
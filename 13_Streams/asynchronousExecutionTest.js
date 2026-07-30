setTimeout(() => {
	console.log('First settimout code');
	setTimeout(()=>{
		console.log('child setimeout code of first settimeout');
	})
}, 0);

setTimeout(()=>{
	console.log('Second set timeout code');
})
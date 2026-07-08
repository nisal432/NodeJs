import Emiiter from 'events'
const emmitter = new Emiiter()
// console.log(emmitter);
emmitter.on('test', ()=>{
	console.log("Function/Work is done");
})// basically creating my own event 
console.log(emmitter);
emmitter.emit('test') //activating or triggering my event 'test'

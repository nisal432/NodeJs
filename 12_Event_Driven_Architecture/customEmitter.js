class Emitter{
	brand = 'CustomEmiiter'// just for testing how to add properties 
	events = {}
	emit(event, handler){
		// console.log(this.brand); just for test
		// console.log(handler); these are just for tests 
		
		if(this.events[event])
			this.events[event].push(handler)
		else{
			this.events[event] = []
			this.events[event].push(handler)
			}


		
	}
	on(event){
		if(this.events[event]){
			this.events[event].forEach(element => {
				element()
			});
		}
		else
			console.error('No event found with name:', event)
	}
}
const customEmitter = new Emitter()
customEmitter.emit('testEvent',()=>{
	console.log("well hello there");
})
customEmitter.emit('testEvent', ()=>{
	console.log('Trying to check if both events are fired or not');
})
// console.log(customEmitter.events['testEvent']);
// customEmitter.events['testEvent'][0]()
customEmitter.on('testEvent')
customEmitter.on('noEvent') // testing where the event is not listened or added i think
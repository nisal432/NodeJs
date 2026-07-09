class Emitter{
	brand = 'CustomEmiiter'// just for testing how to add properties 
	events = {}
	on(event, handler){
		// console.log(this.brand); just for test
		// console.log(handler); these are just for tests 
		
		if(this.events[event])
			this.events[event].push(handler)
		else{
			this.events[event] = []
			this.events[event].push(handler)
			}


		
	}
	emit(event, ...args){
		// console.log(args.length);
		if(this.events[event]){
			let singleTimeEvent = false
			
			this.events[event].forEach((element, index) => {
				if(element =='once') singleTimeEvent = true; // for implementing once method

				// element(args[0], args[1], args[2], args[3], args[4]) // basically for arguments in the handler function but this is not good implementaion, it's not scalable or flexible
				else
					element(...args) // this is the way where it is scalable arguments are automatically passed in this way
				if(index == this.events[event].length - 1 && singleTimeEvent)// this is for implementing the once method of the Emitter class where a event is listened only a single time and is deleted
					delete this.events[event]
				
			});
		}
		else
			console.error('No event found with name:', event)
	}
	once(event , handler){
		if(this.events[event])
			
			console.log('Event is already listened');
		else{
			this.events[event] = ['once', handler]
		}
		

	}
}
const customEmitter = new Emitter()
customEmitter.on('testEvent',(specialText, secretMessage)=>{
	console.log("well hello there");
	console.log('this is the special text:',specialText);
	console.log('this is the secret message:', secretMessage);
})
customEmitter.on('testEvent', ()=>{
	console.log('Trying to check if both events are fired or not');
})
// console.log(customEmitter.events['testEvent']);
// customEmitter.events['testEvent'][0]()
customEmitter.emit('testEvent', 'You are the special person', 'You are 100% gay')
customEmitter.emit('noEvent') // testing where the event is not listened or added i think
customEmitter.once('gay', ()=>{
	console.log("i am gay");
})
console.log(customEmitter.events);
customEmitter.emit('gay')
console.log(customEmitter.events); // to check if the gay event is deleted or not 
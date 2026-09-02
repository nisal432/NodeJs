// const inputEl = document.querySelector('input')
// inputEl.addEventListener('change',(e)=>{
// 	console.log(inputEl.files);
// })
const decoder = new TextDecoder()
console.time()
// const res = await fetch('http://localhost:4000/')
// const data = await res.text()
// console.log(data);
// console.timeEnd()
//time = 13 ms

//now concatinating data on string variable whenever the data is available on readStream i mean you must understand this line becuase on top also we are using stream but it only provides the object after all the data is loaded/read but here we are getting the data from first byte
let data = ''
const res = await fetch('http://localhost:4000/')
const readableStream = res.body
for await(const chunk of readableStream){ //this is equivalent to listening  data event on nodejs
	data += decoder.decode(chunk)
}
console.log(data);
console.timeEnd()
//this also takes the same time man what a shame i made a blunder /logical/technical error 
//man i am laughing rn
//please figure out why it's showing the same time hint = it's the same fucking thing

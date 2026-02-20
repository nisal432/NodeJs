//Worker thread
const {Worker} = require('worker_threads')
new Worker('./workerThread/a.js')
new Worker('./workerThread/b.js')
new Worker('./workerThread/c.js')

console.log('main ended') 
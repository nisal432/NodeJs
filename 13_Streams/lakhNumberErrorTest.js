import fs from 'node:fs'
const fd = fs.openSync('temp.txt', 'r+')
fs.writeSync(fd, Buffer.from('hello'), -71)// checking if negative offset will result in positive number error
// yes it will result in negative number  range error
// what i was doing in the code before was wrong this was a wrong thing to check/not the main problem
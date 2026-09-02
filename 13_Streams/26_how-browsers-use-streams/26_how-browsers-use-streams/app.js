import http from "http";
// import { write } from "node:fs";
import fs from 'node:fs/promises'
// const fileHandler2 = await fs.open('gay.txt', 'w+')
// const writeStream = fileHandler2.createWriteStream({highWaterMark:1})
console.time()
const server = http.createServer(async (req, res) => {
  const fileHandler = await fs.open('abc.txt', 'r+')
  const readStream = fileHandler.createReadStream({highWaterMark: 1})// 1 byte will be the size of the chunk and internalBuffer
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "text/txt");
  // res.setHeader("Content-Disposition", "attachment; filename=\"abc.txt\"");  

readStream.on('data', (chunk)=>{
  res.write(chunk)
  readStream.pause()
  setTimeout(() => {
    readStream.resume()
  }, 500);
})
readStream.on('close', ()=>{
  res.end('')
  fileHandler.close()
  // console.timeEnd()
  // console.log("hello");
})
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});

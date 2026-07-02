import fs from 'fs/promises'
const base64Str = await fs.readFile('./Buffers/video.mp4', 'base64')
console.log(base64Str[0]);
// fs.writeFile('base64VideoBinary.txt', base64Str) // already done so let's not run this that's why commenting

//This section is basically trying to get the base64 string which was added on the file above and creating another video using that string
const base64Str2 = await fs.readFile('./base64VideoBinary.txt','utf-8') //not using base64 as encoding method because what we are getting is already a base64 string 
fs.writeFile('./Buffers/videoCreatedFromBase64.mp4', base64Str2,'base64')

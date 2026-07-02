import fs from 'fs/promises'
const buffer1 = Buffer.from('Yws')
fs.writeFile('./Buffers/testingBase64.txt','Yws','base64')

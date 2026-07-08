const a =new ArrayBuffer(8)
const view = new DataView(a)
view.setUint32(0,0xafbfcfdf)// using hex number because it's easy to know how much byte the number will be as 2 hexdigit = 1 byte
view.setUint32(4, 0xafbfcfdf, true) // same number but stored in little endian
console.log(a);
import http from 'node:http'
import fs from 'node:fs/promises'
import { json } from 'node:stream/consumers'

function createJsonObjEntry(file) {
	const tempObj = {}
	tempObj["name"] = `${file.name}`
	if (file.isFile())
		tempObj["type"] = `file`
	else
		tempObj["type"] = 'dir'
	return tempObj
}
const server = http.createServer(async (req, res) => {
	if (req.url == '/') {
		const fileHandle = await fs.open(`./Public/index.html`)
		const readStream = fileHandle.createReadStream()
		readStream.pipe(res)
	}
	else if (req.url.includes('/files')) {
		let jsonObj = {}
		if (req.url.split('/files')[1] == '') {
			const fileDir = await fs.readdir(`./Public/`, { withFileTypes: true })
			fileDir.forEach((file, index) => {
				
				jsonObj[`number${index + 1}`] = createJsonObjEntry(file)

			})
			res.end(JSON.stringify(jsonObj))


		}
		else {
			console.log(jsonObj);
			let str = ''
			req.url.split('/files').forEach((content)=>{
				str += content
			})
			const fileDir = await fs.readdir(`./Public${str}`, { withFileTypes: true })
					fileDir.forEach((file, index) => {
				
				jsonObj[`number${index + 1}`] = createJsonObjEntry(file)

			})
			console.log(str);
			res.end(JSON.stringify(jsonObj))
		}
		// const readStream = fileHandle.createReadStream()
		// readStream.pipe(res)
		// res.end('hello')
	}
	else{
		console.log(req.url);
		if(req.url == '/frontend.js'){
			res.setHeader('Content-Type', 'text/javascript')
		}
		const fileHandle = await fs.open(`./Public${req.url}`)
		const readStream = fileHandle.createReadStream()
		readStream.pipe(res)
	}

})
server.listen(80, '0.0.0.0', () => {
	console.log("server is listening");
})
import http from 'node:http'
import fs from 'node:fs/promises'
import { json } from 'node:stream/consumers'
import { url } from 'node:inspector'

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
			req.url.split('/files').forEach((content) => {
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
	else {

		console.log(req.url);
		if (req.url.includes('/delete?')) {
			if (req.url.includes('/delete?dir?')) {
				const urlStr = req.url.replace('/delete?dir?', '')
				const pathToDelete = './' + 'Public' + urlStr
				await fs.rm(pathToDelete, {
					recursive: true,
					force: true
				});
				return
			}
			const urlStr = req.url.replace('/delete?', '')
			const pathToDelete = './' + 'Public' + urlStr
			await fs.unlink(pathToDelete)
			return
		}
		if (req.url == '/frontend.js') {
			res.setHeader('Content-Type', 'text/javascript')
		}

		if (req.url.includes('/download?')) {
			res.setHeader('Content-Disposition', 'attachment')
			const filePath = req.url.replace('/download?', '')
			const fileHandle = await fs.open(`./Public${filePath}`)
			const readStream = fileHandle.createReadStream()
			console.log("download initiated");
			readStream.pipe(res)
			
		}
		else{
		const fileHandle = await fs.open(`./Public${req.url}`)

		res.setHeader('Content-Disposition', 'inline')
		const readStream = fileHandle.createReadStream()
		readStream.pipe(res)}
	}

})
server.listen(80, '0.0.0.0', () => {
	console.log("server is listening");
})
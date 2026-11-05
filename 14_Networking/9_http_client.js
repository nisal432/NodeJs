import http from 'node:http'
import fs from 'node:fs'

//basically we create client through the request method

const clientRequest = http.request({
    hostname: 'localhost',
    port: 4000,
    path: '/html',
    method: 'GET'
}, (res)=>{
	res.on('data', (chunk)=>{
		console.log(chunk.toString());
	})
})
clientRequest.end()

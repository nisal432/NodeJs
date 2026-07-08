const file = require('fs')
const fileData = file.readFileSync('./.env').toLocaleString();
console.log(process.cwd());

console.log(fileData);
fileData.split('\r\n').forEach((pair)=>{
	const [key,value] = pair.split('=')
	process.env[key] = value;
})
// const envVariables = process.env
console.log(process.env);
// using the ignored file .env by using gitignore and the accessing the contents of .env file through fs and then storing it into the parent process environment variable that is bash and that is transferred into the node js process as it's the child of the terminal and inheritance is followed
// you will find course and name on the environment variables
// const { env } = require("node:process");
//trying to set the process environment variable

process.env["name"] = "nischal";
const envs = process.env
console.log(envs);
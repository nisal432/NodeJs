let iteration = 0
async function loadDirectory(path = '/files'){

const res = await fetch(path)
const folderData =  await res.json()
const div = document.querySelector('.files')
div.replaceChildren()

for(const key in folderData){
const anchor = document.createElement('div');

anchor.textContent = folderData[key].name;
if(folderData[key].type == 'file'){
anchor.addEventListener('click', (el)=>{
	const filePath = path.replace('/files', '')
	window.location.href = `${filePath +'/'+ folderData[key].name}`
})}
else{
	anchor.addEventListener('click', (el)=>{
		path = `${path + '/'+ folderData[key].name}`
		loadDirectory(path)
	})
}

div.appendChild(anchor)
}
}
loadDirectory()

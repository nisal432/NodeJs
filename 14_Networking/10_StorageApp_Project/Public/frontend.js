let iteration = 0
async function loadDirectory(path = '/files'){

const res = await fetch(path)
const folderData =  await res.json()
const div = document.querySelector('.files')
div.replaceChildren()

for(const key in folderData){
const parentAnchor = document.createElement('div')
parentAnchor.classList.add('parentAnchor')

const anchor = document.createElement('div');
anchor.classList.add('anchor')
parentAnchor.appendChild(anchor)

const previewButton  = document.createElement('button')
previewButton.classList.add('btn')
previewButton.classList.add('preview-btn')
previewButton.textContent = 'preview'
parentAnchor.appendChild(previewButton)

const deleteButton = document.createElement('button')
deleteButton.textContent = 'delete'
deleteButton.classList.add('btn')
deleteButton.classList.add('delete-btn')
parentAnchor.appendChild(deleteButton)

const downloadButton = document.createElement('button')
downloadButton.classList.add('btn')
downloadButton.classList.add('preview-btn')
downloadButton.textContent = 'Download'

previewButton.addEventListener('click', (el)=>{
	anchor.click()
})

anchor.textContent = folderData[key].name;
if(folderData[key].type == 'file'){
	deleteButton.addEventListener('click', async(el)=>{
		const filePath = path.replace('/files', '')
		const filePathToDelete = `${ '/delete?'+filePath +'/'+ folderData[key].name}`
		anchor.parentElement.remove()
		await fetch(filePathToDelete)
	})
	parentAnchor.appendChild(downloadButton)
	downloadButton.addEventListener('click',async ()=>{
		const filePath = path.replace('/files', '')
		const filePathToDownload = `${ '/download?'+filePath +'/'+ folderData[key].name}`
		window.location.href = filePathToDownload
	})

anchor.addEventListener('click', (el)=>{
	const filePath = path.replace('/files', '')
	window.location.href = `${filePath +'/'+ folderData[key].name}`
})}
else{
		deleteButton.addEventListener('click', async(el)=>{
		const filePath = path.replace('/files', '')
		const filePathToDelete = `${ '/delete?dir?'+filePath +'/'+ folderData[key].name}`
		anchor.parentElement.remove()
		await fetch(filePathToDelete)
	})
	anchor.addEventListener('click', (el)=>{
		path = `${path + '/'+ folderData[key].name}`
		loadDirectory(path)
	})
}

div.appendChild(parentAnchor)
}
}
loadDirectory()

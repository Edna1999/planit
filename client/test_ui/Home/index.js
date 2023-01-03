const projectElement = document.getElementById('projects-nav')
const projectSpan = document.getElementById('projects-span')
const projectDrop = document.getElementById('projects-drop')


const dropDownActivate = () => {
  if (projectDrop.classList.contains('hidden')) {
    projectDrop.classList.remove('hidden')
    projectSpan.textContent = '▼'
    return;
  } 
  projectDrop.classList.add('hidden')
  projectSpan.textContent = '►'
}

projectSpan.textContent = '►'

projectElement.addEventListener('click', dropDownActivate)
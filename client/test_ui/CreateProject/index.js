const submitBtn = document.getElementById('submit-btn');


submitBtn.addEventListener('click', function() {
  if (document.getElementById('name-form').value.trim() === '') {
    console.log('not complete')
    return;
  } else if (document.getElementById('description-form').value.trim() === '') {
    console.log('not complete')
    return;
  }

  console.log('submit form')
})

const teamInputs = document.getElementsByClassName('team-inputs')
const addMembersBtn = document.getElementById('more-members');
const appendDiv = document.getElementById('append-div')

// addMembersBtn.addEventListener('click', function() {
//   const teamLength = teamInputs.length
//   if (teamLength > 0) {
//     const newInput = document.createElement('input')
//     newInput.classList.add('team-inputs')
//     const deleteBtn = document.createElement('h4')
//     deleteBtn.textContent = '-'
//     deleteBtn.classList.add('delete-btns')
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('new-input')
//     newDiv.append(newInput, deleteBtn)
//     appendDiv.append(newDiv)
//     return;
//   }
//   console.log('err')
// })


let i = 0;
addMembersBtn.addEventListener('click', function() {
  i++;
  const newInput = document.createElement('input')
  newInput.classList.add('team-inputs')
  newInput.id = i
  const deleteBtn = document.createElement('h4')
  deleteBtn.textContent = '-'
  deleteBtn.classList.add('delete-btns')
  deleteBtn.id = i
  const newDiv = document.createElement('div')
  newDiv.classList.add('new-input')
  newDiv.id = i
  newDiv.append(newInput, deleteBtn)
  appendDiv.append(newDiv)


  deleteBtn.onclick = function() {
    newDiv.parentNode.removeChild(newDiv)
  }
})
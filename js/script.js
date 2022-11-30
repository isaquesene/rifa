const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')



function editItem(index){
  openModal(true, index)
}
//abre o formulario 
function openModal(edit = false, index =0){
  modal.classList.add('active')

  modal.onclick = e =>{
    if(e.target.className.indexOf('modal-container') !== -1){
      modal.classList.remove('active')
    }
  }
}



const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')
const numeros = document.querySelector('.numeros');

for (var i = 1; i < 101; i++) {
  numeros.innerHTML += `<li onclick="openModal(${i})">${i}</li>`;
}

//array(id)

function editItem(index){
  openModal(true, index)
}
//abre o formulario 
function openModal(id){

  num.value = id
  modal.classList.add('active')


  modal.onclick = e =>{
    if(e.target.className.indexOf('modal-container') !== -1){
      modal.classList.remove('active')
    }
  }
}

function msg(){
  var Nome = document.getElementById("nome").value;
  var num = document.getElementById("num").value;


var url = "https://wa.me/5512982725408?text=" + "Nome: " + Nome + "%0a"
+ "Numero: " + num;


window.open(url, '_blank').focus();

}

const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')
const nums = document.querySelector('#nums')
const numeros = document.querySelector('.numeros');

//array
vendido = [17,22,13,100,12,7,77,9,10,11]


for (var i = 1; i < 101; i++) {

  if(vendido.includes(i)){
    numeros.innerHTML += `<li class="vendidas">${i}</li>`;
  }else{
    numeros.innerHTML += `<li onclick="openModal(${i})">${i}</li>`;
  }

  
}

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
  var nums = document.getElementById("nums").value;


var url = "https://wa.me/5512982725408?text=" + "Nome: " + Nome + "%0a"
+ "Numero: " + num + "%0a" + "Mais: " + nums;


window.open(url, '_blank').focus();

}

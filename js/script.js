const modal = document.querySelector('.modal-container')
const nome = document.querySelector('#nome')
const num = document.querySelector('#num')
const nums = document.querySelector('#nums')
const numeros = document.querySelector('.numeros');

//array
vendido = [22,33,13,46,100,12,7,9,10,74,31,34,48,39,11,15,6,80,84,27, 21, 41, 8,67, 19, 26,1, 24, 5, 89, 96, 83, 20, 25, 28, 30, 18, 63, 36, 14, 53, 38, 77]


for (var i = 1; i < 101; i++) {

  if(vendido.includes(i)){
    numeros.innerHTML += `<li class="vendidas" onclick="numescolhido()">${i}</li>`;
  }else{
    numeros.innerHTML += `<li onclick="openModal(${i})">${i}</li>`;
  }

  
}

function numescolhido(){
  alert('Número já foi escolhido!');
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

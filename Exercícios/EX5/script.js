let num = document.getElementById('num');
let tab = document.getElementById('tab');
let res = document.getElementById('res');

let vetor = [];

function isNumero(n){
  if (Number(n) > 0 && Number(n) < 101) {
    return true;
  } else {
    alert('São válidos apenas valores entre 1 e 100!');
    return false;
  }
}

function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true;
  } else{
    return false;
  }
}

function adicionar(){
  if (isNumero(num.value) && !inLista(num.value,vetor)) {
    vetor.push(num.value);

    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    tab.appendChild(item);
  } else {
    alert('Valor inválido ou já encontrado na lista!');
  }
}

function finalizar(){
  
}
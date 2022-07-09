function gerar(){
  let num = document.getElementById('num');
  let tab = document.getElementById('tabuada');

  if(num.value.length == 0){
    alert('[ERRO] Por favor, digite um número.');
  } else{
    let n = Number(num.value);

    tab.innerHTML = '';

    for(let i = 1; i <= 10; i++){
      let item = document.createElement('option');
      item.text = `${n} X ${i} = ${n*i}`;
      tab.appendChild(item);
    }
  } 
}
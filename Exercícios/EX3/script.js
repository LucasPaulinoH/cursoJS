function contar(){
  let ini = document.getElementById('ini');
  let fim = document.getElementById('fim');
  let passo = document.getElementById('passo');
  let res = document.getElementById('res');

  let i = Number(ini.value);
  let f = Number(fim.value);
  let p = Number(passo.value);

  if(p <= 0){
    window.alert('Passo inválido! Considerando passo = 1');
    p = 1;
  }

  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Forneça os dados para a contagem.');
  } else{
    res.innerHTML = '<p>Contando...';
    
    if(i < f){
      //contagem crescente
      for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449} `
      }
    } else {
      //contagem decrescente
      for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449} `
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
} 
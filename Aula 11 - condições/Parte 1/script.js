function verificar(){
  var n = document.getElementById('valor');
  velocidade = Number(n.value);

  var resultado = document.getElementById('res');
  
  if(velocidade > 80){
    resultado.innerHTML = '<p>Limite de velocidade excedido. <strong>MULTADO!</strong>';
  } else{
    resultado.innerHTML = '<p>Limite de velocidade respeitado.';
  }
}
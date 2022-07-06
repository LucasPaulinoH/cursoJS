function verificar(){
  var data = new Date();
  var ano_atual = data.getFullYear();
  var ano_nasc = document.getElementById('txtano');
  var res = document.getElementById('res');

  var img = document.createElement('img');
  img.setAttribute('id','foto');

  if (ano_nasc.value.length == 0 || ano_nasc > ano_atual){
    window.alert('[ERRO] Verifique os dados e tente novamente.');
  } else{
    var sex = document.getElementsByName('rsex');
    var idade = ano_atual - Number(ano_nasc.value);
    var genero = '';

    if (sex[0].checked){
      genero = 'homem';

      if(idade <= 14){
        img.setAttribute('src','h crianca.png');
      } else if(idade < 21){
        img.setAttribute('src','h jovem.png');
      } else if(idade < 60){
        img.setAttribute('src','h adulta.png');
      } else{
        img.setAttribute('src','h idoso.png');
      }
    } else if (sex[1].checked){
      genero = 'mulher';

      if(idade <= 14){
        img.setAttribute('src','m crianca.png');
      } else if(idade < 21){
        img.setAttribute('src','m jovem.png');
      } else if(idade < 60){
        img.setAttribute('src','m adulta.png');
      } else{
        img.setAttribute('src','m idosa.png');
      }
    }
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`;
    res.appendChild(img);
  }
}
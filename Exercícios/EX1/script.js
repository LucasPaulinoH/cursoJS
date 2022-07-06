function carregar(){
  var msg = document.getElementById('msg');
  var img = document.getElementById('img');
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();

  if (hora >= 5 && hora <= 12){
    msg.innerHTML = `Bom dia! São ${hora} horas e ${min} minutos.`; 
    img.src = 'manhã.png';
    document.body.style.color = 'black';
    document.body.style.background = '#7ac1f0'
  } else if (hora > 12 && hora < 18){
    msg.innerHTML = `Boa tarde! São ${hora} horas e ${min} minutos.`;
    img.src = 'tarde.png';
    document.body.style.background = '#9a59b2'
  } else {
    msg.innerHTML = `Boa noite! São ${hora} horas e ${min} minutos.`;
    img.src = 'noite.png';
    document.body.style.background = '#0e4b9c'
  }
}
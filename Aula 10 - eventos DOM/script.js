var d = document.getElementById('area');
d.addEventListener('click', clicar);
d.addEventListener('mouseenter', entrar);
d.addEventListener('mouseout', sair);

function clicar(){
  d.innerText = 'Clicou!';
  d.style.background = 'red';
}
    
function entrar(){
  d.innerText = 'Entrou!';
}
    
function sair(){
  d.innerText = 'Saiu!';
  d.style.background = '#54268f';
}
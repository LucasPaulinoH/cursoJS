var n1 = Number(window.prompt('Digite um número: ')); //Number() converte o parâmetro para Number 
var n2 = Number.parseInt(window.prompt('Digite outro número: '));
var media = (n1 + n2)/2; 

// obs.: .toString() ou String() converte o parâmetro para String

window.alert(`A média entre ${n1} e ${n2} é ${media}`); 

//placeholder:`${variável}`


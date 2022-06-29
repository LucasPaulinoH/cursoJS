var n1 = Number(window.prompt('Digite um número: ')); //Number() converte o parâmetro para Number 
var n2 = Number.parseInt(window.prompt('Digite outro número: '));
var media = (n1 + n2)/2; 

// obs.: .toString() ou String() converte o parâmetro para String

window.alert(`A média entre ${n1} e ${n2} é ${media}`); //placeholder:`${variável}`

media.toFixed(2).replace('.',','); /* mostra a precisão de duas casas decimais, e o replace
substitui um elemento por outro, nesse caso o . pela ,*/

window.alert(`Esta é a média com a precisão de duas casas: ${media.toFixed(2)}`);

window.alert(media.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); //formata o número para real




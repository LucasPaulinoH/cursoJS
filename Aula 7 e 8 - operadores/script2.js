/* ========================================================
   OPERADORES RELACIONAIS
   - > (maior que);
   - < (menor que);
   - >= (maior ou igual);
   - <= (menor ou igual);
   - == (igual);
   - != (diferente);
   - === (igualdade restrita (do mesmo valor e do mesmo tipo));
   - !== (desigualdade restrita (valor e tipo diferente)); */

var n1 = window.prompt('Digite um número:');
var n2 = window.prompt('Digite outro número:');

window.alert(n1 > n2);
window.alert(n1 < n2);
window.alert(n1 >= n2);
window.alert(n1 <= n2);
window.alert(n1 == n2);
window.alert(n1 != n2);

//teste de igualdade restrita:
window.alert(5 == '5'); //igualdade simples (de valor) = true;
window.alert(5 === '5'); //igualdade restrita = false.



   
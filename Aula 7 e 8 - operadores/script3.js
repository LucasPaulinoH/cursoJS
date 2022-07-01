/* ========================================================
   OPERADORES LÓGICOS
   - ! (negação);
   - && (and);
   - || (or). */

/* ========================================================
   PRECEDÊNCIA DE OPERADORES:
   ARITMÉTICOS -> RELACIONAIS -> LÓGICOS */

var idade = window.prompt('Digite sua idade:');

if(idade >= 15 && idade <= 19){
   window.alert(`A idade digitada se encontra entre 15 e 19.`);
} else{
   window.alert(`A idade digitada NÃO se encontra entre 15 e 19.`);
}

var estado = window.prompt('Em que estado você mora?');
if (estado == 'PR' || estado == 'RS' || estado == 'SC') {
   window.alert('você mora no sul do Brasil!');
} else {
   window.alert('você não mora no sul do Brasil.');
}

var salario = Number(window.prompt('Digite o seu salário:'));
var sexo = window.prompt('Qual seu sexo? (m/f)');

if(salario > 1500 && sexo != 'm'){
   window.alert('você é uma mulher e seu salário é maior que R$ 1500.');
} else{
   window.alert('você é um homem e ganha um salário inferior a R$ 1500');
}

/* ========================================================
   OPERADOR TERNÁRIO
   - teste ? true : false; 
   Ex.: media >= 7 ? 'aprovado' : 'reprovado'  
*/

var idade = window.prompt('Digite uma idade:');
var isMajor = idade >= 18? 'MAIOR DE IDADE' : 'MENOR DE IDADE';
window.alert(isMajor);

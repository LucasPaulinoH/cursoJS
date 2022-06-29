/* ========================================================
   OPERADORES ARITMÉTICOS
   - + : soma;
   - - : subtração;
   - * : multiplicação;
   - / : divisão;
   - % : resto da divisão inteira;
   - ** : potência. */

   var n1 = Number(window.prompt('Digite um número: '));
   var n2 = Number(window.prompt('Digite outro número: '));
   var soma = n1 + n2;
   var subtracao = n1 - n2;
   var multiplicacao = n1 * n2;
   var divisao = n1 / n2;
   var resto = n1 % n2;
   var potencia = n1 ** n2;

   window.alert(`${n1} + ${n2} = ${soma}`);
   window.alert(`${n1} - ${n2} = ${subtracao}`);
   window.alert(`${n1} * ${n2} = ${multiplicacao}`);
   window.alert(`${n1} / ${n2} = ${divisao}`);
   window.alert(`${n1} % ${n2} = ${resto}`);
   window.alert(`${n1} ** ${n2} = ${potencia}`);

   /* ORDEM DE PRECEDÊNCIA
   - ();
   - **;
   - * / %;
   - + -. */
   /* ======================================================== 
      OPERADORES DE ATRIBUIÇÃO E INCREMENTO:
      - = (recebe), += (recebe soma), -= (recebe subtração)...;
      - ++ (incremento), -- (decremento);
      */




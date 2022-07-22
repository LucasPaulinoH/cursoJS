/* as seguintes situações são false se em 
  um contexto booleano: */

const x = "";

const y = 0;

const a = null;

const b = undefined;

/* além destes, os tipos NaN também são falsy.*/

console.log(`${!!x}, ${!!y}, ${!!a}, ${!!b}`); /* os dois booleanos
de negação (!!) testam o valor booleano da variável, enquanto o booleano
(!) representa uma negação simples */

/* as seguintes situações são true se em
   um contexto booleano: */

const list = [];
const obj = {}

console.log(`${!!list}, ${!!obj}`);
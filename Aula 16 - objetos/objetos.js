const pessoa = {
  nome: "Lucas",
  sobrenome: "Paulino",
  idade: 19,
  hobbies: ["Assistir F1", "Jogar online", "Programar"],
  animal: {
    especie: 'cachorro',
    nome: 'Luke',
    idade: 8,
  }
};

/*
const firstName = pessoa.nome;
const lastName = pessoa.sobrenome;
const age = pessoa.idade;
const hobbies = pessoa.hobbies
*/

const { primeiroNome: firstName, lastName, age, hobbies } = pessoa; //mesma coisa que acima
        /* ↑ para renomear uma das
         propriedades da nova variável */

console.log(hobbies[2]);

//pessoa.animal = 'Cachorro'; <- adicionando propriedades (caso não tenha) a um objeto posteriormente

console.log(`O animal de estimação de ${pessoa.nome} é ${pessoa.animal.especie} de nome ${pessoa.animal.nome}.`);

const atividades = [
  {
    id:1,
    descricao: 'estudar',
    isCompleted: false
  },
  {
    id:2,
    descricao: 'almocar',
    isCompleted: true
  },
  {
    id:3,
    descricao: 'dormir',
    isCompleted: true
  }
]

const id3 = atividades[2].descricao;
console.log(id3);

const atividadesJSON = JSON.stringify(atividades); //convertendo a lista (atividades) para JSON
const lista = JSON.parse(atividadesJSON); //convertendo de JSON para lista

console.log(lista);
// 1

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];
  
// function flatten(matrix) {
//   return matrix.reduce((acc, cur) => acc + ',' + cur)
// }

// console.log(flatten(arrays));

// não entendi esse exercicio


//para o 2, 3 e 4

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// 2
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

// function reduceNames(obj) {
//     const func = (allNames, curName) => allNames + ', ' + curName.author.name;
//   return obj.reduce(func, '').substring(2).concat('.')
// }

// console.log(reduceNames(books));


// 3
// const expectedResult = 43;

// function averageAge(array) {
//     const func = (acc, cur) =>  (acc + cur) / 2
//     const ages = array.map((element) => element.releaseYear - element.author.birthYear)
//     return ages.reduce(func)
// }

// function averageAge(array) {
//     const func = (acc, cur) =>  acc + cur
//     const ages = array.map((element) => element.releaseYear - element.author.birthYear)
//     return ages.reduce(func) / ages.length
// }

// console.log([10, 5, 8].reduce((acc, cur) =>  (acc + cur) / 2));

// 4

// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   };
  
//   function longestNamedBook(array) {
//       return array.reduce((acc, cur) => ((acc.name.length > cur.name.length) ? acc : cur))
//   }

//   console.log(longestNamedBook(books));


// 5
// const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
// ];
  
// function containsA(array) {
//     return array.reduce(
//         (acc, cur) => {
//             const total = cur.split('').reduce((totalAs, currLetter) => {
//                 return (currLetter === 'a' || currLetter === 'A') ? totalAs += 1 : totalAs
//             }, 0)            
//             return acc += total
//         }, 0)
// }

// console.log(containsA(names));



// 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(name, score) {
    const arrayConcat = name.map((element, index) => ({name: element, average: score[index]}))
}


// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
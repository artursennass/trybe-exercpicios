// forEach

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach((qualquer) => {
//       showEmailList(qualquer)
//   })



// find

// 1
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (array) => {
//     return array.find(element => element % 3 === 0 && element % 5 ===0)
// }

// console.log(findDivisibleBy3And5(numbers))

// 2
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   return names.find(element => element.length === 5)
// }

// console.log(findNameWithFiveLetters());

// 3
// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ]
  
//   function findMusic(id) {
//     return musicas.find(element => element.id === id)
//   }
  
//   console.log(findMusic('31031687'))


// Array.some  Array.every

// 1
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((element) => element === name)
// }

// console.log(hasName(names, 'Ana'))

// 2
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 19 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   const verifyAges = (arr, minimumAge) => {
//     return arr.every(element => element.age >= minimumAge)
//   }
  
//   console.log(verifyAges(people, 18));

// sort
// 1
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((a, b) => a.age - b.age)

  people.sort((a, b) => b.age - a.age)
  
  console.log(people);

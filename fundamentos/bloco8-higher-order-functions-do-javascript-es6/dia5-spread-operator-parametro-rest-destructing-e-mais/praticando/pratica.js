// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['uva', 'morango', 'manga'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['laranja', 'maça', 'melao'];

// const fruitSalad = (fruit, additional) => {
//     return [...fruit, ...additional]
// };

// console.log(fruitSalad(specialFruit, additionalItens));



// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };
  
//   const { workDays, weekend } = daysOfWeek;
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']
  
//   const weekdays = [...workDays, ...weekend];
//   console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']





// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
// };

// const allInfo = {
//     ...user,
//     ...jobInfos,
// }

// console.log(allInfo);

// const { name, age, nationality, profession, squad, squadInitials } = allInfo;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);





// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [firstSalut, secondSalut] = saudacoes;

// secondSalut(firstSalut);





// Array Destructuring
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// const array = [bebida, comida, animal];

// [comida, animal, bebida] = array;

// // let x = comida;
// // comida = bebida;
// // bebida = animal;
// // animal = x

// console.log(comida, animal, bebida); // arroz gato água


// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo



// NAO CONSEGUI
// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo





// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));




// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude});
  
// console.log(getPosition(-19.8157, -43.9542));




// const multiply = (number, value = 1) => {
//     return number * value
//   };
  
//   console.log(multiply(8));
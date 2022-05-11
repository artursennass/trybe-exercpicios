// exercicio 1
// const myName = "Artur";
// const birthCity = "Rio de Janeiro";
// let birthYear = 1994;
// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);
// birthYear = 2030;
// console.log(birthYear);

// exercicio 2
// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//     firstName: 'Ana',
//     lastName: 'Santos',
// };
// const patientEmail = 'ana@gmail.com';

// console.log(typeof patientId)
// console.log(typeof patientEmail)
// console.log(typeof patientInfo)
// console.log(typeof isEnrolled)

// console.log(typeof patientAge)

// patientId = "50";

// console.log(typeof patientId)


// exercicio 2 parte dois
// const base = 5;
// let height = 8;
// const area = base * height;

// console.log(area)

// const perimeter = base + base + height + height

// console.log(perimeter)

// exercício 3
// const nota = "oi";

// if (nota >= 80) {
//     console.log("Aprovada(o)!")
// } 
// else if (nota < 80 && nota >= 60) {
//     console.log("você está na nossa lista de espera.")
// }
// else if (nota < 60) {
//     console.log("Você foi reprovada(o).")
// }
// else {
//     console.log("O input não é valido.")
// }

// exercicio 4
// const conditionOne = true;
//   const conditionTwo = false;

//   console.log(conditionOne && conditionTwo);

// const currentHour = 10;
// let message;

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";
// }
// else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// }
// else if (currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!!";
// }
// else if (currentHour >= 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém passado";
// }
// else {
//     console.log("O input é inválido");
// }

// console.log(message)


// let weekDay = "domingo";
// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "Sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }
// if (weekDay === "sábado" || weekDay === "domingo") {
//     console.log("FINALMENTE, descanso merecido UwU");
// }

// exercicio 5
// let resultado;

// switch (resultado) {
//     case "aprovada":
//         console.log("Aprovada(o)!");
//         break;
//     case "lista":
//         console.log("você está na nossa lista de espera.");
//         break;
//     case "reprovada":
//         console.log("Você foi reprovada(o).");
//         break;
//     default:
//         console.log("O input não é valido.")
// }






// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// dia 2

// exercicio 0
// let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(taskList.length)

// let searchForFirtsTask = taskList[0];

// // console.log(searchForFirtsTask);

// let searchForLastTask = taskList[taskList.length - 1];

// console.log(searchForLastTask);

// taskList.push('Fazer exercícios da Trybe');
// console.log(taskList)
// taskList.unshift('Acordar');
// console.log(taskList)

// taskList.pop();
// console.log(taskList)
// taskList.shift();
// console.log(taskList)


// exercicio 1

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// // exercicio 2
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

//exercicio 3
// menu.push('Contato');

// console.log(menu);


// exercicio 4

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }


//exercício 5

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let name of names) {
//     console.log(name)
// }



// logica de programação
// let fruits = [3, 4, 10, 1, 12];

// let sum = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//     // let internalSum = sum + fruits[index];
//     // sum = internalSum;
//     // posso substituir esse codigo acimo por esse:
//     sum += fruits[index];
// }
// if (sum > 15) {
//     console.log(sum);
// } else if (sum < 15) {
//     console.log('valor menor que 16.');
// }



// JS objetos de funções
// objetos
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}
player['fullName'] = player.name + ' ' + player.lastName;

console.log('A jogadora ' + player.fullName + ' tem ' + player.age + ' anos de idade.')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

//for/in e for/of
// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (let key in names) {
//     console.log('Olá ' + names[key])
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car) {
//       console.log(key + ' ' + car[key])
//   }




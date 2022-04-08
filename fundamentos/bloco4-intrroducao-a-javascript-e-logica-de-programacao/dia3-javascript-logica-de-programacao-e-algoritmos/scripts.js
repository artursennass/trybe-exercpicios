// exercicio 1
// let fatorial = 1;

// for (index = 10; index > 0; index -= 1) {
//     let multiplication = fatorial * index;
//     fatorial = multiplication;    
// }

// console.log(fatorial)


// exercicio 2
// 1.  cirar um array que irá recebera palavra ao contrario
// 2. ler cada letra. for
// 3. pegar a letra lida e jogar no inicio da array. .unshift()
// 4. concatenar a array em uma palavra

// let word = 'chocolate';

// let backwards = [];

// for (index = 0; index < word.length; index += 1) {
//     backwards.unshift(word[index]);
// }

// console.log(backwards.join(''))

// exercicio 3
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// //para retornar a maior palavra da array:
// // 1. criar uma array que irá receber o numero decaracteres de cada palavra. let count
// // 2. passar por toda a array. for
// // 3. contar o numero de caracteres da palavra atual. .length
// // 4. colocar o resultado do .length dentro da array count. .push()
// // 5. criar uma variavel que irá receber o index do maior numero da array count. let biggerWord
// // 6. passar pela array count. for
// // 7. se for maior que todos os elementos. if com um for. colocar na variavel biggerWord
// // 8. usar a variavel biggerWord como index da array array para imprimir

// let count = [];

// for (index = 0; index < array.length; index += 1) {
//     count.push(array[index].length);
// }
// // console.log(count)

// let biggerWord = 0;

// for (index = 0; index < count.length; index += 1) {
//     let internalBigger = [];
//     for (index2 = 0; index2 < count.length; index2 += 1){
//         if (count[index] >= count[index2]) {
//             internalBigger.push(1);
//         }
//     }
//     if (internalBigger.length == count.length) {
//         biggerWord = index;
//     }
// }

// // console.log(biggerWord)

// console.log('A maior palavra é ' + array[biggerWord])


// // para a menor palavra

// let smallerWord = 0;

// for (index = 0; index < count.length; index += 1) {
//     let internalBigger = [];
//     for (index2 = 0; index2 < count.length; index2 += 1){
//         if (count[index] <= count[index2]) {
//             internalBigger.push(1);
//         }
//     }
//     if (internalBigger.length == count.length) {
//         smallerWord = index;
//     }
// }

// console.log('A menor palavra é ' + array[smallerWord])


// exercicio 4
// Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50

// let numeroPrimo = [];

// for (index = 0; index <= 50; index += 1) {
//     let divisores =[];
//     for (index2 = 0; index2 <= 50; index2 += 1) {
//         if (index % index2 == 0) {
//             divisores.push(1)
//         }
//     }
//     if (divisores.length == 2) {
//         numeroPrimo.push(index)
//     }
// }

// console.log(numeroPrimo)


// bonus 1

// let n = 13;

// for (index = 1; index <= n; index += 1) {
//     let linha = [];
//     for (index2 = 1; index2 <= n; index2 += 1) {
//         linha.push('*')
//     }
//     console.log(linha.join(''))
// }

// bonus 2

// let n = 10;

// for (index = 1; index <= n; index += 1) {
//     let linha = [];
//     for (index2 = 1; index2 <= index; index2 += 1) {
//         linha.push('*')
//     }
//     console.log(linha.join(''))
// }

// bonus 3 
// let n = 5;

// for (index = 1; index <= n; index += 1) {
//     let linha = [];
//     let diferenca = n - index
//     for (index2 = 1; index2 <= diferenca; index2 += 1) {
//         linha.push(' ')
//     }
//     for (index2 = 1; index2 <= index; index2 += 1) {
//         linha.push('*')
//     }
//     console.log(linha.join(''))
// }

// bonus 4
let n = 5;

for (index = 1; index <= n; index += 1) {
    let linha = [];
    let diferenca = n / 2
    for (index2 = 1; index2 < diferenca; index2 += 1) {
        linha.push(' ')
    }
    for (index2 = 1; index2 <= index; index2 += 1) {
        linha.push('*')
    }
    console.log(linha.join(''))
}

// ainda nao resolvido
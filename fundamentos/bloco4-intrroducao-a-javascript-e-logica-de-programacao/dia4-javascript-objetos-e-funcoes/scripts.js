// Parte I
// exercicio 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// console.log('Bem-vinda, ' + info.personagem)

// exercicio 2
// info.recorrente = 'Sim';

// console.table(info)

// exercicio 3
// for (let key in info) {
//     console.log(key)
// }

// exercicio 4
// for (let key in info) {
//     console.log(info[key])
// }

// exercicio 5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

// for (let key in info && info2) {
//     if (info[key] === info2[key]) {
//         console.log('Ambos', key + 's')
//     } else {
//         console.log(info[key], 'e', info2[key])
//     }
// }

// exercicio 6
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };


// console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama', "'" + leitor.livrosFavoritos[0].titulo + "'" + '.');


// exercicio 7
// leitor.livrosFavoritos.push ( {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// })

// console.log(leitor)

// exercicio 8

// console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos.');


// Parte II 
// exercicio 1


// function palimdromo(palavra) {
//     let separado = palavra.split('')
//     let aoContrario = separado.reverse()
//     let ePalimdromo = aoContrario.join('')
//     if (palavra === ePalimdromo) {
//         console.log('A palavra', palavra, 'é um palímdromo.')
//     } else {
//         console.log('A palavra', palavra, 'não é um palímdromo.')
//     }
// }

// palimdromo ('arara')
// palimdromo ('palimdromo')


// exercicio 2
// function indice(array) {
//     for (index = 0; index < array.length; index += 1) {
//         let eMaior = 0;
//         for (index2 = 0; index2 < array.length; index2 += 1) {
//             if (array[index] >= array[index2]) {
//                 eMaior = eMaior + 1;
//             }
//         }
//         if (eMaior === array.length) {
//             console.log('O indice', index, 'é a posição do maior número.')
//         }
//     }
// }
// arrayTeste = [2, 4, 6, 7, 10, 0, -3];
// indice([2, 3, 6, 7, 10, 1])



// exercicio 3
// function indice(array) {
    // for (index = 0; index < array.length; index += 1) {
    //     let eMenor = 0;
    //     for (index2 = 0; index2 < array.length; index2 += 1) {
    //         if (array[index] <= array[index2]) {
    //             eMenor = eMenor + 1;
    //         }
    //     }
    //     if (eMenor === array.length) {
    //         console.log('O indice', index, 'é a posição do menor número.')
    //     }
    // }
// }

// indice([2, 4, 6, 7, 10, 0, -3])


// exercicio 4
// function maiorNome(nomes) {
//     let tamanhoNomes = [];
//     for (index3 = 0; index3 < nomes.length; index3 += 1) {
//         tamanhoNomes.push(nomes[index3].length)
//     }
//     for (index = 0; index < tamanhoNomes.length; index += 1) {
//         let eMaior = 0;
//         for (index2 = 0; index2 < tamanhoNomes.length; index2 += 1) {
//             if (tamanhoNomes[index] >= tamanhoNomes[index2]) {
//                 eMaior = eMaior + 1;
//             }
//         }
//         if (eMaior === tamanhoNomes.length) {
//             console.log('O maior nome é', nomes[index]);
//         }
//     }

// }

// maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);


//exercicio 6
// function somatorio (numero) {
//     let somando = 0;
//     for (index = 1; index <= numero; index += 1){
//         somando = somando + index;
//     }
//     console.log(somando)
// }

// somatorio(5)


// exercicio 7
function final(word, ending) {
    if (word > ending) {
        let ultimoCaractere = [];
        for (index = 1; index <= ending.length; index += 1){
            ultimoCaractere.push(word[word.length - index])
        }
        if (ultimoCaractere.join('') === ending) {
            console.log('O trecho', ending, 'é o final de', word + '.');
        }
    } else {
        console.log('A palavra', word, 'é menor que o trecho', ending + '.');
    }
}

final('trybe', 'be')


//PARTE I

// exercicio 1
// const testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


//exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsInOrder = (array) => array.sort(function(a, b){return a - b}); // nao entendi essa função dentro do sort para acertar o resultado, vi essa solução na documentação
    

console.log(`Os números ${oddsInOrder(oddsAndEvens)} se encontram ordenados de forma crecente!`); // será necessário alterar essa linha 😉



// PARTE II

// exercicio 1
const fatorialDoNumero = (n) => {
    let resultado = 1;
    function fatorial() {
        for(let i in n) {
            resultado = resultado * i
        }
    }
    (n === 0) ? resultado : fatorial(); 

    return resultado
}
fatorialDoNumero(5)
const a = 50;
const b = 51;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

// if (a > b) {
//     console.log(a);
// }
// else if (b > a) {
//     console.log(b);
// }
// else if (a = b) {
//     console.log("os valores são iguais");
// }
// else {
//     console.log("dados não validos")
// }

const c = 80;

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c) {
//     console.log(b);
// }
// else if (c > a && c > b) {
//     console.log(c);
// }

// else if (a = b && a = c) {
//     console.log("os valores são iguais");
// }
// esse trecho acima quando roda da erro, pq?!
// entendi é = nao é igual, tenh que usar ==

const d = -2;

// let sinal = Math.sign(d)

// if (sinal = 1) {
//     console.log("positivo");
// }
// else if (sinal = -1) {
//     console.log("negativo");
// }
// else if (sinal = +0) {
//     console.log("zero")
// }

// const triangulo = a + b + c;

// if ( Math.sign(a) !== 1 || Math.sign(b) !== 1 || Math.sign(c) !== 1) {
//     console.log("Angulos inválidos")
// }
//  else if (triangulo == 180) {
//     console.log("true");
// }
// else if (triangulo !== 180) {
//     console.log("false");
// }

// let pecaDeXadrez = "caValo";

// let minusculaPeca = pecaDeXadrez.toLowerCase();

// if (minusculaPeca == "bispo") {
//     console.log("Bispo -> na diagonal");
// }
// else if (minusculaPeca == "cavalo") {
//     console.log("Cavalo -> em L");
// }
// else if (minusculaPeca == "torre") {
//     console.log("Torre -> em linha reta");
// }
// else if (minusculaPeca == "rainha") {
//     console.log("Rainha -> na diagonal e em linha reta");
// }
// else if (minusculaPeca == "rei") {
//     console.log("Rei -> uma casa na horizontal ou vertical");
// }
// else if (minusculaPeca == "peão") {
//     console.log("Peão -> uma casa para frente");
// }
// else {
//     console.log("ERRO: peça inválida");
// }

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//     console.log(true);
// // }
// else {
//     console.log(false);
// }


// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log(true);
// }
// else {
//     console.log(false)
// }


// const custo = 15;
// const valorDeVenda = 40;
// const impostoSobreCusto = custo * 0.20;
// const custoTotal = custo + impostoSobreCusto;
// const lucro = valorDeVenda - custoTotal;
// console.log(lucro * 1000)



const salarioBruto = 3000;

const inssSobreBruto = salarioBruto * 0.11;
const irSobreBruto = inssSobreBruto * 0.225;
const pagamentoTrybe = salarioBruto * 0.17;

const salarioLiquido = salarioBruto - (inssSobreBruto + irSobreBruto);
const salarioMsc = salarioBruto - (inssSobreBruto + irSobreBruto + pagamentoTrybe);

console.log(salarioLiquido)
console.log(salarioMsc)





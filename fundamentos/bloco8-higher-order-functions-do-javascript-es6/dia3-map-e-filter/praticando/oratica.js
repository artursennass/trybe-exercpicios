const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const produtosPrecificados = (produtos, preços) => produtos.map((e, i) => ( { [e]: preços[i], }
));

console.log(produtosPrecificados(products, prices));
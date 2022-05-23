u8firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let liItens = document.getElementsByTagName('Li');

let unorderList = document.getElementById('container');

for (let i = 0; i < liItens.length; i += 1) {
    liItens[i].classList.remove('tech')
}

function addTech(i) {
    liItens[i].className = 'tech';
    return liItens
}

function removeTech(i) {
    liItens[i].classList.remove('tech')
    return liItens
}

liItens[0].addEventListener("click", function(event) { 
    addTech(0);
    removeTech(1);
    removeTech(2);
});
liItens[1].addEventListener("click", function(event) { 
    addTech(1)
    removeTech(0);
    removeTech(2);
});
liItens[2].addEventListener("click", function(event) { 
    addTech(2)
    removeTech(0);
    removeTech(1);
});


liItens[0].addEventListener("dblclick", function(event) { 
    removeTech(0);
    removeTech(1);
    removeTech(2);
});
liItens[1].addEventListener("dblclick", function(event) { 
    removeTech(0);
    removeTech(1);
    removeTech(2);
});
liItens[2].addEventListener("dblclick", function(event) { 
    removeTech(0);
    removeTech(1);
    removeTech(2);
});
// SO FUNCIONA PARA O ULTIMO!! ??


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
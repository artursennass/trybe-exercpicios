
const firstLi = document.getElementById('first-li');
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


// liItens[0].addEventListener("dblclick", function(event) { 
//     removeTech(0);
//     removeTech(1);
//     removeTech(2);
// });
// liItens[1].addEventListener("dblclick", function(event) { 
//     removeTech(1);
//     removeTech(0);
//     removeTech(2);
// });
// liItens[2].addEventListener("dblclick", function(event) { 
//     removeTech(2);
//     removeTech(1);
//     removeTech(0);
// });
// SO FUNCIONA PARA O ULTIMO!! ??  -  era a ordem dos removeTech, aparentemente ele só esta rodando o primeiro..


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
let main = document.getElementsByTagName('main');
let buttonCreation = document.createElement('button');
buttonCreation.type = 'button';
buttonCreation.innerText = 'Enter'
main[0].appendChild(buttonCreation);

let button = document.getElementsByTagName('button');



function addText() {
    let newText = document.createElement('p');
    let textIntoInput = input.value;
    let newTech = document.getElementsByClassName('tech');
    newText.innerText = textIntoInput;
    newTech[0].appendChild(newText);    
}

button[0].addEventListener('click', addText);

// nao sei pq ele nao esta add o texto, ele deleta o texto que ja esta dentro da ciaxa, mas nao coloca o texto novo

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function toMyPage () {
    window.location.href = "https://artursennass.github.io/";
}

myWebpage.addEventListener('dblclick', toMyPage);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

function changeColor() {
    myWebpage.style.color = '#2fc18c';
}

function changeBack() {
    myWebpage.style.color = 'white';
}

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', changeBack)


// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.
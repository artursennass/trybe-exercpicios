// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault()

let sendButton = document.getElementById(send-button);

sendButton.addEventListener('click', function(event){
    event.preventDefault();
});



// Crie um botão que limpe as informações contidas nos campos;
let deleteContent = document.getElementById('delete-content');

deleteContent.addEventListener('click', function(event){
    let input = document.getElementsByTagName('input');

    for (let i = 0; i < input.length; i += 1) {
        input[i].innerHTML = ""
    }
});
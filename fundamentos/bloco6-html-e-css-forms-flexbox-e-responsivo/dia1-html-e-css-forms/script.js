// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault()

const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function(event){
    event.preventDefault();
});



// Crie um botão que limpe as informações contidas nos campos;
// const deleteContent = document.getElementById('delete-content');

// deleteContent.addEventListener('click', function(event){
//     let input = document.getElementsByTagName('input');

//     for (let i = 0; i < input.length; i += 1) {
//         input[i].innerHTML = ""
//     }
// });

//melhor usar o type reset no botão

const hiddenDiv = document.getElementById('hidden');

function imagesAuthorized() {
    let inputImage = document.createElement('input');
    inputImage.setAttribute('type', 'file');

    hiddenDiv.appendChild(inputImage);
}

function removeFileUpload() {
    hiddenDiv.removeChild(hiddenDiv.firstElementChild);
}


const imageAgrement = document.getElementById('image-agrement');

imageAgrement.addEventListener('click', function(event){
    if (imageAgrement.checked === true) {
        imagesAuthorized();
    } else {
        removeFileUpload();
    }
})


const contestantName = document.getElementById('contestant-name');
const contestantEmail = document.getElementById('contestant-email');

function dataAssessment() {
    if (contestantEmail.innerText < 10 || contestantName.innerText < 10) {
        alert('Dados Inválidos')
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
}

sendButton.addEventListener('click', dataAssessment)
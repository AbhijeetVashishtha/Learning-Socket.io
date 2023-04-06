const socket = io();

let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message__area');
let name;

do{
    name = prompt('Enter your name: ');
}while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter')
    {
        sendMessage(e.target.value);
    }
})

function sendMessage(message){
    let msg = {
        user: name,
        message: message
    }

    appendMessage(msg, 'outgoing');
}

function appendMessage(msg, type){
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className, 'message');

    let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `

    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}
const mainDiv = document.createElement("div");
mainDiv.id = "main";
document.body.appendChild(mainDiv);

const button = document.createElement('button');
button.innerText = 'Button';
button.id = 'button-1';
mainDiv.appendChild(button);
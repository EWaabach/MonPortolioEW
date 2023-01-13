const welcomeElement = document.querySelector("#welcome_text")
let welcomeText = welcomeElement.innerHTML;
let currentText = ""

const addLetter=()=>{
    let letter = welcomeText.charAt(0);
    welcomeText = welcomeText.substring(1);
    currentText += letter;
    welcomeElement.innerHTML = currentText;
}

setInterval(() => {
    addLetter();
}, 200)
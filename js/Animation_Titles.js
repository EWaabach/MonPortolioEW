const welcomeElement = document.querySelector("#welcome_text")
let welcomeText = welcomeElement.innerHTML;
let currentText = ""

const addLetter=()=>{
    let letter = welcomeText.charAt(0);
    welcomeText = welcomeText.substring(1);
    currentText += letter;
    welcomeElement.innerHTML = currentText;
    };

let letterIntervalId = setInterval(() => {
    addLetter();
}, 140)

welcomeElement.addEventListener("click", () => {
  currentText = "";
  welcomeText = "VOUS POUVEZ RETROUVER LES TRAVAUX EN A1 2022 A L'IIM";
})
  // change texte présentation

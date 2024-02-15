// Récupérer les éléments HTML pertinents
const colorOne = document.getElementById("color-a");
const colorTwo = document.getElementById("color-b");
const outputCode = document.getElementById("code");
const submitBtn = document.getElementById("submit");

// Fonction pour générer le code CSS à partir des couleurs sélectionnées
function generateCode() {
    const gradientDirection = getSelectedDirection();
    const cssCode = `background-image: linear-gradient(${gradientDirection}, ${colorOne.value}, ${colorTwo.value})`;
    outputCode.value = cssCode;
    document.body.style.backgroundImage = `linear-gradient(${gradientDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

// Fonction pour récupérer la direction de dégradé sélectionnée
function getSelectedDirection() {
    const activeButton = document.querySelector(".buttons button.active");
    return activeButton.dataset.direction;
}

// Fonction pour copier le code CSS généré dans le presse-papiers
function copyText() {
    console.log("Copied!");
    outputCode.select();
    navigator.clipboard.writeText(outputCode.value)
    alert("Copied the text: " + outputCode.value);
    
}

// Gestion des clics sur le bouton de soumission

// Gestion des clics sur les boutons de direction
const directionButtons = document.querySelectorAll(".buttons button");
directionButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Ajouter la classe 'active' au bouton cliqué
        directionButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        // generateCode(); // Regénérer le code CSS à chaque clic sur un bouton de direction
    });
});

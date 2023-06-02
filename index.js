let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");
let currentDirection = 'to bottom';
let outPutCode = document.getElementById("code");

function setDirection(value , _this){
    let Directions = document.querySelectorAll(".buttons button");
    for( let i of Directions){
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;    
}

function generateCode() {
    outPutCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
} 
function copyText(){
    outPutCode.select();
    document.execCommand("copy");
    alert("Copied the text: " + outPutCode.value);
}




generateCode()
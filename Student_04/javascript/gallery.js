// background color, text size changes and reset
let body = document.getElementById("main");
let bachgroundColorSelect = document.getElementById("colorChange");
let textSizeSelect = document.getElementById("textSizeChange");

document.getElementById("colorChange").addEventListener('click', function(){
    const x = document.getElementById("selectColor");
    const color = x.options[x.selectedIndex].value;

    if (color === "randomBackgroundColor") {
        changeBgColor();
    } else {
        body.style.backgroundColor = color;
    }
});

document.getElementById("reset").addEventListener("click",()=>{
    window.location.reload();
});

document.getElementById("textSizeChange").addEventListener("click", function(){
    var selection = document.getElementById("selectTextSize");
    var selectedValue =selection.options[selection.selectedIndex].value;
    document.body.style.fontSize = selectedValue;
});

function changeBgColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
}


// Thubmnail images, image gallery with description
let cardTitle = document.getElementById("cardTitle");
let cardDescription = document.getElementById("cardDescription");

function viewCard(event, name,id) {
    var title = document.getElementById("viewCardTitle");
    var cardImage = document.getElementById("viewImage");
    
    let className = event.fromElement.children[0].className;
    if (className != "card") {
        let image = event.fromElement.children[0].currentSrc;
        let Desc = document.getElementsByClassName("description")[id];
        let cardDesc = document.getElementsByClassName("cardDescription")[0];
        if (image != undefined) {
            cardImage.src = image;
            title.innerHTML = name;
            cardDesc.innerHTML = Desc.innerHTML;
        }
    }
}


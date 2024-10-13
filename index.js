let username;
let yay = new Audio('gallery/YAY.mp3');
let happy = new Audio('gallery/Happy.mp3');
var cheeseSlider = document.getElementById("cheeseSlider");
var cheeseValue = document.getElementById("cheeseValue");
const images = [
    'gallery/sadRat.jpg',
    'gallery/mexicanRat.jpg',
    'gallery/bakedRat.gif',
    'gallery/rat.jpg',
    'gallery/happyRat.jpg'
]

document.getElementById("submitUsername").onclick = function (){
    username = document.getElementById("inputUsername").value;
    document.getElementById("helloMsg").innerHTML = `Hello ${username}!`;
    document.getElementById("second-step").style.visibility = "visible";
    document.getElementById("stage2").style.visibility = "visible";
    yay.play();
    happy.play();
}

cheeseSlider.oninput = function() {
    imgChooser.src = images[Math.ceil(this.value/20) - 1];
    cheeseValue.innerHTML = this.value;
}

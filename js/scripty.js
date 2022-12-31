let _clickMe = document.getElementById("ClickMe");

function EventListener() {
  _clickMe.addEventListener("click", ChangeColor);
}
document.addEventListener("DOMContentLoaded", function () {
  EventListener();
});
function ChangeColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let _ColorHex = document.querySelector('#ColorHex');
  document.body.style.backgroundColor = "#" + randomColor;
  _ColorHex.textContent = randomColor;
  
}

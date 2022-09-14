var colorDisplay = document.querySelector("#color");
var changeColor = document.querySelector("#ColorChange");
var backgroundColor = document.body;
var random = randomColors();

//Initial Text to display current color
colorDisplay.textContent = random;
colorDisplay.style.color = random;
backgroundColor.style.background = random;

//Random RGB Numbers
function randomColors() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  var r_hex = r.toString(16);
  var g_hex = g.toString(16);
  var b_hex = b.toString(16);

  return ("#" + r_hex + g_hex + b_hex);
}

//Button to reload location and refresh color
changeColor.addEventListener("click", function(){
    window.location.href = window.location.href;
});

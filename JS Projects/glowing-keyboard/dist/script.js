document.addEventListener("keypress", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  keyElement.classList.add("pressed");
  setTimeout(function () {keyElement.classList.remove("pressed")}, 300);
});
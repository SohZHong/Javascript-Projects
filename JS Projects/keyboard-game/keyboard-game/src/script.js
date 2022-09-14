const keys = [..."abcdefghijklmnopqrstuvwxyz1234567890"];

function getRandomKey(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//expected output: math.floor(random choose (60-50)) then 50 + random num between 0-10

function Target() {
  return keys[getRandomKey(0, keys.length - 1)];
}

function startTarget() {
  const key = document.getElementById(Target());
  key.classList.add("highlighted");
}

document.addEventListener("keypress", (event) => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedkey = document.querySelector(".highlighted");
  keyElement.classList.add("press");
  keyElement.addEventListener("animationend", () => {
    keyElement.classList.remove("press");
  });
  if (keyPressed === highlightedkey.innerHTML){
    highlightedkey.classList.remove("highlighted");
    startTarget();
  };
});

startTarget();

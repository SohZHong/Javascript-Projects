var menutoggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-element");

menutoggle.addEventListener("click", function(){
  for (var i = 0; i < activeElements.length; i++){
    activeElements[i].classList.toggle("active");
  }
});
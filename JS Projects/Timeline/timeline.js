(function () {
  "use strict";
  
  var items = document.querySelectorAll(".timeline li");

const isElementXPercentInViewport = function(el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};
  
/*
  Second Solution
function partInViewport(elem) {
    let x = elem.getBoundingClientRect().left;
    let y = elem.getBoundingClientRect().top;
    let ww = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let hw = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let w = elem.clientWidth;
    let h = elem.clientHeight;
    return (
        (y < hw &&
         y + h > 0) &&
        (x < ww &&
         x + w > 0)
    );
}

document.addEventListener("scroll", ()=>{
	let el = document.getElementById("test");
	if (partInViewport(el)) {
  	document.getElementById("container").style.backgroundColor = "green";
  } else {
  	document.getElementById("container").style.backgroundColor = "red";
  }
});
*/  

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementXPercentInViewport(items[i], 100) == true){
        items[i].classList.add("in-view");
      }
    }
  }


  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

const circles = $(".circle");

function RandomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function GenerateColor() {
  var array = [];
  for (let i = 0; i < circles.length; i++) {
    array.push(RandomColor());
  }
  return array;
}

function RandomDimension(){
  var dimension = Math.floor(Math.random() * 400) * (Math.round(Math.random()) ? 1 : -1);
  return dimension + "px";
};

function AssignPositions(){
  var array = [];
  for (let i = 0; i < (circles.length*4); i++){
    var dimensions = RandomDimension();
    array.push(dimensions);
  }
  return array;
}

$(".scatter").on("click", function () {
  //Reassign new colors to loop
  var colors = GenerateColor();
  var position = AssignPositions();
  //for loop for jQuery
  for (var i = 0; i < circles.length; i++) {
    circles.eq([i]).css("background-color", colors[i]);
  }
  for (var i = 0; i < (circles.length * 4); i++){
    circles.eq([i]).css({
      "top": position[i],
      "left": position[i+1],
      "right": position[i+2],
      "bottom": position[i+3],
    });
  };
});

//Return all to same place
$(".return").on("click", function(){
    for (let i = 0; i < circles.length; i++){
    circles.eq([i]).css({
      "top": "",
      "right": "",
      "bottom": "",
      "left": "",
      "background-color": "red",
  });
 };
});

//Click on circle to return only one (Pure JS)
$(".circle").on("click", function(){
    this.style.top = "";
    this.style.right = "";
    this.style.bottom = "";
    this.style.left = "";
    this.style.backgroundColor = "red";
});
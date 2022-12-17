function chBackcolor(red) {
    document.body.style.background = red;
}
function chBackcolor(Orange) {
    document.body.style.background = Orange;
}
function chBackcolor(Yellow) {
    document.body.style.background = Yellow;
}
function chBackcolor(green) {
    document.body.style.background = green;
}
function chBackcolor(SkyBlue) {
    document.body.style.background = SkyBlue;
}
function chBackcolor(Blue) {
    document.body.style.background = Blue;
}
function chBackcolor(Purple) {
    document.body.style.background = Purple;
}
function chBackcolor(white) {
    document.body.style.background = white;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

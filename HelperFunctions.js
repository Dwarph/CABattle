//Helper Functions sourced from elsewhere

function getRandomIntInRange(min, max) {
  // source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function componentToHex(c) {
  //source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  //source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRandomColor() {
  //source: https://stackoverflow.com/questions/1484506/random-color-generator
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

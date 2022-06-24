/* .. */
// Please don't reuse my code without my permission.

// define function for choosing an array index
function choose(arry) {
  var index = Math.floor(Math.random() * arry.length);
  console.log(index);
  return index;
}
// choose random color
const mode = ["light", "dark"]
  
const lightColor = ["#ff0000", "#ffd900", "#3cff00", "#00ffff", "#1100ff", "#ff00f2", "#00ff80"];
const darkColor = ["#3a3a3a", "#5e0000", "#005e0d", "#00065e", "#003c41", "#000153", "#530045"];
  
// function for changing colors
function colorChanger() {
// getting the body element and the gg class from html
  const body = document.querySelector('body');
  
  const modeIndex = choose(mode);

  if (modeIndex == 0) {
    const bg = choose(lightColor);
    bgColor = lightColor[bg];
    const txt = choose(darkColor);
    textColor = darkColor[txt];
  } else if (modeIndex == 1) {
    const bg = choose(darkColor);
    bgColor = darkColor[bg];
    const txt = choose(lightColor);
    textColor = lightColor[txt];
  }
  console.log(textColor);
  console.log(bgColor);
  
  // finalize and set
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}
function stopOrMove() {
  const gg = document.querySelector(".the_big_gg"); // the gg element
  
  if (gg.style.animation == "") {
    gg.style.animation = "none";
  } else {
    gg.style.animation = "";
  }
  var ani = gg.style.animation;
  console.log(ani);
}
window.onload = function() {
  colorChanger();
};
/* .. */
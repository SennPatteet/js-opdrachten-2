


document.getElementById("button").onclick = function surfaceRectangle() {
  let width = prompt("breedte?");
  let height = prompt("hoogte?");
  alert(`De oppervlakte is ${width*height}`)
};

document.getElementById("button2").onclick = function perimeterRectangle() {
  let width = prompt("breedte?");
  let height = prompt("hoogte?");
  alert(`De omtrek is ${(width*2)+(height*2)}`)
};

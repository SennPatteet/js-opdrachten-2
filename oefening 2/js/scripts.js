
document.getElementById("button").onclick = function surfaceCirkle() {
  let straal = prompt("Straal?");
  alert(`De oppervlakte is ${straal*straal*Math.PI}`);
}

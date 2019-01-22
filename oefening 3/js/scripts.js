let a = 3;
let b = 2;

function triple(x) {
  return x*3;
}


document.getElementById("button").onclick = function display() {
  alert(`${triple(a)}\n${triple(b)}`);
};

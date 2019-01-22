
let tab = [-2,1,4];

let number = prompt("geef x");
const subtract = (x,y) => x - y;
// const subtractAgain = x => x - tab[2];     ALSO WORKS BUT NOT SHORT

if (subtract(number, tab[0]) >= 0) {
  alert("positief");
} else {
  alert("negatief")
}

const display = () => {
  alert(`Het resultaat was : ${subtract(number, tab[0])}\nHet resultaat met het laatste getal uit de array (4) :
  ${subtract(number, tab[tab.length-1])}`);
  // alert(`Het resultaat was ${subtractAgain(number)}`)      ALSO WORKS BUT NOT SHORT
}

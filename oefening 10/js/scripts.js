
// WERKT MA MAG NI LOL --------------------------------------------------

// const sum = () => {
//   let eersteGetal = prompt("voer een getal in");
//   let tweedeGetal = prompt("voer NOG een getal in");
//   let derdeGetal = prompt("voer een laatste getal in");
//
//   alert(`De som is: ${parseInt(eersteGetal) + parseInt(tweedeGetal) + parseInt(derdeGetal)}`);
//
// }

const sum = () => {

  let total = 0;

  for (i=0; i<3; i++) {
    let numbers = parseInt(prompt("number pls"));

    total += numbers

  }

  alert(total);
}

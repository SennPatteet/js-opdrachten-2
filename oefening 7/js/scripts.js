
// WERKT MAAR NIET DE BEDOELING LOL ----------------------------

// const display = () => {
//   const makeChoice = prompt("Kies! 1, 2 of 3?")

  // if (makeChoice == 1) {
  //   alert("1. Thank you")
  // } else if (makeChoice == 2) {
  //   alert ("2. Hello")
  // } else if (makeChoice == 3) {
  //   alert ("3. Goodbye")
  // } else {
  //   alert("Excuse me, what do you want?")
  // }

// }

const display = () => {
  let makeChoice =  prompt("Kies! 1, 2 of 3?")

  switch (makeChoice) {
    case "1":
       alert("1. Thank you");
      break;

    case "2":
         alert("2. Hello");
        break;

    case "3":
           alert("3. Goodbye");
          break;

    default:
      alert("Excuse me, what do you want?")
  };
};

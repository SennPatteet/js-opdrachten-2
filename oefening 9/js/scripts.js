
const testWhile = () => {

  let string = prompt("Typ iets met een 'p' in pls");


  while (string.indexOf("p") == -1 ) {
  string =  prompt("Typ iets met een 'p' in pls");
  };

  alert(string);
};

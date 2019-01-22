// WERKT MA MAG NI -------------------------------------

// const display = () => {
// let date = new Date();
// let weekday = new Array(7);
// weekday[0] =  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
//
// let now = weekday[date.getDay()];
//
// console.log(now);
// };

const display = () => {

  var date = new Date();

  switch (date.getDay())  {

      case 0:
          alert("Today is Sunday");
          break;

      case 1:
          alert("Today is Monday");
          break;

      case 2:
          alert("Today is Tuesday");
          break;

      case 3:
          alert("Today is Wednesday");
          break;

      case 4:
          alert("Today is Thursday");
          break;

      case 5:
          alert("Today is Friday");
          break;

      case 6:
          alert("Today is Saturday");
          break;
  };
}; //end of display

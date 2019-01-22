


const calcBmi = () => {
  let gewicht = parseFloat(prompt("wa weegde gij?"));
  let grootte = parseFloat(prompt("hoe groot zijde gij? (in m)"))

  let bmi = gewicht / grootte * grootte;

  if (bmi < 16.5) {

    alert(`BMI: ${bmi}\nondervoeding of hongersnood`);
  } else if (16,5 <= bmi <18,5) {
    alert(`BMI: ${bmi}\ndunheid`);
  } else if (18,5 <= bmi <= BMI < 25) {
    alert(`BMI: ${bmi}\nnormale bouw`);
  } else if (25 <= bmi <30) {
    alert(`BMI: ${bmi}\novergewicht`);
  } else if (30 <= bmi <= bmi < 35) {
    alert(`BMI: ${bmi}\nmatige overgewicht`);
  } else if (35 <= bmi <40) {
    alert(`BMI: ${bmi}\nernstige overgewicht`);
  } else if (bmi > 40) {
    alert(`BMI: ${bmi}\nmorbide obesitas`);
  }
};

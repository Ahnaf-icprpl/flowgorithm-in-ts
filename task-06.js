let name = "Dimas";
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
let category = "";

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi < 25) {
  category = "Normal";
} else if (bmi < 30) {
  category = "Overweight";
} else {
  category = "Obese";
}

console.log(name + " BMI: " + bmi.toFixed(2));
console.log("Category: " + category);

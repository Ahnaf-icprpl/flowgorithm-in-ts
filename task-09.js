let name = "Citra";
let gpa = 3.9;
let attendance = 95;

if (gpa >= 3.5 && attendance >= 90) {
  if (gpa >= 3.8) {
    console.log(name + " is ELIGIBLE for a FULL scholarship");
  } else {
    console.log(name + " is ELIGIBLE for a PARTIAL scholarship");
  }
} else {
  console.log(name + " is NOT ELIGIBLE for a scholarship");
}

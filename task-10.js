let name = "Fajar";
let score = 91;
let attendance = 96;
let points = 0;
let grade = "";
let award = "";

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

if (grade === "A" && attendance >= 95 && points === 0) {
  award = "BEST STUDENT AWARD";
} else if (grade === "A" || grade === "B") {
  award = "HONOR ROLL";
} else if (grade === "C" || grade === "D") {
  award = "CERTIFICATE OF COMPLETION";
} else {
  award = "REMEDIAL NOTICE";
}

console.log("Student: " + name);
console.log("Grade: " + grade);
console.log("Award: " + award);

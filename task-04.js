let name = "Raka";
let age = 16;
let hasStudentId = false;

if (age >= 17 && hasStudentId) {
  console.log(name + " is ALLOWED");
} else if (age < 17 && !hasStudentId) {
  console.log(name + " is DENIED: must be at least 17 and have a student ID");
} else if (age < 17) {
  console.log(name + " is DENIED: must be at least 17");
} else {
  console.log(name + " is DENIED: student ID is required");
}

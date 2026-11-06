let name = "Eka";
let weight = 7;
let shipping = 0;

if (weight <= 1) {
  shipping = 9000;
} else if (weight <= 5) {
  shipping = 15000;
} else if (weight <= 10) {
  shipping = 25000;
} else {
  shipping = 40000;
}

console.log(name + " shipping cost: Rp" + shipping);

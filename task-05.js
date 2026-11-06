let name = "Sinta";
let age = 60;
let category = "";
let price = 0;

if (age < 12) {
  category = "Child";
  price = 15000;
} else if (age <= 17) {
  category = "Teen";
  price = 25000;
} else if (age <= 59) {
  category = "Adult";
  price = 40000;
} else {
  category = "Senior";
  price = 20000;
}

console.log(name + " is " + category);
console.log("Ticket price: Rp" + price);

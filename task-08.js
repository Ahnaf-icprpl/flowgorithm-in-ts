let name = "Budi";
let membership = "Regular";
let purchase = 120000;
let discount = 0;

if (membership === "Gold") {
  discount = 20;
} else if (membership === "Regular" && purchase >= 100000) {
  discount = 10;
}

let finalPrice = purchase - purchase * discount / 100;
console.log(name + " discount: " + discount + "%");
console.log("Final price: Rp" + finalPrice);

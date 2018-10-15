var inputGallons =prompt("How many gallons?");
var liters =function(gallons) {
  return inputGallons * 3.78541;
}
alert(liters(inputGallons) + " liter(s)");

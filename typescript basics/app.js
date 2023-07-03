var taskCompleted = true;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var plan = "basic";
var firstName = 'Peter';
var lastName = 'Parker';
var age = 18;
var statuses2 = [0, 10, 20, 30];
var text = firstName + '\n' + lastName + '\n' + age;
// console.log(text);
text = "".concat(firstName, "\n").concat(lastName, "\n").concat(age, "\n");
var hi = "<h1>Hello</h1>\n<p>World</p>";
document.write(hi);
// function declaration
function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 0.50; }
    return price * discount;
}
console.log(calculateDiscount(25, 3));
// optional parameters
function displayName(firstname, lastName, prefix) {
    return (prefix) ? "".concat(prefix, " ").concat(firstname, " ").concat(lastName) : "".concat(firstname, " ").concat(lastName);
}
console.log("roger", "Mushagalusa");
console.log("Mushagalusa", "Biringanine", "Ing");

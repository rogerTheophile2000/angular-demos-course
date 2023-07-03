let taskCompleted:boolean = true

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let plan: string = "basic";
let firstName = 'Peter';
let lastName = 'Parker';
let age = 18;

let statuses2: Array<number> = [0, 10, 20, 30]
let text = firstName + '\n' + lastName + '\n' + age;

// console.log(text);

text = `${firstName}
${lastName}
${age}
`

let hi = `<h1>Hello</h1>
<p>World</p>`;
document.write( hi )

// function declaration
function calculateDiscount(price : number, discount: number = 0.50): number{
    return price * discount;
}
console.log(calculateDiscount(25, 3));

// optional parameters
function displayName(firstname: string, lastName : string, prefix?: string){
    return (prefix) ? `${prefix} ${firstname} ${lastName}`: `${firstname} ${lastName}`
}

console.log("roger", "Mushagalusa");
console.log("Mushagalusa", "Biringanine", "Ing");

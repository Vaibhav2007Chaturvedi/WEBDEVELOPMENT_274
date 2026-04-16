// TEMPLATE LITERALS: are a modern way to create strings in JavaScript using backticks instead of quotes.
// OLD WAY :
let name="Vaibhav";
let age=20;
console.log("My name is "+name+"and I am "+age+" Years old");
// NEW WAY:
let name1="Vaibhav";
let age1=18;
console.log(`My name is ${name1} and I am ${age1} year old`);
// Advanced Example:
// 1.Expression Inside:
console.log(`2*5=${2*5}`);
// 2.Function inside:
function greet(name){
    return "Hello"+name;
}
console.log(`${greet("Vaibhav")}`);
// 3.Conditional inside:
let age3=17;
console.log(`you are ${age3>=18?"adult":"minor"}`);

// REAL-LIFE USE CASES:
// 1.Dynamic Message:
let user="Vaibhav";
console.log(`Welcome,${user}!`);
// 2.HTML Generation 
let use="Vaibhav";
let html=`
  <h1>${use}</h1>
  <p>Welcome To Website</p>
  `;
console.log(html);
// 3.API/Data Display
let price=100;
console.log(`Total Price:${price}`);
// Function == Comments: 
// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
// showPrimes(21);


// ...........................
// Rewrite the function using '?' or'||'
function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    return confirm("Did your parents allow you?");
}

let n = Number(prompt("Enter your age:"));

if (checkAge(n)) {
    alert("Access granted");
} else {
    alert("Access denied");
}

// Function is a value:
function sayHi(){
    alert("hello");
}
alert(sayHi);// shows the function code

//..........................................
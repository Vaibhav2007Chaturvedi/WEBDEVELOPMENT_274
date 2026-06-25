// FUNCTION:
// Function Declaration: to create a function we can use a function declaration.
// function showMessage(){
//     alert('Hello everyone !');
// }
// showMessage();

// .............................

// Local Variable: A variable inside a function is only visible inside that function.
function showMessage(){
    let message="Hello everyone :";//Local Variable
    alert(message);
}
showMessage();

// .......................
// Outer Variable: A function can access an outer as well 
let username='john';
function showmessage1(){
    let message='hello'+ username;
    alert(message);
}
showmessage1();

// ..........................
// The function has full access to the outer variable. It can modify it as well.
let userName2 = 'John';

function showMessage3() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName2 ); // John before the function call

showMessage3();

alert( userName2 ); // Bob, the value was modified by the function

// ALERT: alert---This one we’ve seen already. It shows a message and waits for the user to press “OK”.
// The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

// alert("hello");


// PROMPT: The function prompt accepts two arguments:
// let age = prompt('How old are you?', 100);

// alert(`You are ${age} years old!`); // You are 100 years old!

// CONFIRM: The function confirm shows a model window with a question and two buttons:OK and Canacel. The result is true if OK is pressed and false otherwise.
let isBoss=confirm("Are you the boss?");
alert(isBoss);
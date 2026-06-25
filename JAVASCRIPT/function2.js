// PARAMETER: we can pass arbitray data to function using parameter.
// function showMessage(from, text) { // parameters: from, text
//   alert(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// ......................................
function showmessage(from,text){
from='*'+from+'*';
alert(from+':'+text);
}
let from="Anna";
showmessage(from,"hello");
alert(from);
// ...................................

// RETURNIG A VALUE: a function can return a value back into the calling code as the result.
function sum(a,b){
  return a+b;
}
let result =sum(1,2);
alert(result);

// .............
function checkage(age){
  if(age>=18){
    return true;
  }
  else{
    return confirm("Do you have permission from your parents");
  }
}
let age=prompt("How old are you?",18);
if(checkage(age)){
  alert("Access granted");
}
else{
  alert("access denied");
}

// TYPE CONVERSION :
// String Conversion:String conversion happens when we need the string form of a value.  
// let value=true;
// alert(typeof value);//boolean


//Numeric Conversion: It is mathematical function and expression happens automatically.
// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num); // number


//Boolean Conversion: It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:

//1) Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
//2) Other values become true.

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

//  NOTE:
// Please note: the string with zero "0" is true
// Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


// // Conditional Statement:
// let marks=90;
// if(marks>=90){
//     console.log(`A`);
// }else if(marks>=75 && marks<90){
//     console.log(`B`);
// }else{
//     console.log(`D`);
// }
// // If Condition:
// let age=20;
// if(age>=18){
//     console.log("Adult: ");
// }
// If+Else Condition:
let age=16;
if(age>=18){
    console.log("Adult");
}
else{
    console.log("Not Adult");
}
// If+Else If+Else:
let marks=85;
if(marks>=90){
    console.log("A");
}
else if(marks>=60 && marks<90){
    console.log("B")
}
else{
    console.log("C");
}

// Switch Statement :When you have many conditionns for one variable switch is cleaner than multiple else if.
let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Invalid");
}
// Real Life-Example:
let role="admin";
switch(role){
    case "admin":
        console.log("Full access");
        break;
    case "user":
        console.log("limited access");
        break;
    deauft:
    console.log("Guest");
}
let marks=[97,25,67,88,32];
// console.log(marks);
// alert(marks);
// console.log(marks.length);
// alert(marks.length);

let heroes=["ironman","thor","hulk","superman","batman","spiderman"];
// console.log(heroes);
// alert(heroes);

// for loop
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

// for of :
for(let hero of heroes){
    console.log(hero);
}

// Practice question: 
// For a given array with marks of students ->[85,97,44,37,76,60] . Find the average marks of entire class.
let marks1=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks1.length;i++){
    sum +=marks1[i];
}
let avg=sum/marks1.length;
console.log(avg);

// Fora given array with prices of 5 items->[250,65,300,900,50].All items have an offer of 10% off on them.
// Change the array to store final price after applying offer.
let items=[250,65,300,900,50];
let i=0;
for(let val of items){
    console.log(`value of index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer =${items[i]}`);
    i++;
}
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]-=offer;

//     console.log(items);
// }

// .............................
let foodItems=["potato","apple","litchi","tomato"];
// foodItems.push("chips","burger");
// console.log(foodItems);
// foodItems.pop("burger");
// console.log(foodItems);

console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);
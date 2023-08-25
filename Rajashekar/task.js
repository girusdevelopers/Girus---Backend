// let string = 'the quick brown fox';
// let sp = string.split('');
// console.log(sp);

// 2)   Write a JavaScript function that accepts an argument and returns the type?

// function myFunction(num){
//    console.log(typeof(num));
// }
// let num='hi';
// myFunction(num);

// 3).Write a JavaScript function that returns the current date and time.

// function new_Date_time(){
// const date = new Date();
// const formatted = `${date.getDay}/${date.getMonth+1}/${date.getFullYear}  ${date.getHours}:${date.getMinutes}`
// console.log(formatted);
// }

// new_Date_time();

// 4. Write a JavaScript function that accepts unlimited arguments and returns the sum.

function myFunction(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum+=num;
    }
    console.log(sum);
}
myFunction(1,2,3,4,5,6,7);


// 5).Write a JavaScript function that accepts age number an argument and returns the number of days.

// let days = (age) => {
//     console.log(age*365);
// }
// let age=24;
// days(age);

// 1). How do you concatenate two arrays in JavaScript?

// let arr1 = [3,4,6,4,8];
// let arr2 = [8,4,8,9,2];
// let result = arr1.concat(arr2);
// console.log(result);

// 2. How do you remove an element from an array in JavaScript?

// let arr1 = [10,3,45,7,63,28,9];
// let result = arr1.pop();
// let result2 = arr1.splice(1,1);
// console.log(result2);
// console.log(arr1);


// 3. How do you sort an array in JavaScript?

// let arr = [4,32,21,4,67,7,4];
// const result = arr.sort((a,b) => a-b);
// console.log(result);

// 4. Write a JavaScript function to clone an array. ( Hope so you have covered functions also )

// let arr1 = [4,5,3,6,78,32,22,4];
// let clonedArray = arr1.slice();
// console.log(clonedArray);

// 5).Write a JavaScript program to remove duplicate items from an array

let arr = [2,4,3,3,6,7,5,4];
let unique = [];
let result = arr.forEach((element)=>
{
    if(!unique.includes(element))
    {
        unique.push(element);
    }
}
);
console.log(unique);






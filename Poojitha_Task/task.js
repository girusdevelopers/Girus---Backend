// 1.Answer

const words = "the quick brown fox";
const arr = words.split(" ");
 for(var i=0; i<arr.length;i++)
 {
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
 }

 const word = arr.join(" ");
 console.log(word);


//  2.Answer

function type(value){
    return typeof(value)
}
console.log(type(121));
console.log(type("poojitha"));
console.log(type(true));
console.log(type([1,2,3,4]));
console.log(type({name:"pooji",age:23}))
console.log(type(function fun(){}))


//3.Answer

let date = new Date(); 
let dateAndTime = date. toLocaleString();
console.log(typeof(dateAndTime));

//4.Answer
//Js
function func() {
    console.log(arguments);
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum)
    return sum;
  }
  func(3,4,5)


  //ES6
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num,0);
  }
  
  const result = sum(3,7,9,10,4);
  console.log(result);  


//5.Anser

function fun(age){
    return age *365;
}

console.log(fun(23));

//Arrays

//1.Answer

const a = ["Hello"];
const b=["Poojitha"];
const res = a + " " + b;
console.log(res);

//2.Answer

const c = ["green","pink","blue","red"]
const res1=c.filter(c => c !== "red");
console.log(res);

const d = ["green","pink","blue","red"]
console.log(d.filter(d => d !=="red"));

//3.Answer

const e = ["red","pink","green","blue"]
console.log(e.sort());


//4.Answer

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red',
    type:'car',
    year:2022
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...updateMyVehicle, ...myVehicle}

  console.log(myUpdatedVehicle)

//Array

  const oldArray = ["dog1", "dog2", "dog3"];
 
const clonedArray = [...oldArray];
 

console.log(clonedArray);



const old = [1,2,3,4,5];
 
const cloned = [...oldArray];
 

console.log(cloned);


// 5.Anser

let array = ["apple", "mango", "apple","orange", "mango", "mango"];
  
function remove(array) {
    return [...new Set(array)];
}
  
console.log(remove(arr));

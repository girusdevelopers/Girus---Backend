//Question - 1
// const text = 'the quick brown fox';
// const result = fun(text);
// function fun(text) {
//     let words = text.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
//   }
//   console.log(result); 


//Question -2
//   function fun2(value){
//    return typeof(value)
//   }
//   console.log(fun2(12));
//   console.log(fun2('amar'));
//   console.log(fun2(false));
//   console.log(fun2([1,2,3]));
//   console.log(fun2({name:'amar', age:10}))
//   console.log(fun2(function f() {}))


//Question - 3
//   function fun(){
//     const d = new Date();

//     const year = d.getFullYear();
//     const month = d.getMonth();
//     const day = d.getDate();
//     const hour = d.getHours();
//     const minutes = d.getMinutes();

//     const format = day+"/"+month+"/"+year+" "+hour+":"+minutes;

//     return format;
//   }
//  const fun1 = fun();
//   console.log(fun1)
//   console.log(typeof(fun1))


// Question - 4
//Es6
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
//   console.log(sum(4,5,6,5));

//   //Normal JavaScript
//   function func() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     console.log(sum)
//     return sum;
//   }
//   func(3,4,5)


// Question - 5
// function fun(age){
//     return age*365;
// }
// console.log(fun(23))

//Arrays
// Question - 1 (concatenation)
// const a = ["apple","banana"]
// const b = ["red","yellow"]
// const result = a.concat(b);
// console.log(result);

// Question - 2 ( remove an element from an array)
// const a = ["apple","banana","red","yellow","kiwi"]
// const result = a.filter(a => a!=="yellow");
// console.log(result);

// Question - 3 (sort) 
// const a = ["banana","red","apple","yellow","kiwi"]
// const result = a.sort();
// console.log(result);


//-------spread-----
// const details = {
//     name : 'neeraj',
//     company: 'Girus',
//     address: 'Up'
//   }
// const mydetails = {
//     name : 'amar',
//     company: 'Girus',
//     address: 'Ts'
//   }
//   const result = {...details}
//   console.log(result)



// Question - 4 (clone)
//   const arr=[1,2,3,4,5,6]
//   const clo=[...arr]
//   console.log("spread operator")
//   console.log(clo)

//   const new_arr=arr.slice();
//   console.log("using slice")
//   console.log(new_arr)

//   const meth= Array.from(arr)
//   console.log("Array.from method")
//   console.log(meth)


// Question - 5 (emove duplicate items from an array)

// let arr = ["scale",  "strength", "happy","peace", "happy", "happy"];

// function removeDuplicates(arr) {
//     const array = arr.filter((item, index) => {
//         const findIndex = arr.indexOf(item)
//         console.log(item+" "+findIndex)
//         return findIndex === index // true | false 
//     })
//     return array
// }
// console.log(removeDuplicates(arr));

const a =[]
const ar = ["scale",  "strength", "happy","peace", "happy", "happy"];
const result= ar.forEach((Element)=> {
if(a.includes(e )){
    a.push()
}})
console.log(result)




// console.log(arr.indexOf('strength'))

// let result = [...new Set(arr)]
// console.log(result)

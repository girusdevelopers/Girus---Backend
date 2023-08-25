//First Questing for printing first letter of word captial in string


// const String = "hello world";
// const capitalizedString = cfw(String);
// console.log(capitalizedString);  

// function cfw(String) {
//      const words = String.split(" ");
//     const capitalizedWords = words.map(word => {
//       const firstLetter = word.charAt(0).toUpperCase();
//       const restOfWord = word.slice(1);
//       return `${firstLetter}${restOfWord}`;
//     });
//     return capitalizedWords.join(" ");
//   }


  //Second Questing for printing accepting argument and returntype

//   function getType(arg) {
//     return typeof(arg);
//   }
//   let arg=42;

//   console.log(getType(arg))

  //third Questing for printing date and time in formatted way


// function getDandT() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = (now.getMonth() + 1);
//     const day = now.getDate();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
    
//     const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
//     return formattedDateTime;
//   }
  
//   const fun = getDandT();
//   console.log(fun);  


//  Questing for printing accepts unlimited arguments and returns the sum.
  

//Es6
// function calculate(...values) {
//     return values.reduce((total, current) => total + current, 0);
//   }
  
//   const total1 = calculate(1, 2, 3);
//   const total2 = calculate(100, 200, 300, 400, 500);
  
//   console.log(total1);  
//   console.log(total2);


//Questing for printing accepts age number an argument and returns the number of days.


// function life(age){
// return age*365;
// }
// console.log(life(56));

// Questing for printing concatenate two arrays

// const value1=["Saketh","Amer","Mahinder","Raju","RR"];
// const value2=["deekshith","poojitha","kiran"];

// const result = value1.concat(value2)
// console.log(result);


//  Questing for printing remove an element from an array

// const value=["Saketh","Amar","Mahinder","Raju","RR"];
// const result = value.filter(value=>value!=="Raju");
// console.log(result);

// Sort()

// const value=["Saketh","Amar","Mahinder","Raju","RR"];
// const result = value.sort();
// console.log(result);

// Spread operator()

// const Karimnagar = {
//     brand: 'Ford',
//     model: 'KMT',
//     color: 'red',
//     type: 'Bike',
//   }
  
//   const Hyd = {
//     type: 'Bike',
//     year: 2021,
//     color: 'Blue',
//   }
  
//   const myUpdatedVLG = {...Karimnagar, ...Hyd}
//   console.log(myUpdatedVLG );


// clone()

// function cloneArray(arr) {
//     return Array.from(arr);
//   }
  
//   const originalArray = [1, 2, 3, 4, 5];
//   const clonedArray = cloneArray(originalArray);
  
//   console.log(clonedArray);

//Removing the duplicated elements

// const a = [1, 2, 3, 4, 5, 1];
// const result = a.filter(a=> a!==1)
// console.log(result);  


const a = [1, 2, 3, 4, 5, 1];
let result = [...Set(a)]
   nconsole.log(result);  












  
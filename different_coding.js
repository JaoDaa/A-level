// console.log(5)

// const a = true

// console.log(a);

// const b = 5
// const c = '5'

// console.log(b === c);

// const toBe = true
// const notToBe = false

// console.log(toBe && notToBe);
// console.log(toBe || notToBe);
// console.log(!toBe);
// console.log(toBe && notToBe && toBe || true);

// function doSmth() {
//     console.log(5);
// }

// console.log(String(doSmth()));

// console.log(String([1, 3, 5, 7]))

// function doSmth() {
//   let a = 5;
//   const b = 10;
//   a++;
//   return a;
// }


// const a = '5';
// const b = 3;

// console.log(a + b);

// const a = '5';
// const b = {};

// console.log(a + b);


// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };
// Соптимизировано для возможности выбора 1 значения 
// for (let i = 0, len = arr.length; i < len; i++) {
//     console.log(arr[i]);
// };

// то же самое через forEach
// arr.forEach((el) => console.log(el));

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  elements.map(function(element) {
    return element.length;
  });
  console.log(elements);
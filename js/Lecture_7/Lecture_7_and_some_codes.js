// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 3));

// let result1 = sum(3, 5);
// let sumFunc = sum;
// let result2 = sumFunc(4, 1)

// console.log(result1);
// console.log(result2);

// const numbers = [1, 2, 3, 4, 5];

// const newArray = numbers.map(function (element) {
//     console.log('element: ', element); // element: 1 and so on and so forth 
//     const result = element * 2; 
//     return result;
// });

// console.log('newArray: ', newArray); // newArray:  (5) [2, 4, 6, 8, 10]

// то же через метод forEach
// const numbers = [1, 2, 3, 4, 5];

// const newArr = [];
// numbers.forEach(function(element) {
//     const result = element * 2;
//     newArr.push(result);
// });

// numbers.forEach(function(element) {
//     const result = element * 3;
//     newArr.push(result);
// });

// console.log('newArr: ', newArr); //newArr:  (10) [2, 4, 6, 8, 10, 3, 6, 9, 12, 15]


// Лекция Условия 
// if - else

// if (condition) {
    // some code;
// };

// if (true) {
//     console.log('test');
// }
// аналогично 
// if (true) console.log('test')

// example

// const number = 3;

// if (number >= 4) {
//     console.log ('good');
// } else {
//     console.log('bad');
// }

// const test1 = 3;
// const test2 = 5;
// if (test1 > test2) {
//     console.log('test1 > test2');
// } else {
//     console.log('test1 < test2');
// }
// test1 < test2

// SWITCH


// if (test1 < test2) {
//     console.log('test1 < test2')
// } else if (test1 > test2) {
//     console.log('test1 > test2')
// } else if (test1 === test2) {
//     console.log('test1 === test2')
// } else {
//     console.log('error')
// }

// const number = 4;

// switch (number) {
//     case 5:
//         console.log('excellent');
//         break;
//     case 4:
//     console.log('good');
//         break;
//     case 3:
//     console.log('normal');
//         break;
//     case 2:
//     console.log('bad');
//     default - if nothing works...
// }

// Тернарный оператор - единственный оператор с тремя составляющими - условие и два значения

// const isOnline = true;

// isOnline ? console.log('Hello') : console.log('user is Offline'); - проверка, изза того, что true первое, автоматом выбирается "true"

// const status1 = isOnline ? 'Hello' : 'User is offline';  - // сохранение

// console.log(status1); // Hello


// LOOPS

// while (condition) {
//     repeat some code
// }

// let count = 5;

// while (count) {
//     console.log(count --);
// } 
// 5 4 3 2 1 



// FOR

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

// для объектов

const months = {
    1: 'January',
    2: 'February',
    12: 'December',
};

for(let month in months){
    console.log('Month name: ' + months[month]);
}
//result: January, February, December

// Объяснение домашки 1 задания
// const ratings2 = watchList.map((movie) => {
//     const film = {
//         title: movie.Title
//         rating: movie.imdbRating
//     };
//     return film;
// });

// или вариант

// const ratings2 = watchList.map(movie => ({
//     title:movie.Title,
//     rating: movie.imdbRating
// }));




// методы объединения объектов - дополнительно запомнить!!!!!!!!!!!

// { ... {a:1, b: 2}, ... {a: 100, c:3}}; //{a: 100, b:2, c: 3}

// [ ... [1, 2, 3], ... [3, 4, 5]]; // [1, 2, 3, 4, 5]

// [ ... [{a: 2}], ... [{a: 5}]]; // [{a: 2}, {a: 5}]

// const obj1 = {a: 1};
// const obj2 = obj1;
// obj2.b = 2 ;
// obj1.b; // 2  две разные ссылки на один объект


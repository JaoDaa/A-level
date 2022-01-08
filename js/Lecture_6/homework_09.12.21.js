const car = {
    mark: 'Audi',
    model: 'S8',
    year: 2020,
    isNew: true,
    color: 'black',

    getShortInformation () {
        return `${this.mark}, ${this.model}, ${this.year}, ${this.color}`;
    }
};
console.log(car.getShortInformation());

let objectPropertyName = 'model';

console.log(car[objectPropertyName]);

const obj = {
    'property with space': 'test'
};
console.log(obj['property with space']);

console.log(car.model);
car.model = 'A8';
console.log(car.model);

// 2
// let obj1 = {
//     value1: 1,
//     value2: 2
// };
// let obj2 = obj1;
// obj2.value2 =3;
// console.log(ob1 == obj2);
// console.log(obj2);

// let obj2 = { ... obj1};

// 3
// const user = {};
// user.name = 'Alex';
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// let obj = {
//     country: 'Ukraine'
// };

// Object.defineProperty(obj, 'capital', {
//     enumerable: false,
//     value: 'Kyiv'
// });

// for(let property in obj) {
//     console.log(property);
// }

// 4
// let obj = {};

// Object.defineProperty(obj, 'capital', {
//     value: 'Kyiv'
// });
// console.log(obj.capital);

// 5
// let obj = {
//     country: 'France',
//     capital: 'Paris'
// };

// Object.defineProperty(obj, 'description', {
//     get: function () {
//         return `${this.capital} is a capital of ${this.country}`;
//     }
// });
// console.log(obj.description);

// let obj1 = {name: 'Tim'};

// let obj2 = new Object({name: 'Serhiy'});

// console.log(obj1);
// console.log(obj2);

// let obj = {mark: 'BMW'};

// Object.defineProperty(obj, 'model', {
//     value: 'X8'
// });

// console.log(obj);


// let obj = {mark: 'Mercedes', model: 'C180', year: 2021};
// Object.defineProperty(obj, 'mark', {enumerable: false});
// let objKeys = Object.keys(obj);
// console.log(objKeys);
// let objValue = Object.values(obj);
// console.log(objValue);

// let userinfo = {
//     name: "Vasia",
// }
// console.log(userinfo);
// userinfo.age = 30;
// console.log(userinfo);
// userinfo.age = 18;
// userinfo['likes Javascript'] = true;
// console.log(userinfo);
// userinfo.address = {
//     city: "Uzhgorod",
//     street: "Pobedy",
// };
// console.log(userinfo);

// ARRAYS

// const numbers = [1, 2, 5, 10];
// console.log(numbers[1]);
// console.log(numbers.length);

// const numbers = [1, 2, 5, 10];

// numbers[10] = 'end';

// console.log(numbers[7]);
// console.log(numbers.length);

// Converting to String

// let arr = [1, 'John', true];
// console.log(arr.toString());
// console.log(arr.join("."));
// console.log(arr.join('|'));

// let arr = [1, 2, 3, 4]
// console.log(arr.shift()); //1
// console.log(arr.pop('.')); //4
// console.log(arr); //(2) [2, 3]

// let arr = [1, 2, 3, 4];
// let arr2 = [5, 6, 7];
// console.log([...arr, ...arr2]);

// const obj = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// console.log({ ...obj, ...obj2 });

//Стрелочная функция

//Варианты записи
// const arr1 = ["a", "b", "c"];

// const resultIndex0 = arr1.indexOf("b"); //argument, parameter;

// const resultIndex = arr1.find(function (element, index) {
//   return index >= 2;
// });

// const resultIndex1 = arr1.find((element, index) => index >= 2);

// console.log(resultIndex0);
// console.log(resultIndex);
// console.log(resultIndex1);

// const arr = ['Joe', 'Anna', 'Bond'];

// function printf(element, index) {
//     console.log(`a: ${element}, b: ${index}`);
// }
// arr.forEach((element, index) => console.log(`element: ${element}, index: ${index}`));

// const arr = [
//   {
//     name: "Joe",
//     isStudent: true,
//   },
//   {
//     name: "Anna",
//     isStudent: true,
//   },
//   {
//     name: "Brad",
//     isStudent: false,
//     age: 99,
//   },
// ];
// const students = arr.filter((element) => element.isStudent); // shows filtered data

// Сумма элементов
// const arr = [1, 2, 3];

// // const sum = arr[0] + arr[1] + arr[2];

// let sum = 0;

// arr.forEach((el) => (sum += el));
// console.log(sum);

//const sumWithReduce = разобраться!!!!

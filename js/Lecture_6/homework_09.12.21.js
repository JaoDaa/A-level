// const car = {
//     mark: 'Audi',
//     model: 'S8',
//     year: 2020,
//     isNew: true,
//     color: 'black',

//     getShortInformation () {
//         return `${this.mark}, ${this.model}, ${this.year}, ${this.color}`;
//     } 
// };
// console.log(car.getShortInformation());

// let objectPropertyName = 'model';

// console.log(car[objectPropertyName]);

// const obj = {
//     'property with space': 'test'
// };
// console.log(obj['property with space']);

// console.log(car.model);
// car.model = 'A8';
// console.log(car.model);

// 2
// let obj1 = {
//     value1: 1,
//     value2: 2
// };
// let obj2 = obj1;
// obj2.value2 =3;
// // console.log(ob1 == obj2);
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
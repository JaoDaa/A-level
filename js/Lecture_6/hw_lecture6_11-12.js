// Задание_1

let value1 = 8;
let value2 = 2;

function getMinValue(value1, value2) {
if (value1 < value2) {
    return value1;
} else {
    return value2;
}
};
console.log(getMinValue(8, 2));


// Задание_2

const person1 = {
    name: 'Joe',
    age: 25,
}

const person2 = {
    surname: 'Anna',
    years: 18,
}

let merged = {...person1, ...person2};
console.log(merged); // {name: 'Joe', age: 25, surname: 'Anna', years: 18}

// Задание_3

const user = {
    name: 'Jack',
    age: 18,
};

Object.defineProperty(user, 'toString', {
  enumerable: false, // enumerable is 'false' by default
  value: function () {
    return 'My name is' + this.name + ', ' + 'I am ' + this.age;
  }
});

for (var key in user) console.log(key);

console.log('Hello! ' + user); // 'Hello! My name isJack, I am 18'
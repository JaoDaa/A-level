const user = {
    name: 'Joe',
    age: 20,
    greeting:() {
        console.log('Hello My name is ' + this.name);
    }
};

console.log(user);
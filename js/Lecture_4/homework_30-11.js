// let a = 1;
// let b = 2;
// const c = 8;

// function makeSomeCoolStaff() {
//     var c = 5;

//     console.log(a); // 1. a = 7
//     console.log(b); // 2. b = undefined ????
//     console.log(c); // 3. c = 5

//     if (true) {
//         a = 3;
//         var b = 4;

//         console.log(a); // 4. a = 3
//         console.log(b); // 5. b = 4
//         console.log(c); // 6. c = 5
//     }

//     a = 7;

//     makeSomeCoolStaff();

//     console.log{a}; // 7. a = 3
//     console.log(b); // 8. b = 2
//     console.log(c); // 9. a = 8


function greeting(name) {
    console.log(`Hello ${name}! How are you?`)
}
greeting('Valera');
greeting('Anna');
greeting('Alex');


const Serhiy = {
        name: 'Serhiy',
        age: 44,
        isStudent: true,
        lecture: 'на лекции изучали типы данных',
        greeting: function(){
            alert('крутая лекция')
        }
    }
    console.log(`lecture ${Serhiy.lecture}`)
// Задание 2

// const citiesAndCountries = {
//     Kiev: 'Ukraine',
//     Washington: 'USA',
//     Odessa: 'Ukraine',
//     Munich: 'Germany',
//     Kharkiv: 'Ukraine',
//     NewYork: 'USA',
//     Amsterdam: 'Netherlands',
//     Berlin: 'Germany',
//     Chicago: 'USA',
//     Lisbon: 'Portugal',
//     Lviv: 'Ukraine',
//     Hamburg: 'Germany',
//};

// const countryData = {
//     Ukraine: ['Kyiv', 'Odesa', 'Kharkiv', 'Lviv'],
//     Germany: ['Munich', 'Berlin', 'Hamburg'],
//     USA
// }

// const countriesData = {
//     Ukraine: 'Kiev', 
//     Ukraine: 'Odessa',
//     Ukraine: 'Kharkiv',
//     Ukraine: 'Lviv',
//     Germany: 'Munich', 
//     Germany: 'Berlin',
//     Germany: 'Hamburg',
//     USA: 'Washington',
//     USA: 'NewYork',
//     USA: 'Chicago',
//     Netherlands: 'Amsterdam',
//     Portugal: 'Lisbon',
// }

const countriesData = {
    Kiev: 'Ukraine',
    Washington: 'USA',
    Odessa: 'Ukraine',
    Munich: 'Germany',
    Kharkiv: 'Ukraine',
    NewYork: 'USA',
    Amsterdam: 'Netherlands',
    Berlin: 'Germany',
    Chicago: 'USA',
    Lisbon: 'Portugal',
    Lviv: 'Ukraine',
    Hamburg: 'Germany'
};
    
arr = Object.entries(countriesData)
        .reduce((acc, [key,value]) => ((acc[value] ??=[]).push(key), acc),{});

console.log(arr)

const results = {};
Object.entries(countriesData).forEach(([key, value]) => {
    if (results[value]) {
        results[value].push(key);
    } else {
        results[value] = [key];
    }
});

console.log(results)

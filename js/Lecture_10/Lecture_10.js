// const button = document.getElementById("test-id");

// const button = document.querySelector('test-id');

// const buttons = document.getElementsByTagName('button');
// console.log(button);

const buttons = document.getElementsByClassName("buttons");

const buttonsArr = Array.from(buttons);

console.log(buttons);

buttonsArr.forEach((el, index) => {
  console.log(el);
});

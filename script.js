// DOM Elements
const generateBtn = document.querySelector(".js-generate-btn");

const startingInput = document.querySelector(".js-starting-input");

const endingInput = document.querySelector(".js-ending-input");

const randomNumberEl = document.querySelector(".js-random-number");

const msgEl = document.querySelector(".js-message");

// Array used to store numbers that will be generated
const numbers = [];

/* Testing logic of the code

// let startingValue = 1;
// let endingValue = 5;

// let numbers = [];

// for (let i = startingValue + 1; i < endingValue; i++) {
//   numbers.push(i);
// }

// console.log(numbers);

// let randomGeneratedNumber = numbers[Math.trunc(Math.random() * numbers.length)];

// console.log(randomGeneratedNumber);
*/

generateBtn.addEventListener("click", () => {
  const startingInputValue = Number(startingInput.value);
  const endingInputValue = Number(endingInput.value);

  if (!startingInputValue || !endingInputValue) {
    msgEl.textContent = "Choose 2 valid numbers.";
    msgEl.style.color = "red";
  }

  for (let i = startingInputValue + 1; i < endingInputValue; i++) {
    // Pushing the numbers being generated into the array
    numbers.push(i);
  }

  startingInput.value = "";
  endingInput.value = "";
  const randomNumber = numbers[Math.trunc(Math.random() * numbers.length)];

  randomNumberEl.textContent = randomNumber;
});

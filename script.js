// DOM Elements
const generateBtn = document.querySelector(".js-generate-btn");

const startingInput = document.querySelector(".js-starting-input");

const endingInput = document.querySelector(".js-ending-input");

const randomNumberEl = document.querySelector(".js-random-number");

const msgEl = document.querySelector(".js-message");

const errorMsgEl = document.querySelector(".js-error-msg");

// Array used to store numbers that will be generated
let numbers = [];

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

  if (startingInput.value.trim() === "" || endingInput.value.trim() === "") {
    errorMsgEl.textContent = "Choose 2 valid numbers.";
    errorMsgEl.style.color = "red";
    return;
  }

  for (let i = startingInputValue; i <= endingInputValue; i++) {
    // Pushing the numbers being generated into the array
    numbers.push(i);
  }

  startingInput.value = "";
  endingInput.value = "";

  const randomNumber = numbers[Math.trunc(Math.random() * numbers.length)];

  randomNumberEl.textContent = randomNumber;

  /* Clearing the error message on the next clip
  if user enters 2 valid numbers
  */
  errorMsgEl.textContent = "";

  /*
  Resetting numbers array bc if i dont
  then itll just keep concating with the
  old ranges as well
  */
  numbers = [];
});

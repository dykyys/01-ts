import { concatenation } from "./concatenation.js";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;
console.log(concatenation);
console.log(button);

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

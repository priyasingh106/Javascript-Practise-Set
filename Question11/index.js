// calculate number of digits in a given string

let counter = 0;

function calculateNumber(string) {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "1" ||
      string[i] === "2" ||
      string[i] === "3" ||
      string[i] === "4" ||
      string[i] === "5" ||
      string[i] === "6" ||
      string[i] === "7" ||
      string[i] === "8" ||
      string[i] === "9" ||
      string[i] === "0"
    ) {
      counter += 1;
    }
  }
  return counter;
}

console.log(calculateNumber("codehelp10608"));

// find number of vowels in a given string

let vowels = ["a", "e", "i", "o", "u"];
let counter = 0;

function numberOfVowels(string) {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      counter += 1;
    }
  }
  return counter;
}
console.log(numberOfVowels("transportation"));

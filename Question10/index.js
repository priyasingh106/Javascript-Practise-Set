// check if two strings are anagrams

function areAnagrams(str1, str2) {
  let str1 = str1.toLowerCase();
  let str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return `not anagrams`;
  }

  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");

  if (string1 === string2) {
    return 'it is anagram';
  } else {
    return 'it is not anagram';
  }
}
console.log(areAnagrams('java', 'veaj'));


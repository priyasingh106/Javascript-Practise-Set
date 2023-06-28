// check if a number is prime


let num = 0;
if (num == 1) {
  console.log(`${num} is neither prime nor composite`);
} else if (num < 1) {
  console.log(`${num} is not a prime number`);
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      var res = `${num} is not a prime number`;
      break;
    } else {
      var res = `${num} is a prime number`;
    }
  }
  console.log(res);
}

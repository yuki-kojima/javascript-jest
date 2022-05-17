export default class FizzBuzz {
  convert(num) {
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num.toString();
  }
}

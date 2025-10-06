"use strict";

// function getTitle (age) {
// if (age >= 18) {
//   return 'Adult';
// }

// if (age >= 7) {
//   return 'Child';
// }

// if (age >= 3) {
//   return 'Toddler';
// }

//   return 'Baby';
// }

// console.log(getTitle(25));
// console.log(getTitle(15));
// console.log(getTitle(6));
// console.log(getTitle(2));

// for (let i = 0; i < text.length; i++) {
//   result = text[i] + result;
// }

// function greeting (partOfDay, name) {
//   console.log(`Good ${partOfDay} ${name}`)
// }

// greeting ('day', 'Pasha')

// function ageTitle(age) {
//    return (age < 18)
//    ? 'Child'
//    : 'Adult'
// }

// console.log(ageTitle(18))

// const age = 18;
// let title = (age < 18)
//   ? 'Child'
//   : (age < 18)
//   ? 'Child'
//   : 'Adult'

// if (age < 18) {
//   title = 'Child'
// } else {
//   title = 'Adult'
// }

// console.log(title)

// const age = 17;
// let message2 = '';

// if (age < 7) {
//   message2 = 'Baby';
// } else if (age < 15) {
//   message2 = 'Child';
// } else if (age < 18) {
//   message2 = 'Teenager','Good';
// } else {
//   message2 = 'Adult';
// }

// console.log(message2)

// const message = (age < 7)
//   ? 'Baby'
//   : (age < 15)
//     ? 'Child'
//     : (age < 18)
//       ? 'Teenager'
//       : 'Adult';

//     console.log(message);

// function getAgeCategory(age) {
//   if (age < 2) {
//   return 'baby';
//   } else if (age < 10) {
//   return 'child';
//   } else if (age < 18) {
//   return 'teenager';
//   } else if (age < 60) {
//   return 'adult';
//   } else {
//   return 'senior';
//   }
// }

// console.log (getAgeCategory(20))

// function increase(x) {
//   x++;
//   return x;
// }

// const y = increase(2);

// console.log(y);

// let x = 0;

// console.log(x++)

//  const x1 = 42; // decimal

//  const x2 = 0b101010; //binary
//  const x3 = 0o52; //octal
//  const x4 = 0x2A; // hexadecimal
//  const x5 = 0x2a; // hexadecimal

//  console.log(x1, x2, x3, x4, x5);

//  let y1 = 42.000;
//  let y2 = 42.;

//  //Scientific notation

//  let y3 = 0.42e2; // 0.42 * (10**2) === 42
//  let y4 = .42e2;
//  let y5 = 42000e-3; // 42000 / (10**3) === 42

//  console.log(y1, y2, y3, y4, y5);

// const decimal = 123;
// 327 = 3 * 100 + 2 * 10 + 7 * 1

// const binary = 0b10101;
// 111 = 1 * 4 + 1 * 2 + 1 * 1
// 0b101010 = 1 * 32 + 0 * 16 + 1 * 8 + 0 * 4 + 1 * 2 + 0 * 1 = 42
// const binary1 = 0b10101110;

//   const hex = 0xABCDEF;
//const hex = 0x2A;
// 273 = 1 * 256 + 1 * 16 + 1 * 1
// 0x2A = 2 * 16 + 10 * 1 = 42

// console.log(`decimal = ${decimal.toString(10)}`);
// console.log(`binary = ${binary.toString(2)}`);
// console.log(`hex = ${hex.toString(16)}`);

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[4]);

// function getTitle(age) {

//   if (age < 5) {
//     return 'Child';
//   }

//   if (age < 18) {
//     return 'Teenager'
//   }
//   return 'Adult'
// }

// console.log(getTitle(10));

// function getSuccessRate(statistic) {
//   if (statistic.length === 0) {
//     return 0;
//   }

//   let sum = 0;

//   for (let i = 0; i < statistic.length; i++ ) {
//     if (statistic[i] === '1') {
//       sum++;
//     }
//   }
//   return sum / statistic.length * 100
// }

// console.log(getSuccessRate('101'))

// function getSuccessRate(statistic) {
//   let count = 0;
//   if (statistic.length < 1) {
//     return 0;
//   }
//   for (let i = 0; i < statistic.length; i++)
//   if (statistic[i] === '1') {
//     count += 1;
//   }
//   return count / statistic.length * 100;
// }

// const x = 10 + 2 * 3

// console.log(x)

// function makeDecision(fuelRemaining, distance, fuelConsumption) {
//   if (fuelRemaining < 0 || distance < 0 || fuelConsumption <= 0) {
//     return 'please, enter the valid data';
//   }

//   if ((fuelConsumption / 100 * distance) <= fuelRemaining) {
//     return 'reach gas station by themselves';
//   }

//   return 'ask for help';
// }

// console.log (makeDecision (50, 50, 2))

//   const age = 18;

//  let isNotAdult = age < 18;
// //  let isAdult = age >= 18;
// let isNotBaby = age !== 0;

//  console.log(isNotBaby)

// function isAdult(age) {
//   isAdult = age >= 18;
//   return console.log(isAdult)
// }

// isAdult(19)

// let cash = 40;
// let creditCard = 20;
// let price = 40;

// let hasEnoughCash = cash >= price;
// let hasEnoughCredit = creditCard >= price;
// let hasEnoughCashAndCreditSum = cash + creditCard >= price;

// const canBuy = hasEnoughCredit || hasEnoughCash || addCashAndCredit;

// console.log(canBuy)

// function canBuy(cash, price, age) {
//   canBuy = cash >= price && age >= 18;
//   return canBuy
// }

// console.log(canBuy(25, 20, 17))

// let a = 5;
// let b = 10;

// let area = a * b;

// console.log(area)

// function getArea(length = 1, width = 1.5) {
//   // console.log(width)
//   return length * width;

// }

// let totalArea = getArea(10);

// console.log(totalArea);

// calculateArea(5,7);
// calculateArea(2,3);

// function greetUser(name, partOfTheDay) {
//   let message = `Good ${partOfTheDay}, ${name}!`;

//   console.log(message);
// }

// greetUser('Mark', 'evening');

// let age = 12;

// if (age >= 18) {
//   console.log('Hello');
// }

// function greet(age) {
//   if (age >= 18) {
//     console.log('Hello');
//   } else {
//     console.log('Hi');
//   }
// }

// greet(20);

// function getGreeting(age) {
//   if (age <= 3) {
//     return 'Hi, Toddler!';
//   }

//   if (age <= 7) {
//     return 'Hi, kid!';
//   }

//   if (age < 18) {
//     return 'Hi!';
//   }

//   return 'Hello!';
// }

//  let greeting = getGreeting(6);

//  console.log(greeting);

// let age = 0;

// let greeting = (age <= 3)
// ? 'Hi, Toddler!'
// : (age <= 7)
//   ? 'Hi, kid!'
//   : (age < 18)
//      ? 'Hi!'
//      : 'Hello!'

// console.log(greeting);

// let city1 = 'New York,';
// let city2 = 'London,';
// let city3 = 'San Francisco,';
// let city4 = 'San Juan.';

// console.log(city1.length);

// let cities = ['Beijing', 'London', 'Tokyo', 'Paris'];
// cities[2] = 'New York';
// cities[cities.length] = 'Madrid';
// cities.push('Amserdam', 'Athens');

// console.log(cities);

// let distances = [10, 20, 40];

// console.log(distances);

// let person = ['John', 25, 5];

// console.log(person);

// let age = 1;

// console.log(`I am ${age}`);
// console.log(`I am ${age + 1}`);
// console.log(`I am ${age + 2}`);
// console.log(`I am ${age + 3}`);
// console.log(`I am ${age + 4}`);

// function factorial(N) {
//   let result = 1;

//   for (let n = 1; n <= N; n++) {
//     console.log(n);
//     result *= n;
//   }

//   return result;
// }

// console.log('result:', factorial(5));

// let age = 10;

// age *= 2;

// console.log(age);

//   let title = ''
//   function iteration(word) {
//     for (let i = 0; i < word.length; i++) {
//       title += 'i';
//     }
//     return word;
//   }

//  console.log(iteration('pinguin'));

// const word = 'Working with strings';
// let title = ''
// function replace(input, char, replacement) {
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === char) {
//   title += replacement;
//   } else {
//     title += input[i];
//   }
// }
// return title;
// }

// console.log(replace('Working with strings', ' ', '-'));

// let title = '';

// function replaceAll(input, char, replacement) {
//   for (const ch of input) {
//     if (ch === char) {
//       title += replacement;
//     } else {
//       title += ch;
//     }
//   }
//   return title;
// }

// console.log(replaceAll('Working with strings', ' ', '-'))

// let title = '';

// function replaceAll(input, char, replacement) {
//   for (const ch of input) {
//     if (ch === char) {
//       title += replacement;
//     } else {
//       title += ch;
//     }
//   }
//   return title.toLowerCase();
// }

// console.log(replaceAll('Working with strings', ' ', '-'))

// let convert = '';

// function replaceAll(input, char, replacement) {
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === char) {
//       convert += replacement;
//     } else {
//       convert += input[i];
//     }
//   }
//   return convert;
// }

// console.log(replaceAll('working with strings', ' ', '-' ))

// function replaceAll(input, char, replacement) {
//   let convert = '';

//   for (const ch of input) {
//     if (ch === char) {
//     convert += replacement;
//     } else {
//       convert += ch;
//     }
//   }
//   return convert;
// }

// let title = 'Working With Strings';

// let result = replaceAll(title, ' ', '-');

// console.log(title.indexOf('G'));
// console.log(title.toLocaleUpperCase());
// console.log(title.toLowerCase());
//  console.log(title.replaceAll('With', '***').toLowerCase());
//  console.log('working with strings'.includes('with'));

// .split(' ');
// .join(' ');
// .push(ch);

// function countVowels(text) {
//   let count = 0;
//   for (const ch of text.toLowerCase()) {
//     let isVowel = !'aeiony'.includes(ch)
//     if (isVowel) {
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('CAT'));

// function countVowels(text) {
//   let count = 0;

//   for (let ch of text.toLowerCase()) {
//     let isVowel = 'aeiony'.includes(ch);
//     if (isVowel) {
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Hello World'));

//#region
// function countVowels(text) {
//   let count = 0;

//   for (let ch of text.toLowerCase()) {
//     let isVowel = 'aeiony'.includes(ch);
//     if (isVowel) {
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(countVowels('Hello World'));
//#endregion

//#region

function countLetters(text) {
  let count = 0;

  for (let ch of text) {
    let isLetter = ch.toLowerCase() !== ch.toUpperCase();
    if (isLetter) {
      count++;
    }
  }
  return count;
}

// console.log(countLetters('HeOUEAo World!!!'));
//#endregion

// function addLetters(text) {
//   let emailAdress = '';

//   for (let ch of text) {
//     let isLetter = ch.toLowerCase() !== ch.toUpperCase();
//     if (isLetter) {
//       emailAdress +=ch;
//     }
//   }
//   return emailAdress.toLowerCase();
// }

// console.log(addLetters('Hello World'))

// function addLetters(text) {
//   let emailAdress = '';

//   for (let ch of text) {
//     if (ch !== ' ') {
//       emailAdress +=ch;
//     }
//   }
//   return emailAdress.toLowerCase();
// }

// console.log(addLetters('Hello World!!!'))

// const prices = [20, 40, 10, 30];

// function sum(values) {
//   let count = 0;
//   for (let i = 2; i < values.length; i++) {
//     count += values[i];
//   }
//   return count;
// }

// console.log(sum(prices));

// const prices = [10, 50, 80, 30];

// function getAverage(values) {
//   if (values.length === 0) {
//     return 0;
//   }

//   let count = 0;

//   for (let ch of values) {
//     count += ch;
//   }
//   return (count/values.length);
// }

// console.log(getAverage(prices));

// const prices = [100, 50, 800, 30];

// function getMin(values) {
//   if (values.length === 0) {
//     return 0;
//   }

//   let min = values[0] ;

//   for (const ch of values) {
//    if (ch < min) {
//     min = ch
//    }
//   }
//   return min;
// }

// console.log(getMin(prices));

// const prices = [1000, 50, 800, 300];

// function getMax(values) {
//   let max = values[0];
//   for (let ch of values) {
//    if (ch > max) {
//     max = ch;
//    }
//   }
//   return max;
// }

// console.log(getMax(prices));

// const text = 'one two three four five';

// function getShortWords(words, lettersQuantity){
// let splitWords = words.split(' ');
// let results = [];
// for (let ch of splitWords) {
//   if (ch.length <= lettersQuantity) {
//   results.push(ch)
//   }
// }
// return results.join('---');
// }

// console.log(getShortWords(text, 4));

// const text = 'one two three four five';

// function getShortWords(words, lettersQuantity){
//   let splitWords = words.split(' ');
//   let results = [];
//   for (let i = 0; i < splitWords.length; i++) {
//     if (splitWords[i].length <= lettersQuantity) {
//     results.push(splitWords[i]);
//     }
//   }
//   return results.join(' ');
//   }

//   console.log(getShortWords(text, 3));

// let text = 'one two three four five';

// function getShortWords(words, letterQuantity) {
//   let splitWords = words.split(' ');
//   let results = [];

//   for (const ch of splitWords) {
//     if (ch.length <= letterQuantity) {
//       results.push(ch);
//     }
// }
// return results.join(' ');
// }

// console.log(getShortWords(text, 3));

// let text = 'one two three four five';

// function getShortWords(words, letterQuantity) {
//   let splitWords = words.split(' ');
//   let results = [];

//   for (let i = 0; i < splitWords.length; i++) {
//     if (splitWords[i].length <= letterQuantity) {
//       results.push(splitWords[i]);
//     }
// }
// return results.join(' ');
// }

// console.log(getShortWords(text, 3));

//  let prices = [50,20,80,40];

//  function getMax(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let max = numbers[0];
//   for (const ch of numbers) {
//      if (ch > max) {
//       max = ch;
//      }
//   }
//   return max;
//  }

//  console.log(getMax(prices));

// let text = 'one two three four five';

// function includes(items, itemToFind) {
//   const splitItems = items.split(' ')
//   for (const ch of splitItems) {
//     if (ch === itemToFind) {
//       return true;
//     }
//   }
//       return 5;
// }

// console.log(includes(text, 'two'));

// let text = 'one two three four five';
// const splitItems = text.split(' ');
// console.log(splitItems.indexOf('two'));

// function indexOf(items, itemToFind) {
//   const splitItems = items.split(' ');
//   for (let i = 0; i < splitItems.length; i++) {
//     if (splitItems[i] === itemToFind) {
//       return i;
//     }
//   }
//       return -1;
// }

// console.log(indexOf(text, 'tw'));

// function isWereWolf(target) {
// let direct = '';
// let reserved = '';

// for (const ch of target.toLowerCase()) {
//   if(true) {
//   direct += ch;
//   reserved = ch + reserved;
// }
// }
// return direct === reserved;
// }

// console.log(isWereWolf('gog'))

// function isWereWolf(target) {
//   let direct = '';
//   let reserved = '';

//   for (const ch of target) {
//     if(ch.toLowerCase !== ch.toUpperCase) {
//     direct += ch;
//     reserved = ch + reserved;
//   }
//   }
//   return direct === reserved;
//   }

//   console.log(isWereWolf('gog gog'))

//   let word = '!!!';

// console.log(word.toLowerCase());

//  function lettersCount(text) {
//   let count = 0;

//   for (const ch of text) {
//     if (ch.toLowerCase() !== ch.toUpperCase()) {
//       count ++
//     }
//   }
//   return count;
//  }

//  console.log(lettersCount('Fury!!!'));

//  function getAgeTitle(age) {
//   return (age < 18)
//   ? 'Child'
//   : 'Adult'
//  }

//  console.log(getAgeTitle(118));

// let x = 12.1;

// console.log(x.toFixed(4));

// Math.ceil(10.8), // 11

// const x = 12.;
// console.log(x);

// console.log(`Math.floor(${x}) =`, Math.floor(x), `closest <= x`);
// console.log(`Math.ceil(${x}) =`, Math.ceil(x), `closest >= x`);
// console.log(`Math.trunc(${x}) =`, Math.trunc(x), `without decimal part`);
// console.log(`Math.round(${x}) =`, Math.round(x * 100) / 100, `down < 0.5  up >= 0.5`);

// console.log(`x.toFixed(0) =`, +x.toFixed(5));

// function convertCurrency(amount, exchangeRate, currencyName) {
//   if (amount < 0 || exchangeRate <= 0) {
//     return 'Enter valid data';
//   }
//   return `Give them ${Math.round((amount * exchangeRate * 100)) / 100} ${currencyName}(s)`;
// }

// console.log(convertCurrency(10000, 1.0946, 'dollar'))

// let results = [5, 2];

// results[results.length] = 10;

// console.log(results)

// const result = [50, 5 , 7];

// function getSum(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let ch of array) {
//      sum += ch ;
//     }

//   return sum / array.length;
// }

// console.log(getSum(result));

//   const numbers = [10, 10, 11, 9, 12, 8];

//   function getSpeedStatistic(testResults) {
//     if (testResults.length === 0) {
//       return [0, 0 ,0];
//     }

//     let min = testResults[0];
//     let max = testResults[0];
//     let sum = 0;
//     let result = [];

//     for (let ch of testResults) {
//     if (ch < min) {
//       min = ch;
//     }

//     if (ch > max) {
//       max = ch;
//     }

//     sum += ch;

//   }

//   let average = Math.floor(sum / testResults.length);

//   result.push(min, max, average);

//   return result;

//  }

//  console.log(getSpeedStatistic(numbers));

// const result = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 7]);

// console.log(result);

// function getSum(numbers) {
//   if (numbers.length === 0) {
//   return 0;
//   }

//   let sum = 0;
//   let max = numbers[0];

//   for (const ch of numbers) {
//     if (ch > max) {
//       max = ch
//     }

//     sum += ch;
//   }

//   console.log(max);

//   return Math.round(sum / numbers.length);
// }

//  const value = '    123.4rr \n \t     '
//  const value = true;

//  console.log(value);
//  console.log(
//   Number(value),
//   +value,
//   0 + (+value),
//   parseInt(value, 10),
//   parseFloat(value)
// );

//   const stringValue = '  45 67.4    \n \t !';

//   console.log(+stringValue);

//    const value = '     123.8   \n \t';

//    console.log(
//     Number(value),
//      +value);

// const value = '  d   12 3.4f   \n  \t  ';
// const value = 5;

// console.log(
//   Number(value),
//   +value,
// '0' + (+value),
//   parseInt(value, 10),
//   parseFloat(value)
// )

//  let age = 20;
//  let isChild = (age < 19)
//   ? 'Child'
//   : 'Adult'

//   console.log(isChild);

// function getGuestsCount(guestsInput) {
//   const guestsNumber = parseInt(guestsInput);

//   return isNaN(guestsNumber)
//     ? 'not a number'
//     : guestsNumber;
// }

// function getGuestsCount(guestsInput) {
//   const guestsCount = parseInt(guestsInput);

//   return isNaN(guestsCount)
//   ? 'not a number'
//   : guestsCount
// }

// console.log(getGuestsCount('0 boys'))

// function getGuestsCount(guestsInput) {
//   const guestsCount = parseInt(guestsInput);

//   if(isNaN(guestsCount)) {
//     return 'not a number'
//   }

//   return guestsCount;
// }

// console.log(getGuestsCount('0 boys'))

// const words = 'one two three four five';

// function getShortWords(text, wordsQuantity) {
//   if (text.length === 0) {
//     return 0;
//   }

//   let splitText = text.split(' ');
//   let result = [];

//   for (let i = 0; i < splitText.length; i++) {
//     if (splitText[i].length <= wordsQuantity) {
//       result.push(splitText[i]);
//     }
//   }
//   return result.join(' ')
// }

// console.log(getShortWords(words, 3));

// const words = 'one two three four five';

// function findIndex(items, itemToFind) {
//   let splitWords = items.split(' ');

//   for (let i = 0; i < splitWords.length; i++) {
//     if (splitWords[i] === itemToFind) {
//     return true;
//     }
//     return 5;
//   }
// }

// console.log(findIndex(words, 'on'));

// function getGuestsCount(guestsInput) {
//   if (parseInt(guestsInput) === 0) {
//     return 0;
//   }
//   if (parseInt(guestsInput)) {
//     return parseInt(guestsInput);
//   }
//   return 'not a number';
// }

//  function findItem(items, itemToFind) {
//   let splitwords = items.split(' ')
//   for (const ch of splitwords) {
//     if (ch === itemToFind) {
//       return true;
//     }
//   }
//  }

//  console.log(findItem(text, 'on'));

// function milliseconds(x) {
//   let value = parseInt(x);

//   if (isNaN(value)) {
//     return 'Not a Number!';
//   }
//   return value * 1000;
// }

// console.log(milliseconds('3   j'));

// const value = '3 fff ttt';
// console.log(parseInt(value));

// function getGuestsCount(guestsInput) {
//   const guestsCount = parseInt(guestsInput);

//   if(isNaN(guestsCount)) {
//     return 'not a number'
//   }

//   return guestsCount;
// }

// const text = 'working with Strings'

// function replaceAll(word, letter, replace) {
//   let newWord = [];

//   let splitWord = word.split('');

//   for (const ch of splitWord) {
//   if (ch === letter) {
//     newWord.push(replace.toLowerCase());
//   } else {
//     newWord.push(ch.toLowerCase());
//   }
// }
//   return newWord.join('');
// }

// console.log(replaceAll(text, ' ', '-'));

// let x = Number.MAX_VALUE;

// console.log(isNaN(36 / '25'));

// for (let i = 0; i < 10; i++) {
//   const x = getRandomNumbers(2, 7);

//   console.log(x);
// }

// function getRandomNumbers(min, max) {
//   return Math.floor(
//   min + Math.random() * (max + 1 - min)
//   ); // [min; max)
// }

// const prices = ['20', '10', '30'];

// function arraySum(number) {
//  let sum = 0;
//  let min = +prices[0];
//  for (const ch of number) {
//   if (+ch < min) {
//     min = +ch
//   }
//   sum += +ch;
//  }

//  return [sum, min];
// }

//  console.log(arraySum(prices));

// let x = 1150 % 300;
// x += 4 - 54;

// console.log(parseFloat(NaN));

// for (let i = 0; i < 10; i++){
// console.log(getRandomNumber(2, 5));
// }

// function getRandomNumber(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }

// const n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i += 3) {
//  sum += i;
//  console.log(i);
// }

// console.log(sum);

// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i += 3) {
//   sum += i;
//   console.log(i);
// }

// console.log(sum);

// const SECONDS_IN_DAY = 24 * 60 * 60

// for (let daysAgo = 0; daysAgo < 1e1; daysAgo++) {
//   const secondsAgo = daysAgo * SECONDS_IN_DAY;

//    console.log(secondsAgo);
// }

// // console.log(5e5);

// function calculateProfit(amount, percent, period) {
//   let total = amount;

//   for (let i = 1; i <= period; i++) {
//   total += total * percent / 100;
//   }
//   return total - amount;
// }

// console.log(calculateProfit(1000, 5, 1));

// function getGuestsCount(guestsInput) {
//   const guestsCount = parseInt(guestsInput);

//   if(isNaN(guestsCount)) {
//     return 'not a number'
//   }

//   return guestsCount;
// }

// for (let daysAgo = 0; daysAgo < 5; daysAgo++) {
//   const secondsAgo = daysAgo * 24 * 60 * 60;

//   console.log(secondsAgo);
// }

// function isWerewolf(target) {
//   let word = '';
//   let reverse = '';

//   for (const ch of target.toLowerCase) {
//     if (ch.toLowerCase() !== ch.toUpperCase()) {
//       word += ch;
//       reverse = ch + reverse;
//     }
//   }

//   return word === reverse;
// }

// console.log(isWerewolf('eva, can i see bees in a cave'));

// const words = 'one two three four';
// let newWords = [];

// function getShortWords(word, number) {
//   let splitWords = word.split(' ');

//   for (let i = 0; i < splitWords.length; i++) {
//     if (splitWords[i].length <= number) {
//       newWords.push(splitWords[i]);
//   }
// }
// return newWords.join(' ');
// }

// console.log(getShortWords(words, 3))

// const splitWords = words.split(' ');

// console.log(splitWords[2].length);

// const prices = [10, 20, 30, 40];
// let sum = 0;

// function getAverage(amount) {
//   let min = amount[0];
//   let max = amount[0];
//   let array = [];

// for (let i = 0; i < amount.length; i++) {
//   sum += amount[i];

//   if (amount[i] < min) {
//     min = amount[i];
//   }
//   if (amount[i] > max) {
//     max = amount[i];
//   }
// }
//   let average = sum / amount.length;

//   array.push(average, min, max);

//   return array
// }

// console.log(getAverage(prices));

// function countVowels(text) {
//   let sum = 0;
//   for (let i = 0; i < text.length; i++) {
//   if('aeyoui'.includes(text[i])) {
//     sum++
//   }
//   }
//   return sum;
// }

// console.log(countVowels('dogoge'));

// function guestsCount(value) {
//   let newValue = parseInt(value);

//   if ((newValue)) {
//     return 'not defined'
//   }

//   return newValue
// }

// console.log(guestsCount('5.55 '));

// function getRandomNumber(min, max){

//  return Math.floor(min + Math.random() * (max - min + 1));
//  }

// for (let i = 0; i < 10; i++) {
//   console.log (getRandomNumber(2, 5));
// }

// function replaceAll(word, char, replace) {
//   if (word.length === 0) {
//     return 0;
//   }
//   let newWord = ''

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       newWord += replace;
//     } else {
//       newWord += word[i];
//     }
//   }
//   return newWord
// }

// console.log(replaceAll('good dog', ' ', '-'))

// const SECONDS_IN_DAY = 24 * 60 * 60;
// const ITERATION_COUNT = 1e1 - 1;

// for (let daysAgo = 0; daysAgo < ITERATION_COUNT; daysAgo++) {
//   const secondsAgo = daysAgo * SECONDS_IN_DAY;

//   console.log(secondsAgo);
// }

// function splitString(str) {
//   let result = [];
//   let splitString = str.split('')

//   if ((splitString.length % 2) === 1) {
//     splitString.push('_')
//   }

//   for (let i = 0; i < splitString.length; i += 2) {
//     result.push(splitString[i] + splitString[i + 1]);
//   }
//   return result;
// }

// console.log(splitString(''))

// let w = [];
// let x = Number([4]);
// let y = Number([5]);

// let z =  x + y

// w.push(z);

// console.log(w);

// debugger;

// debugger;

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//    continue;
//   }
//   console.log(i);
// }

// const text = 'one little good dog mine is the best';

// function findShortWords(words, maxNumber) {
//   if (words.length === 0) {
//     return 'no text'
//   }
//   let splitWords = words.split(' ');
//   let newWords = [];

//   for (let i = 0; i < splitWords.length; i++) {
//    if (splitWords[i].length <= maxNumber) {
//     newWords.push(splitWords[i]);
//    }
//   }
//   return newWords.join(' ');
// }

// console.log(findShortWords(text, 3));

//  const prices = '20 30 40 50';

//  let pricesNew = parseInt(prices);

//  let array = prices.split(' ')
//  let newArray = [];

//  for (const ch of array) {
//   newArray.push(+ch);
//  }

//  console.log(newArray);

// const prices = [20, 30, 40, 50];

// function getAverage(numbers) {
//   if (numbers.length === 0) {
//     return 'insert prices'
//   }
//   let sum = 0;
//   let min = numbers[0];
//   let max = numbers[0];
//   let array = [];

//   for (const ch of numbers) {
//     if (ch < min) {
//       min = ch;
//     }
//     if (ch > max) {
//       max = ch;
//     }
//     sum += ch;
//   }
//   const average = sum / numbers.length;

//   array.push(min, max, average);

//   return array;
// }

//  console.log(getAverage(prices));

// debugger;
// let text = '';
// let i = 0;

// for (;;) {
//   if (i >= 3) {
//     continue;
//   }

//   text += i;
//   i++;
// }

// console.log(text);

// debugger;

// let text = "";

// for (let i = 0; i < 10; i++) {
//   if (i > 3) {
//     continue;
//   }
//   text = text + i;
// }

// console.log(text);

// function randomIntegers(min, max) {
//     const number =  Math.floor(min + Math.random() * (max - min + 1));

//     return number;
//    }

//    for (let i = 0; i < 10; i++) {
//     console.log(randomIntegers(2, 5));
//    }
// debugger;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//    console.log('even number');

//     if (i === 4) {
//       console.log(i);
//     }
//   }

//  let n = 256;
//  let sum = 0;

// for (let i = 0; i < 10; i++) {
//   let x = n /= 2;

//   if (Number.isInteger(x)) {
//     sum ++;
//   }
// }

// x === parseInt(x)
// let x = (n /= 2);
// let y = x === parseInt(x);

// console.log(sum);

// function getSum(min, max) {
//  let sum = 0;

//  for (let i = min; i <= max; i++) {
//   sum += i;
//  }
//  return sum;
// }

// console.log(getSum(1, 5));

// debugger;

// function factorial(n, N) {
//   let amount = n ** N;
//   return amount;
// }
// //   for (let i = 1; i <= N; i++) {
// //     n = n ** i;
// //   }
// //   return n;
// // }

// console.log(factorial(2, 3));

// debugger;

// let n = 256.4;
// let count = 0;

// while (true) {
//   n /= 2;
//   if (!Number.isInteger(n)) {
//     break;
//   }
//   count++;
// }

// console.log(count);

// debugger;

// while (true) {
//   let n = Math.random();

//   if (n < 0.5) {
//     break;
//   }

//   console.log(n);
// }

// let n = Math.random();

// let n = 256.9;
// let i = 0;

// do {
//   n /= 2;
//   if (!Number.isInteger(n)) {
//     break;
//   }
//   i++;
//   } while (true)

//   console.log(i);

// let n = 256.5;
// let i = 0;

//  do {
//   n /= 2;
//   if (!Number.isInteger(n)) {
//     break;
//   }
//   i++;
//  } while (true)

// console.log(i);

// debugger;

// let n = 1234;
// let i = 0;

//  do {
//   n /= 2;
//   i++;
//    } while (Number.isInteger(n));

//  console.log(i - 1);

//  debugger;

// let n = 1233;
// let i = 0;

// for (; Number.isInteger(n); i++) {
//   n /= 2;
// }

//  console.log(i - 1);

// const text = 'Mate academy';
// const text1 = ['one', 'two', 'three'];

//  console.log(text.charAt(-2));
//  console.log(text.at(-2));

// function replace(words, char, replacement) {
//   if (words.length === 0) {
//     return 0
//   }
//   let newWord = '';
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === char) {
//     newWord += replacement;
//     } else {
//     newWord += words[i];
//     }
//   }
//   return newWord;
// }

// console.log(replace(text, ' ', '-'));

// debugger;

//  let title = 'Bus is a ver goo dog';

//  function getShortWords(text, number) {
//   let splitWords = text.split(' ');
//   let newWords = [];
//   let i = 0;
//   do {
//     if (splitWords[i].length <= number) {
//       newWords.push(splitWords[i]);
//     }
//     i++;
//   } while (i < splitWords.length)

//     return newWords.join(' ');
//   }

//  console.log(getShortWords(title, 3));

// debugger;

//  const prices = '20, 30, 40';
//  console.log(getAverage(prices));

//  function getAverage(text) {
//   let numbers = text.split(', ')
//   let sum = 0;
//   let min = +numbers[0];
//   let max = +numbers[0];
//   let average = 0;
//   let array = [];

//   for (const ch of numbers) {
//    let int = +ch
//    sum += int;

//    if (int < min) {
//     min = int;
//    }

//    if (int > max) {
//     max = int;
//    }
//   }
//    average = sum / numbers.length;

//    array.push(min, max, average);

//    return array;
//  }

//  const value = 0x257;
//  const x = 101 % 16;

// const message = '\\\'He\tllo \nworld!\xa9\u23f3\u{1f514}🔔 \x27 \u45af \u{10ffff} 䖯ᒐ'

// console.log(message.codePointAt(0));

// let str = '';

// for (let i = 0; i <= 256; i++) {
//   str += String.fromCodePoint(i);
// }

// console.log(str);

// console.log(String.fromCodePoint(101));
/*
first ' line
second \ line
*/

// const str = 'first \' line\nsecond \\ line';

// console.log(str);

/*
first ' line
second \ line
*/

// const name1 = 'Hedgehog';
// const name2 = 'Apple';

// console.log(String.fromCodePoint(65));

// console.log(name1.codePointAt(0));
// console.log(name2.codePointAt(0));

// console.log(name1.toLowerCase() > name2.toLowerCase());

// const word1 = 'їжак';
// const word2 = 'яблуко';

// // console.log(word1 > word2);

// console.log(word1.localeCompare(word2) > 0);

// while (true) {
//   let n = Math.random();
//   if (n >= 0.9) {
//     break;
//   }
//   console.log(n);
// }

// debugger;
// let string = 'very good dog is sleeping'
// console.log(replaceSymbols(string, ' ', ''));

// function replaceSymbols(text, char, replace) {
//   let array = [];
//   const split = text.split('');

//   for (let i = 0; i < split.length; i++) {
//     if (split[i] === char) {
//       array.push(replace);
//     } else (
//       array.push(split[i])
//     )
//   }
//   return array.join('');
// }

//  let x = 12345;

//  console.log(x);
//  console.log(
//   x.toString(),
//   '' + x,
//   `${x}`.length,
//   String(x).length
// );

// let x = 15;

// let n = 0 < x < 10;

// if (x > 0 && x < 10) {
//   x += 10
// }

// console.log(x);

// let x = 12345.567;

// console.log(x);

// console.log(parseInt(x));

// let employee = {
//   empname: "Rahul",
//   department: "sales",
//   details: function () {
//       return this.empname +
//           " works with Department " +
//           this.department;
//   }
// };
// console.log(employee.details());

// debugger;

// const array = [30,40,20];

// console.log(getAverage(array));

// function getAverage(number) {
//   let result = [];
//   let min = number.at(0);
//   let max = number.at(0);
//   let sum = 0;

//   for (let i = 0; i < number.length; i++) {
//   sum += number.at(i);
//   if(number.at(i) < min) {
//     min = number.at(i);
//   }
//   if(number.at(i) > max) {
//     max = number.at(i);
//   }
//   }
//   let average = sum / number.length;

//   result.push(min, max, average);

//   return result;
// }
// const words = 'Good dog is sleeping on the floor';

//  function getShortWords(text, number) {
//  let split = text.split(' ');
//  let newWord = [];

//  for (const ch of split) {
//   if (ch.length > number) {
//     continue;
//   }
//   newWord.push(ch);
//  }
// return newWord.join(' ');
//  }

//  console.log(getShortWords(words, 3));

// const words = 'Go\\od dog is  slee\tping \non the f\'loor \u{6f}';

// console.log(words);

// function getRandom(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }

// for (let i = 0; i < 10; i++) {
//   let n = getRandom(2, 10);
//   console.log(n);
// }

// function replace(text, char, replace) {
//   let newWord = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text.at(i) === char) {
//       newWord += replace;
//     } else {
//       newWord += text.at(i);
//     }
//   }
//   return newWord;
// }

// console.log(replace(words, ' ', '-'));

// let x = 6;
// let i = 0;

// while(true) {
//   if(x >= 1) {
//     x /= 10;
//   } else {
//     break;
//   }
//    i++;
// }

// console.log(i);

// let x = 12345.0;
// console.log(x);

// console.log(
//   x.toString(),
//   '' + x,
//   `${x}`,
//   String(x).length
// );

// function getFirstDigit(number) {
//   return String(number)[0];
// }

// console.log(getFirstDigit(799956));

// function isSpecialNumber(n) {

//   let string = String(n);
//   if (string.length === 0) {
//     return 'NOT!!'
//   }

//   for (const ch of string) {
//     if (+ch > 5) {
//       return 'NOT!!'
//     }
//   }
//   return 'Special!!'
// }

// console.log(isSpecialNumber(33));

// const x = '20';
// const y = '19';

// console.log(y.localeCompare(x));

// debugger;

// console.log(isTidy(12236));

// function isTidy(n) {
//   let string = String(n);

//   for (let i = 0; i < string.length; i++) {
//     if (string[i + 1].localeCompare(string[i]) < 0) {
//       return 5;
//   }
//   }
//   return true;
//   }

//  function isTidy(n) {
//   let string = String(n);

//   for (let i = 1; i < string.length; i++) {
//     if (+string[i] < +string[i-1]) {
//       return 5;
//     }
//   }
//   return true;
//  }

//  console.log(isTidy(13579));

// debugger;

//  function isTidy(n) {
//   let string = String(n);

//   let prev = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (prev > +string[i]) {
//       return 5;
//     }
//     prev = +string[i];
//   }
//   return true;
//  }

//  console.log(isTidy(1234561));

// function isJumping(n) {
//    let string = String(n);
//    if (string.length === 1) {
//     return 'JUMPING'
//    }

//    for (let i = 1; i < string.length; i++) {
//     if (+string[i] - (+string[i - 1]) !== 1 && +string[i] - (+string[i - 1]) !== -1) {
//       return 'NOT JUMPING';
//     }
//    }
//    return 'JUMPING';
// }

// console.log(isJumping(23));

// function isBigLetter(ch) {
//   return ch.toUpperCase() !== ch.toLowerCase();
// }

// console.log(isBigLetter('!'));

// const n = '0123';

// console.log('0123 '.repeat(4));
// console.log('0123'.padStart(19, '**** '));
// console.log('0123'.padEnd(19, ' ****'));

// debugger;

// let string = '5678 ';
// let newString = '';
// let n = 0;

// for (let i = 0; n < string.length * 3; i++) {
//   if (i >= string.length) {
//     i = 0;
//   }
//   newString += string[i];
//   n++;
// }

// console.log(newString);

// let string = '5678 ';
// let newString = '';
// let i = 0;
// let n = 0;

// while(n < string.length * 3) {
//   if (i >= string.length) {
//     i = 0;
//   }
//   newString += string[i];
//   i++;
//   n++;
// }

// console.log(newString);

//  console.log(
//   'shrek '.repeat(4),
//  );

//  console.log(
//  '0123'.padEnd(24, ' ****'),
//  );

//  console.log(
//  '0123'.padStart(24, '**** ')
//  )

// const title = '  Mate academy   ';

// console.log(title, title.length);

// console.log(title.toLocaleUpperCase());
// console.log(title.toLocaleLowerCase());

//  console.log(title.trim(), title.trim().length);
//  console.log(title.trimStart());
//  console.log(title.trimEnd());

// const words = 'adidas nike puma leleka Gucci';

// debugger;

// function findItem(text, item1, item2, item3) {
//   let array = text.split(' ');
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//    if (array.at(i) === item1 || array.at(i) === item2 || array.at(i) === item3) {
//     newArray.push(array.at(i));
//    }
//   }
//   return newArray;
// }

// console.log(findItem(words, 'adidas', 'Gucci', 'puma'));

// function isBigLetter(n) {
//   return n !== n.toLowerCase()
// }

// console.log(isBigLetter('a'));

// const text = 'national aeronautics space administration';

// function makeAbbr(words) {
//   let splitWords = words.split(' ');
//   let abbr = [];

//   for (const ch of splitWords) {
//    abbr.push(ch.at(0));
//   }
//   return abbr.join('').toLocaleUpperCase();
// }

//  console.log(makeAbbr(text));

// const text = 'national aeronautics space administration';

//  function makeAbbr(words) {
//   let abbr = '';
//   abbr += words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === ' ') {
//     abbr += words[i + 1];
//    }
//   }
//   return abbr.toUpperCase();
// }

//  console.log(makeAbbr(text));

// const title = '  Mate academy   ';

// console.log(title, title.length);

// console.log(
//   title.toUpperCase()
// );

// console.log(
//   title.toLowerCase()
// );

// console.log(title.trimStart());

// console.log(title.trimEnd());

// console.log(title.trim());

// console.log(
//   title.replace('a', '_')
// );

//  const number = '0123';
//  let newString = '';
//  let i = 0;
//  let n = 0;

//  while (true) {
//   if (i === 4) {
//     i = 0;
//   }
//   if (number.length * 4 <= n) {
//     break;
//   }
//   newString += number[i];
//   i++;
//   n++;
//  }

//  console.log(newString);

//  const number = '0123';
//  let newString = ''
//  let n = 0;

//  for (let i = 0; n < number.length * 4; i++) {
//       if (i === 4) {
//         i = 0;
//       }
//       newString += number.at(i);
//       n++;
//  }

//  console.log(newString);

//  const text = 'very good dog is laying on a blanket';

//  function replaceAll(words, ch, replace) {
//   let newWord = '';

//   for (let i = 0; i < words.length; i++) {
//     if (words.at(i) === ch) {
//       newWord += replace;
//       continue;
//     }
//     newWord += words[i];

//   }
//   return newWord;
//  }

//  console.log(replaceAll(text, ' ', ''));

// const prices = [20, 30, 40];

// function getAverage(array) {
// let min = array[0];
// let max = array[0];
// let newArray = [];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
//   if (array[i] > max) {
//     max = array[i];
//   }
//  sum += array[i];
// }
// let average = sum / array.length;

//  newArray.push(min + max + average);

//  return newArray;
// }

// console.log(getAverage(prices));

// debugger;

// const text = 'very good dog is laying on a blanket';

// function getAbbr(words) {
//   let splitWords = words.split(' ');
//   let abbr = '';

//   for (let i = 0; i < splitWords.length; i++) {
//     abbr += splitWords[i][0];
//   }
//   return abbr.toUpperCase();
// }

// console.log(getAbbr(text));

// const text = 'very good dog is laying on a blanket';

// function getShortWords(words, number) {
//   let splitWords = words.split(' ');
//   let array = [];
//   for (const ch of splitWords) {
//     if (ch.length > number) {
//       continue;
//     }
//    array.push(ch);
//   }
//   return array.join(' ');
// }

// console.log(getShortWords(text));
// debugger;
// const n = 456789;

// function getTiny(number) {
//   let string = String(number);
//   if (string.length === 1) {
//     return 'JUMPING'
//   }
//   let prev = +string[0];

//   for (let i = 0; i < string.length; i++) {
//     if (+prev > +string[i + 1])
//       return 'NOT JUMPING';
//       prev = +string[i];
//   }

//   return 'JUMPING'
// }

// console.log(getTiny(n));

// const n = 4;

// function getTiny(number) {
//   let string = String(number);

//   if (string.length === 1) {
//     return 'JUMPING';
//   }
//   for (let i = 1; i < string.length; i++) {
//     if (+string[i] < +string[i - 1]) {
//       return 'NOT JUMPING';
//     }
//   }
//   return 'JUMPING';
// }

// console.log(getTiny(n));

// function getRandom(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }

// for (let i = 0; i < 11; i++) {
//   console.log(getRandom(2, 5));
// }

//  const words = 'adidas nike puma leleka Gucci';

// debugger;

// function findItem(text, item1, item2, item3) {
//   let splitText = text.split(' ');
//   let items = [];

//   for (const ch of splitText) {
//     if (ch === item1 || ch === item2 || ch === item3)
//     items.push(ch);
//   }
//   return items;
// }

// console.log(findItem(words, 'nike', 'adidas', 'leleka'));

//  const title = '  Mate academy   ';

// console.log(title, title.length);

// console.log(
//   title.toUpperCase()
// );

// console.log(
//   title.toLowerCase()
// );

// console.log(title.trimStart());

// console.log(title.trimEnd());

// console.log(title.trim());

// console.log(
//   title.replace('a', '_')
// );

// const word1 = 'apple \u006c';

// console.log(word1);

// console.log(word2.localeCompare(word1) > 0);

//  const title = '  Mate academy   ';

// console.log(title, title.length);

// console.log(
//   title.toUpperCase()
// );

// console.log(
//   title.toLowerCase()
// );

// console.log(title.trimStart());

// console.log(title.trimEnd());

// console.log(title.trim());

// console.log(
//   title.replace('a', '_')
// );

// while (true) {
//   let n = Math.random();
//  if (n > 0.9) {
//   break;
//  }
//  console.log(n);
// }

// const title = '  Mate academy   ';

// console.log(title, title.length);

// console.log(
//   title.toUpperCase()
// );

// console.log(
//   title.toLowerCase()
// );

// console.log(title.trimStart());

// console.log(title.trimEnd());

// console.log(title.trim());

// console.log(
//   title.replaceAll('a', '')
// );

//  debugger;

//  const text = 'aMate academy';

//  let n = text.indexOf('a');
//  console.log(text.indexOf('a', n));

//  n += 1;
//  console.log(text.indexOf('a', n ));

//  n += text.indexOf('a', n);

//  console.log(text.indexOf('a', n ));

//  const text = 'Mate academy';
//  const part = 'mAte';

// //  console.log(
// //   text.toLowerCase().includes(part.toLowerCase())
// //  );

// console.log(
//    text.includes('a', 1000)
// );

//  console.log(
//   text.indexOf('a'),
//   text.indexOf('a', 2),
//   text.indexOf('a', 6)
//  );

//  const part = 'mAte';

//  console.log(
//   text.toLowerCase().includes(part.toLowerCase())
//  );

// console.log(
// text.startsWith('ac'),
//   text.endsWith('emy'),
// );

//  console.log(
//   word.toLowerCase().includes(part.toLowerCase())
// );

// console.log(
//   word.endsWith('emys')
// );

// console.log(
// word.indexOf('a'),
// word.indexOf('a', 2),
// word.indexOf('a', 6),
// );

// console.log(
//   word.lastIndexOf('ac')
// );

//  console.log(
//   word.toLowerCase().includes(part.toLowerCase())
//  );

//  console.log(
//   word.toLowerCase().endsWith('Mate academy'.toLowerCase())
//  );

//  console.log(word.toLowerCase().includes(part.toLowerCase()));

//  console.log(
//   word.startsWith('ac'),
//   word.endsWith('emy')
// );

// console.log(word.indexOf(part, 6));

// console.log(word.indexOf('ac'));

//  let n = 1;
// debugger;
// const word = 'AMate academy';

// let i = 0;
// let n = 0;

// while (true) {
// n = word.toLowerCase().indexOf('a', n);
// if(n < 0) {
//   console.log('THE END');
//   break;
// }
// console.log(n);
// n++;
// }

// let n = 0;

// for (let i = 0; n < word.length; i = n + 1) {
//   n = word.indexOf('a', i);

//   console.log(n);
// }

// console.log(word.indexOf('a', 9));

// debugger;

// const words = 'Mate academy';

//  function getIndex(text, word) {
//   let lowWord = word.toLowerCase();
//   let split = text.split(' ');
//   let result = [];

//   for (let i = 0; i < split.length; i++) {
//     if (split[i].toLowerCase() === lowWord) {
//       result.push(i);
//     }
//   }
// return result;

//  }

//  console.log(getIndex(words, 'academy'));

// const text = 'Mate academy';

// console.log(
//   text.slice(4, 2)
// );
//  let words = 'Busenya is the finest dog';

// function replaceAll(text, ch, replacement) {
// let newText = '';

// for (let i = 0; i < text.length; i++) {
//   if (text.at(i) === ch) {
//     newText += replacement;
//     continue;
//   }
//   newText += text.at(i);
// }
// return newText;
// }

// console.log(replaceAll(words, ' ', '-'));

// const words = 'Busenya is the finest dog';

// debugger;

// function getTiny(number) {
//   let string = String(number);
//   if (string.length === 1) {
//     return 'JUMP'
//   }
//   for (let i = 1; i < string.length; i++) {
//     if (+string[i] < +string[i - 1]) {
//       return 'NOT JUMP';
//     }
//   }
//   return 'JUMP'
// }

// console.log(getTiny(12334));

// const wolf = 'Goog!'

// function isWereWolf(text) {
//   let word = '';
//   let reverse = '';

//   for (const ch of text) {
//     if (ch.toLowerCase() !== ch.toUpperCase()) {
//       word += ch;
//       reverse = ch + reverse;
//     }
//   }
//   return word.toLowerCase() === reverse.toLowerCase();
// }

// console.log(isWereWolf(wolf));

// const prices = [20, 30, 40];

// function getAverage(number) {
//   let min = number[0];
//   let max = number[0];
//   let sum = 0;
//   let result = [];

//   for (const ch of number) {
//     if (ch < min) {
//       min = ch;
//     }
//     if (ch > max) {
//       max = ch;
//     }
//     sum += ch;
//   }
//   let average = sum / number.length;

//   result.push(min, max, average);

//   return result;
// }

// console.log(getAverage(prices));

// let word = 'Mate academy';
// let n = 0;
// let sum = 0;

// while (true) {
//   n = word.indexOf('a', n);
//   if (n < 0) {
//     break;
//   }
//   sum += n;
//   console.log(n);
//   n++;
// }

// function getTiny(number) {
//   let string = String(number);
//   let prev = string[0];

//   for (let i = 1; i < string.length; i++) {
//     if (prev > string[i]) {
//       return 'NOT JUMP';
//     }
//     prev = string[i];
//      }
//      return 'JUMP';
// }

// console.log(getTiny(1242));

// const number = '01234';
// let i = 0;
// let word = '';
// let n = 0;

// while (true) {
//   if (i === 5) {
//     word += ' ';
//     i = 0;
//   }
// word += number[i];
// if (number.length * 4 < n) {
//   break;
// }
// i++;
// n++;
// }

// console.log(word);

// function random(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }

// for (let i = 0; i < 10; i++) {
//   console.log(random(5, 7));
// }

// let n = 1234;
// let i = 0;

// while(true) {
//   n /= 2;
//   if(!Number.isInteger(n)) {
//     break;
//   }
//   i++;
// }

// console.log(i)

// let x = 12.55998;

// console.log(Math.round(x * 100) / 100);

// let word1 = 'apple';
// let word2 = 'yabloko';

// console.log(word1.indexOf('p', 4));

// const text = 'Mate academy';

// console.log(
//   text.includes('a', -50)
// );

// const text2 = 'I have 4 dogs';

// console.log(
//   text2.slice(0, 7) + '5' + text2.slice(-5)
// );

// const text = 'apple';

// console.log(
//   text.lastIndexOf('p', 1)
// );

// let text = 'robot';
// let x = text.slice(2);
// let y = text.slice(0, 2);
// let z = x + y

// console.log(
//   z
// );

// let text = 'abc';

// console.log(

//   text.codePointAt(1),
//   text.codePointAt(2),
// );
// debugger;

// let text = 'IJK';

// console.log(
// 'abcdefghijklmnopqrstuvwxyz'.includes(
//     text.toLowerCase(),
//   )
// );

// function isAlphabet(letters) {
//    if(letters.length === 0) {
//     return 5;
//    }

//    if(letters.length === 1) {
//     return true;
//    }

//    let prev = letters.toLowerCase().codePointAt(0);

//    for (let i = 1; i < letters.length; i++) {
//     if (prev + 1 !== letters.toLowerCase().codePointAt(i)) {
//       return 5;
//     }
//     prev = letters.toLowerCase().codePointAt(i);
//    }
//    return true;
// }

// console.log(isAlphabet(text));

// function scrollingText(word) {
//    let newWord = '';
//    let array = [];

//    for (let i = 0; i < word.length; i++) {
//     newWord = word.slice(i) + word.slice(0, i);

//     array.push(newWord.toUpperCase());
//    }
//    return array;
// }

// console.log(scrollingText(text));

//  console.log(
//   +'5'
//  );

// console.log(
//   !isNaN('5')
// );

// console.log(
//   isNaN('6')
// );

// result === ''

// debugger;

// let text = 'hello cat walks on my keyboard ksadjfhskaj12.34kasdfhsjk'

// function calculateGuests(guestsInput) {
//     if(guestsInput.length === 0 || +guestsInput === 0) {
//       return 'not a number';
//     }
//     let result = '';

//     for (const ch of guestsInput) {
//      if (!isNaN(+ch)) {
//       result += ch;
//      }
//      if (ch === '.') {
//       break;
//      }
//     }
//     if (result === '') {
//       return 'not a number'
//      }

//     return parseInt(result);
// }
// let result = '';

// console.log(
//  0 || 1
// );

// debugger;

// let text = 'There 80  or 8 guys';

// function calculateGuests(guestsInput) {
//   let result = '';

//    for (const ch of guestsInput) {
//     if('0123456789'.includes(ch)) {
//       result += ch;
//       continue;
//     }
//     if (result.length > 0) {
//       break;
//     }
//    }
//    return +result || 'not a number';
// }

// console.log(calculateGuests(text));

// let x = '    good dog  \t \n  ';

// // console.log(
// //   x.at(5)
// // );

// console.log(
//   x
// );

// // x = x.trim();

// // console.log(x.length, x);

// let x = true;

// console.log(
//  isNaN(x)
// );

// function random(min, max) {
//   return min + Math.random
// }

// let x = -12.3457;

// console.log(
//  Math.round(x * 1000) / 1000
// );

// for (let i = 0; i < 11; i++) {
//   console.log(
//     random(2, 4)
//   );
// }

// function random(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// ;

//  const x = 'Mate academy';

//  console.log(
//   `${x.slice(0, 4)} means friend`
//  );

// console.log(isAlphabet('Abd'));

// function isAlphabet(letter) {
//   let string = letter.toLowerCase();

// for (let i = 1; i < string.length; i++) {
//   if (string[i].codePointAt() - string[i - 1].codePointAt() !== 1 ) {
//     return 5;
//   }
// }
//  return true;
// }

// debugger;

// console.log(isAlphabet('Abn'));

// function isAlphabet(letter) {
//   if (letter.length === 0) {
//     return 5;
//   }
//   if (letter.length === 1) {
//     return true;
//   }

//   let string = letter.toLowerCase();
//   let prev = string[0];

//   for (let i = 1; i < string.length; i++) {
//     if (string[i].codePointAt() !== prev.codePointAt() + 1) {
//       return 5;
//     }
//     prev = string[i];
//   }
//   return true;
// }

// const x = 'b'

// console.log(
// x.codePointAt()
// );

// console.log(isAlphabet('Abd'));

// function isAlphabet(letter) {
//   if (letter.length === 0) {
//         return 5;
//       }

//   let string = letter.toLowerCase();

//   return 'abcdefghijklmnopqrstuvwxyz'.includes(string);
// }

// function calculateGuests(guestsInput) {

//   let number = '';

//    for (const ch of guestsInput) {
//     if ('0123456789'.includes(ch)) {
//    number += ch;
//    continue;
//     }
//     if (number.length > 0) {
//       break;
//      }
//    }

//    return +number || 'not a number';
// }

// console.log(calculateGuests('I think 20 or 18 guests'));

// let number = '6';

// console.log(
// +number || 'not a number'
// );

// const words = 'very good dog';

// function replaceAll(text, char, replace) {
//   let newWords = '';

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === char) {
//       newWords += replace;
//       continue;
//     }
//     newWords += text[i];
//   }
//   return newWords;
// }

// console.log(
//   replaceAll(words, ' ', '-')
// );

// const words = 'very is a good dog';

// function findShortWords(text, number) {
//   let array = text.split(' ');
//   let newWords = '';

//   for (let i = 0; i < array.length; i++) {
//     if (array.at(i).length < number) {
//     newWords += array[i] + ' ';
//     }
// }
// return newWords;
// }

// console.log(
//   findShortWords(words, 3)
// );

// const prices = [20, 30, 40];

// function getAverage(array) {
//   let min = array[0];
//   let max = array[0];
//   let sum = 0;
//   let result = [];

//   for (const ch of array) {
//     if (ch < min) {
//       min = ch;
//     }
//     if (ch > max) {
//       max = ch;
//     }
//     sum += ch;
//   }
//   let average = sum / array.length;
//   result.push(min, max, average);

//   return result;
// }

// console.log(
//     getAverage(prices)
//   );

// let words = 'Busenya is a best dog';

// function getAbbr(text) {
//  let abbr = text[0];

//  for (let i = 0; i < text.length; i++) {
//   if (text[i] === ' ') {
//     abbr += text[i + 1];
//   }
//  }
//  return abbr.toUpperCase()
// }

// console.log(
//   getAbbr(words)
//   );

// debugger;

// const text = 'Ams! ';

// function isWereWolf(words) {
//   let word = '';
//   let reverse = '';

//   for (const ch of words) {
//     if (ch.toUpperCase() !== ch.toLowerCase()) {
//     word += ch;
//     reverse = ch + reverse;
//     }
//   }
//   return word.toLowerCase() === reverse.toLowerCase();
// }

// console.log(
//   isWereWolf(text)
//     );

// function scrollingText(text) {
//   let newWord = '';
//   let array = [];
//   for (let i = 0; i < text.length; i++) {
//     newWord = text.slice(i) + text.slice(0, i);
//     array.push(newWord.toUpperCase());
//   }
//   return array;
// }

// console.log(scrollingText('robot'));

// function isJumping(n) {
//   let string = String(n);

//   if (string.length === 1) {
//     return 'JUMPING';
//   }

//   for (let i = 1; i < string.length; i++) {
//     let diff = +string[i] - +string[i - 1];

//     if (diff !== 1 && diff !== -1) {
//       return 'NOT JUMPING'
//     }
//   }
//   return 'JUMPING';
// }

// console.log(
//   isJumping(1234321)
// );

// function isTidy(n) {
//   let str = String(n);
//   let prev = +str[0];

//   for (let i = 1; i < str.length; i++) {
//     if (+str[i] < prev) {
//       return 5;
//     }
//     prev = +str[i];
//   }
//   return true;
// }

// console.log(
//   isTidy(4565)
// );

// const string = '1234899';
// let newString = '';

// let i = 0;
// let n = 0;

// for (; n < string.length * 4; i++) {
//   if (i > string.length - 1) {
//     i = 0;
//   }
//  newString += string[i];
//  if (i === string.length - 1) {
//   newString += ' ';
//  }
//  n++;
// }

// console.log(newString);

// function sum(a, ...args) {
//   console.log(a, args, arguments);
// }

// sum(1, 2);
// sum(1,2,3,4);
// sum(undefined);

// const prices = [30, 40, 50, 20];

// function getAverage(number) {
//   let min = number[0];
//   let max = number[0];
//   let sum = 0;
//   let array = [];

//   for (const ch of number) {
//     if (ch < min) {
//       min = ch;
//     }
//     if (ch > max) {
//       max = ch;
//     }
//     sum += ch;
//   }

//    let average = sum / number.length;

//    array.push(min, max, average);

//    return array;
// }

// console.log(getAverage(prices));

// let x = 'Na';

// console.log(
//   isNaN('0x123')
// );

// function getRandom(min, max) {
//   return Math.floor(min + Math.random() * (max - min + 1));
// }

// for (let i = 0; i < 10; i++) {
//   console.log(getRandom(2, 5));
// }

// let string = '0123';
// let n = 0;
// let newString = '';

// for (let i = 0; n < string.length * 4; i++) {
//   if (i === 4) {
//     i = 0;
//   }
//   if(i === 3) {
//     newString += string[i] + ' ';
//     n++;
//     continue;
//   }
//   newString += string[i];
//   n++;
// }

// console.log(newString);

//  const x = 'Mate academy';
//  const y = 'acadeMy'

//  console.log(
//     x.slice(1, 0)
//  );

// const word = 'robot';

// function reverse(text) {
// let newText = text.toUpperCase();
// let array = [];
// let newWord = '';

// for (let i = 0; i < text.length; i++) {
//   newWord = newText.slice(i, text.length) + newText.slice(0, i);
//   array.push(newWord);
// }
// return array;
// }

// console.log(reverse(word));

// debugger;

// function calculateGuests(guestsInput) {
//   let number = '';
//   for (const ch of guestsInput) {
//     if ('0123456789'.includes(ch)) {
//       number += ch;
//       continue;
//     }
//     if (number.length !== 0) {
//       break;
//     }
//   }
//   return +number || 'not a number'
// }

// console.log(calculateGuests('Hello, 9.75 people'))

// function isAlphabet(letters) {
//   let newLetters = letters.toLowerCase();
//   let prev = newLetters[0];

//   for (const ch of newLetters) {
//   if (prev > ch) {
//     return 5;
//   }
//     prev = ch;
//   }
//   return true;
// }

// console.log(
//   isAlphabet('XYZ')
// );

// function isAlphabet(letters) {
//   if (!'abcdefghijklmnopqrstuvwxyz'.toLowerCase().includes(letters.toLowerCase())){
//     return 5;
//   }
//   return true;
// }

// console.log(
//     isAlphabet('mnoprqst')
//   );

// }

// console.log(
//   'b'.codePointAt()
// );

// let word = 'Busenya is the best dog ever';

// function abbr(text) {
//   let bigText = text.toUpperCase();
//   let result = bigText[0];
//   for (let i = 1; i < text.length; i++) {
//     if (bigText[i] === ' ') {
//     result += bigText[i + 1];
//     }
//   }
//   return result;
// }

//   console.log(
//     abbr(word)
//       );

// function abbr(text) {
//   let bigSplitText = text.toUpperCase().split(' ');
//   let result = '';

//   for (const ch of bigSplitText) {
//   result += ch[0];
//   }
//   return result;
// }

// console.log(
//   abbr(word)
//     );

// debugger;

// function isJumping(n) {
//   let string = String(n);
//   if (string.length === 1) {
//     return 'JUMPING';
//   }
//   let prev = +string[0];

//   for (let i = 1; i < string.length; i++) {
//     if (prev - +string[i] !== 1 && prev - +string[i] !== -1) {
//       return 'NOT JUMPING';
//     }
//     prev = +string[i];
//   }
//   return 'JUMPING';
// }

// console.log(
//   isJumping(45658)
//     );

// console.log(getGuestsCount("boys"));

// function getGuestsCount(text) {
//   let number = parseInt(text);

//   if (isNaN(number)) {
//     return "no guests";
//   }
//   return number;
// }

// let words = 'Oddos!!!';

// function isWereWolf(text) {
// let word = '';
// let reverse = '';
// let newText = text.toLowerCase();

// for (const ch of newText) {
//   if (ch.toLowerCase() !== ch.toUpperCase()) {
//     word += ch;
//     reverse = ch + reverse;
//   }
// }
// return word === reverse;
// }

// console.log(
//   isWereWolf(words)
//       );

// function sum(a, ...args) {
//   console.log(a, args);
// }

// sum(1, 2);
// sum(1, 2, 3, 4);
// sum(undefined);

// debugger;

// console.log(
//   sum(1, 2),
//   sum(1, 2, 3, 4),
//   sum()
//  );

//  function sum(a = 0, b = 0, ...args) {
//   console.log(args);

//   return a + b;
//  }

//   let operation = function(a = 0, b = 0, ...args) {
//     console.log(args);

//     return a + b;
//    };

//    let operation2 = (a = 0, b = 0, ...args) => {
//     console.log(args);

//     return a + b;
//    };

//    let operation3 = (a = 0, b = 0, ...args) => a + b;

//    let operation4 = a => a + 10;

//  console.log(
//   operation(1, 2, 3, 4),
//   operation2(1, 2, 3, 4),
//   operation3(1, 2, 3, 4),
//   operation4(1, 2, 3, 4),
//  );

// console.log(
//  sum(1, 2),
//  sum(1,2,3,4),
//  sum()
// )
//    function sum(a = 0, b = 0, ...args) {
//     console.log(args);

//     return a + b;
//    }

//    let operation;

//    if(true) {
//     operation = function(a = 0, b = 0, ...args) {
//       console.log(args);

//       return a + b;
//      }
//    }

//    let operation2 = (a = 0, b = 0, ...args) => {
//     console.log(args);

//     return a + b;
//    }

//    let operation3 = (a = 0, b = 0, ...args) => a + b;

//    let operation4 = a => a + 11;

// console.log(
//   operation(5,6,7),
//   operation2(5,6,7),
//   operation3(5,6,7),
//   operation4(5,6,7),
// );

// let x = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

// for (let i = 0; i < 11; i++) {
//   console.log(x(2, 5));
// }

//  const word = 'Bu\n senya is \\ \n \t \' the best dog \u23b5';

//  console.log(
//    word.codePointAt(2),
//    word,
//    String.fromCodePoint(169)
//  )

//  const text = 'Mate academy';
//  const part = 'a';

//  console.log(
//    text.slice(3, 8)
//  );

// const prices = [20, 30, 40, 50];

// const operation = (number) => {
// let array = [];
// let min = number[0];
// let max = number[0];
// let sum = 0;

// for (const ch of number) {
//  if (ch < min) {
//   min = ch;
//  }
//  if (ch > max) {
//   max = ch;
//  }
//  sum += ch;
// }
// let average = sum / number.length;

// array.push(min, max, average);

// return array;
// };

// console.log(
//   operation(prices)
// );

// const text = 'robot';

// const operation = (word) => {
//   let array = [];
//   let bigWord = word.toUpperCase();
//   let text = '';

//   for (let i = 0; i < word.length; i++) {
//     text = bigWord.slice(i, word.length) + bigWord.slice(0, i);
//     array.push(text)
//   }
//   return array;
// }

// console.log(
//     operation(text)
//   );

// debugger;

// function alph(text) {
//   let smallText = text.toLowerCase();
//   let prev = smallText.codePointAt(0);

//   for (let i = 1; i < text.length; i++) {
//   if (smallText.codePointAt(i) - prev !== 1) {
//     return 5;
//   }
//   prev = smallText.codePointAt(i);
//   }
//   return true;

// }

//  let alph = text => 'abcdefghijklmnopqrstuvwxyz'.includes(text.toLowerCase());

//  console.log(
//   alph('tuvwxyz')
// );

// const words = 'Hello, people';

// let operation = (text) => {
//   let number = '';
//   for (const ch of text) {
//     if('0123456789'.includes(ch)) {
//      number += ch;
//      continue;
//     }
//     if (number.length !== 0) {
//       break;
//     }
//   }
//   return +number || 'not a number'
// };

// console.log(
//   operation(words)
// );

// const words = 'Busenya is the finest dog';

// let abbr = (text) => {
//   let bigText = text.toUpperCase();
//   let abbr = bigText[0];

//   for (let i = 0; i < text.length; i++) {
//     if (bigText[i] === ' ') {
//       abbr += bigText[i + 1]
//     }

//   }
//   return abbr;
// }

// console.log(
//   abbr(words)
// );

// debugger;

// const digits = 23457;

// let tidy = (number) => {
// let string = String(number);
// let prev = string[0];

// for (let i = 1; i < string.length; i++) {
//   if(string[i] - prev !== 1 && string[i] - prev !== -1) {
//     return 'NOT JUMPING';
//   }
//   prev = string[i];
// }
// return 'JUMPING';
// };

// console.log(
//     tidy(digits)
//   );

// let words = 'Busenya is the best dog ever';

//    let operation = function replace(text, char, repl)  {
//    let newText = '';

//    for (const ch of text) {
//    if (ch === char) {
//     newText += repl;
//     continue;
//    }
//    newText += ch;
//    }
//    return newText;
//    }

//    console.log(
//     operation(words, ' ', '_')
//       );

// const words = '   5.7 good dog   ';

// let operation = text => parseInt(text) || 'not a number';

//    console.log(
//         operation(words)
//       );

// const greeter = name => `Hi, ${name}!`;

//??

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if ( checkAge(age) ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }

// debugger;

// function showPrimes(n) {
// for (let i = 2; i < n; i++) {
//   if (!isPrime(i)) continue;

//   alert(i);  // a prime
// }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return 5;
//   }
//   return true;
// }

// console.log(isPrime(2))

// function checkAge(age) {
//   return age > 18
//   ? true
//   : confirm('Did parents allow you?')

// }

// console.log(checkAge(17));

// function checkAge(age) {
//  return age > 18 ||  confirm('Did parents allow you?')
// }

// console.log(checkAge(19));

// function pow(x,n) {
//   let y = x;
//   for (let i = 2; i <= n; i++) {
//     x *= y;
//   }
//   return x;
// }

// console.log(
//   pow(3,5)
// );

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(
//   pow(3,5)
// );

//  function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
//  }

//  function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) {
//      yes()
//   } else {
//     no()
//   }
// }

// function ShowOK() {
//  alert('You agreed');
// }

// function showCancel() {
//   alert('You canceled the execution.');
//  }

//  ask('Do you agree?', ShowOK, showCancel);

// function sum(a, b) {
//   return a + b;
// }

// function S(side1, side2) {
//   return side1 * side2;
// }

// function numb(side1, side2) {
//   return side1 - side2;
// }

// let operation1 = S(2, 6);
// let operation2 = numb(10, 2);

// console.log(
//   sum(operation1, operation2)
// );

// const age = 17;

// function notification(message1, message2) {
//   if(age > 18) {
//     return message1();
//   }
//     return message2();
//   }

// function showOK() {
//   return 'You approved';
// }

// function showCancel() {
//   return 'You denied';
// }

// console.log(
//   notification(showOK, showCancel)
// );

// function ask(question, yes, no) {
//   if(confirm(question)) {
//     return yes();
//   } else {
//     return no();
//   }
// }

// ask(
//   'Do you agree with us',
//   function () {alert('You confirmed')},
//   function () {alert('You denied')},
// );

// let age = prompt('how old are you', 18);

// let welcome = age < 18
// ? () => alert('Hello')
// : () => alert('Greetings');

// welcome();

// let welcome;

// if (age > 18) {

//    welcome = function() {
//     alert('Greetings');
//    }

//    } else {

//     welcome = function() {
//     alert('Hello');
//     }

//    }

// welcome();

//  function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
//  }

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// function longestStrings() {
//   let longest = "";
//   if (arguments.length === 0) {
//     throw new TypeError("At least one string is required");
//   }
//   for (const arg of arguments) {
//     if (arg.length > longest.length) {
//       longest = arg;
//     }
//   }
//   return longest;
// }

// console.log(
//   longestStrings('good')
// );

// function getLongestString() {
//   arguments[0] = 'explorer';

//   if(arguments.length === 0) {
//     return 'must be at least 1 string';
//   }
//   let result = '';

//   for (const ch of arguments) {
//      if (ch.length > result.length) {
//       result = ch;
//      }
//   }
//   return result;
// }

// console.log(
//   getLongestString('one', 'fine', 'house'),
//   // getLongestString.length
// );

// function funcWithDefault3(a, b, ...args) {
//   console.log(a);
//   // console.log(args);
//   let c = [...arguments];
//   console.log(c);

//   arguments[1.iterator]()
// }

// funcWithDefault3(1, 2, 3, 4);
// console.log(
//   Array.from('45678')
// );

// function myConcat(separator) {
//   const args = Array.prototype.slice.call(arguments, 1);
//   return args.join(separator);
// }

// console.log(
//   myConcat("; ", "elephant", "giraffe", "lion", "cheetah")
//   );

// const count = 9;

// if (count === 1) {
//   console.log('One');
//   } else if(count === 2) {
//     console.log('Two');
//   } else {
//     console.log('Many');
//   }

// function getName(count) {
// switch (count) {
//   case 1:{
//     return 'One';
//   }

//     case 2:
//     case 3:
//     return 'Two - three';

//     default:
//       return 'Many';
// }
// }
//  console.log(
// getName(2)
//  );

// function getTask(weekday) {
//   if (weekday === 'monday') {
//     return 'Write a new module for the program';
//   } else if (weekday === 'tuesday') {
//     return 'Test the module and find bugs';
//   } else
//   if (weekday === 'wednesday') {
//     return 'Write a new module for the program';
//   } else if (weekday === 'thursday') {
//     return 'Test the module and find bugs';
//   } else if (weekday === 'friday') {
//     return 'You need to meet the boss today';
//   } else
//   if (weekday === 'saturday') {
//     return 'Spend the evening with your friends';
//   } else
//   if (weekday === 'sunday') {
//     return 'Go to the movies in the evening';
//   } else {
//     return 'Entered the wrong day of the week';
//   }
// }

// function getTask(weekday) {
//   switch(weekday) {
//   case 'monday':
//     return 'Write a new module for the program';

//   case 'tuesday':
//     return 'Test the module and find bugs';

//   case 'wednesday':
//     return 'Write a new module for the program';

//   case 'thursday':
//     return 'Test the module and find bugs';

//   case 'friday':
//     return 'You need to meet the boss today';

//   case 'saturday':
//     return 'Spend the evening with your friends';

//   case 'sunday':
//     return 'Go to the movies in the evening';

//   default:
//     return 'entered the wrong day of the week';

//   }
// }

// console.log(
//   getTask('thursday')
//    );

// function getDirection(direction) {
//   switch (direction) {
//     case 'back':
//       return 'hor=0 ver=-1';

//     case 'forward':
//       return 'hor=0 ver=1';

//     case 'left':
//       return 'hor=-1 ver=0';

//     case 'right':
//       return 'hor=1 ver=0';

//     case 'stop':
//       return 'hor=0 ver=0';

//     default:
//       return 'hor=0 ver=0';
//   }
// }

// function findCalculationType(a, b, res) {
//   const addition = a + b;
//   const subtraction = a - b;
//   const multiplication = a * b;
//   const division = a / b;

//   switch(res) {
//     case addition:
//       return 'addition';

//     case subtraction:
//       return 'subtraction';

//       case multiplication:
//       return 'multiplication';

//       case division:
//       return 'division';

//   }
// }

// console.log(
//   findCalculationType(3,5,-2)
// );
// debugger;
// function isJumping(numb) {
//   let string = String(numb);

//   for (let i = 1; i < string.length; i++) {
//     if (string[i] - string[i - 1] !== 1 && string[i] - string[i - 1] !== -1) {
//       return 'NOT JUMPING';
//     }
//   }
//   return 'JUMPING';
// }

// console.log(
//   isJumping(1232)
// );

// const text = 'busenya is good dog';

// function abbr(words) {
// let bigWords = words.toUpperCase();
// let bigSplitWords = bigWords.split(' ');
// let result = [];

// for (let i = 0; i < bigSplitWords.length; i++) {
//    result.push(bigSplitWords[i][0]);
// }

// return result.join('');
// }

// console.log(
//   abbr(text)
// );

// let text = 'robot';

// function scrollingText(words) {
// let bigWord = words.toUpperCase();
// let word = '';
// let result = [];

// for (let i = 0; i < words.length; i++) {
//     word = bigWord.slice(i, words.length) + bigWord.slice(0, i);
//     result.push(word);
// }
//      return result;
// }

// console.log(
//   scrollingText(text)
//   );

// debugger;

// function isAlphabet(letters) {
//   let smallLetters = letters.toLowerCase();
//   let prev = smallLetters.codePointAt(0);

//   for (let i = 1; i < letters.length; i++) {
//      if (smallLetters.codePointAt(i) - prev !== 1) {
//       return 5
//      }
//      prev = smallLetters.codePointAt(i);
//   }
//   return true
// }

// console.log(
//   isAlphabet('XYZ')
//     );

// let isAlphabet = letters => 'abcdefghijklmnopqrstuvwxyz'.includes(letters.toLowerCase());

// console.log(
//     isAlphabet('abcdefghjiklmnopqrstuvwxyz')
//       );

// function calculateGuests(guestsInput) {
//   let result = '';

//   for (const ch of guestsInput){
//   if('1234567890'.includes(ch)){
//     result += ch;
//     continue;
//   }
//   if (result.length !== 0) {
//     break;
//   }
//   }
//   return +result || 'Not a number';
// }

// console.log(
//   calculateGuests('There will be 7 or 9 guys')
//         );

// console.log(
//   getName(1)
// );

// function getName(count) {
//   // switch (true) {
//   //   case count < 2:
//   //     return 'One';

//   //   case count <= 4:
//   //     return 'A few';

//   //   default:
//   //     return 'Many';
//   // }
//   if (count < 2) {
//     return 'One';
//    }

//    if (count <= 4) {
//     return 'A few';
//    }

//    return 'Many';

// }

// const count = 3;

// console.log(
//   getName()
// );

//   function getName(count) {
// if (count === undefined) {
//   return 'Not';
// }

//     switch(true) {
//       case count < 2:
//         return 'One';

//         case count <=5:
//           return 'few';

//           case count === undefined:
//             return 'Not';

// default:
//   return 'Many';
//   }
// }

// const browser = 'Safar';

// switch (browser) {
//   case 'Edge':
//     console.log( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log( 'Okay we support these browsers too' );
//     break;

//   default:
//     console.log( 'We hope that this page looks ok!' );
// }

// if(browser === 'Edge') {
//   console.log( "You've got the Edge!" );
// } else if (browser === 'Chrome'
//  || browser === 'Firefox'
//  || browser === 'Safari'
//  || browser === 'Opera'
// ) {
//   console.log( 'Okay we support these browsers too' );
// } else {
//   console.log( 'We hope that this page looks ok!' );
// }

//   let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// switch(a) {
//   case 0:
//  alert (0);
//  break;

//  case 1:
//  alert (1);
//  break;

//  case 2:
//  case 3:
//   alert('2,3');
// }

// function isAlphabet(letters) {
//   let smallLetters = letters.toLowerCase();

//   for (let i = 1; i < letters.length; i++) {
//     if (smallLetters.codePointAt(i) - smallLetters.codePointAt(i - 1) !== 1) {
//       return 5;
//     }
//   }
//   return true;
// }

// console.log(
//   isAlphabet('XYZ')
// );

// function scrollingText(word) {
//   let bigWord = word.toUpperCase();
//   let array = [];
//   let result = '';

//   for (let i = 0; i < word.length; i++) {
//   result = bigWord.slice(i) + bigWord.slice(0, i);
//   array.push(result);
//   }
//   return array;
// }

// console.log(
//   scrollingText('robot')
// );

// let replaceAll = (word, char, replace) => {
// let newWord = '';

// for (const ch of word) {
//   if (ch === char) {
//     newWord += replace;
//     continue;
//   }
//   newWord += ch;
// }
//  return newWord;
// };

// console.log(
//   replaceAll('favourite game is', ' ', '-')
// );

// const value = undefined;

// '', 0, 0n, undefined, 5, NaN, 5, null, false
// // []
// //  () => {}, {}

// console.log(
//   Boolean(value), !!value, `${value}`, '' + value, String(value), Number(value), value - 0, +value
// );
// 
// 

// function decodeSignal(input) {
//    if(input) {
//     return 1;
//    }
//    return 0
// }

// console.log(
//   decodeSignal(5)
// );

// function decodeSignal(input) {
//   return +!!input;
// }

// const value = '10';

//   console.log(
//     Boolean(value), !!value,
//     `${value}`, '' + value, String(value),
//     Number(value), (+value) + 0
//   );

// const value = '2';

//#region
// console.log(
// value > 18,
// value > '18'
// );
//#endregion

// console.log(
//   value == 2,
//   value === 2
// );

// console.log(
//    +true,
//    +5,
//    +0,
//    +5,
//    +'',
//    +undefined
// );

// console.log(
//   0 !== 5,
//   '5' === 5,
//   5 === undefined
// );

// console.log(
//   NaN === NaN,
//   isNaN('assdf'),
//    Object.is(0, '5'),
//    -0 === 0
// );

// const value = '2';

//#region

// console.log(
// +value > 18,
// String(value ) > '18'
// );
//#endregion

// console.log(
//   value == 2,
//   value === 2
// );

// console.log(
//   +true,
//   +5,
//   +'',
//   +5,
//   +'0',
//   +undefined
// );

// #region
// console.log(
//  0 == 5,
//  '5' == 5,
//  undefined == 5,
//  '' == 5
// );

// #endregion

// console.log(
//   isNaN(NaN),
//   isNaN(''),
//   Object.is(NaN, 'ggg'),
// );

// const value = '2';

// #region
// console.log(
//   +value > 18,
//   String(value) > '18'
// );
// #endregion

// console.log(
//   value == 2,
//   +value === 2,
//   true > ''
// );

// console.log(
//   +true,
//   +5,
//   +'',
//   +'0',
//   +5,
//   +undefined
// );

//#region
// console.log(
//   0 !== 5,
//   '5' === 5,
//   5 === undefined,
// );
//#endregion

// const num = 0;

// const str = '0';

// const obj = new String('0')

// console.log(
//    str === obj,

// );

// function confusedCode(text) {
//   let result = '';

//   for (const ch of text) {
//     if('0123456789'.includes(ch)){
//       result +=ch;
//       continue;
//     }
//     if(result.length !== 0) {
//       break;
//     }
//   }
//   return +result || 'no values'
// }

// console.log( NaN || 'bad');

// function sameValueZero(x, y) {
//   if (typeof x === "number" && typeof y === "number") {
//     // x and y are equal (may be -0 and 0) or they are both NaN
//     return x === y || (x !== x && y !== y);
//   }
//   return x === y;
// }

// console.log(
//   alph('abc')
// );

//  function alph(text) {
//   const smallText =text.toLowerCase();
//   let prev = smallText[0].codePointAt();

//   for (let i = 1; i < text.length; i++) {
//    if (smallText[i].codePointAt() - prev !== 1) {
//     return 5;
//    }
//    prev = smallText[i].codePointAt();
//   }
//   return true;
//  }

// let alph = text => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(text.toUpperCase());

// console.log(
//   alph('abd')
// )

// let abbr = (text) => {
//   let array = [];
//   const splitText = text.split(' ');

//   for (const ch of splitText) {
//     array.push(ch[0].toUpperCase());
//   }
//   return array.join('');
// }

// let abbr = (text) => {
//   let word = text[0].toUpperCase();

//   for (let i = 1; i < text.length; i++) {
//     if(text.at(i) === ' ') {
//       word += text.at(i + 1).toUpperCase();
//     }
//   }
//   return word;
// }

// const prices = [20, 30, 40];

// let average = (numbers) => {
// let min = numbers[0];
// let max = numbers[0];
// let value = 0;
// let array = [];

// for (const ch of numbers) {
//   if(ch < min) {
//     min = ch;
//   }
//   if(ch > max) {
//     max = ch;
//   }
//   value += ch;
// }

// array.push(min, max, value / numbers.length);

// return array
// };

// console.log(
//     average(prices)
//   );

// let reverse = (text) => {
//   let word = '';
//   let array = [];

//   for (let i = 0; i < text.length; i++) {
//   word = text.slice(i) + text.slice(0, i);
//   array.push(word.toUpperCase());
//   }
//   return array;
// };

// console.log(
//       reverse('robot')
//     );

// console.log(
//   3 && 3,
//   3 && 5,
//   5 && 3,
//   5 && 5
// );

// function and(a, b) {
// if (!a) {
//   return a;
// }
// return b;
// }

// console.log(
//   and(3, 3),
//   and(3, 5),
//   and(5, 3),
//   and(5, 5),
// );

// console.log(
//   false || (null && 12) || 0,
//   false || (null) || 0,
// );

// // const name = '' || 'no name'
// const name = ''  

// console.log(name);

// name && console.log('Hello')

// if(name) {
//   console.log('Hello');
// }
 
// let andy = (a, b) => !a 
// ? a
// : b;

// console.log(
//   andy(0, 5)
// );

// function canTheyBook(adultsCount = 0, childrenCount = 0) {
// if (adultsCount && adultsCount <= 8 && childrenCount/adultsCount <= 2) {
//   return true;
// }
// return false;
// }

// console.log(canTheyBook(9));




// function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  
//   const adults = adultsCount > 0;
//   const setlleOpportunity = adultsCount + childrenCount <= 8 && adultsCount + childrenCount + babiesCount <= 9;
//   const enoughAdults = childrenCount / adultsCount <= 2 && babiesCount + childrenCount <= adultsCount * 2 && babiesCount <= adultsCount;

//   return adults && setlleOpportunity && enoughAdults;
// }

 
 
// function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if(adultsCount < 1) {
//     return false;
//   }

//   if (babiesCount > adultsCount) {
//     return false;
//   }

//   if ((babiesCount + childrenCount) > adultsCount * 2) {
//     return false;
//   }

//   const total = adultsCount + childrenCount + babiesCount;

//   return total <= 8 || (total <= 9 && babiesCount > 0);
// }

// console.log(canTheyBook(9));


// function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//    if (adultsCount + childrenCount + babiesCount <= 4) {
//     return 'small room';
//    } 
//    if (adultsCount + childrenCount + babiesCount <= 5 && babiesCount >= 1) {
//     return 'small room + extra bed';
//    } 
//    if (adultsCount + childrenCount + babiesCount > 4 && adultsCount + childrenCount + babiesCount <= 8) {
//     return 'big room';
//    }
//    return 'big room + extra bed'
// }
 

// console.log(recommendRoom(8));

// function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if (adultsCount + childrenCount + babiesCount <= 4) {
//    return 'small room';
//   } 
//   if (adultsCount + childrenCount + babiesCount === 5 && babiesCount > 0) {
//    return 'small room + extra bed';
//   } 
//   if ( adultsCount + childrenCount + babiesCount <= 8) {
//    return 'big room';
//   }
//   return 'big room + extra bed'
// }

// let age = 6;

//  switch(age) {
//   case 1:
//     console.log(1);
//     break;

//     case 5:
//     console.log(5);
//     break;

//     case 10:
//     console.log(10);

//  }

// console.log(
//   0 && null && 12 && false
// );

// console.log(
//   3 && 3,
//   3 && 5,
//   5 && 3,
//   5 && 5
// );



//  function and(a, b) {
//   if(!a) {
//     return a;
//   }
//   return b;
// }
   

//  console.log(
//   and(3, 3),
//   and(3, 5),
//   and(5, 3),
//   and(5, 5),
//  );

// const name = '' || 'no name';

// console.log(name);

// name  && console.log('greeting');

 
// const andy = (a, b) => !a 
// ? a
// : b;

// console.log(andy(0, 5))

// typeof andy === 'function' && console.log(andy(false, 0));

// if(typeof andy === 'function') {
//   console.log(andy(false, 0));
// }

// function canTheyBook(adultsCount = 0, childrenCount = 0) {
//   const settleRoom = adultsCount + childrenCount < 9;
//   const adults = adultsCount > 0;
//   const childrenAccess = childrenCount / 2 <= adultsCount;

//   return settleRoom && adults && childrenAccess;
// }

// function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if (adultsCount < 1) {
//     return false;
//   }

//   if(childrenCount / 2 > adultsCount) {
//     return false;
//   }

//   if (babiesCount > adultsCount) {
//     return false;
//   }

//   if(babiesCount && (babiesCount + childrenCount) > adultsCount * 2) {
//     return false;
//   }

//   const total = adultsCount + childrenCount + babiesCount;

//   return total <= 8 || babiesCount > 0 && total <= 9;
// }
 

// function recommendRoom (adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if(adultsCount + childrenCount + babiesCount  <= 4) {
//     return 'small room';
//   }

//   if(adultsCount + childrenCount + babiesCount <= 5 && babiesCount) {
//     return 'small room + extra bed';
//   }

//   if(adultsCount + childrenCount + babiesCount <= 8) {
//     return 'big room';
//   }

//     return 'big room + extra bed';
  
// }



// function recommendRoom (adultsCount = 0, childrenCount = 0, babiesCount = 0) {
//   if (adultsCount + childrenCount + babiesCount <= 4) {
//    return 'small room';
//   } 
//   if (adultsCount + childrenCount + babiesCount === 5 && babiesCount > 0) {
//    return 'small room + extra bed';
//   } 
//   if (adultsCount + childrenCount + babiesCount <= 8) {
//    return 'big room';
//   }
//   return 'big room + extra bed';
// }

// const firstName1 = 'Pasha';
// const lastName1 = 'Bourdeiniy';
// const age1 = 36;

// const firstName2 = 'John';
// const lastName2 = 'Galt';
// const age2 = 25;

// printInfo(firstName1, lastName1, age1);
// printInfo(firstName2, lastName2, age2);

// function printInfo(firstName, lastName, age) {
//   console.log(
//     `User ${firstName} ${lastName} is ${age}`
//   );
// }

//  const user1 = {
//   firstName: 'Pasha',
//   lastName: 'Bourdeiniy',
//   age: 36
//  };

//  const user2 = {
//   firstName: 'John',
//   lastName: 'Galt',
//   age: 25
//  };

//  printUserInfo(user1);
//  printUserInfo(user2);

//  function printUserInfo(user) {
//   console.log(
//     `User ${user.firstName} ${user.lastName} is ${user.age}`
//   );
//  }

//  console.log(
//   user1
//  );

//  const age = 20;

// const prefix = 'last';

//  const user = {
//   [prefix + 'name']: 'Smith',
//   ['a' + 'g' + 'e']: 40,
//   1.5: 40
   
   
//  }

//  console.log(user);

// const warehouse = {
//   memory: 15, 
//   processors: 10, 
//   displays: 20
// };

// const age = 38;

// const user = {
//     firstName: 'Pasha',
//     'lastName': 'Bourdeiniy',
//     ['a' + 'g' + 'e']: 36,
//     1: 15,
//     // age: age,
//     // age,
//    };

//    user.age = 40;
//    user['age'] = 45;

//    user.city = 'Odessa';

//   //  delete user.age;
//   //  delete user['age'];

//    console.log(
//     user.firstName,
//     user.lastName,
//     user['age'],
//     user[1],
//     user.age,
     
//    );

//    console.log(user);

// const age = 40;

//  const user = {
//   'first%%Name': 'Pasha',
//   "lastName": 'Bourdeiniy',
//   fullName: 'Pasha Bourdeiniy',
//   17: 25,
//   ['a' + 'g' + 'e']: 36,
//   1.5: 88,
//   age: age,
//   age
//  };

//  user.education = 'ONEU'
//  user['education2'] = 'ONAY'

//  delete user.education2 
//  delete user['education']

//  console.log(
//   user.lastName,
//   user.fullName,
//   user['first' + '%%Name5'],
//   user[5 + 12],
//   user['age'],
//   user.age,
//   user[1.5],
//   user
// );

// function addFullName(user) {
//   user.fullName = `${user.firstName} ${user.lastName}`;
   
// }

// function removeFemaleAges(people) {
//  for(const ch of people) {
//   if(ch.gender === 'female') {
//     delete ch.age;
//   }
  
//  }

//  console.log(people); 
  
// }

// const people1 = [{
//   name: 'Emma', gender: 'female', age: 19 
// }];


// removeFemaleAges(people1)


// function getOutdated(robots, newVersion) {
//   let result = [];

//   for (const ch of robots) {
//     if(ch.coreVersion < newVersion) {
//      result.push(robots.indexOf(ch))
//     }
//   }

//   return result;
// }

// const robots1 = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];

// console.log(
//   getOutdated(robots1, 14)
// );

// const age = 40

// const user = {
//   'first %Name': 'Misha',
//   "lastName": 'Hrynko',
//   fullName: 'Misha Hrynko',
//   ['a' + 'g' + 'e']: 39,
//   // '1': 123,
//   age: age,
//   age

// };

// user.education = 'ONEU';
// user['de' + 'gree'] = 'magistr';

// delete user.education;
// delete user['degree'];

// console.log(
//   user.fullName,
//   user.lastName,
//   user['age'],
//   user.age,
//   user['1'],
//   user.education,
//   user.degree
// );

// console.log(user);

// const addFullName = (user) => {
//  user.fullName = `${user.firstName} ${lastName}`;
// };

// function addFullName(user) {
//   user.fullName = `${user.firstName} ${user.lastName}`;
// }

// function addFullName(user){
//   user.fullName = `${user.firstName} ${lastName}`;
//  }

// debugger;

// function removeFemaleAges(people) {
//   for (let i = 0; i < people.length; i++) {
//    people[i].gender === 'female' && delete people[i].age; 
//   }
//   return people;
// }

// const people1 = [
//   { name: 'Emma', gender: 'female', age: 19 },
//   { name: 'Avram', gender: 'male', age: 41 },
// ];


// function getOutdated(robots, newVersion) {
//   let result = [];
//   for (let i = 0; i < robots.length; i++) {
//    if (robots[i].coreVersion < newVersion) {
//     result.push(i);
//    }
//   }
//   return result;
// }

// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];


// console.log(
//   getOutdated(robots, 18)
// );

// function removeFemaleAges(people) {
//   for(const ch of people) {
//   if(ch.gender === 'female') {
//     delete ch.age;
//   }
//  }
// }

// const user = {
//   firstName: 'Pasha',
//   age: 36,
//   isMarried: true,
// };

// const key = 'isMarried';

// if(user[key] !== undefined) {
//   console.log('property exists');
// }

// if (key in user) {
//   console.log('property exists');
// }

// user[key] === false || user[key]

// const x = 'name';

// console.log(
//   Object.is(x, 'name')
// );

// if (Object.hasOwn(user, key)) {
//   console.log('property exists');
// }

// if (user.hasOwnProperty('aget')) {
//   console.log('property exists');
// }

// if (user[key] !== undefined) {
//     console.log('property exists');
//   }

// if(user.firstNam) {
//   console.log('property exists');
// }

// const text = 'busenya is good dog';

// function abbr(words) {
//   let bigWords = words.toUpperCase();
//   let split = bigWords.split(' ');
//   let result = []; 
  
//   for (let i = 0; i < split.length; i++) {
//     result.push(split[i][0]); 
//   } 
//    return result.join('');
// }

//  console.log(
//   abbr(text)
//  );

// const user = {
//   firstName: 'Pasha',
//   age: 36,
//   isMarried: undefined,
// };

// const key = 'age';

// if (user[key] !== undefined) {
//   console.log('property exists');
// }

// if (key in user) {
//   console.log('property exists');
// }

// if (Object.hasOwn(user, key)) {
//   console.log('property exists');
// }

// if (user.hasOwnProperty(key)) {
//   console.log('property exists');
// }

// const user = {
//   firstName: 'Pasha',
//   age: 36,
//   isMarried: false,
// };

// const key = 'age';

// if(user.hasOwnProperty('age')) {
//   console.log('property exists');
// }

// debugger;

// function restoreNames(users) {
   
  
//   for (const ch of users) {
//     if((!ch.firstName)) {
//       ch.firstName = '';
//        for (const char of ch.fullName) {
//         if(char === ' ') {
//           break;
//         }
//         ch.firstName += char;

//        }
       
//     }
//   }
   
 
// }

// const users = [
//   {
//     firstName: undefined,
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
// ];

// console.log(
//   restoreNames(users)
// );


// function restoreNames(users) {
//   let result = [];
  
//   for (const ch of users) {
//     if((!ch.firstName)) {
//       result = ch.fullName.split(' ');
//       ch.firstName = result[0]
//     }
//   }
// }

// debugger;

// function countBoxes(boxes) {
//   let object = {};

//   for (const ch of boxes) {
//     if(object[ch]) {
//      object[ch] += 1
//      continue;
//     } 
//      object[ch] = 1;
//     }
  


//   return object
// }



// function countBoxes(boxes) {
//   let object = {};

//   for (const ch of boxes) {
//     if(!Object.hasOwn(object, ch)) {
//       object[ch] = 0;
//     }
//     object[ch]++;
//   }
  

//   return object;
// }

// console.log(
//   countBoxes('abcdd')
// );

// debugger;

// const user = {
//     firstName: 'Misha',
//     age: 36,
//     isMarried: '',
//   };
  
//   const key = 'isMarried';

  // if (user[key]) {
  //   console.log('property exists');
  // }
  
  // if (user[key] !== undefined) {
  //   console.log('property exists');
  // }

  // if (key in user) {
  //   console.log('property exists');
  // }

  // if (Object.hasOwn(user, 'aged')) {
  //   console.log('property exists');
  // }

  // if (user.hasOwnProperty(key)) {
  //     console.log('property exists');
  //   }


  // const numb = 78912;
  // console.log(
  //   numb.toString(),
  //   String(numb),
  //   numb,
  // );

   
// debugger;

// function countBoxes(values) {
//   const object = {};

//   for (const ch of values) {
//     if(!object[ch]) {
//       object[ch] = 0;
//     } 

//     object[ch] ++;
//   }
//   return object;
// }

// console.log(
//   countBoxes('abcdd')
// );


// function countBoxes(values) {
//   const object = {};

//   for (const ch of values) {
//     if(object[ch]) {
//       object[ch]++
//       continue;
//     }
//     object[ch] = 1;
// }
// return object;
// }

// console.log(
//   countBoxes('abcdd')
// );


// function restoreNames(users) {
//   for (const ch of users) {
//     if (ch.firstName) {
//       continue;
//     }

//     let split = ch.fullName.split(' ');
//     ch.firstName = split[0];
  
// }
// return users;
// }
 

// const users = [
//   {
//     firstName: undefined,
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
// ];

// console.log(
// restoreNames(users)
// );

// function countBoxes(boxes) {
//   const object = {};

//   for (const ch of boxes) {
//     if (!Object.hasOwn(object, ch)) {
//       object[ch] = 0;
//     }

//     object[ch]++;
//   }

//   return object;
// };

// console.log(
//   countBoxes('dddff')
// );



// const user = {
//     firstName: 'Misha',
//     age: 36,
//     isMarried: true,
//   };

//   user.x = 10;
//   user['0'] = 5;



//  for (const entry of Object.entries(user)) {
//   console.log(entry, user[entry[0]]);
//  }

 

// for (const value of Object.values(user)) {
//   console.log(value);
// }

// console.log(Object.values(user));


// for (const entry of Object.entries(user)) {
//   console.log(entry[0], entry[1]);
// }

// console.log(Object.entries(user));




 
// debugger;
 
// function countBoxes(boxes) {
//   let object = {};

//   for (const ch of boxes) {
//     if(!object[ch]) {
//       object[ch] = 0;
//     }
//     object[ch]++;
//   }
//   return object;
// }

// console.log(
//     countBoxes('dddff')
//   ); 

// function restoreNames(users) {
//   for (const ch of users) {
//     if(!ch.firstName) {
//       ch.firstName = ch.fullName.split(' ')[0];
//     }
//   }
//   return users;
// }

// const users = [
//     {
//       firstName: undefined,
//       lastName: 'Holy',
//       fullName: 'Jack Holy',
//     },
//     {
//       lastName: 'Adams',
//       fullName: 'Mike Adams',
//     },
//   ];
  
//   console.log(
//   restoreNames(users)
//   );



// function countBoxes(boxes) {
//   let object = {};

//   for (const box of boxes) {
//     if (!object[box]) {
//       object[box] = 0;
//     }
//     object[box]++
//   }
//   return object;
// }

// console.log(
//       countBoxes('dddff')
//     );
// 
// 
// function restoreNames(users) {
//   for (const user of users) {
//   if(!user.firstName) {
//     user.firstName = '';
//     for (const ch of user.fullName) {
//       if (ch === ' ') {
//         break;
//       }
//       user.firstName += ch;
//     }
//   }
// }
// return users;
// }

// const users = [
//       {
//         firstName: undefined,
//         lastName: 'Holy',
//         fullName: 'Jack Holy',
//       },
//       {
//         lastName: 'Adams',
//         fullName: 'Mike Adams',
//       },
//     ];
    
//     console.log(
//     restoreNames(users)
//     );
// 
// 
// 
// const user = {
//     firstName: 'Misha',
//     age: 36,
//     isMarried: true,
//   };

//   console.log(
//         user
//       );

//   const key = 'firstNamer';

  // if(user.hasOwnProperty(key)) {
  //   console.log('property exists');
  // }

 

// function printInfo(users) {
//   console.log(
//     `${users.firstName} is ${users.age}`
//   );
// }

// printInfo(user);

// debugger;


// function getRobotSchema(robot) {
//   let scheme = {};
//   for (const key of Object.keys(robot)) {
//       scheme[key] = typeof robot[key];
//   }
//   return scheme;
// }

// function getRobotSchema(robot) {
//   let scheme = {};
//   for (const entry of Object.entries(robot)) {
//       scheme[entry[0]] = typeof entry[1];
//   }
//   return scheme;
// }


// const robot = {
//   version: 16,
//   name: 'Cleaner 3000',
//   released: true,
//   author: { name: 'Vlad' },
// };


// console.log(
//   getRobotSchema(robot)
// );

// debugger;

// const compareRobots = (robot1, robot2) => {
//    let entriesRobot1 = Object.entries(robot1);
//    let entriesRobot2 = Object.entries(robot2);
//    let count = 0;

//    let check = entriesRobot1.length <= entriesRobot2.length;

//     if (check) {
//      count = entriesRobot1.length ;
//        } else {
//         count = entriesRobot2.length;
//        }

//        if((entriesRobot1.length !== entriesRobot2.length)) {
//         return false;
//        }

//    for (let i = 1; i < count; i++) {
     
//     if (entriesRobot1[i][0] !== entriesRobot2[i][0] || entriesRobot1[i][1] !== entriesRobot2[i][1]) {
//       return false;
//     }
//    }
//    return true;
// };
// debugger;
// const compareRobots = (robot1, robot2) => {

//       if (Object.entries(robot1).length !== Object.entries(robot2).length) {
//        return false;
//       }

//   for (const key in robot1) {
//     if (key === 'serialNo') {
//       continue;
//     }
     

//    if (robot1[key] !== robot2[key] || !(key in robot2)) {
//      return false;
//    }
//   }
//   return true;
// };

// const charlie = { serialNo: 1, chipVer: 12 };

// const lordy = { serialNo: 2, chipVer: 12 };
 
// // compareRobots(charlie, lordy) // true
 
// const paul = { serialNo: 3, chipVer: 15 };
// // compareRobots(paul, charlie); // false

// const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
// // compareRobots(mike, charlie); // false

// const max = { serialNo: 5, engineVer: 12 };
// // compareRobots(max, charlie); // false

// const steve = { serialNo: 6 };
// // compareRobots(steve, charlie); // false

// console.log(
//   compareRobots(paul, charlie)
// );


// if((!entriesRobot1[1] || !entriesRobot2[1]) || (entriesRobot1.length !== entriesRobot2.length)) {
//   return false;
//  }


// function getTriathlonDistance(distance) {
//    if (distance === 0) {
//     return 'Starting Line... Good Luck!';
//    }
   
//    const total = 226.31;
//    const result = total - distance;

//    let message = {};

//    if (distance < 3.86) {
//     message.swim = `${result.toFixed(2)} to go!`;
//     return message;
//    }

//    if (distance < 184.11) {
//     message.bike = `${result.toFixed(2)} to go!`;
//     return message;
//    }
 
//    if (distance < 226.31) {
//     message.run = `${result.toFixed(2)} to go!`;
//     return message;
//    }

//     return 'You\'re done! Stop running!';

// }

// if (distance >= 226.31) {
//   return 'You\'re done! Stop running!';
//   return message;



// function getTriathlonDistance(distance) {
//   if (distance === 0) {
//     return 'Starting Line... Good Luck!';
//    }
   
//    const total = 226.31;
//    const result = total - distance;

//    let message = {};

//    if (distance < 3.86) {
//     message.swim = `${result.toFixed(2)} to go!`;
//     return message;
//    }

//    if (distance < 184.11) {
//     message.bike = `${result.toFixed(2)} to go!`;
//     return message;
//    }
 
//    if (distance < 226.31) {
//     message.run = `${result.toFixed(2)} to go!`;
//     return message;
//    }

//     return 'You\'re done! Stop running!';
// }


// console.log(
//   getTriathlonDistance(200.31)
// );


// function getTriathlonDistance(distance) {
//   if (distance === 0) {
//    return 'Starting Line... Good Luck!';
//   }

//   const swim = 3.86;
//   const bike = 180.25;
//   const run = 42.2;
  
//   const totalDistance = swim + bike + run;
//   if (distance >= totalDistance) {
//     return 'You\'re done! Stop running!';
//    }
//   const diff = (totalDistance - distance).toFixed(2);

//   let message = `${diff} to go`;

//   if (distance < swim) {
   
//    return {swim: message};
//   }

//   if (distance < swim + bike) {
//     return {bike: message};
//   }

//   if (distance < totalDistance) {
//     return {run: message};
//     }
//   }
 

  //  const user = {
  //   firstName: 'Misha',
  //   age: 36,
  //   'isMarried': true,
  // };

  // // const key = 'firstName';
  // const x = 'isMarried';

  // user.x = 10;
   

    // for (const key in user) {
    //   console.log(key, user[key]);
    // }

    // console.log(Object.keys(user));

    // for (const key of Object.keys(user)) {
    //   console.log(key, user[key]);
    // }

    // console.log(Object.keys(user));
     
  

    //  for (const value of Object.values(user)) {
    //   console.log(value);
    // }

    // console.log(Object.values(user))

    // for (const entry of Object.entries(user)) {
    //   console.log(entry);
    // }

    // console.log(Object.entries(user));
   


  // function getInfo(user) {
  //   console.log(
  //     `${user.firstName} is ${user.age} years old`
  //   );
  // }

  // getInfo(user1);

   
  //     const people = [
  //   { name: 'Emma', gender: 'female', age: 19 },
  //   { name: 'Avram', gender: 'male', age: 41 },
  // ];

  //    function removeFemaleAges(people) {
  //     for (const object of people) {
  //       if(object.gender === 'female') {
  //         delete object.age;
  //       }
  //     }
  //     return people
  //    }

  //    console.log(
  //     removeFemaleAges(people)
  //    );


// const robots = [
//   { coreVersion: 9 },
//   { coreVersion: 13 },
//   { coreVersion: 16 },
//   { coreVersion: 9 },
//   { coreVersion: 14 },
// ];

//   function getOutdated(robots, newVersion) {
//    let result = [];

//    for (const object of robots) {
//     if(object.coreVersion < newVersion) {
//       result.push(robots.indexOf(object));
//     }
//    }

//    return result;
//   };

//   console.log(
//   getOutdated(robots, 14)  
//   );

// const users = [
//   {
//     firstName: undefined,
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
// ];


// function restoreNames(users) {
//   for (const object of users) {
//     if(!object.firstName) {
//       object.firstName = object.fullName.split(' ')[0];
//     }
//   }
//   return users;
// }

// console.log(
//   restoreNames(users)
// );


// function countBoxes(boxes) {
//   let report = {};
//   for (const box of boxes) {
//     if (!report[box]) {
//       report[box] = 1
//       continue;
//     }
//     report[box]++
//   }
//    return report;
// }


// console.log(countBoxes('aaaaavvvg'))


// const robot = {
//   version: 16,
//   name: 'Cleaner 3000',
//   released: true,
//   author: { name: 'Vlad' },
// };


// function getRobotSchema(robot) {
// let scheme = {};

// for (const key in robot) {
//   scheme[key] = typeof robot[key]
// }
// return scheme;
// }

// console.log(
//   getRobotSchema(robot)
// );

// debugger;

// const compareRobots = (robot1, robot2) => {
//   if (Object.entries(robot1).length !== Object.entries(robot2).length) {
//       return false;
//   }

// for (const key in robot1) {
//   if(key === 'serialNo') {
//     continue;
//   }
//   if (robot1[key] !== robot2[key] || (!(key in robot2))) {
//    return false;
//   }
// }
// return true;
// };



// const charlie = { serialNo: 1, chipVer: 12 };

// const lordy = { serialNo: 2, chipVer: 12 };
// // compareRobots(charlie, lordy); // true

// const paul = { serialNo: 3, chipVer: 15 };
// // compareRobots(paul, charlie); // false

// const mike = { serialNo: 4, chipVer: 12, wheels: 1 };
// // compareRobots(mike, charlie); // false

// const max = { serialNo: 5, engineVer: 12 };
// // compareRobots(max, charlie); // false

// const steve = { serialNo: 6 };
// // compareRobots(steve, charlie);

// console.log(
//   compareRobots(charlie, lordy)
// );

/*

// const compareRobots = (robot1, robot2) => {
//    let entriesRobot1 = Object.entries(robot1);
//    let entriesRobot2 = Object.entries(robot2);
//    let count = 0;

//    let check = entriesRobot1.length <= entriesRobot2.length;

//     if (check) {
//      count = entriesRobot1.length ;
//        } else {
//         count = entriesRobot2.length;
//        }

//        if((entriesRobot1.length !== entriesRobot2.length)) {
//         return false;
//        }

//    for (let i = 1; i < count; i++) {
     
//     if (entriesRobot1[i][0] !== entriesRobot2[i][0] || entriesRobot1[i][1] !== entriesRobot2[i][1]) {
//       return false;
//     }
//    }
//    return true;
// };

*/

// function getTriathlonDistance(distance) {
//   if (distance === 0) {
//     return 'Starting Line... Good Luck!';
//   }


//   const swim = 3.86;
//   const bike = 180.25;
//   const run = 42.2;

//   const totalDistance = swim + bike + run;

//   if (distance >= totalDistance) {
//     return 'You\'re done! Stop running!';
//   }

//   const diff = totalDistance - distance;

//   const message = `${diff.toFixed(2)} to go!`

//   if (distance < swim) {
//     return {swim: message};
//   }

//   if (distance < bike + swim) {
//     return {bike: message};
//   }

//   if (distance < totalDistance) {
//     return {run: message};
//   }
// }

// console.log(
//   getTriathlonDistance(2.05)
// );




// function getTriathlonDistance(distance) {
//   if (distance === 0) {
//    return 'Starting Line... Good Luck!';
//   }

//   const swim = 3.86;
//   const bike = 180.25;
//   const run = 42.2;
  
//   const totalDistance = swim + bike + run;
//   if (distance >= totalDistance) {
//     return 'You\'re done! Stop running!';
//    }
//   const diff = (totalDistance - distance).toFixed(2);

//   let message = `${diff} to go!`;

//   if (distance < swim) {
   
//    return {swim: message};
//   }

//   if (distance < swim + bike) {
//     return {bike: message};
//   }

//   if (distance < totalDistance) {
//     return {run: message};
//     }
//   }


  // const person = {
  // firstName: "John",
  // lastName : "Doe",
  // id       : 5566,
  // fullName : function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
  //  };

  //  console.log(person.fullName());


//  const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };


// const trees = ["redwood", "bay", "cedar", "oak", "maple"];
// trees[3] = undefined;
 

// console.log(trees)
 
// const array = [2, 5, 10]; 

// const object = {
//   cat: 'bad',
//   dog: 'good'
// };



//  console.log(object['bad'] in object);

// const index = array.indexOf(5);
  // only splice array when item is found
  
  
//   array.splice(1, 1); // 2nd parameter means remove one item only
 

 
// console.log(array);

// const trees = ["redwood", "bay", "cedar", "oak", "maple"];


// const text = 'Mate academy';

// text.slice(2);

// console.log(trees.slice(-4));

  

// delete car['make'];

//  if (car.make === undefined) {
//   car.make = 'Suzuki';
//  }

//  console.log(car.make);

// const myCar = { make: "Honda", model: "Accord", year: 1998 };

// // delete myCar.make;

// console.log(2 in myCar);

// const empties = new Array(3).fill(undefined);

// console.log(empties);

// console.log(2 in empties); // returns true

 
//  const fruits = ["Apple", "Banana", "Watermelon", "Orange"];

// console.log(fruits.hasOwnProperty(3)); // true ('Orange')

// console.log(fruits.hasOwnProperty(4))


// const foo = {
//   // hasOwnProperty() {
//   //   return false;
//   // },
//   bar: "Here be dragons",
// };

// console.log(foo.hasOwnProperty("bar"));

//  const foo = Object.create(null);
// foo.prop = "exists";
// // foo.hasOwnProperty("prop")

// console.log(foo)
// debugger
// function reverse(words) {
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     result.push(words.slice(i) + words.slice(0, i));
//   }
//   return result;
// }

// console.log(
//   reverse('Hello')
// );

// console.log(
  
// )



  // for (let i = 1; i < 11; i++) {
  //   console.log(i);
  // }

// let sum = 0;
// let prev = 1;

   
// while (prev <= 100) {
//   sum += prev;
//   prev++;
// }

// console.log(sum);


// 

// function sumTo100() {
//    let sum = 0;
   

//    for (let i = 0; i <= 100; i++) {
//      sum += i;
//    }
//    return sum
// }

// console.log(sumTo100());


// const fruits = ["apple", "banana", "cherry", "mango"];

// for (const ch of fruits) {
//   console.log(ch.toUpperCase());
// }


//  function loops() {
//   let result = ''
//  for (let i = 0; result.length < 5; i++) {
//   result += '*'
//   console.log(result);
//  }
//  }

//  console.log(loops());

// const transactions = [500, -200, 300, -100, 400, -50];

// function valuesCount(array) {
// let balance = 0;
// let income = 0;
// let expenses = 0;

// for (const value of array) {
//   balance += value

//   if (value > 0) {
//     income += value;
//   }

//   if (value < 0) {
//     expenses -= value;
//   }
// }

// return {balance, income, expenses};
// }

// console.log(valuesCount(transactions));


// const library = {
//   books: {
//   book1: {
//     title: 'Good',
//     author: 'Twain'
//   },
//   book2: {
//     title: 'Bad',
//     author: 'Swift'
//   }
//   }
// };
 
// console.log(
//   library.books.book2
// )

// let car = {
//   brand: "Toyota",   // comma here
//   year: 2024         // no trailing comma required, but allowed
// };

// car.rename = function(newBrand) {
//   this.brand = newBrand;
//   console.log(this.brand)
// }

// car.rename('Honda');


// let phone = {
//   brand: 'Samsung',
//   model: 'Galaxy S24',
//   battery: 100,
// };

// phone.call = function() {
//   if(this.battery > 0) {
//     console.log('Calling...');
//   this.battery -= 10;
//   console.log(`Battery: ${this.battery}%`);
//   } else {
//   console.log('Battery empty. Please charge!');
//   }
// };


 
// phone.charge = function() {
//   this.battery = Math.min(this.battery + 10, 100);
//   console.log(`Battery: ${this.battery}%`);
// };


 
 

// const array = [2, 5, 3];

// console.log(
//   Math.min(2,5,1)
// );

console.log('hello')


/* Project Standards:
  - Logging standards
  - Naming standards
     function, method, variable => CAMEL case
     class => PASKAL case
     folder, file => KEBAB case
     css => SNAKE case
  - Error handling
*/

/* Api turlari:
  Traditional Api (misol uchun htmlning form POST)
  Rest Api
  GraphQL Api
  ...
*/

/* Frontend Development
  Traditional FD  => BSSR (Admin pageni shu orqai quramiz)=> EJS
  Modern FD       => SPA(Users' pageni shu usulda quramiz.)  => REACT
  
*/

/* Cookies:
   request join
   self destroy
*/

/* Validations:
   Frontend validation
   Backend validation
   Database validation
*/
// // O-TASK

const hasProperty = (obj: { [key: string]: string }, str: string) => {
  for (const key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
};

const result1 = hasProperty({ name: "BMW", model: "M3" }, "model");
console.log("result1 => ", result1);
const result2 = hasProperty({ name: "BMW", model: "M3" }, "year");
console.log("result2 => ", result2);

// // P-TASK
// const objectToArray = (obj: { [key: string]: number }) => {
//   return Object.entries(obj);
// };

// const result = objectToArray({ a: 10, b: 20 });
// console.log("result => ", result);
// // O-TASK
// const calculateSumOfNumbers = (arr: any[]) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       count += arr[i];
//     }
//   }
//   return count;
// };

// const result = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log("result => ", result);
// // N-TASK
// const palindromCheck = (str: string) => {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr ? true : false;
// };
// const result1 = palindromCheck("dad");
// console.log("result1 => ", result1);
// const result2 = palindromCheck("son");
// console.log("result2 => ", result2);

// // M-TASK
// const getSquareNumbers = (arr: number[]) => {
//   const res = arr.map((num) => {
//     return { number: num, square: num * num };
//   });
//   return res;
// };

// const res = getSquareNumbers([1, 2, 3]);
// console.log("result =>", res);

// // L-TASK
// // solution 1
// const reverseSentence = (str: string) => {
//   let reversedSentence = "";
//   const res = str.split(" ");
//   for (let i = 0; i < res.length; i++) {
//     const reversedWord = res[i].split("").reverse().join("");
//     reversedSentence += reversedWord + " ";
//   }
//   return reversedSentence;
// };

// const result1 = reverseSentence("we like coding!");
// console.log("result1 =>", result1);

// // solution 2
// const reverseSentence2 = (str: string) => {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// };

// const result2 = reverseSentence("we like coding!");
// console.log("result2 =>", result2);

// // K-TASK
// const countVowels = (str: string) => {
//   let count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   str = str.toLowerCase();
//   const charArray = str.split("");
//   for (let i = 0; i < charArray.length; i++) {
//     if (vowels.includes(charArray[i])) {
//       count++;
//     }
//   }
//   return count;
// };
// const result = countVowels("MuhammadAli");
// console.log(result);
// // J-TASK
// const findLongestWord = (str: string) => {
//   const words = str.split(" ");
//   let result = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > result.length) {
//       result = words[i];
//     }
//   }
//   return result;
// };
// const res = findLongestWord("I am from Uzbekistan");
// console.log(res);

// // I-TASK
// const getDigits = (str: string) => {
//   let result: string = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(+str[i])) {
//       result += str[i];
//     }
//   }
//   return result;
// };

// const res = getDigits("m14i1t");
// console.log("res:", res);

// // H-TASK
// const getPositive = (arr: number[]) => {
//   let res: string = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       res += arr[i];
//     }
//   }
//   return res;
// };

// const result = getPositive([1, 2, 3, 4, 0, -1, -4, 6, -8]);
// console.log(result);

// // Sezer challenge
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;
// let message = "hello, how are you doing, my general?";
// const decodeMessage = (message: string, secret: number) => {
//   const result = message.replace(/[a-z]/gi, (char) => {
//     const index = alphabet.indexOf(char.toLowerCase());
//     const newIndex = (index + secret + alphabet.length) % alphabet.length;
//     const decodedChar = alphabet[newIndex];
//     return decodedChar;
//   });
//   return result;
// };
// const secret_msg = decodeMessage(message, code);
// console.log("Secret Message =>", secret_msg);

// setTimeout(() => {
//   code *= -1;
//   const message_encoded = decodeMessage(secret_msg, code);
//   console.log("Original Message => ", message_encoded);
// }, 5000);

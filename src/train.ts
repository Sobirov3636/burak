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
  Traditional Api
  Rest Api
  GraphQL Api
  ...
*/

// I-TASK
const getDigits = (str: string) => {
  let result: string = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      result += str[i];
    }
  }
  return result;
};

const res = getDigits("m14i1t");
console.log("res:", res);
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

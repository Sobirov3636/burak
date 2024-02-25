// Sezer challenge
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let code = 2;
let message = "hello, how are you doing, my general?";
const decodeMessage = (message: string, secret: number) => {
  const result = message.replace(/[a-z]/gi, (char) => {
    const index = alphabet.indexOf(char.toLowerCase());
    const newIndex = (index + secret + alphabet.length) % alphabet.length;
    const decodedChar = alphabet[newIndex];
    return decodedChar;
  });
  return result;
};
const secret_msg = decodeMessage(message, code);
console.log("Secret Message =>", secret_msg);

setTimeout(() => {
  code *= -1;
  const message_encoded = decodeMessage(secret_msg, code);
  console.log("Original Message => ", message_encoded);
}, 5000);

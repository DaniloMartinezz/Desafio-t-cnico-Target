let string = ("Digite uma string para inverter: ");
let chars = string.split("");
for (let i = 0; i < chars.length / 2; i++) {
  let temp = chars[i];
  chars[i] = chars[chars.length - 1 - i];
  chars[chars.length - 1 - i] = temp;
}
let invertedString = chars.join("");
console.log(invertedString);
const textObj = new String('Hello World!'); // object 형태
const text = 'Hello World!';

console.log(textObj); // 객체
console.log(text); // 문자열

console.log(text.length); // 12

console.log(text[0]); // H
console.log(text[1]); // e
console.log(text[2]); // l

console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); // l

console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

console.log(text.includes('h')); // false -> 대소문자 구별
console.log(text.includes('H')); // true
console.log(text.includes('tx')); // false

console.log(text.startsWith('He')); // true
console.log(text.endsWith('D!')); // false

// 대문자로 변경
console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

console.log(text.substring(0, 2)); // 0부터 시작해서 2 이전까지 가져옴 -> He
console.log(text.slice(2)); // 2번 위치까지 잘라내기 -> llo World!
console.log(text.slice(-2)); // 뒤에서부터 2번 위치까지 잘라내기 -> d!

// 공백 제거
const space = '                          space';
console.log(space);
console.log(space.trim());

// * split!!!!
const longText = 'Get to the point'; // space 별로 문자를 끊어주고 싶다면? 즉, 4덩어리로 끊어주고 싶다면?!
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // 끊어진 거 중에 2개만 받고 싶다면 -> [ 'Get', 'to' ]
const longText2 = 'Hana eat this food, apple'; //
console.log(longText2.split(',')); // [ 'Hana eat this food', ' apple' ]

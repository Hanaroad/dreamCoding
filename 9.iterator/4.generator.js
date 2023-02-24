// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  // function에 *을 붙이는 순간 Generator가 만들어짐
  for (let i = 0; i < 10; i++) {
    console.log(i); // 0
    // return은 바로 리턴하지만
    // yield는 사용자가 원하는 때까지 기다렸다가 그다음 달라고 할때까지 하나하나씩 리턴함
    yield i ** 2;
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

// multiple.return(); // 끝낼때 사용
multiple.throw('Error!');
// * 에러를 잡으려면
// function* multipleGenerator() {
//   try {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);
//       yield i ** 2;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

next = multiple.next();
console.log(next.value, next.done); // undefined true

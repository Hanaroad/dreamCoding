// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 예를 들어 내가 만약 숫자 5를 전달하고, 순회하는 숫자를 다 출력하고 싶음
// 또 최대값 5를 주어지면서, 순회하는 숫자의 두배값을 다 출력하고 싶음
// 순회는 하지만 순회를 하면서 하고 싶은 action이 달라짐

// #HINT function iterate(maxNum, callback)

const print = (a) => console.log(a);
const printDouble = (a) => console.log(a * 2);

function iterate(a, action) {
  for (let i = 0; i < a; i++) {
    action(i);
  }
}

iterate(5, print);
iterate(5, printDouble);

// -엘리 ANSWER
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}

iterate(3, (num) => console.log(num));
iterate(3, doubleAndLog); // iterate(3, (num) => console.log(num * 2));

// **콜백함수 실제 사용 예시
setTimeout(() => {
  console.log('3초 뒤 이 함수가 실행됨!');
}, 3000);

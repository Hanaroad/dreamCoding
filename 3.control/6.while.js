// while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('still alive!');
  if (i === 10) {
    break;
  }
  i++;
}

do {
  console.log('do-while still alive!');
} while (isActive);

// * 즉, 조건이 맞을때만 실행하고 싶다면 WHILE 을
// * 꼭 한번은 무조건 실행해야한다면 DO-WHILE 을 사용해라

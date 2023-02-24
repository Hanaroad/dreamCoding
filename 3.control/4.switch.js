// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 사용
let day = 10; // 0:월요일, 1:화요일, 2:수요일... 6:일요일
let dayName;
if (day === 0) {
  dayName = 'Monday';
} else if (day === 1) {
  dayName = 'Tuesday';
} else if (day === 2) {
  dayName = 'Wednesday';
} else if (day === 3) {
  dayName = 'Thursday';
} else if (day === 4) {
  dayName = 'Friday';
} else if (day === 5) {
  dayName = 'Saturday';
} else {
  dayName = 'Sunday';
}
console.log(dayName);
// console.clear();

// 코드가 너무 길어서 이럴때 Switch문을 사용함
// # break를 꼭 걸어줘야함
// # break를 걸지않으면 일요일이 출력됨.
// # break를 걸지않으면 가장 마지막에 있는 것이 실행되게 됨.
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당하는 요일이 없음');
}
console.log(dayName);

// * break를 사용하지 않아도 되는 경우
let condition = 'okay'; // okay, good -> 좋음! \ bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음';
    break;
  case 'bad':
    text = '나쁨';
    break;
}
console.log(text);

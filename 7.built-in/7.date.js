// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 2023-02-07T02:19:08.260Z
console.log(new Date('Jun 5, 2023')); // 2023-06-04T15:00:00.000Z
console.log(new Date('2023-05-17T03:24:00')); // 2023-05-16T18:24:00.000Z

console.log(Date.now()); // 1675736461137
console.log(Date.parse('2023-05-17T03:24:00')); // 1684261440000

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0이 1월임.
console.log(now.getFullYear());
console.log(now.getDate()); // 0부터 인덱스를 받아옴
console.log(now.getMonth()); // 0부터 인덱스를 받아옴
console.log(now.getDay());
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));

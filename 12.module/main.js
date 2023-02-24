import increase1 from './counter.js';
// # import 해올 때 원하는 이름으로 할 수 있음
import { decrease as decrease1, getCount, count } from './counter.js';
// import { decrease1 } from './counter.js';
// # default로 설정해 놓지 않으면 원하는 이름으로 가져올 수 없음
// # 원하는 이름으로 가져오려면 as 하고 뒤에 원하는 이름 사용
import * as counter from './counter.js';
// ! 모든 것들을 counter 라는 이름으로 가져옴
// ! counter.increase(); 이런 식으로 사용함

// console.log(count);
increase1();
increase1();
increase1();
// console.log(count);
// count = -10;
// console.log(count);

decrease1();

const count = getCount();
console.log(count);

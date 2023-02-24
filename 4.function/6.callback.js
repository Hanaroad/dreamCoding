// 콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 안에서 필요한 순간에 호출이 나중에 됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(-1, -2, add);
calculator(2, 3, multiply);
console.clear();
////////////////////////////////////////////////////////////////////////////

function add2(c, d, ...rest) {
  let result = 0;
  for (i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function add3(g, h, ...rest3) {
  let result3 = 0;
  rest3.map((item) => {
    result3 += item;
  });
  return result3 + g + h;
}

console.log(add3(1, 2, 3, 4, 5));

/////////////////////////////////////////////////////////////////////////////

function multi2(e, f, ...rest2) {
  let result2 = e * f;
  for (i = 0; i < rest2.length; i++) {
    result2 *= rest2[i];
  }

  return result2;
}
console.log(multi2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10);

function multi3(...rest4) {
  let result4 = 1;
  rest4.map((item) => {
    result4 *= item;
  });
  return result4;
}
console.log(multi3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

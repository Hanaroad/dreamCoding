function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}

const sum = add;

// console.log(sum(1, 2));
console.log(add()); // 아무런 인자를 전하지 않는 경우: a와 b는 undefined가 뜨고 add값은 숫자가 아닌 undefined끼리 더하므로 NaN이 나옴

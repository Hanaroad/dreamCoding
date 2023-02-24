// 사용예제 1
function add(a, b) {
  console.log('function');
  return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}
let lastName = '조';
let firstName = '하나';
console.log(fullName(firstName, lastName));

let lastName2 = '황';
let firstName2 = '미영';
console.log(fullName(firstName2, lastName2));

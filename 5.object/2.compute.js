const obj = {
  name: '하나',
  age: 29,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 접근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key) {
  // return obj.key; //-이렇게하면 작동하지 않음
  return obj[key];
}

console.log(obj.name);
console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'enginner');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj);

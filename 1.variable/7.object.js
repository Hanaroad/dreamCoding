// let name = 'apple';
let color = 'red';
let display = '🍎';

let orangename = 'orange';

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: '오렌지',
  color: 'orange',
  size: 'medium',
  display: '🍊',
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.size);
console.log(orange.display);

console.clear();

// reference 혼자 만든 예시

let pineapple = {
  name: '파인애플',
};

console.log(pineapple.name);

let strawberry = pineapple;
console.log(strawberry.name);
console.log(pineapple.name);

let hana = {
  name: '하나',
};
console.log(hana);
console.log(hana.name);

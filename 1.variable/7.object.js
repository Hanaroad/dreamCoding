// let name = 'apple';
let color = 'red';
let display = 'π';

let orangename = 'orange';

let apple = {
  name: 'apple',
  color: 'red',
  display: 'π',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: 'μ€λ μ§',
  color: 'orange',
  size: 'medium',
  display: 'π',
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.size);
console.log(orange.display);

console.clear();

// reference νΌμ λ§λ  μμ

let pineapple = {
  name: 'νμΈμ ν',
};

console.log(pineapple.name);

let strawberry = pineapple;
console.log(strawberry.name);
console.log(pineapple.name);

let hana = {
  name: 'νλ',
};
console.log(hana);
console.log(hana.name);

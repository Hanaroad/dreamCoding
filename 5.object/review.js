const obj = {
  name: 'hana',
  age: '29',
  hometown: 'nonsan',
};

const obj2 = {
  name: 'miyoung',
  age: '50',
  hometown: 'jeonju',
};

function getObj(obj, key) {
  //   return obj.key; : 이렇게 쓰면 undefined나옴
  return obj[key];
}

console.log(getObj(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'hobby', 'riding');
console.log(obj);
addKey(obj2, 'hobby', 'reading');
console.log(obj2);

//!SECTION

const x = 1;
const y = 2;
const xy = { x, y };
console.log(xy);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

//!SECTION

const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();

// //!SECTION

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const strawberry = new Fruit('strawberry', '🥭');

console.log(strawberry);
console.log(strawberry.name);
console.log(strawberry.emoji);
strawberry.display();

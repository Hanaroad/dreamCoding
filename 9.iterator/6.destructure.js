// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있음
const fruits = ['🍎', '🍇', '🍊', '🍑'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, x, z = 0] = point;
// 기본값(0)을 미리 할당해 둘 수 있지만 이미 정해져있으면 우선순위가 그게 더 높아서 그 값(8)으로 출력됨
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
// console.log(array);

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const hana = { name: 'Hana', age: '29', job: 's/w engineer' };
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(hana);

const { name, age, job: occupation, pet = '멍멍이' } = hana;
// 키를 바꾸려면 : 하고 쓰면 됨
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// # Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);

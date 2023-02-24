// # 1. 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
const delFruits = new Set(fruits);
console.log(delFruits);

// # 2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
// {1, 2, 3}
const sets = new Set();
function makeSet(a, b) {
  for (const value of set1) {
    if (set2.has(value)) {
      sets.add(value);
    }
  }
  return sets;
}
console.log(makeSet(set1, set2)); // Set(3) { 1, 2, 3 }
console.log(sets); // Set(3) { 1, 2, 3 }

// ////////////////////////////!SECTION 엘리 답

// ! 1. 주어진 배열에서 중복을 제거 하라
const fruit = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruit));
console.log([...new Set(fruit)]);

// ! 2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set3 = new Set([1, 2, 3, 4, 5]);
const set4 = new Set([1, 2, 3]);

function findIntersection(set3, set4) {
  const array = [...set3].filter((item) => set4.has(item));
  return new Set(array);
  // 두 줄의 코드를 한 줄로 만들면 =>
  // return new Set([...set3].filter((item) => set4.has(item)));
}
console.log(findIntersection(set3, set4));

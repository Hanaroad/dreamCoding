// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: 'puppy' };
const obj2 = { name: 'cat', owner: 'Hana' };

if (obj1 || obj2) {
  console.log('둘다 true ~');
}

// 단축평가(조건문 밖에서 사용하는 경우)
let result = obj1 && obj2;
console.log(result); // { name: 'cat', owner: 'Hana' }
// obj1이 true이므로 obj2값을 변수 result에 할당함

result = obj1 || obj2;
console.log(result); // { name: 'puppy' }
// obj1이 true이므로 바로 obj1 값을 result에 할당함

// # 활용 ex)
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주임이 읎음');
  }
  animal.owner = '바뀐 주임!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주임이 있으');
  }
  animal.owner = '새로운 주임 연구원!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: 'puppy' }
// obj1.owner가 false였으므로 changeOwner가 실행되지 않았음
console.log(obj2); // { name: 'cat', owner: '바뀐 주임!' }
// obj2.owner는 true이므로 함수가 실행됨

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: 'puppy', owner: '새로운 주임 연구원!' }
console.log(obj2); // { name: 'cat', owner: '바뀐 주임!' }

// # 활용 ex) null 또는 undefined 인 경우를 확인 할 때 : &&
let item; //= { price: 1 };
const price = item && item.price; // item이 undefined(즉, false임)이므로
console.log(price);

// # 활용 ex) 기본값을 설정 : ||

function print(message) {
  const text = message || '메세지 없음'; // message가 undefined 이므로
  console.log(text);
}
print();

// default parameter
function print(message = '메세지') {
  //   const text = message || '메세지 없음';
  console.log(message);
}
print();
print(undefined);
// null과 0은 undefined이 아니므로 출력됨.
print(null); // null
print(0); // 0

// ! default parameter 와의 차이점
// ! 디폴트 파라미터는 전달하지 않거나, undefined 인 경우에만 설정이 됨.
// - || 연산자는 값이 falshy한 경우 설정됨. 0, -0, null, undefined, ''

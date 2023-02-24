// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key'); // #
const key2 = Symbol('key'); // #
map.set(key1, 'Hello');
console.log(map.get(key2)); // Hello // # undefined
// => 이유. 원시타입이기 때문에 값이 똑같아서 동일한 키라고 간주할 수 있음
console.log(key1 === key2); // true // # false

// # 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// # 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // # true

// 심벌 레지스트리에 들어있는 한에서만 사용할 수 있음.
console.log(Symbol.keyFor(k1)); // 해당 심볼의 문자열을 알고 싶다면 사용
console.log(Symbol.keyFor(key1)); // undefined(global registry에 보관되어 있지 않으므로)

//  ! object에서 심벌 이용
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined : obj에 들어있는 것과 다른 것이므로

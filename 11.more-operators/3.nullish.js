// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? : null, undefined 한 경우 설정(할당)
// || : falshy한 경우 설정(할당)

// num 이라는 값이 없을때만 falshy를 설정해보자.
let num = 0;
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0

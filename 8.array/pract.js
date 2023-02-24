let arr = [1, 2, 3, 4, 3, 2, 1];
console.log(arr);

console.log(arr.indexOf(2));

console.log(arr.includes(5));

let len = arr.push('가');
console.log(arr);
console.log(arr.length);
console.log(len);

len = arr.unshift('나');
console.log(arr);
console.log(len);

len = arr.pop();
console.log(arr);
console.log(len);

len = arr.shift();
console.log(arr);
console.log(len);

console.clear();

len = arr.splice(1, 3, '하나', '둘');
console.log(arr);
console.log(len);
console.log(arr.length);

console.clear();

let newArr = arr.slice(0, 5);
console.log(arr);
console.log(newArr);
newArr = arr.slice(-3);
console.log(newArr);
console.log(arr);

let arr1 = [12, 13, 14];
let arr2 = [15, 16, 17];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3 = arr3.reverse();
console.log(arr3);

arr3 = [1, 2, 3, [4, 5, 6, [7, 8]]];
console.log(arr3);
arr3 = arr3.flat(3);
console.log(arr3);

arr3.fill('a', 1, 3);
console.log(arr3);

console.log(arr3);
arr3 = arr3.join();
console.log(arr3);

console.clear();
////////////////////////////////////

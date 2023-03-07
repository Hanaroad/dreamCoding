function loop() {
  const array = [];
  // var과 let의 차이점
  //   for (let i = 0; i < 5; i++) {
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

// let을 사용하면 0,1,2,3,4가 출력됨
// var를 사용하면 5,5,5,5,5가 출력됨

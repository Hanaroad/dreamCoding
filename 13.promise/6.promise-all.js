function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과 함께 가지고 오기
getBanana() //
  .then(
    (banana) =>
      getApple() //
        .then((apple) => [banana, apple])
    // return [banana, apple]}) : 생략되기 전 버전
  )
  .then(console.log);

console.clear();

// Promise.all : 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.race : 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// # 에러가 날 경우
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);

// race 🍌
// all [ '🍌', '🍎' ]
// all-settle [
//   { status: 'fulfilled', value: '🍌' }, : 첫번째것은 수행되었고 값은 바나나
//   { status: 'fulfilled', value: '🍎' }, : 두번째것은 수행되었고 값은 사과
//   {
//     status: 'rejected', : 세번째것이 수행이 되지 않음.
//     reason: Error: no orange

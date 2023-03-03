function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}

// 이 부분을 함수로 만들어서 async와 await를 작성해보기
// getChicken()
//   .catch(() => '🐔')
//   .then((chicken) => fetchEgg(chicken))
//   .then((egg) => fryEgg(egg))
//   .then((meal) => console.log(meal))
//   .catch((error) => console.log(error));

// # 엘리 답
// # 1. promise 버전
function makeFriedEgg() {
  return getChicken()
    .catch(() => '🐔')
    .then(fetchEgg)
    .then(fryEgg);
}

makeFriedEgg() //
  .then(console.log);

// # 2. promise 버전
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg() //
  .then(console.log);

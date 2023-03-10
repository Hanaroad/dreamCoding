function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => ๐ฅ`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => ๐ณ`);
}

function getChicken() {
  return Promise.reject(new Error('can not find ๐'));
}

// ์ด ๋ถ๋ถ์ ํจ์๋ก ๋ง๋ค์ด์ async์ await๋ฅผ ์์ฑํด๋ณด๊ธฐ
// getChicken()
//   .catch(() => '๐')
//   .then((chicken) => fetchEgg(chicken))
//   .then((egg) => fryEgg(egg))
//   .then((meal) => console.log(meal))
//   .catch((error) => console.log(error));

// # ์๋ฆฌ ๋ต
// # 1. promise ๋ฒ์ 
function makeFriedEgg() {
  return getChicken()
    .catch(() => '๐')
    .then(fetchEgg)
    .then(fryEgg);
}

makeFriedEgg() //
  .then(console.log);

// # 2. promise ๋ฒ์ 
async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '๐';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg() //
  .then(console.log);

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

async function getMeal() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '๐';
  }
  const egg = await fetchEgg(chicken);
  const fry = await fryEgg(egg);
  return fry;
}
getMeal() //
  .then((fry) => console.log(fry));

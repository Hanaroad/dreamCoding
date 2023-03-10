function fetchEgg(chicken) {
  // return new Promise((resolve, reject))
  return Promise.resolve(`${chicken}  => ๐ฅ`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => ๐ณ`);
}

function getChicken() {
  return Promise.reject(new Error('์นํจ์ด ์๋ญ'));
  //   return Promise.resolve(`๐ฅ => ๐`);
}

// fetchEgg('๐') //
//   .then((egg) => console.log(egg));

// # chaining ๋ฐฉ๋ฒ
getChicken()
  // error๋ฅผ ์ก๋ catch๋ฅผ ์๋ก ์ฌ๋ ธ์ ๋
  .catch((error) => {
    console.log(error.name);
    return '๐';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  // .then(chicken => fetchEgg(chicken)) : ์์ ์๋ต๋ฒ์ 
  .then(fryEgg)
  .then((friedEgg) => console.log(friedEgg));

// # chaining ํ ์ฝ๋ simpleํ๊ฒ ์ฐ๊ธฐ
// getChicken()
//  .catch(() => '๐')
//  .then(fetchEgg)
//  .then(fryEgg)
//  .then(console.log);

function fetchEgg(chicken) {
  // return new Promise((resolve, reject))
  return Promise.resolve(`${chicken}  => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨이 없닭'));
  //   return Promise.resolve(`🥗 => 🐔`);
}

// fetchEgg('🐔') //
//   .then((egg) => console.log(egg));

// # chaining 방법
getChicken()
  // error를 잡는 catch를 위로 올렸을 때
  .catch((error) => {
    console.log(error.name);
    return '🐔';
  })
  .then((chicken) => {
    return fetchEgg(chicken);
  })
  // .then(chicken => fetchEgg(chicken)) : 위의 생략버전
  .then(fryEgg)
  .then((friedEgg) => console.log(friedEgg));

// # chaining 한 코드 simple하게 쓰기
// getChicken()
//  .catch(() => '🐔')
//  .then(fetchEgg)
//  .then(fryEgg)
//  .then(console.log);

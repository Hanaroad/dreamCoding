function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('π');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('π');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// λ°λλμ μ¬κ³Ό ν¨κ» κ°μ§κ³  μ€κΈ°
getBanana() //
  .then(
    (banana) =>
      getApple() //
        .then((apple) => [banana, apple])
    // return [banana, apple]}) : μλ΅λκΈ° μ  λ²μ 
  )
  .then(console.log);

console.clear();

// Promise.all : λ³λ ¬μ μΌλ‘ νλ²μ λͺ¨λ  Promiseλ€μ μ€ν!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.race : μ£Όμ΄μ§ Promiseμ€μ μ μΌ λΉ¨λ¦¬ μνλ κ²μ΄ μ΄κΉ!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// # μλ¬κ° λ  κ²½μ°
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);

// race π
// all [ 'π', 'π' ]
// all-settle [
//   { status: 'fulfilled', value: 'π' }, : μ²«λ²μ§Έκ²μ μνλμκ³  κ°μ λ°λλ
//   { status: 'fulfilled', value: 'π' }, : λλ²μ§Έκ²μ μνλμκ³  κ°μ μ¬κ³Ό
//   {
//     status: 'rejected', : μΈλ²μ§Έκ²μ΄ μνμ΄ λμ§ μμ.
//     reason: Error: no orange

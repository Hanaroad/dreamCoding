// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name} : π`);
//   },
// };
// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name} : π`);
//   },
// };

// - μμ±μ ν¨μλ λΆμ΄λΉ΅ν μ²λΌ κ°μ²΄λ₯Ό μ°μ΄λΌ μ μλ ννλ¦Ώ(μμ)κ°μ κ²
// - μ¦, κ°μ²΄λ λΆμ΄λΉ΅κ³Ό κ°μ

// # μ ν¨μλ₯Ό κ°νΈνκ² μμ±μ ν¨μλ‘ λ§λ€κΈ°
function Fruit(name, emoji) {
  // μμ±μ ν¨μλ λλ¬Έμλ‘ μμ
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // μλ΅κ°λ₯
}

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

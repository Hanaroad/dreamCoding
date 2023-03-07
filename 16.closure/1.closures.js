const text = 'hello';
function func() {
  console.log('text:', text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
// outer();

const func1 = outer();
func1();

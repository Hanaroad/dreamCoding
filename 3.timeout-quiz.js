// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, second가 0보다 작으면 에러를 던짐
function runInDelay(callback, seconds) {
  if (seconds < 0) {
    throw new Error('second가 0보다 작습니다');
  }
  setTimeout(() => {
    callback();
  }, seconds);
}

function logPrint() {
  console.log('aaa');
}
runInDelay(() => {
  console.log('zzzzzzzzzzzz');
}, 5000);

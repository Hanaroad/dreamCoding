// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, second가 0보다 작으면 에러를 던짐
// # 엘리답
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수가 없음');
  }
  if (!seconds || seconds < 0) {
    throw new Error('second가 0보다 작음');
  }
  setTimeout(callback, seconds * 1000);
}
try {
  runInDelay(() => {
    console.log('타이머 완료');
  }, 2);
} catch (error) {}

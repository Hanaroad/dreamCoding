function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}
// 출력 순서: 1 - 3 - 2

execute();

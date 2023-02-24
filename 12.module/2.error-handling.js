// try catch finally
function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음');
  // error를 던지면 밑의 코드가 실행되지 않고 바로 error가 실행됨
  return '파일내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(error);
    content = '기본내용';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스를 정리할 수 있음!');
  }
  const result = 'Hello ' + content;
  return result;
}

const result = processFile('경로');
console.log(result); // Hello 파일내용

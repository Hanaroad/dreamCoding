// 자바스크립트 엔진
// 인터프리터: 런타임시 코드를 한줄씩 번역해서 실행. 즉, 실행할 때마다 하나하나씩 필요한 코드를 번역함. => 초반 실행속도는 빠르지만, 실행속도가 비교적 느릴 수 있음.
// 다른 프로그래밍은 컴파일러가 필요함. ex) java => 실행속도가 빠름.
// 컴파일러는 실행하기 전 모든 코드를 번역함.
// console.log('Hi world!');

// nodemon 설치 방법
// node.js 설치하면 npm이 저절로 설치됨.
// npm i(nstall) nodemon -g
// 이후 nodemon index.js 하면 계속 계속 확인하면서 할 수 있음
// 나가려면 마찬가지로 ctrl + c 하면 나갈 수 있음.

// MODULE_NOT_FOUND 오류 해결 방법: 파일 실행 위치때문일 수 있음
// 파일이 들어있는 폴더로 이동해야함.

/////////!SECTION
// 변수 Variable
// 어플리케이션을 실행하면 입력(input) -> 처리(process) -> 출력(output)
// 처리가 기본적임. 데이터를 임시적으로 보관하기 위한 변수가 필요함.
// 변수 : 값을 저장하는 공간, 자료를 저장할 수 있는 이름이 주어진 기억장소
// ex) let , const
// 변수 선언: let a ; // a에는 값이 없는 상태. 재할당 할 수 있음.
let a = 0;
// console.log(a);

a = 1;
// console.log(a);

let b;
// console.log(b);

b = 2;
// console.log(b);

///////////!SECTION
// 변수 규칙!
// 라틴문자 (0-9, a-z, A-Z), _
// 대소문자 구별함
// 추천: camelCase (likeThis)
// 한국어 X
// 예약어 X
// 숫자로 시작 X
// 특수문자 X ( _ , $ 두 가지는 예외)
// 이모지 X
// 여러개의 변수를 1,2,3 숫자로 구분 -> 최대한 의미있게 구체적인 이름으로 작성!
let apple;
let redApple;
// 나쁜 예제
let number = 20;
// 좋은 예제
let myAge = 20;
// 나쁜 예제
let audio1;
let audio2;
// 좋은 예제
let backgroundAudio;
let windAudio;
//꿀팁!
let audioBackground;
let audioWind;

/////////////!SECTION
// 데이터타입 : 원시(primitive), 객체(object)
// 원시: number, string, boolean, null, undefined, symbol => 단일데이터
// 객체: object(-> array), function => 복합데이터
let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
// console.log(integer);
// console.log(negative);
// console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수
// console.log(binary);
// console.log(octal);
// console.log(hex);

// console.log(0 / 123); // 0
// console.log(123 / 0); // Infinity
// console.log(123 / -0); // -Infinity
// console.log(123 / 'text'); // NaN (Not a Number)

let bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);

/////////////!SECTION
// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
string = '"안녕!"';
console.log(string);

// 특수문자 출력법 - 이스케이프표현
string = '안녕!\n나야\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴(Template Literal) ``
let id = '하나';
let greetings = "'안녕!, " + id + "\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕, ${id}
즐거운 하루 보내요!'`;
console.log(greetings);

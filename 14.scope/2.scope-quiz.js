{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  // console.log(y); // error
}

//# 용어정리
const text = 'global'; // # 전역변수, 전역스코프(글로벌변수, 글로벌스코프)
{
  const text = 'inside block1'; // # 지역변수(로컬변수), 지역스코프(로컬스코프)
  {
    console.log(text); // global 이라고 생각했는데 틀림: inside block1
    // 왜냐면, 외부에 있는 가장 근접한 text를 가져옴
    // 만약, inside block1 이라는 것이 없다면 global을 가져옴
  }
}

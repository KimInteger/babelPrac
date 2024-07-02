function isIntegerCheck(value: number):boolean{
  // 함수 자체가 무슨 값을 return할지 정하는 것같다.
  // 변수에도 타입을 지정한다.
  let checkValue : boolean = Number.isInteger(value);
  // checkValue는 boolean타입만 받을 수 있다.
  return checkValue;
}

function add(a:number, b: number) : number {
  // 매개변수도 number타입이고 함수 자체가 반환하는 값도 number이다.
  if(isIntegerCheck(a) === false || isIntegerCheck(b) === false){
    throw new Error('매개변수 둘 중 하나라도 정수가 아니라면 에러를 발생시키기');
    // isIntegerCheck함수를 여기서 사용해서 조건문을 핸들링한다.
  }
  let result : number = a + b;
  // result의 데이터타입을 지정한다.
  return result
}

// 실행부분 ------------------------------------------------

try {
  // try...catch구문을 사용한다.
  const result : number = add(2,3);
  console.log(result); //5


  const resultWithFloat : number = add(2.5,3);
  console.log(resultWithFloat);
} catch (error:unknown) {
  if(error instanceof Error){
    console.error(error.message);
  } else {
    console.error('Unknown Error');
  }
}
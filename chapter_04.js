// 4.2 실행 컨텍스트와 스코프

// 변수나 함수의 실행 컨텍스트는 다른 데이터에 접근할 수 있는지, 어떻게 행동하는지를 규정.

// 함수를 호출하면 독자젖ㄱ인 실행 컨텍스트가 생성
// 코드 실행이 함수로 들어갈 때마다 함수의 컨텍스트가 컨텍스트 스택에 쌓이고,
// 함수 실행이 끝나면 해당 컨텍스트를 스택에서 꺼내고 컨트롤을 이전 컨텍스트에 반환.

// 컨텍스트에서 코드를 실행하면 변수 객체에 '스코프 체인'이 만들어 집니다.
// 스코프체인의 목적은 실행 컨텍스트가 접근할 수 있는 모든 변수와 함수에 순서를 정의하는 것.
// 스코프 체인의 앞족은 항상 코드가 실행되는 컨텍스트의 변수 객체.

// 컨텍스트가 함수라면 '활성화 객체'를 변수객체로 사용
// 활성화 객체는 항상 argument 변수 단 하나로 시작

// 변수 객체의 다음 순서는 해당 컨텍스트를 포함하는 컨텍스트(부모 컨텍스트)이며 그 다음에는 다시 부모의 부모 컨텍스트입니다.

// 이런식으로 계속 진행하여 전역 컨텍스트에 도달할 때까지 계속

// 식별자를 찾을 때는 스코프 체인 순서를 따라가면서 해당 식별자 이름을 검색

// 예제
var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}
changeColor();
console.log("color : ", color);

// 함수 changeColor()의 스코프 체인에는 객체가 두개 들어있음.
// 하나는 함수 자체의 변수 객체(arguments 객체는 여기에 정의)이며
// 다른 하나는 전역 컨텍스트의 변수 객체
// color는 함수의 스코프 체인에서 찾을 수 있으므로 접근 가능

// 또한, 로컬 컨텍스트에서는 지역 변수와 전역 변수를 모두 쓸 수 있음

// 예제
var color = "blue"; // 전역 변수객체
function changeColor() {
  var anotherColor = "red"; // changeColor의 변수객체
  function swapColors() {
    var tempColor = anotherColor; // swapColors의 변수객체
    anotherColor = color;
    color = tempColor;
    // color, anotherColor, tempColor 모두 접근 가능
  }
  // color, anotherColor 접근가능, tempColor는 불가능
  swapColors();
}
// color만 접근 가능
changeColor();

// 이 코드에는 실행 컨텍스트가 세개
// var color = "blue" ~ changeColor(); 까지 한개
// function changeColor() {} 의 안 한개
//  function swapColors() {} 의 안 한개
// swapColors()의 로컬 컨텍스트는 자신의 변수 객체에서 변수나 함수 이름을 검색한 다음 찾지 못하면
// 스코프 체인을 따라 한 단계씩 올라감

// 4.2.1 스코프 체인 확장

// 특정 문장은 스코프 체인 앞 부분에 임시로 변수 객체를 만들며
// 해당 변수객체는 코드 실행이 끝나면 사라짐.

// try-catch 문의 catch블록
// with 문

function buildUrl() {
  var qs = "?debug=true";

  with (location) {
    // with 문이 location 객체에 적용되므로
    // location 객체가 스코프 체인에 추가됌.
    var url = href + qs;
    // href를 참조하는 문장은
    // 사실 with문이 추가한 변수 객체에 들어있는
    // location.href 변수를 참조하는 것.
    // 변수 qs를 참조할 때는 buildUrl()함수에서 정의한 변수를 참조하는데
    // 이 변수는 함수 컨텍스트의 변수 객체에 들어있고,
    // with 문 내부에서 선언한 변수 url은 함수의 컨텍스트로 편입되며
    // 함수값으로 반환 될 수 있다.
  }

  return url;
}

// 4.2.2 자바 스크립트에는 블록레벨 스코프가 없습니다

if (true) {
  var color = "blue";
}
console.log("color:", color); // if 안에서 선언된 변수가 읽어짐
// 자바스크립트에서는 변수를 선언할 때 해당 변수를 현재 실행 컨텍스트
// (위 코드에서는 전역 컨텍스트)에 추가합니다.

for (var i = 0; i < 10; i++) {
  //   doSomething(i);
}
console.log(i); // 10
// 블록레벨 스코프를 지원하는 언어에서는 for문의 초기화 부분에서 선언한 변수가 오직
// for문의 컨텍스트 안에서만 존재하지만,
// 자바스크립트에서는 for 문에서 생성한 i 변수가 루프 실행이 끝난 후에도 존재

// var를 사용해 선언한 변수는 자동으로 가장 가까운 컨텍스트에 추가

function add(num1, num2) {
  var sum = num1 + num2; // 지역변수
  return sum;
  // 변수 sum 이 함수값으로 반환되긴 하지만 함수 밖에서는 이 변수에 접근할 수 없음.
  // var 키워드를 생략하면 add() 함수를 호출한 다음부터는 변수 sum 에 접근 가능
}
var result = add(10, 20);
console.log(result);
// console.log(sum); // 에러

function add(num1, num2) {
  sum = num1 + num2; // 전역변수
  return sum;
}
var result = add(20, 20);
console.log(sum);

// 식별자 검색
var color = "blue";
function getColor() {
  return color;
}
console.log(color);
// 먼저 getColor()의 변수 객체에서 color라는 식별자 이름을 검색하고
// 찾지 못하면 다음(전역 컨텍스트) 변수 객체에서 color 식별자를 검색

// 식별자가 로컬 컨텍스트에 정의되어 있으면 부모 컨텍스트에 같은 이름의 식별자가 있다 해도 참조할 수 없음.

var color = "blue"; // 부모 컨텍스트
function getColor() {
  // 로컬 컨텍스트
  var color = "red";
  return color;
}
console.log(getColor());
// 전역 컨텍스트의 color 변수를 이용하려면 window.color라고 명시해야함.

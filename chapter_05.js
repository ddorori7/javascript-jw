// 5장 참조타입

// Object 타입
// 객체는 특정 참조 타입의 '인스턴스'
var person = new Object();

// Object의 인스턴스를 명시적으로 생성하는 방법
// 1. new 연산자와 Object 생성자를 함께 쓰는 방법
var person = new Object();
person.name = "니콜라스";
person.age = 29;
// 2. 객체 리터럴 표기법
var person = {
  name: "니콜라스",
  age: 29,
};
var person = {
  name: "니콜라스",
  age: 29,
  5: true,
};
var person = {}; // new Object() 와 동일
person.name = "니콜라스";
person.age = 29;

// 객체 리터럴은 함수에 옵션 매개변수를 여러개 넘길 때 많이 사용
function displayInfo(args) {
  var output = "";

  if (typeof args.name == "string") {
    output += "Name: " + args.name + "\n";
  }
  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }
  console.log(output);
}
displayInfo({
  name: "니콜라스",
  age: 29,
});
displayInfo({
  name: "그렉",
});
// displayInfo()함수는 args 란 이름의 매개변수 하나만 받고
// 매개변수에는 name 프로퍼티나 age 프로퍼티가 있을 수 있고, 없을 수도 있다.
// typeof 연산자를 이용해 각 프로퍼티를 테스트한 후 그에맞게 메시지를 생성

// 객체프로퍼티 접근법
console.log(person["name"]);
console.log(person.name);

// 대괄호 표기법의 주요 장점은 변수를 써서 프로퍼티에 접근할 수 있다는 점
var propertyName = "name";
console.log(person[propertyName]);

// 대괄호 표기법을 쓰면 프로퍼티 이름에 문법에러를 일으키는 문자가 들어있거나
// 키워드 및 예약어에 해당하는 프로퍼티 이름에도 접근할 수 있음
person["first name"] = "니콜";
// "first name" 에 공백이 있으므로 점 표기법으로는 접근 불가

// 일반적으로 점 표기법이 더 좋으며, 대괄호 표기법은 프로퍼티 이름에 변수가 필요할 때만 쓰길 권장

/////////////////////////

// Array 타입

// 배열 만들기
// 1. 생성자
var colors = new Array();
// 배열에 데이터가 몇개 들어갈지 알고있다면 생성자에 매개변수를 넘겨서
// length 프로퍼티가 자동으로 그 값에 맞게 바뀌게끔 다음과 같이
var colors = new Array(20);

// Array 생성자에 배열에 들어갈 데이터를 넘겨도 됌
var colors = new Array("red", "blue", "green");

// new 생략 가능
var colors = Array(3); // 데이터가 3개있는 배열 생성
var names = Array("그렉"); // 문자열 "그렉"만 있는 배열 생성

// 2. 배열 리터럴 표기법
var colors = ["red", "blue", "green"];
var names = [];
console.log("빈배열 길이", names.length);
var values = [1, 2];
console.log("배열길이", values.length);

// 배열값에 접근
var colors = ["red", "blue", "green"];
console.log(colors[0]);
colors[2] = "black"; // 세번째값 바꾸기
colors[3] = "brown"; // 네번째 값 추가
console.log("배열 : ", colors);

// length 프로퍼티는 읽기 전용이 아님
// length 프로퍼티의 값을 바꾸면 배열 길이가 그에 맞게 바뀌면서
// 데이터를 제거하거나 빈 슬록을 추가
var colors = ["red", "blue", "green"]; // 길이 3
colors.length = 2; // 길이를 2로 바꿈
console.log(colors[2]); // 3번째 값이 사라짐 undefined
colors.length = 4; // 길이를 4로 바꿈
console.log(colors[3]); // undefined

// length 프로퍼티는 다음과 같이 배열 마지막에 데이터를 추가할 때 유용
var colors = ["red", "blue", "green"];
colors[colors.length] = "black";
colors[colors.length] = "brown";
console.log(colors);

// 배열의 현재 크기를 벗어나는 위치에 데이터가 추가될 때마다
// 배열의 length 프로퍼티는 다음과 같이 해당 슬롯의 인덱스에 1을 더한 값이 됌
var colors = ["red", "blue", "green"];
colors[99] = "black";
console.log(colors.length); // 100
// 인덱스 3부터 98사이에는 데이터가 존재하지 않으므로 undefined를 반환

// 배열인지 확인하기 -> Array.isArray(value)
if (Array.isArray(colors)) {
  // 배열일 때 실행하는 코드
}

// 변환 메서드
var colors = ["red", "blue", "green"];
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf()); // [ 'red', 'blue', 'green' ]
console.log(colors); // [ 'red', 'blue', 'green' ]

// toLocaleString
var person1 = {
  toLocaleString: function () {
    return "니콜";
  },
  toString: function () {
    return "니콜라스";
  },
};
var person2 = {
  toLocaleString: function () {
    return "그레고리오스";
  },
  toString: function () {
    return "그렉";
  },
};
var people = [person1, person2];
console.log(people);
console.log(people.toString);
console.log(people.toLocaleString);
// toLocaleString() -> 특정 언어에 맞는 형식으로 반환
// 출처: https://gocoder.tistory.com/1442 [고코더 IT Express]

// .join() 메서드
var colors = ["red", "blue", "green"];
console.log(colors.join(",")); // 기본값
console.log(colors.join("||"));
console.log(colors.join());

// 스택 메서드
// 스택 -> "LIFO(last-in-first-out)" 구조
// push(), pop() 메서드
// push() 메서드의 매개변수 숫자에는 제한이 없으며 받은 매개변수를
// 그대로 배열에 추가한 후 늘어난 배열 길이를 반환
// pop() 메서드는 이와 반대로 배열의 마지막 데이터를 제거하고
// length 프로퍼티를 그에 맞게 줄여서 반환
var colors = new Array();
var count = colors.push("red", "green"); // 늘어난 배열 길이를 반환
console.log(count); // 2
count = colors.push("black");
console.log(count); // 3

var item = colors.pop();
console.log(item); // black 마지막 테이터 반환
console.log(colors.length); // 2

// 스택 메서드를 배열의 다른 메서드와 함깨 쓸 수 있음
var colors = ["red", "blue"];
colors.push("brown"); // 데이터 추가
colors[3] = "black"; // 다른 데이터 추가
console.log(colors.length); // 4

var item = colors.pop();
console.log(item); // black

// 큐 메서드
// 큐 -> "FIFO(first-in-first-out)" 구조
// shift() 메서드 -> 배열의 첫 번째 데이터를 꺼내는 메서드
// shift()와 push() 메서드를 사용하면 배열이 큐처럼 동작하게 할 수 있음
var colors = new Array();
var count = colors.push("red", "green");
console.log(count); // 2

count = colors.push("black");
console.log(count); // 3

var item = colors.shift(); // 첫번째 데이터 꺼냄
console.log(item); // red
console.log(colors.length); // 2

// unshift() 메서드 -> shift()와 반대로 동작
// 매개변수로 넘겨받은 데이터를 배열의 "처음"에 추가하여
// 그에 맞게 변한 "배열길이를 반환"
// unshift()와 pop()을 조합하면 큐의 반대,
// 즉 다음과 같이 배열 마지막에 데이터를 추가하고 앞에서 꺼내는 방식으로 쓸수 있음
var colors = new Array();
var count = colors.unshift("red", "green");
console.log(count); // 2

count = colors.unshift("black"); // 다른 데이터 추가
console.log(count); // 3

var item = colors.pop();
console.log(item); // green ->  제일 뒤에있는거 green
console.log(colors.length); // 2

// 정렬 메서드 - reverse(), sort()
var values = [1, 2, 3, 4, 5];
values.reverse(); // 순서 뒤집기
console.log(values); // [ 5, 4, 3, 2, 1 ]

// sort() -> 기본적으로 데이터를 정순, 즉 가장작은 값이 첫번째에 오게 정렬
// 이를위해 이면에서 String() 함수를 호출해 데이터를 문자열로 변환한 후
// 이를 비교하여  순서를 판단  -> 잘 만들어진것은 아님
// (숫자만으로 이루어진 배열에서도 똑같이 동작하여 상식적이지 않은 결과를 냄)
var values = [0, 1, 5, 10, 15];
values.sort();
console.log(values); // [ 0, 1, 10, 15, 5 ] ->  문자열 기준이라 이상해짐.
// 비교함수를 넘겨서 순서 조절

// 비교함수는 매개변수 두개를 받아서
// 첫번째 매개변수가 두번째 매개변수보다 앞에 있어야 한다면 음수를,
// 순서 같다면 0을,
// 첫번째 매개변수가 두번째 매개변수보다 뒤에 있어야 한다면 양수를 반환
function compare(value1, value2) {
  if (value1 < value2) {
    return -1; // 1이 앞에
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
// 이 비교함수는 대부분의 데이터 타입에서 동작하며
// 다음 에제와 같이 sort() 메서드의 매개변수로 쓸 수 있음
var values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values); // [ 0, 1, 5, 10, 15 ]

// 비교함수를 다음과 같이 바꾸면 역순으로 정렬
function compare(value1, value2) {
  if (value1 < value2) {
    return 1;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);
console.log(values); // [ 15, 10, 5, 1, 0 ]
values.sort(compare).reverse; // 체인형태로 가능

// 숫자타입이나 Date 객체처럼
// valueOf() 메서드를 호출하면 숫자형 값을 반환하는 객체에서는
// 비교함수를 더 단순하게 만들 수 있음
function compare(value1, value2) {
  return value2 - value1;
}

// 조작 메서드

// concat() 메서드
// -> 현재 배열 데이터를 기반으로 새로운 배열을 만듦
// 현재 배열을 복사한 다음 메서드의 매개변수를 새 배열 마지막에 추가해서 반환
// 매개변수가 없으면 단순히 현재 배열의 복사본을 반환
// 매개변수로 배열을 넘기면 새 배열에 매개변수 배열의 데이터를 모두 추가해서 반환
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // [ 'red', 'green', 'blue' ]
console.log(colors2); // [ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]

// slice() 메서드
// -> 배열에 포함된 데이터 일부를 가진 새 배열을 만듦
// 매개변수를 두개를 받는데 각 매개변수는 원래 배열에서 가져올 데이터 범위의
// 시작과 끝을 나타냄
// 매개변수를 하나만 넘기면 해당 인덱스에서 끝까지
// 두개넘기면 첫번째 매개변수에 해당하는 인덱스부터 두번째 매개변수에 해당하는 인덱스 앞까지
// 원래 배열은 건드리지 않음
var colors = ["red-0", "green-1", "blue-2", "yellow-3", "purple-4"];
var colors2 = colors.slice(1);
var colors3 = colors.slice(1, 4);
console.log(colors2); // [ 'green-1', 'blue-2', 'yellow-3', 'purple-4' ]
console.log(colors3); // [ 'green-1', 'blue-2', 'yellow-3' ]
// slice() 에 매개변수로 음수를 넘기면 배열 길이 해당값을 더한 숫자를 대신 사용
// 길이가 5인 배열에서 slice(-2,-1) === slice(3,4)
// 두번째 매개변수가 첫번째 매개변수보다 작으면 빈배열 반환

// splice() 메서드
// -> 배열 중간에 데이터를 삽입(3가지 방법으로 사용)
// 1. 삭제
//  - splice(0,2) -> 인덱스 0부터 2개 삭제
// 2. 삽입
//  - 매개변수를 세개이상 넘기면 배열에 데이터 삽입 가능
//  - splice(2,0,"red","green") -> 삽입할 위치(2), 삭제할 개수(0 - 삭제안함), 나머지는 삽입할 매개변수
// 3. 대체
//  - splice(2,1,"red","green") -> 인덱스 2부터 데이터 1개 삭제후 나머지 삽입
// splice 메서드는 항상 원래 배열에서 "삭제한 데이터의 배열을 반환"
// 삭제한 것이 없으면 빈 배열을 반환
var colors = ["red", "green", "blue"];
var removed = colors.splice(0, 1); // 첫번째 데이터 제거
console.log(colors); // [ 'green', 'blue' ]
console.log(removed); // [ 'red' ]

removed = colors.splice(1, 0, "yellow", "orange");
console.log(colors); // [ 'green', 'yellow', 'orange', 'blue' ]
console.log(removed); // []

removed = colors.splice(1, 1, "red", "purple");
console.log(colors); // [ 'green', 'red', 'purple', 'orange', 'blue' ]
console.log(removed); // [ 'yellow' ]

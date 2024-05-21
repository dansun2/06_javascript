/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후에 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

/**const는 변수의 값을 추후에 변경 불가 */
const newJeans = '뉴진스';
console.log(newJeans);

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는것.
 *      ex) var name;
 * 2) 할당
 *      ex) var name='코드팩토리';
 */

let girlFriend;
console.log(girlFriend);

// const girlFriend2; 이거는 안됨 무조건 const는 값을 초기화하면서 선언해야한다.
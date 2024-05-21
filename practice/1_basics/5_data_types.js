/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한 개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언) 참/거짓
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */


// Number 타입
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('------------');


// String 타입
const codeFactory = '코드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/* Template Literal
*
* Escaping Character
* 1) newline -> \n
* 2) tab -> \t
* 3) 백슬래쉬를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
*/
const iveYuJin = '아이브안유진';
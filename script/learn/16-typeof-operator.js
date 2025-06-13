// --------------------------------------------------------------------------
// 📌 typeof 연산자 활용
// --------------------------------------------------------------------------

const o = {
  name: 'object', 
  serialNumber: 20250613,
  isObjectType: () => true,
  isNotDefined: undefined,
  empty: null,
  symbol: Symbol('o'),
  int: 100n,
}

// 어떤 데이터 타입인지 확인하고자 한다.
// typeof 연산자
// typeof 데이터 // 'string', 'number', 'boolean' ...

console.log(typeof o)
console.log(typeof o.name)
console.log(typeof o.serialNumber)
console.log(typeof o.isObjectType)
console.log(typeof o.isObjectType())
console.log(typeof o.isNotDefined)
console.log(typeof o.empty)
console.log(typeof o.symbol)
console.log(typeof o.int)
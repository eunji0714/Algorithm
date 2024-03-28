function solution(s) {
  let answer = ''
  let hashMap = new Map()
  for (let x of s) {
    if (hashMap.has(x)) hashMap.set(x, hashMap.get(x) + 1)
    else hashMap.set(x, 1)
  }
  let max = Number.MIN_SAFE_INTEGER
  for (let [key, value] of hashMap) {
    if (value > max) {
      max = value
      answer = key
    }
  }

  return answer
}

let str = 'BACBACCACCBDEDE'
console.log(solution(str))

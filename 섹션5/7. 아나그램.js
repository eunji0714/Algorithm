function solution(str1, str2) {
  let answer = 'YES'
  let hashMap = new Map()

  for (let x of str1) {
    if (hashMap.has(x)) hashMap.set(x, hashMap.get(x) + 1)
    else hashMap.set(x, 1)
  }
  for (let x of str2) {
    if (!hashMap.has(x) || hashMap.get(x) === 0) answer = 'NO'
    hashMap.set(x, hashMap.get(x) - 1)
  }
  return answer
}

let a = 'AbaAeCe'
let b = 'baeeACA'
console.log(solution(a, b))

function solution(s) {
  let answer = 'YES'
  let low = s.toLowerCase()
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (low[i] !== low[s.length - i - 1]) answer = 'NO'
  }
  return answer
}

let str = 'goooG'
console.log(solution(str))

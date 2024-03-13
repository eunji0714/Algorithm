function solution(s) {
  let answer = 'YES'
  let low = s.toLowerCase().replace(/[^a-z]/g, '')
  for (let i = 0; i < Math.floor(low.length / 2); i++) {
    if (low[i] !== low[low.length - i - 1]) answer = 'NO'
  }
  // if(s.split('').reverse().join('')!==s) return "NO"
  // 각각의 문자열로 자르고 뒤집고 다시 합치는 식
  return answer
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof'
console.log(solution(str))

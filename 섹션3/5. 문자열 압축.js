function solution(s) {
  let answer = ''
  let ag = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      ag++
    } else {
      answer += s[i]
      if (ag > 1) answer += String(ag)
      ag = 1
    }
  }
  return answer
}

let str = 'KKHSSSSSSSE'
console.log(solution(str))

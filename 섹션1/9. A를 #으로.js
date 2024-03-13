function solution(s) {
  let answer = ''
  /* 간단한 답
     let answer=s
     answer=answer.replace(/A/g, "#") */
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') answer += '#'
    else answer += s[i]
  }
  return answer
}

let str = 'BANANA'
console.log(solution(str))

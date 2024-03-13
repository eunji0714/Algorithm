function solution(s) {
  let answer
  let mid = s.length / 2
  if (s.length % 2 === 1) answer = s[Math.floor(mid)]
  else answer = s.substr(mid - 1, 2)
  return answer
}
console.log(solution('stu2dy'))

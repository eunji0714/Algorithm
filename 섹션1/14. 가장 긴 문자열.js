function solution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER
  for (let x of s) {
    if (answer.length < x.length) answer = x
  }
  return answer
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good']
console.log(solution(str))

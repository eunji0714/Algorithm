function solution(s) {
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i]
    //indexOf는 가장 처음 그 문자를 발견한 인덱스
  }
  return answer
}
console.log(solution('ksekkset'))

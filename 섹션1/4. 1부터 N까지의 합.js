function solution(n) {
  let answer = 0
  for (i = 0; i <= n; i++) {
    answer = answer + i
  }
  return answer
}

console.log(solution(10))

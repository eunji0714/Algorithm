function solution(arr) {
  let answer = arr
  let sum = answer.reduce((a, b) => a + b, 0)
  let flag = 0
  for (let j = 0; j < 9; j++) {
    for (let i = 1; i < 9; i++) {
      if (sum - (arr[j] + arr[i]) === 100) {
        answer.splice(i, 1)
        answer.splice(j, 1)
        flag = 1 // 정답이 여러 가지인 경우를 대비
        break
      }
    }
    if (flag === 1) break
  }
  return answer
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(arr))

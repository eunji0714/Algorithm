function solution(k, arr) {
  let answer = 0
  for (let i = 0; i < arr.length - 2; i++) {
    let sum = 0
    sum += arr[i] + arr[i + 1] + arr[i + 2]
    answer = Math.max(answer, sum)
  }
  return answer
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
console.log(solution(3, a))

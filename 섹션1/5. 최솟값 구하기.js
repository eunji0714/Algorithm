function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < 7; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    answer = min
  }
  return answer
}

let arr = [5, 7, 1, 3, 2, 9, 11]
console.log(solution(arr))

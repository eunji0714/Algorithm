function solution(arr) {
  let answer = 0
  let num = arr.length
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let left = j - 1 >= 0 ? arr[i][j - 1] : 0
      let right = j + 1 < num ? arr[i][j + 1] : 0
      let top = i - 1 >= 0 ? arr[i - 1][j] : 0
      let bottom = i + 1 < num ? arr[i + 1][j] : 0
      if (Math.max(arr[i][j], left, right, top, bottom) === arr[i][j]) {
        answer++
      }
    }
  }

  return answer
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]
console.log(solution(arr))

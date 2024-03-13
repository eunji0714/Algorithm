function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER
  let raw = 0,
    col = 0,
    cro1 = 0,
    cro2 = 0
  let num = arr.length

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      raw += arr[i][j]
      col += arr[j][i]
    }
    answer = Math.max(answer, raw, col)
    raw = 0
    col = 0
  }

  for (let i = 0; i < 5; i++) {
    cro1 += arr[i][i]
    cro2 += arr[i][num - i - 1]
    answer = Math.max(answer, cro1, cro2)
  }

  return answer
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]
console.log(solution(arr))

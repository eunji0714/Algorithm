function solution(m, product) {
  let answer = 0
  n = product.length
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
  for (i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1])
    let count = 1
    for (let j = 0; j < n; j++) {
      if (j !== i && money < product[j][0] + product[j][1]) break
      else if (j !== i && money >= product[j][0] + product[j][1]) {
        count++
        money -= product[j][0] + product[j][1]
      }
    }
    answer = Math.max(answer, count)
  }
  return answer
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]
console.log(solution(28, arr))

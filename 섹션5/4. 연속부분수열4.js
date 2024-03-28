function solution(m, arr) {
  let answer = 0
  for (let p1 = 0; p1 < arr.length; p1++) {
    let sum = 0,
      p2 = p1
    while (p2 < arr.length) {
      sum += arr[p2++]
      if (sum > m) break
      else if (sum <= m) answer++
    }
  }

  return answer
}

let a = [1, 3, 1, 2, 3]
console.log(solution(5, a))

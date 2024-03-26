function solution(m, arr) {
  let answer = 0
  for (let p1 = 0; p1 < arr.length; p1++) {
    let p2 = p1
    let result = 0
    while (p2 < arr.length) {
      result += arr[p2++]
      if (result > m) break
      else if (result === m) answer++
    }
  }

  return answer
}

let a = [1, 2, 1, 3, 1, 1, 1, 2]
console.log(solution(6, a))

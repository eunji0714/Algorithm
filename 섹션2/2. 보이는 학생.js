function solution(arr) {
  let answer = 1,
    max = arr[0]
  for (let x of arr) {
    if (max < x) {
      answer++
      max = x
    }
  }
  return answer
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))

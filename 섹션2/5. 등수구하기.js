function solution(arr) {
  let num = arr.length
  let answer = Array.from({ length: num }, () => 1)
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (arr[j] > arr[i]) answer[i]++
    }
  }
  return answer
}

let arr = [87, 89, 92, 100, 76]
console.log(solution(arr))

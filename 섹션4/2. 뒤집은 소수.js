function prime(y) {
  if (y === 1) return false
  for (let i = 2; i <= parseInt(Math.sqrt(y)); i++) {
    if (y % i === 0) return false
  }
  return true
}
function solution(arr) {
  let answer = []
  for (let x of arr) {
    let y = parseInt(String(x).split('').reverse().join(''))
    if (prime(y)) answer.push(y)
  }
  return answer
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100]
console.log(solution(arr))

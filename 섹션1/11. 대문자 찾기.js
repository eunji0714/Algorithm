function solution(s) {
  let answer = 0
  for (let x of s) {
    //x가 원래 대문자라면 x를 대문자로 바꾼거랑 같아질테니..
    if (x === x.toUpperCase()) answer++
  }

  return answer
}

let str = 'KoreaTimeGood'
console.log(solution(str))

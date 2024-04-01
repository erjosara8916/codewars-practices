export function solution(number){
  if (number < 1) return 0
  
  const arrayNumbers = [...new Array(number).keys()]
  const multiplesOf3or5 = arrayNumbers.filter(n => n % 3 == 0 || n % 5 == 0)
  const sumOfMultiples = multiplesOf3or5.reduce((a, b) => a + b)
  return sumOfMultiples;
}
export function solution(number){
  const isNegativeNumber = number < 0;
  const multiples = [3,5]
  
  let sum = 0
  
  for (let i = 0; i < number; i++) {
    const isMultipleOf3 = i % 3 == 0
    const isMultipleOf5 = i % 5 == 0
    
    if (isMultipleOf3 || isMultipleOf5) sum += i
  }
  
  return sum
}
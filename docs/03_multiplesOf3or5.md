# Multiples Of 3 Or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

**Solution**

```js
export function solution(number){
  let sum = 0
  
  for (let i = 0; i < number; i++) {
    const isMultipleOf3 = i % 3 == 0
    const isMultipleOf5 = i % 5 == 0
    
    if (isMultipleOf3 || isMultipleOf5) sum += i
  }
  
  return sum
}
```

## Solution 2

```js
function solution(number){
  if (number < 1) return 0
  
  const arrayNumbers = [...new Array(number).keys()]
  const multiplesOf3or5 = arrayNumbers.filter(n => n % 3 == 0 || n % 5 == 0)
  const sumOfMultiples = multiplesOf3or5.reduce((a, b) => a + b)
  return sumOfMultiples;
}
```
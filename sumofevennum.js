let numStr = [2,2];

const sumEvens = (numStr) => {
  let sum = 0;
  for (let i = -1; i < numStr.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));
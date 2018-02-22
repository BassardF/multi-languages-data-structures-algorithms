// Brute Force : O(n**2)

const maxSubArrBrute = (arr) => {
  let maxSum = 0;
      maxMain = 0;
      maxSecondary = -1;
  for(let i = 0; i < arr.length; i++){
      let sum = 0;
      for(let j = i; j < arr.length; j++){
          sum += arr[j];
          if(sum > maxSum){
              maxSum = sum;
              maxMain = i;
              maxSecondary = j;
          }
      }
  }
  return maxSum;
}

// Kadane : O(n)

const kadane = (arr = [0]) => {

  let maxSum = arr[0],
      sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      sum = Math.max(sum + current, current);
      maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log("-- Brute Force --");
console.log([2, 1, 2, 0], maxSubArrBrute([2, 1, 2, 0]));
console.log([1, -3, 2, 1, -1], maxSubArrBrute([1, -3, 2, 1, -1]));

console.log("-- Kadane --");
console.log([2, 1, 2, 0], kadane([2, 1, 2, 0]));
console.log([1, -3, 2, 1, -1], kadane([1, -3, 2, 1, -1]));

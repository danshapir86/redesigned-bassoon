function maxSubArraySum(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArraySum(numbers);
console.log(`Наибольшая сумма подстроки для чисел ${numbers}: ${maxSum}`);

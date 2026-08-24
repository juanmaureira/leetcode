/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let freq = new Map()
    let left = 0
    let max = -Infinity

    for(let i = 0; i < nums.length; i++){

        freq.set(nums[i], ((freq.get(nums[i]) || 0) + 1))

        while(left < nums.length && freq.get(0) > k){

            freq.set(nums[left], (freq.get(nums[left]) - 1))

            left++
        }

        max = Math.max(max, i - left + 1)
    }

    return max    
};
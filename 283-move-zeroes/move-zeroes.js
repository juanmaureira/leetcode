/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let read = 0
    let write = 0

    if(nums.length === 1) return nums

    while(read < nums.length){

        if(nums[read] !== 0)  nums[write++] = nums[read]

        read++
    }

    for(let i = write; i < nums.length; i++) nums[i] = 0

    return nums
};
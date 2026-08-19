/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let lastIndex = new Map()

    for(let i = 0; i < nums.length; i++){
        if(lastIndex.has(nums[i]) && Math.abs(i - lastIndex.get(nums[i]) <= k)) return true
        lastIndex.set(nums[i], i)
    }

    return false   
};
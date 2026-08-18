/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = new Map()

    for(let i = 0; i < nums.length; i++){
        seen.set(nums[i], (seen.get(nums[i]) || 0) + 1)
        if(seen.get(nums[i]) > 1) return true
    }

    return false    
};
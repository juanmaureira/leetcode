/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numbers = new Set(nums)
    let result = new Set()

    for(let i = 0; i < nums.length; i++){
        if(!numbers.has(i + 1)) result.add(i + 1)
    }

    return Array.from(result) 
};
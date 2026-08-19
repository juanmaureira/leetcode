/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let left = 0
    let right = 1
    let result = []

    while(right <= nums.length){
        let diff = nums[right] - nums[right - 1]
        if( diff !== 1 || diff === 0){
            right - left - 1 > 0 
            ? result.push(`${nums[left]}->${nums[right - 1]}`) 
            : result.push(`${nums[right - 1]}`)

            left = right
        } 
        
        right++
    }

    return result    
};
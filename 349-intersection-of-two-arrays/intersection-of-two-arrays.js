/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let setNums1 = new Set(nums1)
    let result = new Set()

    for(const num of nums2)  if(setNums1.has(num)) result.add(num)

    return Array.from(result)  
};
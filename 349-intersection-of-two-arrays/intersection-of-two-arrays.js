/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let setNums1 = new Set(nums1)
    let setNums2 = new Set(nums2)

    let result = new Set()

    for(const elementInOne of setNums1){
        for(const elementInTwo of setNums2){
            if(!result.has(elementInOne) && elementInOne === elementInTwo) result.add(elementInOne)
        }
    }
    return Array.from(result)    
};
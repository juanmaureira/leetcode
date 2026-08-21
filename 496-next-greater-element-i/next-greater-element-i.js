/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map()
    let stack = []

    for(let i = 0; i < nums2.length; i++){

        while(stack.length > 0 && nums2[i] > stack[stack.length - 1]){
            const small = stack.pop()
            map.set(small, nums2[i])    
        }

        stack.push(nums2[i])
    }

    while(stack.length > 0){
        const val = stack.pop()
         map.set(val, -1)
    }
    return nums1.map(num => map.get(num))   
};
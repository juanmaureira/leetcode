/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let read = 0
    let write = 0

    while(write < nums.length){
        read = write

        while(read < nums.length && nums[read] !== write ) read++

        if( read >= nums.length) read = nums.length - 1

        if(nums[read] === write){
            let temp = nums[read]
            nums[read] = nums[write]
            nums[write] = temp
        }

        write++
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i) return i
    }

    return nums[nums.length - 1] + 1  
};
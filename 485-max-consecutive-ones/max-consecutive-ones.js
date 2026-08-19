/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cont = 0
    let maxCont = -Infinity

    for(const num of nums){
        cont = num !== 1  ? cont = 0 : cont + 1
        maxCont = Math.max(maxCont, cont)
    }

    return maxCont
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let seen = new Map()
    let maxFrecuency = -Infinity
    let clave = null

    for(const num of nums) 
        seen.set(num, (seen.get(num) || 0) + 1)
    
    for(const [key, value] of seen){
        if(value > maxFrecuency){
            maxFrecuency = value
            clave = key
        }
    }

    return clave    
};
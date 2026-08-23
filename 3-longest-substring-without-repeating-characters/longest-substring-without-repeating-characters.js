/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let seen = new Map()
    let max = -Infinity

    for(let right = 0; right < s.length; right++){

        seen.set(s[right], (seen.get(s[right]) || 0) + 1)
        
        while(left < s.length && seen.get(s[right]) > 1){
            seen.set(s[left], seen.get(s[left]) - 1)
            left++
        }

        let current = right - left + 1
        max = Math.max(current, max)
    }

    return max !== -Infinity ? max : 0 
};
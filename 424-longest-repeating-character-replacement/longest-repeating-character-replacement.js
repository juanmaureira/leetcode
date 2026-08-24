/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0
    let mapa = new Map()
    let left = 0
    let maxFreq = 0

    for(let i = 0; i < s.length; i++){
        
        mapa.set(s[i], ((mapa.get(s[i]) || 0) + 1))
        maxFreq = Math.max(maxFreq, mapa.get(s[i]))

        while(left < s.length && ((i - left + 1) - maxFreq) > k){
            mapa.set(s[left], (mapa.get(s[left]) - 1))
            left++
        }

        max = Math.max(max, i - left + 1)
    }

    return max    
};
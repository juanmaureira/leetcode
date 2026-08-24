/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0
    let seen = new Map()
    let maxLength = -Infinity

    for(let i = 0; i < fruits.length; i++){
        const fruit = fruits[i]

        seen.set(fruit, ((seen.get(fruit) || 0) + 1))

        while(left < fruits.length && seen.size > 2){
            const eliminarFruit = fruits[left]

            seen.set(eliminarFruit, (seen.get(eliminarFruit) - 1))

            if(seen.get(eliminarFruit) === 0) seen.delete(eliminarFruit)
            left++
        }

        maxLength = Math.max(maxLength, i - left + 1)
    }
    
    return maxLength    
};
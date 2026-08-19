/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.nums.slice(left, right + 1).reduce((acc, num) => acc += num)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

var obj  = new NumArray([-2, 0, 3, -5, 2, -1]);
var param_1 = obj.sumRange(0, 2); // return (-2) + 0 + 3 = 1
var param_2 = obj.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
var param_3 = obj.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
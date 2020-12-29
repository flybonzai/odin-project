/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let lastIndex = nums.length - 1;
    // Remove any at the end
    for (lastIndex; nums[lastIndex] === val; lastIndex--) {
        lastIndex--;
    };
    console.log(lastIndex);
    
    for (let i = 0; i <= lastIndex; i++) {
      if (nums[i] === val) {
          // swap elements
          let tmp = nums[i];
          nums[i] = nums[lastIndex];
          nums[lastIndex] = tmp;
          lastIndex--;
      }  
    };
    
    return lastIndex + 1;
};

let input = [3, 3]
let val = 3;

const len = removeElement(input, val);
console.log(len);
console.log(input);

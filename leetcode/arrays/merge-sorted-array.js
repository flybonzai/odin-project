/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (i = 0, j = 0; j < n; i++) {
        if (i > m && nums1[i] === 0) {
            nums1[i] = nums2[j];
            j++;
        } else if (nums1[i] > nums2[j]) {
            // move all entries down one index
            for (k = nums1.length - 2; k >= i; k--) {
                nums1[k + 1] = nums1[k];
            };
            nums1[i] = nums2[j];
            j++;
        };  
    };
};

// Currently getting extra elements on the end due to insert in-place
let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
let nums2 = [1, 2, 2];
let expected = [-1, 0, 0, 1, 2, 2, 3, 3, 3];

merge(nums1, nums1.length, nums2, nums2.length);
console.log(nums1);
console.assert(nums1 === expected, nums1, expected);
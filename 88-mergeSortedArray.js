// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].


var merge = function(nums1, m, nums2, n) {
    //declare empty array to contain final list
    //iterate through nums1 starting at index 0
    //compare value in nums1 index to nums2 value starting at 0
    //  while the value of nums2 at index j is less than the value of nums1 at index i:
    //      push value of nums2 at index j to array
    //      increment j by 1 
    //once the while loop above is completed the value of nums1 at index i can be pushed to array
    //increment the value of i, continue comparison procedure until i = the length of nums1
    //return array

    let result = [], j = 0
    for (let i = 0; i < m; i++) {
        while (nums2[j] < nums1[i]) {
            result.push(nums2[j])
            j++
        }
        result.push(nums1[i])
    }
    if (j < n) {
        for (j; j < n; j++) {
            result.push(nums2[j])
        }
    }

    for (let k = 0; k < nums1.length; k++) {
        nums1[k] = result[k]
    }
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
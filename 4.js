/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var merged = nums1; 
    for(var i = 0; i < nums2.length; i += 1){
        merged.push(nums2[i]);
    }
    merged = merged.slice(0, merged.length);
    merged.sort((a, b) => a - b) 
    var median = merged.length % 2 == 0 ? (merged[(merged.length / 2)] + merged[(merged.length / 2) - 1]) / 2 : 
        merged[Math.floor(merged.length / 2)];
    return median;
};

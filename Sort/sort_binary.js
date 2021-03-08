/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:07:55
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-03 07:12:43
 * @Description: 二分法排序
 * 核心逻辑: 将元素插入有序数据, 找到该元素的下标只用的是二分法
 */

// 二分查找
function binarySearch(arr, maxIndex, currentValue) {
  let min = 0;
  let max = maxIndex;
  while (min <= max) {
    let temp = Math.floor((min + max) / 2);
    if (arr[temp] < currentValue) {
      min = temp + 1;
    } else {
      max = temp - 1;
    }
  }
  return min;
}

// 二分法
function binary(arr) {
  const length = arr.length;
  for (let i = 1, len = length; i < len; i++) {
    const current = arr[i];
    const insertIndex = binarySearch(arr, i - 1, current);
    for (let preIndex = i - 1; preIndex >= insertIndex; preIndex--) {
      arr[preIndex + 1] = arr[preIndex];
    }
    arr[insertIndex] = current;
  }
}

module.exports = binary;

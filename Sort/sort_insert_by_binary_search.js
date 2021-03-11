/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:07:55
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-11 08:54:39
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
// 插入排序 - 二分法搜索
function insert(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let preIndex = i - 1;
    // 发生逆序，往前插入
    if (current > arr[i - 1]) continue;
    const insertIndex = binarySearch(arr, i - 1, current);
    // 从尾部开始交换元素直至当前元素(arr[i])的插入位置
    while (preIndex >= insertIndex) {
      // 若改成与直接插入一样的代码, 时间成本相似, arr[preIndex]的时间成本较高
      // while (arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    arr[insertIndex] = current;
  }
}

module.exports = insert;

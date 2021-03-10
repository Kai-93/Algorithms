/*
 * @Author: Kaiser
 * @Date: 2021-03-08 06:34:04
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-10 06:48:07
 * @Description: 选择排序
 */

const swap = require('./swap');
function selection(arr) {
  let { length } = arr;
  // 从最后一个开始
  for (let i = length - 1; i >= 0; i--) {
    let max = i;
    // 从最后第二个开始
    for (let j = i - 1; j > 0; j--) {
      // 若最大值小于当前的值, 则记录当前值为最大值
      if (arr[max] < arr[j]) max = j;
    }
    // 将最大值交换至有序数组第一个
    swap(arr, max, i);
  }
  return arr;
}
module.exports = selection;

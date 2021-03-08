/*
 * @Author: Kaiser
 * @Date: 2021-03-08 06:34:04
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-08 06:46:18
 * @Description: 选择排序
 */

const swap = require('./swap');
function selection(arr) {
  let { length } = arr;
  for (let i = length - 1; i >= 0; i--) {
    let max = i;
    for (let j = i - 1; j > 0; j--) {
      if (arr[max] < arr[j]) max = j;
    }
    swap(arr, max, i);
  }
  return arr;
}
module.exports = selection;

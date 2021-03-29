/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:02:55
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-29 15:22:36
 * @Description: 数组交换
 */
let temp = 0;
/**
 * 交换函数
 * @param {源数组} arr
 * @param {原数组的A项} i
 * @param {原数组的B项} j
 */
function swap(arr, i, j) {
  if (arr.length < 2 || i === j) return;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // [arr[i], arr[j]] = [arr[j], arr[i]];
}
module.exports = swap;

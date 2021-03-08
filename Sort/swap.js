/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:02:55
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-02 21:16:01
 * @Description: 数组交换
 */
/**
 * 置换函数
 * @param {源数组} arr
 * @param {原数组的A项} i
 * @param {原数组的B项} j
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
module.exports = swap;

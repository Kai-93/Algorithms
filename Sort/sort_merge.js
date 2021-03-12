/*
 * @Author: Kaiser
 * @Date: 2021-03-02 22:46:50
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-12 09:36:04
 * @Description: 归并排序
 * 核心逻辑: 将需要排序的数组分成两段, 分别通过递归排序成有序的, 而后进行排序
 * 逻辑示意图: https://pic2.zhimg.com/80/v2-6639ef7ed441b0e2b7a71ee202e3ad05_1440w.jpg
 */

function merge(arr) {
  const { length } = arr;
  if (length < 2) return arr;
  const mid = Math.floor(length / 2);
  return concat(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
}

function concat(left, right) {
  const arr = [];
  /**
   * 此处可优化
   * 可优化的情况为:
   * 1.left[left.length-1] <= right[0]
   * 2.left[0] >= right[right.length-1]
   * 这两种情况, 直接处理数组
   */
  while (left.length && right.length) {
    arr.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return arr.concat(left, right);
}

module.exports = merge;

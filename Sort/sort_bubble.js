/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:02:08
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-22 10:02:06
 * @Description: 冒泡
 * 每一个排序确定一个最值
 */

const swap = require('./swap');

// 冒泡
function bubble(arr) {
  const length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
}

// 冒泡 - 升级版
function bubble(arr) {
  const length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
}

module.exports = bubble;

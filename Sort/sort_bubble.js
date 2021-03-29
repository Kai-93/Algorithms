/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:02:08
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-29 15:51:17
 * @Description: 冒泡
 * 每一个排序确定一个最值
 */

const swap = require('./swap');

// 冒泡 - 原始版
function bubble(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        count++;
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(`冒泡: ${count} 次`);
}

// 冒泡 - 升级版
function updatedBubble(arr) {
  let count = 0;
  let hasSwaped = false;
  for (let i = arr.length - 1; i >= 1; i--) {
    hasSwaped = false;
    for (let j = 0; j < i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        count++;
        hasSwaped = true;
        swap(arr, j, j + 1);
      }
    }
    // 没有发生置换, 意为数组已有序
    if (!hasSwaped) {
      console.log(`冒泡 - 升级版: ${count} 次`);
      return;
    }
  }
  console.log(`冒泡 - 升级版: ${count} 次`);
}

module.exports = {
  bubble,
  updatedBubble,
};

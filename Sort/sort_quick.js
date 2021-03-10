/*
 * @Author: Kaiser
 * @Date: 2021-03-03 12:58:39
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-11 06:27:37
 * @Description: 快速排序
 *
 * 快速排序使用分治法来把一个数组（array）分为两个数组（sub-array）。具体算法描述如下：
 *   1.从数列中挑出一个元素，称为 “基准”（pivot）；
 *   2.重新排序数列，所有元素比基准值小的摆放在基准前面，
 *     所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
 *     在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
 *   3.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 *
 * 动画示意图: https://pic1.zhimg.com/v2-c411339b79f92499dcb7b5f304c826f4_b.gif
 * 逻辑示意图: https://pic3.zhimg.com/80/v2-2be156e0fc5be25068224b97d0d03046_1440w.jpg
 */

const swap = require('./swap');

function quick(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    // 获取分界下标, partition会将left为基准, 将数组分成两个分组
    const partitionIndex = partition(arr, left, right);
    // 排序小于基准元素的数组
    quick(arr, left, partitionIndex - 1);
    // 排序大于基准元素的数据
    quick(arr, partitionIndex + 1, right);
  }
  return arr;
}

// partition函数会将left为基准, 将数组分成两个分组
function partition(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  // 该变量指向下一个要保存的小于基准值的下标
  let index = left + 1;
  // 开始从基准值右边开始遍历到最后一个
  for (let i = index; i <= right; i++) {
    // 如果当前元素小于基准值,则index下表对应的元素进行置换
    if (arr[i] < pivot) {
      swap(arr, i, index);
      // 指向下一个
      index++;
    }
  }
  swap(arr, left, index - 1);
  return index - 1;
}

module.exports = quick;

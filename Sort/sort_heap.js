/*
 * @Author: Kaiser
 * @Date: 2021-03-03 11:57:29
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-29 15:48:45
 * @Description: 堆排序
 * 核心逻辑:
 * 将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。
 * 将其与末尾元素进行交换，此时末尾就为最大值。
 * 然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。
 * 如此反复执行，便能得到一个有序序列了
 * 排序流程动画: https://vdn1.vzuu.com/SD/3bb38dfe-236a-11eb-8039-a6caf32b14c9.mp4?disable_local_cache=1&auth_key=1614941465-0-0-5482e07536575f85fd72370db23a6477&f=mp4&bu=pico&expiration=1614941465&v=hw
 * 参考文档: https://www.cnblogs.com/chengxiao/p/6129630.html
 */

const swap = require('./swap');

// 以倒序的方式遍历数组中的每一个非叶子节点并排序成大顶堆
function buildHeap(arr, length) {
  let len = Math.floor(length / 2);
  // 循环n次
  for (let i = len - 1; i >= 0; i--) {
    heapify(arr, i, length);
  }
}

// 将每一个非叶子节点调整成大顶堆
function heapify(arr, i, lastIndex) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < lastIndex && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < lastIndex && arr[right] > arr[largest]) {
    largest = right;
  }

  // 对顶元素不是最大值, 需要进行位置交换
  if (largest !== i) {
    swap(arr, largest, i);
    heapify(arr, largest, lastIndex);
  }
}

// 循环置换大顶堆的最大值至未排序的最后一个位置然后调整数组为大顶堆再调整
function heap(arr = []) {
  let { length } = arr;
  buildHeap(arr, length);
  for (let i = length - 1; i > 0; i--) {
    // 置换大顶堆对最后一个未排序的位置
    swap(arr, 0, i);
    // 调整大顶堆
    heapify(arr, 0, i);
  }
  return arr;
}

/************ 以下是升级版 ***********/

// 以倒序的方式遍历数组中的每一个非叶子节点并排序成大顶堆
function updatedBuildHeap(arr, length) {
  let len = Math.floor(length / 2);
  // 初始化大顶堆
  for (let i = len - 1; i >= 0; i--) {
    updatedHeapify(arr, i, length);
  }
  // 依次将大顶堆移至尾部
  for (let i = length - 1; i > 0; i--) {
    // 置换大顶堆对最后一个未排序的位置
    swap(arr, 0, i);
    // 调整大顶堆
    updatedHeapify(arr, 0, i);
  }
}

// 该方法优化, 由递归改为迭代
// 将每一个非叶子节点调整成大顶堆, 交换之后, 依次遍历其子节点
function updatedHeapify(arr, i, lastIndex) {
  let left = 2 * i + 1; // 左子节点
  let right = 2 * i + 2; // 右子节点
  let largest = i; // 最大值的下标, 初始化是堆顶的下标
  // 遍历到最后一个未排序的元素时结束
  while (true) {
    left = 2 * i + 1; // 左子节点
    right = 2 * i + 2; // 右子节点
    largest = i; // 初始化最大值为堆顶
    // 遍历超过数组后, 结束循环
    if (left >= lastIndex || right >= lastIndex) break;
    if (arr[left] > arr[largest]) largest = left;
    if (arr[right] > arr[largest]) largest = right;
    // 若最大值不是堆顶, 则交换最大值和堆顶的位置
    if (largest !== i) {
      swap(arr, largest, i);
      // 继续检查子节点是否大顶堆
      i = largest;
      continue;
    }
    break;
  }
}

// 循环置换大顶堆的最大值至未排序的最后一个位置然后调整数组为大顶堆再调整
// 升级版, 将递归改成迭代
function updatedHeap(arr = []) {
  let { length } = arr;
  if (length < 2) return arr;
  updatedBuildHeap(arr, length);
  return arr;
}

module.exports = {
  heap,
  updatedHeap,
};

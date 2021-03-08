/*
 * @Author: Kaiser
 * @Date: 2021-03-01 19:34:57
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-08 06:41:30
 * @Description: 测试性能
 */

const arr = require('./get_random_array')(10);
const timing = require('./timing');

function getItem(label, fun) {
  return { label, fun };
}

const items = [
  // getItem('冒泡', require('./sort_bubble')),
  // getItem('插入排序', require('./sort_insertion')),
  // getItem('二分法', require('./sort_binary')),
  // getItem('希尔排序', require('./sort_shell')),
  // getItem('归并排序', require('./sort_merge')),
  // getItem('基数排序', require('./sort_radix')),
  // getItem('快速排序', require('./sort_quick')),
  // getItem('堆排序', require('./sort_heap')),
  getItem('选择排序', require('./sort_selection')),
];

items.forEach(({ fun, label }) => timing(fun, arr.slice(0), label));

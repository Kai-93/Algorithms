/*
 * @Author: Kaiser
 * @Date: 2021-03-01 19:34:57
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-29 15:50:38
 * @Description: 测试性能
 * 示意图:https://www.runoob.com/wp-content/uploads/2019/03/Bucket_sort_1.svg_.png
 */

const arr = require('./get_random_array')(10);
// const arr = [5, 4, 3, 2, 1]; // 最坏的情况
// const arr = [1, 2, 3, 4, 5]; // 最佳的情况
const timing = require('./timing');

function getItem(label, fun) {
  return { label, fun };
}

const { bubble, updatedBubble } = require('./sort_bubble');
const { heap, updatedHeap } = require('./sort_heap');

const items = [
  getItem('冒泡', bubble),
  getItem('冒泡 - 升级版', updatedBubble),
  getItem('快速排序', require('./sort_quick')),
  getItem('插入排序', require('./sort_insert')),
  getItem('插入排序(二分法搜索)', require('./sort_insert_by_binary_search')),
  getItem('希尔排序', require('./sort_shell')),
  getItem('选择排序', require('./sort_selection')),
  getItem('堆排序', heap),
  getItem('堆排序 - 升级版', updatedHeap),
  // getItem('归并排序', require('./sort_merge')),
  // getItem('桶排序', require('./sort_bucket')),
  // getItem('计数排序', require('./sort_counting')),
  // getItem('基数排序', require('./sort_radix')),
];

items.forEach(({ fun, label }) => timing(fun, arr.slice(0), label));

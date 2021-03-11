/*
 * @Author: Kaiser
 * @Date: 2021-03-01 19:34:57
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-11 12:50:24
 * @Description: 测试性能
 * 示意图:https://www.runoob.com/wp-content/uploads/2019/03/Bucket_sort_1.svg_.png
 */

const arr = require('./get_random_array')(10000);
const timing = require('./timing');

function getItem(label, fun) {
  return { label, fun };
}

const items = [
  getItem('冒泡', require('./sort_bubble')),
  getItem('快速排序', require('./sort_quick')),
  getItem('插入排序', require('./sort_insert')),
  getItem('插入排序(二分法搜索)', require('./sort_insert_by_binary_search')),
  getItem('希尔排序', require('./sort_shell')),
  getItem('选择排序', require('./sort_selection')),
  getItem('堆排序', require('./sort_heap')),

  // getItem('归并排序', require('./sort_merge')),
  // getItem('基数排序', require('./sort_radix')),
  // getItem('计数排序', require('./sort_counting')),
  // getItem('桶排序', require('./sort_bucket')),
];

items.forEach(({ fun, label }) => timing(fun, arr.slice(0), label));

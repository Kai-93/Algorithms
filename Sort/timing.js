/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:11:47
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-08 06:41:39
 * @Description: 排序的计时函数
 */

// 计时函数
function timing(fun, arr, tag) {
  console.time(tag);
  fun.call(this, arr);
  console.timeEnd(tag);
  console.log(arr.join()); // 展示排序结果
}

module.exports = timing;

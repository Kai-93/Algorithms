/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:11:47
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-29 12:00:14
 * @Description: 排序的计时函数
 */

/**
 * 计时函数
 * @param {*} fun 需要记录执行时间的函数
 * @param {*} arr 参数
 * @param {*} tag 打印时间的前缀
 */
function timing(fun, arr, tag) {
  console.time(tag);
  fun.call(this, arr);
  console.timeEnd(tag);
  console.log(arr.join() + '\n'); // 展示排序结果
}

module.exports = timing;

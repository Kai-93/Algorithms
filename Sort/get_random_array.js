/*
 * @Author: Kaiser
 * @Date: 2021-03-02 21:22:08
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-02 22:38:03
 * @Description: 获取随机数据
 */
function getRandomArray(len) {
  return new Array(len).fill(1).map(() => parseInt(Math.random() * len));
}

module.exports = getRandomArray;

/*
 * @Author: Kaiser
 * @Date: 2021-03-08 12:48:13
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-08 13:01:16
 * @Description: 计数排序
 * 核心步骤:
 * 1.新建一个数组, 用于保存中间值, 下标是值, 值是数值
 * 2.遍历需要排序的数组, 以值为下标保存到第一步创建的数组中
 * 3.遍历中间数组, 返回数据
 */
const temp = [];

function counting(arr) {
  let { length } = arr;
  // 生成中间数组
  for (let i = 0; i < length; i++) {
    const value = arr[i];
    if (temp[value]) {
      temp[value].push(value);
    } else {
      temp[value] = [value];
    }
  }

  const { length: length1 } = temp;
  let count = 0;
  for (let i = 0; i < length1; i++) {
    if (temp[i]) {
      const { length: length2 } = temp[i];
      for (let j = 0; j < length2; j++) {
        arr[count] = temp[i][j];
        count++;
      }
    }
  }
  return arr;
}

module.exports = counting;

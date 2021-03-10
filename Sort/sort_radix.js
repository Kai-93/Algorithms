/*
 * @Author: Kaiser
 * @Date: 2021-03-03 07:08:13
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-09 19:28:31
 * @Description: 基数排序(radix sort), 属于桶子排序(bucket sort or bin sort)
 * 适用于整数, 从数值的最低位(即个位数开始排序),依次排序,直至最最最高位
 */

function getMax(arr = [], length) {
  let max = arr[0];
  for (let i = 1; i < length; i++) {
    const temp = arr[1];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function sort(arr, length, divisor) {
  const bucket = [];
  // 初始化分组
  for (let i = 0; i < 10; i++) {
    bucket[i] = [];
  }
  for (let i = 0; i < length; i++) {
    let current = arr[i];
    let j = parseInt(current / divisor);
    let index = getLastDigit(j);
    bucket[index].push(current);
  }

  for (let i = 0; i < length; i++) {
    arr[i] = getFirstItem(bucket);
  }
}

function getFirstItem(arr) {
  let firstArr = arr[0];
  let firstItem = firstArr.shift();
  while (firstItem === undefined) {
    if (firstArr.length) {
      firstItem = firstArr.shift();
    } else {
      arr.shift();
      firstArr = arr[0];
      firstItem = firstArr.shift();
    }
  }
  return firstItem;
}

function getLastDigit(number) {
  if (number === 0) return number;
  const str = number + '';
  return str[str.length - 1];
}

function radix(arr) {
  const { length } = arr;
  const max = getMax(arr, length);
  for (let divisor = 1; divisor <= max; divisor *= 10) {
    sort(arr, length, divisor);
  }
}

module.exports = radix;

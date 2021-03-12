/*
 * @Author: Kaiser
 * @Date: 2021-03-09 19:31:34
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-12 09:40:15
 * @Description: 桶排序
 */

const insert = require('./sort_insert');

function bucket(arr, bucketSize = 100) {
  if (arr.length === 0) return arr;

  // 获取最小值
  let minValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }

  // 将数值撞到桶中
  const buckets = [];
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor((arr[i] - minValue) / bucketSize);
    if (!buckets[index]) buckets[index] = [];
    buckets[index].push(arr[i]);
  }

  // 处理结果
  arr.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    insert(buckets[i]); // 对每个桶进行排序，这里使用了插入排序
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }

  return arr;
}
module.exports = bucket;

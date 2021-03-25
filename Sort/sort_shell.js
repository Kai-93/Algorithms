/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:09:56
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-25 17:31:21
 * @Description: 希尔排序
 * 核心逻辑: 以gap进行分组, 并排序, 每次排序gap/2, 向下取整, 直至gap < 1
 */

const BASE = 2;

// 希尔排序
function shell(arr) {
  let temp;
  const len = arr.length;
  let gap = Math.floor(len / BASE);
  while (gap >= 1) {
    for (let i = 0; i <= len - gap; i++) {
      // 对每个分组进行插入排序, 分组为 a[i], a[i+gap], ... a[i+gap*n]
      // 通过分组排序, 对比插入排序减少了交换的次数
      temp = arr[i];
      let preIndex = i - gap;
      while (arr[preIndex] > temp && preIndex >= 0) {
        arr[preIndex + gap] = arr[preIndex];
        preIndex -= gap;
      }
      arr[preIndex + gap] = temp;
    }
    gap = Math.floor(gap / BASE);
  }
}

module.exports = shell;

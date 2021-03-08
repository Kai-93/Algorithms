/*
 * @Author: Kaiser
 * @Date: 2021-03-02 13:09:56
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-02 23:03:27
 * @Description: 希尔排序
 * 核心逻辑: 以gap进行分组, 并排序, 每次排序gap/2, 向下取整, 直至gap < 1
 */

// 希尔排序
function shell(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap >= 1) {
    for (let i = 0; i <= len - gap; i++) {
      // 对每个分组进行排序
      const temp = arr[i];
      let preIndex = i - gap;
      while (arr[preIndex] > temp && preIndex >= 0) {
        arr[preIndex + gap] = arr[preIndex];
        preIndex -= gap;
      }
      arr[preIndex + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }
}

module.exports = shell;

/*
 * @Author: Kaiser
 * @Date: 2021-03-02 22:05:20
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-03 07:12:53
 * @Description: 插入排序
 * 核心逻辑: 将元素插入有序数据
 */

function insertion(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    const temp = arr[i];
    let preIndex = i - 1;
    // 找到当前元素的位置, 并将大于当前元素的元素往后移
    while (arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    // 将当前元素放置于该放的位置
    arr[preIndex + 1] = temp;
  }
}

module.exports = insertion;

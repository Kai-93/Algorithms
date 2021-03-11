/*
 * @Author: Kaiser
 * @Date: 2021-03-02 22:05:20
 * @Last Modified by: Kaiser
 * @Last Modified time: 2021-03-11 08:40:05
 * @Description: 插入排序
 * 核心逻辑: 将元素插入有序数据
 */
function insert(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let preIndex = i - 1;
    // 发生逆序，往前插入
    if (current > arr[i - 1]) continue;
    // 找到当前元素的位置, 并将大于当前元素的元素往后移
    while (arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    // 将当前元素放置于该放的位置
    arr[preIndex + 1] = current;
  }
}

module.exports = insert;

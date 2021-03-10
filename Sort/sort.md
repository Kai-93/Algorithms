# 十大排序算法

* 冒泡排序
* 选择排序
* 插入排序
* 希尔排序
* 归并排序
* 快速排序
* 堆排序
* 计数排序
* 桶排序
* 基数排序
* 二分法排序

## 前期准备

前置定义一些公共函数

### 置换函数

#### 核心逻辑

实现数组中两个不同下标的元素互换位置

#### 代码实现

```JavaScript

/**
 * 交换函数
 * @param {源数组} arr
 * @param {原数组的A项} i
 * @param {原数组的B项} j
 */
function swap(arr, i, j) {
  if (arr.length < 2 || i === j) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

```

### 计时函数

#### 核心逻辑

记录每隔排序算法执行的时间

#### 代码实现

```JavaScript

// 计时函数
function timing(fun, arr, tag) {
  console.time(tag);
  fun.call(this, arr);
  console.timeEnd(tag);
  // console.log(arr.join()); // 展示排序结果
}

```

## 冒泡排序

### 核心逻辑

遍历无序数组的每一个元素, 遍历每一个元素时与无序数组中的每一个元素比大小, 若小(大)并交换位置

### 代码实现

```JavaScript

// 冒泡
function bubble(arr) {
  const length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
}

```

## 选择排序

### 核心逻辑

遍历无序数组的每一个元素, 遍历每一个元素时与无序数组中的每一个元素比大小, 确定最值并保存至有序数组中(数组中的第一个或最后一个)

### 代码实现

```JavaScript

function selection(arr) {
  let { length } = arr;
  // 从最后一个开始
  for (let i = length - 1; i >= 0; i--) {
    let max = i;
    // 从最后第二个开始
    for (let j = i - 1; j > 0; j--) {
      // 若最大值小于当前的值, 则记录当前值为最大值
      if (arr[max] < arr[j]) max = j;
    }
    // 将最大值交换至有序数组第一个
    swap(arr, max, i);
  }
  return arr;
}

```

### 差异分析

与冒泡的实现相比, 提升的效率来自于较少了交换次数, 即调用swap的次数, 空间换时间(max变量)

## 插入排序

### 核心逻辑

遍历无序数组的每一个元素, 将每个元素插入值至有序数组中, 即有个指针保存着当前遍历元素前一个元素的下标, 将指针值递减, 其值对应的元素依次与当前元素作比较与交换, 一直到达不满足交换的位置

### 代码实现

```JavaScript

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

```

## 排序名称

### 核心逻辑

### 代码实现

```JavaScript



```


# 参考文档

<https://www.runoob.com/w3cnote/ten-sorting-algorithm.html/>
<https://segmentfault.com/a/1190000004994003#/>
<https://zhuanlan.zhihu.com/p/73714165/>

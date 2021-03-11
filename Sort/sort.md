# 十大排序算法

* 比较类排序
  * 交换排序
    * 冒泡排序
    * 快速排序
  * 插入排序
    * 插入排序
    * 希尔排序
  * 选择排序
    * 选择排序
    * 堆排序
  * 归并排序
    * 归并排序
* 非比较排序
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

倒序遍历无序数组(arr)的每一个元素(arr[i]), 遍历每一个元素(arr[i])时与无序数组(arr)中的其余元素(arr[j])作比较, 若作比较并交换位置(swap(arr, i, j)), 直至无序数组(arr)遍历完毕

### 代码实现

```JavaScript

// 冒泡
function bubble(arr) {
  const length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {****
        swap(arr, i, j);
      }
    }
  }
}

```

## 快速排序

### 核心逻辑

从无序数据中找到基准值(pivot), 本文中是数组中的第一个元素, 所有小于基准值(pivot)的将会被置换到其左侧, 所有大于基准值(pivot)的将会被置换至其右侧, 之后以基准值(pivot)为届分成数组, 继续上述操作, 直至数组中不能被分成两个数组为止(即不满足left < right)

### 代码实现

```JavaScript

// 快速排序
function quick(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    // 获取分界下标, partition会将left为基准, 将数组分成两个分组
    const partitionIndex = partition(arr, left, right);
    // 排序小于基准元素的数组
    quick(arr, left, partitionIndex - 1);
    // 排序大于基准元素的数据
    quick(arr, partitionIndex + 1, right);
  }
  return arr;
}

// partition函数会将left为基准, 将数组分成两个分组
function partition(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  // 该变量指向下一个要保存的小于基准值的下标
  let index = left + 1;
  // 开始从基准值右边开始遍历到最后一个
  for (let i = index; i <= right; i++) {
    // 如果当前元素小于基准值,则index下表对应的元素进行置换
    if (arr[i] < pivot) {
      swap(arr, i, index);
      // 指向下一个
      index++;
    }
  }
  swap(arr, left, index - 1);
  return index - 1;
}

```

### 差异分析

与冒泡的实现相比, 通过将数组以基准值(pivot)拆分再排序和交换, 减少了比较和交换的次数.

## 插入排序

### 核心逻辑

遍历无序数组(arr)的每一个元素(arr[i]), 将每个元素(arr[i])插入值至有序数组(arr[0 到 i-1])中, 即有个指针(preIndex)保存着当前元素前一个元素的下标(preIndex = i - 1), 并将指针值递减(preIndex -= 1), 指针值对应的元素(arr[preIndex])依次与当前元素(arr[i])作比较, 满足条件(arr[preIndex] > arr[i])就交换, 直到当前元素应该在的位置(即不满足交换条件), 最后将当前元素交换至该位置(arr[preIndex + 1] = arr[i])

### 代码实现

```JavaScript

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

```

## 插入排序(二分法搜索)

### 核心逻辑

与插入排序的区别在于, 使用了二分法定位了当前元素(arr[i])的插入位置, 以及减少了arr[preIndex]的取值操作(其成本较高)

### 代码实现

```JavaScript

// 二分查找
function binarySearch(arr, maxIndex, currentValue) {
  let min = 0;
  let max = maxIndex;
  while (min <= max) {
    let temp = Math.floor((min + max) / 2);
    if (arr[temp] < currentValue) {
      min = temp + 1;
    } else {
      max = temp - 1;
    }
  }
  return min;
}
// 插入排序 - 二分法搜索
function insert(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let preIndex = i - 1;
    // 发生逆序，往前插入
    if (current > arr[i - 1]) continue;
    const insertIndex = binarySearch(arr, i - 1, current);
    // 从尾部开始交换元素直至当前元素(arr[i])的插入位置
    while (preIndex >= insertIndex) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    arr[insertIndex] = current;
  }
}

```

## 希尔排序

### 核心逻辑

定义gap=arr.length/2对数组进行分组并排序, 再以gap/=2进行分组并排序, 直至gap小于1
以gap分组的意思如下
a[i], a[i+gap], ... a[i+gap*n]
gap=1时, 等同于插入排序

### 代码实现

```JavaScript

// 希尔排序
function shell(arr) {
  const len = arr.length;
  let gap = Math.floor(len / BASE);
  while (gap >= 1) {
    for (let i = 0; i <= len - gap; i++) {
      // 对每个分组进行插入排序, 分组为 a[i], a[i+gap], ... a[i+gap*n]
      // 通过分组排序, 对比插入排序减少了交换的次数
      const temp = arr[i];
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

```


## 选择排序

### 核心逻辑

倒序遍历无序数组(arr)的每一个元素(arr[i]), 遍历每一个元素(arr[i])时与无序数组中的其余元素(arr[j])作比较, 确定最值(arr[max] < arr[j])并保存至有序数组(arr[i+1 到 arr.length-1])中

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

与冒泡的实现相比, 提升的效率来自于减少了交换(swap)次数, 通过max变量暂存了最大值的下标留以交换



## 堆排序

### 核心逻辑

堆的性质:

* 是一颗完全二叉树
* 每个节点的值都大于(小于)等于其子节点的值, 为大顶堆(小顶堆)


将无序数组构 **建成大顶堆**, 然后从arr[arr.length-1]遍历至arr[1], 每次遍历都将大顶堆(a[0])与当前元素(arr[i])交换位置, 但每次交换都有可能会破坏大顶堆, 故需要重新将数组(arr[0]到arr[i-1]) **整理成新的大顶堆**, 再继续遍历, 直至i=1.

**建成大顶堆的逻辑**:

从数组尾部开始整理, a[i]为顶, a[2*i+1]为左叶子节点, a[2*i+1]为右叶子节点, 将该对整理成大顶堆, 整理完成之后, 若存在交换, 需要将以交换的子节点为顶点的大顶堆也整理成大顶堆, 继续整理交换的子节点直至整理到最后一个子节点, 然后继续遍历数据, 直至遍历到arr[0]

**整理成新的大顶堆的逻辑**: 

若当前遍历到i, 则a[i]为顶, a[2*i+1]为左叶子节点, a[2*i+1]为右叶子节点, 将该对整理成大顶堆, 整理完成之后, 若存在交换, 需要将以交换的子节点为顶点的大顶堆也整理成大顶堆, 继续整理交换的子节点直至整理到最后一个子节点

### 代码实现

```JavaScript



```



## 归并排序

### 核心逻辑

### 代码实现

```JavaScript



```



## 计数排序

### 核心逻辑

### 代码实现

```JavaScript



```



## 桶排序

### 核心逻辑

### 代码实现

```JavaScript



```



## 基数排序

### 核心逻辑

### 代码实现

```JavaScript



```

## 二分法

### 核心逻辑

### 代码实现

```JavaScript



```


[1]: https://www.runoob.com/w3cnote/ten-sorting-algorithm.html
[2]: https://segmentfault.com/a/1190000004994003#
[3]: https://zhuanlan.zhihu.com/p/73714165

https://www.zybuluo.com/mdeditor

# 十大排序算法

* 比较类排序
  * 交换排序
    * 冒泡排序
    * 快速排序
  * 插入排序
    * 插入排序
    * 插入排序(二分法搜索)
    * 希尔排序
  * 选择排序
    * 选择排序
    * 堆排序
  * 归并排序
    * 归并排序
* 非比较排序
  * 桶排序
  * 计数排序
  * 基数排序

# 前期准备

前置定义一些公共函数

## 置换函数

### 核心逻辑

实现数组中两个不同下标的元素互换位置

### 代码实现

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

## 计时函数

### 核心逻辑

记录每隔排序算法执行的时间

### 代码实现

```JavaScript

// 计时函数
function timing(fun, arr, tag) {
  console.time(tag);
  fun.call(this, arr);
  console.timeEnd(tag);
  // console.log(arr.join()); // 展示排序结果
}

```

# 冒泡排序

## 核心逻辑

### 冒泡 - 原始版

倒序遍历无序数组(arr)的坐标为i,i+1到arr.length下标的数组意为有序数组, 遍历无序数组(0到i下标)中的其余元素(arr[j]), 若arr[j]>arr[j+1],则交换位置(swap(arr, j, j+1)), 直至无序数组(arr)遍历完毕

### 冒泡 - 升级版

与原始版相比, 升级版新增一个标识用以保存, 当前次j下标的冒泡是否有进行元素的置换, 若无则表明数组已有序, 无需再冒泡.

## 代码实现

```JavaScript

// 冒泡 - 原始版
function bubble(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        count++;
        swap(arr, j, j + 1);
      }
    }
  }
  console.log(`冒泡: ${count} 次`);
}

// 冒泡 - 升级版
function updatedBubble(arr) {
  let count = 0;
  let hasSwaped = false;
  for (let i = arr.length - 1; i >= 1; i--) {
    hasSwaped = false;
    for (let j = 0; j < i; j++) {
      count++;
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], arr[j + 1]);
        count++;
        hasSwaped = true;
        swap(arr, j, j + 1);
      }
    }
    // 没有发生置换, 意为数组已有序
    if (!hasSwaped) {
      console.log(`冒泡 - 升级版: ${count} 次`);
      return;
    }
  }
  console.log(`冒泡 - 升级版: ${count} 次`);
}

```

## 算法复杂度

### 原始版

时间复杂度: O(n^2), (n*(n-1))/2

时间复杂度(最坏): O(n^2), 完全逆序, 每次遍历都要交换, (n*(n-1))/2 + (n*(n-1))/2 = (n*(n-1))

时间复杂度(最佳): O(n^2), 完全正序, 一次交换都没发生, (n*(n-1))/2

空间复杂度: O(1), 交换声明了一个变量

### 升级版

升级版优化了在遍历过程中若发现当前数组已经是有序就返回

时间复杂度: O(n^2), (n*(n-1))/2

时间复杂度(最坏): O(n^2), 完全逆序, 每次遍历都要交换, (n*(n-1))/2 + (n*(n-1))/2 = (n*(n-1))

时间复杂度(最佳): O(n), 完全正序, 遍历一次即可

空间复杂度: O(1), 交换声明了一个变量

# 快速排序

## 核心逻辑

从无序数据中找到基准值(pivot), 本文中是数组中的第一个元素, 遍历数组, 将所有小于基准值(pivot)的将会被置换到其左侧, 所有大于基准值(pivot)的将会被置换至其右侧, 之后以基准值(pivot)为界分成两个数组, 对这俩数组继续上述操作, 直至数组中不能被分成两个数组为止(即不满足left < right), 即arr中只包含一个元素, 此时它的父数组是有序的

## 代码实现

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

## 差异分析

与冒泡的实现相比, 通过将数组以基准值(pivot)拆分再排序和交换, 减少了比较和交换的次数.

## 算法复杂度

将数组的以pivot为界拆分的结构理解成二叉树, 那么每轮拆分遍历n次, 一共的轮数是这颗树的深度log2(n), 

时间复杂度: O(n*log2(n)), n*log2(n)

时间复杂度(最坏): O(n^2), 这棵树是斜树的情况下, 深度n, 每次遍历n-i, i为当前遍历的轮数, 故为 c

时间复杂度(最佳): O(n*log2(n)), 该树是完全二叉树, 即为 n*log2(n)

空间复杂度: O(log2(n)), 跟树的深度相当, 因为采用了递归

# 插入排序

## 核心逻辑

遍历无序数组(arr)的每一个元素(arr[i]), 将每个元素(arr[i])插入值至有序数组(arr[0到i-1])中, 在插入时有个指针(preIndex)保存着当前元素前一个元素的下标(preIndex初始值i-1), 并将指针值递减(preIndex-=1), 指针值对应的元素(arr[preIndex])依次与当前元素(arr[i])作比较, 满足条件(arr[preIndex]>arr[i])就交换, 直到当前元素应该在的位置(即不满足交换条件), 最后将当前元素交换至该位置(arr[preIndex+1]=arr[i])

## 代码实现

```JavaScript

function insert(arr) {
  const length = arr.length;
  let current = ''
  for (let i = 1; i < length; i++) {
     current = arr[i];
    let preIndex = i - 1;
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

## 算法复杂度

时间复杂度: O(n^2), (1+(n-1))*(n-1)/2

时间复杂度(最坏): O(n^2), 数组是倒序时, 第i个元素需要遍历并交换i次, 共计 (1+(n-1))*(n-1)/2

时间复杂度(最佳): O(n), 数组是正序时, 遍历一次即可

空间复杂度: O(1)

# 插入排序(二分法搜索)

## 核心逻辑

与插入排序的区别在于, 使用了二分法定位了当前元素(arr[i])的插入位置, 以及减少了arr[preIndex]的取值操作和比较的操作(其成本较高), 移动的次数不变

## 代码实现

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
## 算法复杂度

时间复杂度: O(n*log2(n)) - O(n^2), n*log2(n) - (1+(n-1))*(n-1)/2, 

时间复杂度(最坏): O(n^2), 数组是倒序时, n*log2(n) - (1+(n-1))*(n-1)/2, 

时间复杂度(最佳): O(n), 数组是正序

空间复杂度: O(1)

# 希尔排序

## 核心逻辑

定义gap=arr.length/2对数组进行分组并排序, 再以gap/=2进行分组并排序, 直至gap小于1
以gap分组的意思如下
a[i], a[i+gap], ... a[i+gap*n]
gap=1时, 等同于插入排序

## 代码实现

```JavaScript

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

```
## 算法复杂度

### 算法执行步骤

|       i |     gap |    组数 | 每个分组的元素数量 |            每个分组比较的次数 |   比较次数(每个分组比较的次数 * 组数) |
| ------: | ------: | ------: | -----------------: | ----------------------------: | ------------------------------------: |
|       1 |     n/2 |     n/2 |                  2 |                             1 |                                 1*n/2 |
|       2 |     n/4 |     n/4 |                  4 |                         1+2+3 |                           (1+2+3)*n/4 |
|     ... |     ... |     ... |                ... |                           ... |                                   ... |
|       i | n/(2^i) | n/(2^i) |              (2^i) | 1+2+3+..(2^i-1)=(2^i-1)*2^i/2 | n/(2^i) * (2^i-1)*(2^i)/2=n*(2^i-1)/2 |
|     ... |     ... |     ... |                ... |                           ... |                                   ... |
| log2(n) |       1 |       1 |                  n |       1+2+3+..(n-1)=(n-1)*n/2 |                           (n-1)*n/2*1 |
### 算法复杂度

#### 时间复杂度: O(n*log2(n)) - O(n^2) 

i=1到log2(n), 设复杂度sum=∑(n*(2^i-1)/2) = n^2-n-(n/2)*log2(2)

sum = n*(log2(2^n/n^(1/2)) - 1)
* sum < n*(2^log2(n) - 1) < n^2
* sum = n*(log2(2^n/n^(1/2)) - 1)... 约不出来呀, 查询得 sum > n*log2(n)

时间复杂度(最坏): O(n^2)

时间复杂度(最佳): O(n*log2(n))

空间复杂度: O(1)


# 选择排序

## 核心逻辑

倒序遍历无序数组(arr)的每一个元素(arr[i]), 遍历每一个元素(arr[i])时与无序数组中的其余元素(arr[j])作比较, 确定最值(arr[max] < arr[j])并保存至有序数组(arr[i+1 到 arr.length-1])的arr[i]中

## 代码实现

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

## 差异分析

与冒泡的实现相比, 提升的效率来自于减少了交换(swap)次数, 通过max变量暂存了最大值的下标留以交换



# 堆排序

## 核心逻辑

堆的性质:

* 是一颗完全二叉树
* 每个节点的值都大于(小于)等于其子节点的值, 为大顶堆(小顶堆)


将无序数组构 **建成大顶堆**, 然后从arr[arr.length-1]遍历至arr[1], 每次遍历都将大顶堆(a[0])与当前元素(arr[i])交换位置, 但每次交换都有可能会破坏大顶堆, 故需要重新将数组(arr[0]到arr[i-1]) **整理成新的大顶堆**, 再继续遍历, 直至i=1.

**建成大顶堆的逻辑**:

从数组尾部开始整理, a[i]为顶, a[2*i+1]为左叶子节点, a[2*i+1]为右叶子节点, 将该对整理成大顶堆, 整理完成之后, 若存在交换, 需要将以交换的子节点为顶点的大顶堆也整理成大顶堆, 继续整理交换的子节点直至整理到最后一个子节点, 然后继续遍历数据, 直至遍历到arr[0]

**整理成新的大顶堆的逻辑**: 

若当前遍历到i, 则a[i]为顶, a[2*i+1]为左叶子节点, a[2*i+1]为右叶子节点, 将该对整理成大顶堆, 整理完成之后, 若存在交换, 需要将以交换的子节点为顶点的大顶堆也整理成大顶堆, 继续整理交换的子节点直至整理到最后一个子节点

## 代码实现

```JavaScript

// 以倒序的方式遍历数组中的每一个非叶子节点并排序成大顶堆
function buildHeap(arr, length) {
  let len = Math.floor(length / 2);
  for (let i = len - 1; i >= 0; i--) {
    heapify(arr, i, length);
  }
}

// 将每一个非叶子节点调整成大顶堆
function heapify(arr, i, lastIndex) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < lastIndex && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < lastIndex && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, largest, i);
    heapify(arr, largest, lastIndex);
  }
}

// 循环置换大顶堆的最大值至未排序的最后一个位置然后调整数组为大顶堆再调整
function heap(arr = []) {
  let { length } = arr;
  buildHeap(arr, length);

  for (let i = length - 1; i > 0; i--) {
    // 置换大顶堆对最后一个未排序的位置
    swap(arr, 0, i);
    // 调整大顶堆
    heapify(arr, 0, i);
  }
  return arr;
}

```

## 差异分析

与选择排序的实现相比, 提升的效率来自于查找最大值的效率优化

# 归并排序

## 核心逻辑

归并排序就是将大问题即大数组排序分解成小问题即小数组的排序

concat函数可以将两个有序数组合并成有序数组

merge函数可以将一个无序数组分为left和right两个无序数组, 并通过递归使用merge函数处理处理left和right数组, 并使用concat函数合并.

公式详解:
 
merge(arr) 
= concat(merge(left), merge(right))
= concat(concat(merge(left-left), merge(left-right)), concat(merge(right-left), merge(right-right)))

...

= concat(concat(...concant([有一个元素 or 无], [有一个元素 or 无])),concat(...concat([有一个元素 or 无], [有一个元素 or 无])))


concant([有一个元素 or 无], [有一个元素 or 无]) 该结构开始形成有效数组, 逐步计算等式最终将无序数组处理成有序数组

## 代码实现

```JavaScript

function merge(arr) {
  const { length } = arr;
  if (length < 2) return arr;
  const mid = Math.floor(length / 2);
  return concat(merge(arr.slice(0, mid)), merge(arr.slice(mid)));
}

function concat(left, right) {
  const arr = [];
  /**
   * 此处可优化
   * 可优化的情况为:
   * 1.left[left.length-1] <= right[0]
   * 2.left[0] >= right[right.length-1]
   * 这两种情况, 直接处理数组
   */
  while (left.length && right.length) {
    arr.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return arr.concat(left, right);
}

```


# 桶排序

## 核心逻辑

将数组中的数组, 按数值分别装入范围有序增长的桶中, 即每个桶中允许存放的最大值和最小值的差是相等的, 且相邻桶两个桶, 前置的最大值加一等于后者的最小值, 桶中最大值和最小值的差可自定义, 再将各个桶进行插入排序, 最后依次将桶中的元素输出成最终的有序数组

## 代码实现

```JavaScript

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

```

# 计数排序

## 核心逻辑

1.新建一个数组, 用于保存中间值, 下标是值, 值是数值
2.遍历需要排序的数组, 以值为下标保存到第一步创建的数组中
3.遍历中间数组, 返回数据

## 代码实现

```JavaScript

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

```

# 基数排序

## 核心逻辑

适用于整数, 与桶排序类似, 从数值的最低位(即个位数开始排序), 依次排序, 直至最最最高位

## 代码实现

```JavaScript


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

```

# 总结

| 排序方法             | 时间复杂度(平均) | 时间复杂度(最佳) | 时间复杂度(最坏) | 空间复杂度 | 稳定性 |
| -------------------- | ---------------: | :--------------: | ---------------: | ---------: | -----: |
| 冒泡排序             |           O(n^2) |       O(n)       |           O(n^2) |       O(1) |   稳定 |
| 快速排序             |                  |                  |                  |            |        |
| 插入排序             |                  |                  |                  |            |        |
| 插入排序(二分法搜索) |                  |                  |                  |            |        |
| 希尔排序             |                  |                  |                  |            |        |
| 选择排序             |                  |                  |                  |            |        |
| 堆排序               |                  |                  |                  |            |        |
| 归并排序             |                  |                  |                  |            |        |
| 桶排序               |                  |                  |                  |            |        |
| 计数排序             |                  |                  |                  |            |        |
| 基数排序             |                  |                  |                  |            |        |

[1]: https://www.runoob.com/w3cnote/ten-sorting-algorithm.html
[2]: https://segmentfault.com/a/1190000004994003#
[3]: https://zhuanlan.zhihu.com/p/73714165

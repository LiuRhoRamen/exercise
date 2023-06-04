function buildHeap(arr) {
  let len = arr.length;
  // 从最后一个非叶子节点开始堆化，最后一个非叶子节点计算：2i+1=len-1 => i = len/2 - 1
  let start = Math.floor(len / 2) - 1;
  for (let i = start; i >= 0; i--) {
    heapify(arr, i, len);
  }
}

function heapify(arr, i, len) {
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  let n = len - 1; // 最大序列
  let max = i; // 最大值的指针
  // 比较大小前先确保子节点存在
  if (l <= n && arr[l] > arr[max]) {
    max = l;
  }
  if (r <= n && arr[r] > arr[max]) {
    max = r;
  }
  // 如果最大值不是跟节点，则交换并向下堆化
  if (max !== i) {
    swap(arr, max, i);
    heapify(arr, max, len);
  }
}

// 交换两个数
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function heapSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  let result = [];
  buildHeap(arr);
  while (arr.length > 0) {
    result.push(arr.splice(0, 1)[0]);
    buildHeap(arr);
  }
  return result;
}

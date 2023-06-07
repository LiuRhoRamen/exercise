function insertionSort(arr) {
  let len = arr.length;
  if (arr.length <= 1) return arr;
  for (let i = 1; i <= len - 1; i++) {
    let current = arr[i]; // 待插入的值
    // 从后往前遍历已排序区间
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j]; // 往后移
        arr[j] = current;
      } else {
        arr[j + 1] = current; // 插入并结束遍历
        break;
      }
    }
  }
  return arr;
}

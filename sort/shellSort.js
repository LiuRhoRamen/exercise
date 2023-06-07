function shellSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  // 设置gap，从length/2开始，每次都/2
  for (let gap = Math.floor(len / 2); gap >= 1; gap = Math.floor(gap / 2)) {
    // 带gap的插入排序
    for (let i = gap; i <= len - 1; i++) {
      let current = arr[i];
      for (let j = i - gap; j >= 0; j -= gap) {
        if (arr[j] > current) {
          arr[j + gap] = arr[j];
          arr[j] = current;
        } else {
          arr[j + gap] = current;
          break;
        }
      }
    }
  }
  return arr;
}

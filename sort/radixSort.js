// 基数排序
function radixSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  let max = Math.max.apply(null, arr);
  let maxDigits = max.toString().length; // 最大数的位数
  let bucket = []; // 用于排序的桶
  for (let i = 0; i < maxDigits; i++) {
    for (let j = 0; j <= len - 1; j++) {
      let index = parseInt((arr[j] % Math.pow(10, i + 1)) / Math.pow(10, i)); // 获取每一项当前位数的值
      if (!bucket[index]) {
        bucket[index] = [arr[j]];
      } else {
        bucket[index].push(arr[j]);
      }
    }
    arr = bucket.reduce((prev, curr) => prev.concat(curr), []);
  }
  return arr;
}

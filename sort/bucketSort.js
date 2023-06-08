function bucketSort(arr, bucketCount = 3) {
  let len = arr.length;
  if (len <= 1) return arr;
  let buckets = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i <= len - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let interval = Math.ceil((max - min) / bucketCount);
  if (!interval) return arr; // 数组的值全部相等
  for (let i = 0; i <= len - 1; i++) {
    let bucketIndex = Math.floor((arr[i] - min) / interval); // 桶编号
    if (!buckets[bucketIndex]) {
      buckets[bucketIndex] = [];
    }
    buckets[bucketIndex].push(arr[i]);
  }
  return buckets.reduce((prev, curr) => {
    return prev.concat(bucketSort(curr)); // 对每个桶递归桶排序
  }, []);
}

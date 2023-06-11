// 洗牌算法
function shuffle(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  for (let i = len - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1)); // 从未随机的序列里随机选一个
    swap(arr, i, randomIndex);
  }
  return arr;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

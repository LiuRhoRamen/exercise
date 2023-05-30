function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randomPivotIndex(left, right) {
  return Math.floor(Math.random() * (right - left + 1) + left);
}

function partition(arr, left, right) {
  let len = arr.length;
  if (len <= 1 || left > right || left > len - 1 || right > len - 1) return;
  let l = left;
  let r = right;
  let pivot = arr[randomPivotIndex(left, right)];
  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      swap(arr, l, r);
      l++;
      r--;
    }
  }
  if (left < l - 1) partition(arr, left, l - 1);
  if (l < right) partition(arr, l, right);
}

function quickSort(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  partition(arr, 0, len - 1);
  return arr;
}

function quickSort2(arr) {
  let len = arr.length;
  if (len <= 1) return arr;
  let pivotIndex = randomPivotIndex(0, len - 1);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return partition2(left).concat(pivot, partition2(right));
}

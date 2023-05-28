// 合并两个升序数组，并输出合并后的升序数组
function merge(left, right) {
  let result = [];
  let l = 0;
  let r = 0;
  while (left[l] !== undefined && right[r] !== undefined) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  if (left[l] === undefined) {
    return result.concat(right.slice(r));
  } else {
    return result.concat(left.slice(l));
  }
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 7, 9, 2, 3, 0, 1]));

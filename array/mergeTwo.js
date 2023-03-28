// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。

// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]
function mergeTwoArr1(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

function mergeTwoArr2(arr1, arr2, result = []) {
  if (!arr1.length) {
    return result.concat(arr2);
  }

  if (!arr2.length) {
    return result.concat(arr1);
  }

  if (arr1[0] < arr2[0]) {
    result = result.concat(arr1.shift());
    return mergeTwoArr2(arr1, arr2, result);
  } else {
    result = result.concat(arr2.shift());
    return mergeTwoArr2(arr1, arr2, result);
  }
}

function mergeTwoArr3(arr1, arr2) {
  let p1 = arr1.length - 1;
  let p2 = arr2.length - 1;
  let l = arr1.length + arr2.length - 1;
  while (l >= 0) {
    if (p1 < 0) {
      arr1[l--] = arr2[p2--];
      continue;
    }
    arr1[l--] = arr1[p1] > arr2[p2] ? arr1[p1--] : arr2[p2--];
  }
  return arr1;
}

// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。
function intersection1(arr1, arr2) {
  const result = new Set();
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.add(arr1[i]);
      }
    }
  }
  return Array.from(result);
}

// 编写一个函数计算多个数组的交集
function intersection2(arr1, arr2) {
  return [...new Set(arr1.filter((item) => arr2.includes(item)))];
}

function multiIntersection(...args) {
  if (args.length < 2) {
    return [];
  }

  return args.reduce((arr1, arr2) => {
    return [...new Set(arr1.filter((item) => arr2.includes(item)))];
  });
}

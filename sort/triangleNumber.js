// 有效三角形的个数: 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。
// 示例 1:

// 输入: [2,2,3,4]
// 输出: 3
// 解释:
// 有效的组合是:
// 2,3,4 (使用第一个 2)
// 2,3,4 (使用第二个 2)
// 2,2,3
// 注意:

// 数组长度不超过1000。
// 数组里整数的范围为 [0, 1000]。
function triangleNumber(arr) {
  let len = arr.length;
  if (len < 3) return 0;
  let result = 0;
  arr = arr.sort((a, b) => a - b); // 正序排序
  for (let i = len - 1; i >= 2; i--) {
    let longest = arr[i]; // 最长边
    let j = 0; // 最短边
    let k = i - 1; // 次长边
    while (j < k) {
      // 如果最短边+次长边>最长边，那么比最短边长的，一定都满足要求
      if (arr[j] + arr[k] > longest) {
        result += k - j;
        k--;
      } else {
        j++;
      }
    }
  }
  return result;
}

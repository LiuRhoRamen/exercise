// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组

function flat(arr, record = {}) {
  if (!Array.isArray(arr)) {
    if (record[arr] !== 1) {
      record[arr] = 1;
      return arr;
    }
    return;
  }

  return arr.reduce((result, item) => {
    const flatItem = flat(item, record);
    return flatItem ? result.concat(flatItem) : result;
  }, []);
}

function main(arr) {
  return flat(arr).sort((a, b) => a - b);
}
console.log(
  main([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10])
);

function countingSort(arr) {
  let bucket = arr.reduce((prev, curr) => {
    if (!prev[curr]) {
      prev[curr] = 0;
    }
    prev[curr]++;
    return prev;
  }, []);
  return bucket.reduce((prev, curr, index) => {
    while (curr > 0) {
      prev.push(index);
      curr--;
    }
    return prev;
  }, []);
}

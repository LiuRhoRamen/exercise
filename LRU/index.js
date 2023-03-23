// LRU算法，Least Recently Used ：最近最少使用，缓存淘汰策略

class LRUCache {
  constructor(volumn = 3) {
    this.volumn = volumn;
    this.cache = [];
  }

  findItemIndex(key) {
    return this.cache.find((obj) => obj.key === key);
  }

  addItem(key, val) {
    this.cache.push({ key, value: val });
  }

  get(key) {
    if (!key) return;
    const index = findItemIndex(key);
    if (index > -1) {
      const target = this.cache.splice(index, 1);
      this.cache.push(target);
      return target.value;
    }
    return;
  }

  put(key, val) {
    const index = findItemIndex(key);
    if (index > -1) {
      this.cache[index].value = val;
    } else {
      if (this.cache.length === this.volumn) {
        this.cache.shift();
      }
      addItem(key, val);
    }
  }
}

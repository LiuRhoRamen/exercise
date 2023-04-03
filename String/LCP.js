// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
function LCP(arr) {
  const result = [];
  const len = arr[0].length;
  let i = 0;
  while (i < len) {
    let w = arr[0].charAt(i);
    if (!arr.every((str) => str.charAt(i) === w)) {
      break;
    }
    result.push(w);
    i++;
  }
  return result.join("");
}

// 分治
function LCP2(arr) {
  function lcp(arr) {
    let len = arr.length;
    if (len === 1) {
      return arr[0];
    }

    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, len);
    return lcpTwo(lcp(left), lcp(right));
  }

  function lcpTwo(str1, str2) {
    let i = 0;
    for (; i < str1.length && i < str2.length; i++) {
      if (str1.charAt(i) !== str2.charAt(i)) {
        break;
      }
    }
    return str1.substring(0, i);
  }

  if (!arr || !arr.length) {
    return "";
  }

  return lcp(arr);
}

// Trie字典树
class TrieNode {
  constructor() {
    this.next = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(words) {
    if (!words) {
      return false;
    }

    let i = 0;
    let len = words.length;
    let p = this.root;
    while (i < len) {
      let w = words.charAt(i);
      if (!p.next[w]) {
        p.next[w] = new TrieNode();
      }
      p = p.next[w];
      i++;
    }
    p.isEnd = true;
    return true;
  }

  searchLCP() {
    let p = this.root;
    let result = "";
    while (!p.isEnd) {
      let keys = Object.keys(p.next);
      if (keys.length > 1) {
        break;
      }
      result += keys[0];
      p = p.next[keys[0]];
    }

    return result;
  }
}

function LCP3(arr) {
  const trie = new Trie();
  arr.forEach((word) => trie.insert(word));
  return trie.searchLCP();
}

class Node {
  constructor(element) {
    this.node = element;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getList() {
    return this.head;
  }

  append(element) {
    const node = new Node(element);
    let p = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    }
    this.length++;
  }

  search(element) {
    let p = this.head;
    if (!p) {
      return false;
    }
    while (p.next) {
      if (p.node === element) {
        return true;
      }
      p = p.next;
    }
    return false;
  }

  insert(position, element) {
    let node = new Node(element);
    if (position > this.length - 1) {
      return false;
    }
    let prev = this.head;
    let curr = this.head;
    let index = 0;
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      while (index !== position) {
        prev = curr;
        curr = curr.next;
        index++;
      }
      prev.next = node;
      node.next = curr;
    }
    this.length++;
  }

  remove(element) {
    if (!this.head) {
      return null;
    }
    let prev = this.head;
    let curr = this.head;
    while (curr) {
      if (curr.node === element) {
        prev.next = curr.next;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
    this.length--;
  }
}

// 合并两个升序链表
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
function mergeTwoList(l1, l2) {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  if (l1 < l2) {
    l1 = mergeTwoList(l1.next, l2);
    return l1;
  } else {
    l2 = mergeTwoList(l2.next, l1);
    return l2;
  }
}

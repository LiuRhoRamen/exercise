// 给定一个链表，判断链表中是否有环。
function hasCycle(head) {
  let p = head;
  while (p) {
    if (p.flag) {
      return true;
    }
    p.flag = true;
    p = p.next;
  }
  return false;
}

function hasCycle2(head) {
  try {
    JSON.stringify(head);
    return false;
  } catch {
    return true;
  }
}

// 快慢指针
function hasCycle3(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let quick = head.next.next;
  while (slow !== quick) {
    if (!quick || !quick.next) {
      return false;
    }
    quick = quick.next.next;
    slow = slow.next;
  }
  return true;
}

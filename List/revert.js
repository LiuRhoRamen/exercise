// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
function revertList(head) {
  if (!head || !head.next) return head;
  let p = head;
  let prev = null;
  while (p) {
    let next = p.next;
    prev = p;
    p.next = prev;
    p = next;
  }
  head = prev;
  return head;
}

function revertList2(head) {
  if (!head || !head.next) return head;
  const revert = function (prev, curr) {
    if (!curr) return prev;
    let next = curr.next;
    curr.next = prev;
    return revert(curr, next);
  };
  return revert(null, head);
}

// 前序
function preOrder(root) {
  if (!root) return;
  console.log("node is ", root.value);
  preOrder(root.left);
  preOrder(root.right);
}

// 中序
function inOrder(root) {
  if (!root) return;
  preOrder(root.left);
  console.log("node is ", root.value);
  preOrder(root.right);
}

// 后序
function postOrder(root) {
  if (!root) return;
  preOrder(root.left);
  preOrder(root.right);
  console.log("node is ", root.value);
}

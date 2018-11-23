const createNode = val => ({
  val,
  next: null
})

const insertNode = (node, val) => {
  if (node.next === null) {
    node.next = val
  } else insertNode(node.next, val)
}

const findNode = (node, val) => {
  if (node == null) return null
  if (node.val === val) return node
  else return findNode(node.next, val)
}

const createLinkedList = () => {
  let head = null
  return {
    insertEnd: function (val) {
      const node = createNode(val)
      if (head == null) head = node
      else insertNode(head, node)
      return this
    },
    insertFront: function (val) {
      const node = createNode(val)
      if (head == null) head = node
      else {
        node.next = head
        head = node
      }
      return this
    },
    delete: function (val) {
      // todo
    },
    find: val => findNode(head, val),
    contains: val => findNode(head, val) != null,
    getLinkedList: () => head
  }
}

module.exports = createLinkedList

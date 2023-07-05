function mergeLists(head1, head2) {
    // Create a dummy node to hold the merged list
  const dummyNode = new SinglyLinkedListNode(0);
  let current = dummyNode;

  // Merge the lists until either list becomes null
  while (head1 !== null && head2 !== null) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  // Append the remaining nodes of the non-null list
  if (head1 !== null) {
    current.next = head1;
  }
  if (head2 !== null) {
    current.next = head2;
  }

  // Return the merged list (excluding the dummy node)
  return dummyNode.next;


}

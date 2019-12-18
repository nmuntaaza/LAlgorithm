const DoublyLinkedList = require('../LinkedList/DoublyLinkedList');

const doublyLinkedList = new DoublyLinkedList();

test('addFirst', () => {
  expect(doublyLinkedList.addFirst(10)).toEqual([10]);
  expect(doublyLinkedList.addFirst(9)).toEqual([9, 10]);
  expect(doublyLinkedList.size).toBe(2);
})

test('addLast', () => {
  expect(doublyLinkedList.addLast(11)).toEqual([9, 10, 11]);
  expect(doublyLinkedList.addLast(12)).toEqual([9, 10, 11, 12]);
  expect(doublyLinkedList.size).toBe(4);
})

test('insertBefore', () => {
  expect(doublyLinkedList.insertBefore(10.5, 11)).toEqual([9, 10, 10.5, 11, 12]);
  expect(doublyLinkedList.insertBefore(9.5, 10)).toEqual([9, 9.5, 10, 10.5, 11, 12]);
  expect(doublyLinkedList.size).toBe(6);
})

test('insertAfter', () => {
  expect(doublyLinkedList.insertAfter(13, 12)).toEqual([9, 9.5, 10, 10.5, 11, 12, 13]);
  expect(doublyLinkedList.insertAfter(9.3, 9)).toEqual([9, 9.3, 9.5, 10, 10.5, 11, 12, 13])
  expect(doublyLinkedList.size).toBe(8);
})

test('traversing', () => {
  expect(doublyLinkedList.traversing()).toEqual([9, 9.3, 9.5, 10, 10.5, 11, 12, 13]);
  doublyLinkedList.addLast(14);
  expect(doublyLinkedList.traversing()).toEqual([9, 9.3, 9.5, 10, 10.5, 11, 12, 13, 14])
  expect(doublyLinkedList.size).toBe(9);
})

test('delete', () => {
  expect(doublyLinkedList.delete(9)).toEqual([9.3, 9.5, 10, 10.5, 11, 12, 13, 14]);
  expect(doublyLinkedList.delete(100)).toEqual([9.3, 9.5, 10, 10.5, 11, 12, 13, 14]);
  expect(doublyLinkedList.delete(9.3)).toEqual([9.5, 10, 10.5, 11, 12, 13, 14]);
  expect(doublyLinkedList.size).toBe(7);
})

test('copy', () => {
  expect(doublyLinkedList.clone().traversing()).toEqual(doublyLinkedList.traversing());
})
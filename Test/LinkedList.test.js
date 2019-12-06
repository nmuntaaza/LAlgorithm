const LinkedList = require('../LinkedList/LinkedList');

const linkedList = new LinkedList();

test('addFirst', () => {
  expect(linkedList.addFirst(10)).toEqual([10]); // add first value
  expect(linkedList.addFirst(9)).toEqual([9, 10]); // add after
  expect(linkedList.size).toBe(2);
})

test('addLast', () => {
  expect(linkedList.addLast(99)).toEqual([9, 10, 99]);
  expect((new LinkedList()).addLast(10)).toEqual([10]);
  expect(linkedList.size).toBe(3);
})

test('insertBefore', () => {
  expect(linkedList.insertBefore(11, 99)).toEqual([9, 10, 11, 99]);
  expect((new LinkedList()).insertBefore(1, 99)).toEqual([]);
  expect(linkedList.size).toBe(4);
})

test('insertAfter', () => {
  expect(linkedList.insertAfter(12, 11)).toEqual([9, 10, 11, 12, 99]);
  expect(linkedList.insertAfter(9.5, 9)).toEqual([9, 9.5, 10, 11, 12, 99]);
  expect(linkedList.size).toBe(6);
})

test('traversing', () => {
  expect(linkedList.traversing()).toEqual([9, 9.5, 10, 11, 12, 99]);
  linkedList.addLast(100);
  expect(linkedList.size).toBe(7);
  expect(linkedList.traversing()).toEqual([9, 9.5, 10, 11, 12, 99, 100]);
})

test('delete', () => {
  expect(linkedList.delete(9)).toEqual([9.5, 10, 11, 12, 99, 100]);
  expect(linkedList.delete(100)).toEqual([9.5, 10, 11, 12, 99]);
  expect(linkedList.delete(11)).toEqual([9.5, 10, 12, 99]);
  expect(linkedList.delete(111)).toEqual([9.5, 10, 12, 99]);
  expect(linkedList.size).toBe(4);
})

test('copy', () => {
  expect(linkedList.copy().traversing()).toEqual(linkedList.traversing());
})
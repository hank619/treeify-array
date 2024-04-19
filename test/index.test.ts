/*
 * @Author: Hong.Zhang
 * @Date: 2024-04-19 11:37:47
 * @Description:
 */
import { treeifyArray } from '../src';

test('normal result', () => {
  const items = [
    { name: 'Alice', grade: 'grade-1', class: 'class-1' },
    { name: 'Bob', grade: 'grade-1', class: 'class-2' },
    { name: 'Charlie', grade: 'grade-2', class: 'class-3' },
    { name: 'David', grade: 'grade-2', class: 'class-4' },
  ];
  const propertyNames = ['grade', 'class'];
  const result = 
  {
    'grade-1': {
      'class-1': [
        {
          name: 'Alice',
          grade: 'grade-1',
          class: 'class-1',
        },
      ],
      'class-2': [
        {
          name: 'Bob',
          grade: 'grade-1',
          class: 'class-2',
        },
      ],
    },
    'grade-2': {
      'class-3': [
        {
          name: 'Charlie',
          grade: 'grade-2',
          class: 'class-3',
        },
      ],
      'class-4': [
        {
          name: 'David',
          grade: 'grade-2',
          class: 'class-4',
        },
      ],
    },
  };

  expect(treeifyArray(items, propertyNames)).toStrictEqual(result);
});

test('value should not be null', () => {
  const items = [
    { name: 'Alice', age: undefined, gender: 'Male' },
    { name: 'Bob', age: '11', class: 'Female' },
  ];
  const propertyNames = ['gender', 'age'];
  expect(() => treeifyArray(items, propertyNames)).toThrow();
});

test('value should be string', () => {
  const items = [
    { name: 'Alice', age: {}, gender: 'Male' },
    { name: 'Bob', age: '11', class: 'Female' },
  ];
  const propertyNames = ['gender', 'age'];
  expect(() => treeifyArray(items, propertyNames)).toThrow();
});

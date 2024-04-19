# treeify-array

## Description
This library is used to sort an array to a value based tree.

## Usage
```
yarn add treeify-array
```
or
```
npm install treeify-array
```

## Example
```js
import { treeify } from 'treeify-array';

const arr = [
    { name: 'Alice', grade: 'grade-1', class: 'class-1' },
    { name: 'Bob', grade: 'grade-1', class: 'class-2' },
    { name: 'Charlie', grade: 'grade-2', class: 'class-3' },
    { name: 'David', grade: 'grade-2', class: 'class-4' },
  ];

const tree = treeify(arr, ['grade', 'class']);
console.log(tree);
// {
//     'grade-1': {
//       'class-1': [
//         {
//           name: 'Alice',
//           grade: 'grade-1',
//           class: 'class-1',
//         },
//       ],
//       'class-2': [
//         {
//           name: 'Bob',
//           grade: 'grade-1',
//           class: 'class-2',
//         },
//       ],
//     },
//     'grade-2': {
//       'class-3': [
//         {
//           name: 'Charlie',
//           grade: 'grade-2',
//           class: 'class-3',
//         },
//       ],
//       'class-4': [
//         {
//           name: 'David',
//           grade: 'grade-2',
//           class: 'class-4',
//         },
//       ],
//     },
//   }
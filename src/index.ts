/*
 * @Author: Hong.Zhang
 * @Date: 2024-04-18 17:25:35
 * @Description:
 */
import invariant from 'invariant';

export const treeifyArray = (arr: any[], propertyNames: string[]) => {
  const result: Record<string, any> = {};
  arr.forEach(item => {
    let curNode = result;
    for (let i = 0; i < propertyNames.length; i++) {
      const isLast = i === propertyNames.length - 1;
      const property = propertyNames[i];
      const key = item[property];
      invariant(
        !!key && typeof key === 'string',
        `the value corresponding to ${property} must be string`
      );
      if (!curNode[key]) {
        curNode[key] = isLast ? [] : {};
      }
      if (isLast) {
        curNode[key].push(item);
      } else {
        curNode = curNode[key];
      }
    }
  });
  return result;
};

export const treeifyArrayRecursive = (
  arr: any[],
  propertyNames: string[],
  depth = 0
) => {
  if (depth >= propertyNames.length || arr.length === 0) {
    return arr;
  }
  const grouped: Record<string, any[]> = arr.reduce((acc, item) => {
    const key = item[propertyNames[depth]];
    invariant(
      !!key && typeof key === 'string',
      `the value corresponding to ${key} must be string`
    );
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
  const result: Record<string, any> = {};
  Object.entries(grouped).forEach(
    ([key, value]) =>
      (result[key] = treeifyArrayRecursive(value, propertyNames, depth + 1))
  );
  return result;
};

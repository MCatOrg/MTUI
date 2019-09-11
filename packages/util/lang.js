/**
   * 对一个对象或者数组进行深度遍历，找到符合条件 handler 的值，返回到一个数组里面
   * @param {Array|Object} source 需要进行查找的函数
   * @param {Function} handler 每个非 Object和Array 的值都会以参数形式传入此函数，第一个参数是对应的key 第二个参数是 val 显示返回 true 则是通过
   * @param {Array} result 用作递归每个值
   * @param {WeakMap} map 用作防止循环引用
   * @returns {Array}
   */
export const deepFind = function(
  source,
  handler = function() {},
  result = [],
  map = new WeakMap()
) {
  if (
    Object.prototype.toString.call(source) !== "[object Object]" &&
    !Array.isArray(source)
  ) {
    return result;
  }
  for (let key in source) {
    if (
      Object.prototype.toString.call(source[key]) === "[object Object]" ||
      Array.isArray(source[key])
    ) {
      // 防止循环引用
      if (map.get(source[key])) {
        continue;
      }
      map.set(source[key], new source[key].constructor());
      deepFind(source[key], handler, result, map);
      continue;
    }
    if (handler(key, source[key])) {
      result.push(source[key]);
    }
  }
  return result;
};

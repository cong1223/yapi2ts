// assert模块是Node的内置模块，主要用于断定。如果表达式不符合预期，就抛出一个错误。该模块提供11个方法，但只有少数几个是常用的。
// assert方法接受两个参数，当第一个参数对应的布尔值为true时，不会有任何提示，返回undefined。当第一个参数对应的布尔值为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串
// assert是阻断式的
// const assert = require('assert');


// ctx.assert(value, [status], [msg], [properties])
// 当value不存在的时候抛出一个错误，与.throw()类似。与Node的assert()方法类似

const throwError = (code, message) => {
  const err = new Error(message);
  err.code = code;
  throw err;
};

module.exports = {
  // assert,
  throwError
};

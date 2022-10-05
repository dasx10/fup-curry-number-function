const isFunction = require('fup-is-function');
const isNumber   = require('fup-is-number');

module.exports = core => function numberFunction (numberOrExecutor, executorOrNumber) {
  switch (arguments.length) {
    case 0: return numberFunction;
    case 1: {
      if (isNumber(numberOrExecutor)) return function _function (executor) {
        return arguments.length < 1 ? _function : core(numberOrExecutor, executor);
      }

      if (isFunction(numberOrExecutor)) return function number_ (number) {
        return arguments.length < 1 ? number_ : core(number, numberOrExecutor);
      }

      throw `invalid parameter: ${numberOrExecutor}`;
    }

    default: return isNumber(numberOrExecutor) ? core(numberOrExecutor, executorOrNumber) : core(executorOrNumber, numberOrExecutor);
  }
}

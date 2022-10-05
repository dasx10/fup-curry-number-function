export type CurryNumberFunction = <
  InputNumber extends number,
  Executor    extends (...parameters: unknown[]) => unknown,
  Return      extends unknown,
>(core: (number: InputNumber, executor: Executor) => Return) => {
  (number   : InputNumber  ,  executor : Executor)    :  Return;
  (executor : Executor     ,  number   : InputNumber) :  Return;
  (number   : InputNumber) : (executor : Executor)    => Return;
  (executor : Executor)    : (number   : InputNumber) => Return;
};

/**
 * @param {(number: InputNumber, executor: Executor) => Return} core
 * @returns {{
 *   (number   : InputNumber  , executor  : Executor)    :  Return;
 *   (executor : Executor     , number    : InputNumber) :  Return;
 *   (number   : InputNumber) : (executor : Executor)    => Return;
 *   (executor : Executor)    : (number   : InputNumber) => Return;
 * }}
 * @template {number} InputNumber
 * @template {(...parameters: unknown[]) => unknown} Executor
 * @template Return
 */
declare const curryNumberFunction: CurryNumberFunction;
export default curryNumberFunction;

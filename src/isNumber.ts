import { is } from './.helper'

/**
 * isNumber 判断是否是number类型
 * @version 1.0.2
 * @param val 要判断的变量
 * @category isNumber
 * @example
 * ``` typescript
 * isNumber(123)
 * ```
 */
const isNumber = (val: unknown): boolean => {
  return is(val, 'Number')
}

export default isNumber

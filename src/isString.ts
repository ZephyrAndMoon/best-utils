import { is } from './.helper'

/**
 * isString 判断是否是string类型
 * @version 1.0.1
 * @param val 要判断的变量
 * @category isString
 * @example
 * ``` typescript
 * isString(123)
 * ```
 */
const isString = (val: unknown): boolean => {
  return is(val, 'String')
}

export default isString

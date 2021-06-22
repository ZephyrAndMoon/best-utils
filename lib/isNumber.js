import { is } from './.helper';
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
var isNumber = function (val) {
    return is(val, 'Number');
};
export default isNumber;
//# sourceMappingURL=isNumber.js.map
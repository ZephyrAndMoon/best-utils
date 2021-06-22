import isServer from './isServer';
/**
 * isIE 判断是否是IE浏览器
 * @version 1.0.2
 * @category isIE
 * @example
 * ``` typescript
 * isIE()
 * ```
 */
var isIE = function () {
    return !isServer() && !!window.document.documentMode;
};
export default isIE;
//# sourceMappingURL=isIE.js.map
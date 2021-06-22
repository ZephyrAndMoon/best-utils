import isServer from './isServer';
/**
 * isEdge 判断是否是Edge浏览器
 * @version 1.0.1
 * @category isEdge
 * @example
 * ``` typescript
 * isEdge()
 * ```
 */
var isEdge = function () {
    return !isServer() && navigator.userAgent.indexOf('Edge') > -1;
};
export default isEdge;
//# sourceMappingURL=isEdge.js.map
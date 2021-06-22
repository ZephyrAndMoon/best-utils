/**
 * isServer 判断是否是服务器环境
 * @version 1.0.1
 * @category isServer
 * @example
 * ``` typescript
 * isServer()
 * ```
 */
var isServer = function () {
    return typeof window === 'undefined';
};
export default isServer;
//# sourceMappingURL=isServer.js.map
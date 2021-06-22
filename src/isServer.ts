/**
 * isServer 判断是否是服务器环境
 * @version 1.0.2
 * @category isServer
 * @example
 * ``` typescript
 * isServer()
 * ```
 */
const isServer = (): boolean => {
  return typeof window === 'undefined'
}

export default isServer

import isServer from './isServer'

/**
 * isEdge 判断是否是Edge浏览器
 * @version 1.0.2
 * @category isEdge
 * @example
 * ``` typescript
 * isEdge()
 * ```
 */
const isEdge = (): boolean => {
  return !isServer() && navigator.userAgent.indexOf('Edge') > -1
}

export default isEdge

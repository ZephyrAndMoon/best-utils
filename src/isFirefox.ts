import isServer from './isServer'

/**
 * isFirefox 判断是否是Firefox浏览器
 * @version 1.0.2
 * @category isFirefox
 * @example
 * ```typescript
 * isFirefox()
 * ```
 */
const isFirefox = (): boolean => {
  return !isServer() && !!window.navigator.userAgent.match(/firefox/i)
}

export default isFirefox

import isServer from './isServer'

interface Document {
  documentMode?: any
}

/**
 * isIE 判断是否是IE浏览器
 * @version 1.0.2
 * @category isIE
 * @example
 * ``` typescript
 * isIE()
 * ```
 */
const isIE = (): boolean => {
  return !isServer() && !!(window.document as Document).documentMode
}

export default isIE

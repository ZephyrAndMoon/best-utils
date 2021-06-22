import hasClass from './hasClass'
import { trim } from './.helper'

/**
 * removeClass 移除某个class类名
 * @version 1.0.1
 * @param el THML元素
 * @param cls class类名
 * @category removeClass
 * @example
 * ``` typescript
 * removeClass(el, 'dom-class-wrap')
 * ```
 */
const removeClass = (el: HTMLElement, cls: string): void => {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

export default removeClass

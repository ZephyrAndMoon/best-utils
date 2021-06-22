/**
 * hasClass 是否有某个class类名
 * @version 1.0.2
 * @param el THML元素
 * @param cls class类名
 * @category hasClass
 * @example
 * ``` typescript
 * hasClass(el, 'dom-class-wrap')
 * ```
 */
var hasClass = function (el, cls) {
    if (!el || !cls)
        return false;
    if (cls.indexOf(' ') !== -1)
        throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }
    else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};
export default hasClass;
//# sourceMappingURL=hasClass.js.map
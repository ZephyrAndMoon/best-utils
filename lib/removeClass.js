import hasClass from './hasClass';
import { trim } from './.helper';
/**
 * removeClass 移除某个class类名
 * @version 1.0.2
 * @param el THML元素
 * @param cls class类名
 * @category removeClass
 * @example
 * ``` typescript
 * removeClass(el, 'dom-class-wrap')
 * ```
 */
var removeClass = function (el, cls) {
    if (!el || !cls)
        return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';
    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName)
            continue;
        if (el.classList) {
            el.classList.remove(clsName);
        }
        else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
};
export default removeClass;
//# sourceMappingURL=removeClass.js.map
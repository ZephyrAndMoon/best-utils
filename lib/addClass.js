import hasClass from './hasClass';
/**
 * addClass 添加class类名
 * @version 1.0.1
 * @param el THML元素
 * @param cls class类名
 * @category addClass
 * @example
 * ``` typescript
 * addClass(el, 'dom-class-wrap')
 * ```
 */
var addClass = function (el, cls) {
    if (!el)
        return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');
    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName)
            continue;
        if (el.classList) {
            el.classList.add(clsName);
        }
        else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
};
export default addClass;
//# sourceMappingURL=addClass.js.map
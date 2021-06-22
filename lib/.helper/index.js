export var is = function (val, type) {
    return toString.call(val) === "[object " + type + "]";
};
export var trim = function (s) {
    return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
//# sourceMappingURL=index.js.map
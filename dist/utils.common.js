"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var s=function(s,e){if(!s||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return s.classList?s.classList.contains(e):(" "+s.className+" ").indexOf(" "+e+" ")>-1},e=function(e,r){if(e){for(var t=e.className,i=(r||"").split(" "),n=0,a=i.length;n<a;n++){var o=i[n];o&&(e.classList?e.classList.add(o):s(e,o)||(t+=" "+o))}e.classList||(e.className=t)}},r=function(){return"undefined"==typeof window},t=function(){return!r()&&navigator.userAgent.indexOf("Edge")>-1},i=function(){return!r()&&!!window.navigator.userAgent.match(/firefox/i)},n=function(){return!r()&&!!window.document.documentMode},a=function(s,e){return toString.call(s)==="[object "+e+"]"},o=function(s){return a(s,"Number")},c=function(s){return a(s,"String")},u=function(e,r){if(e&&r){for(var t=r.split(" "),i=" "+e.className+" ",n=0,a=t.length;n<a;n++){var o=t[n];o&&(e.classList?e.classList.remove(o):s(e,o)&&(i=i.replace(" "+o+" "," ")))}e.classList||(e.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}},l={addClass:e,hasClass:s,isEdge:t,isFirefox:i,isIE:n,isNumber:o,isServer:r,isString:c,removeClass:u};exports.addClass=e,exports.default=l,exports.hasClass=s,exports.isEdge=t,exports.isFirefox=i,exports.isIE=n,exports.isNumber=o,exports.isServer=r,exports.isString=c,exports.removeClass=u;
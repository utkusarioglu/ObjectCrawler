!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Lib",[],e):"object"==typeof exports?exports.Lib=e():t.Lib=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);Object.prototype.sniff=r.sniff_Object,Object.prototype.pave=r.pave_Object,Object.prototype.is_empty=r.is_ObjectEmpty,Object.prototype.is_Object=r.is_ObjectObject,Object.prototype.has_Function=r.has_ObjectFunction},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sniff_Object=function(t,e,n){void 0===e&&(e=function(){return!1}),void 0===n&&(n=function(){return!0});for(var r=this,o=0,i=Array.isArray(t)?t:t.split(".");o<i.length;o++){var u=i[o];if(void 0===r[u])return e(r);r=r[u]}return n(r)},e.pave_Object=function(t,e,n){void 0===e&&(e=function(){return Object}),void 0===n&&(n=function(){return Object});var r=Array.isArray(t)?t:t.split("."),o=r.pop(),i=this,u=function(t){if(void 0===t[o])return t[o]=n()||{},!0;var r=e();return r&&(t[o]=r),!1};if(!(r.length>0))return u(i);i.sniff(r,(function(){for(var t=0,e=r;t<e.length;t++){var n=e[t];i[n]=i[n]?i[n]:{},i=i[n]}return u(i)}),(function(t){return u(t)}))},e.is_ObjectEmpty=function(){for(var t in this)if(this.hasOwnProperty(t))return!1;return!0},e.is_ObjectObject=function(){return this===Object(this)},e.has_ObjectFunction=function(t){return"function"==typeof this[t]}}])}));
//# sourceMappingURL=index.js.map
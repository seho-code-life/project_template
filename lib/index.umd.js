(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rem = {}));
})(this, (function (exports) { 'use strict';

  var sum = function sum(a, b) {
    return a + b;
  };

  exports.sum = sum;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

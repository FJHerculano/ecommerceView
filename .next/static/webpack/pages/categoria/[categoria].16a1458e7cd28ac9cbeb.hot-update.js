webpackHotUpdate_N_E("pages/categoria/[categoria]",{

/***/ "./containers/Lista/ProdutosCategoria/index.js":
/*!*****************************************************!*\
  !*** ./containers/Lista/ProdutosCategoria/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Listas_Produtos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Listas/Produtos */ \"./components/Listas/Produtos.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/herculano/Documentos/www/Ecommerce/ecommerceView/containers/Lista/ProdutosCategoria/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar PRODUTOS = [{\n  id: 11,\n  fotos: [\"/static/img/mouse-1.png\"],\n  titulo: \"Mouse Gamer 1\",\n  preco: 35,\n  promocao: 25\n}, {\n  id: 22,\n  fotos: [\"/static/img/mouse-4.png\"],\n  titulo: \"Mouse Gamer 2 \",\n  preco: 55,\n  promocao: 55\n}, {\n  id: 33,\n  fotos: [\"/static/img/mouse-5.png\"],\n  titulo: \"Mouse Gamer 3\",\n  preco: 105,\n  promocao: 95\n}, {\n  id: 44,\n  fotos: [\"/static/img/mouse2.png\"],\n  titulo: \"Mouse Gamer 4\",\n  preco: 160,\n  promocao: 150\n}, {\n  id: 55,\n  fotos: [\"/static/img/mouse-1.png\"],\n  titulo: \"Mouse Gamer 1\",\n  preco: 35,\n  promocao: 25\n}, {\n  id: 66,\n  fotos: [\"/static/img/mouse-4.png\"],\n  titulo: \"Mouse Gamer 2 \",\n  preco: 55,\n  promocao: 55\n}, {\n  id: 77,\n  fotos: [\"/static/img/mouse-5.png\"],\n  titulo: \"Mouse Gamer 3\",\n  preco: 105,\n  promocao: 95\n}, {\n  id: 88,\n  fotos: [\"/static/img/mouse2.png\"],\n  titulo: \"Mouse Gamer 4\",\n  preco: 160,\n  promocao: 150\n}, {\n  id: 19239123,\n  fotos: [\"/static/img/mouse-1.png\"],\n  titulo: \"Mouse Gamer 1\",\n  preco: 35,\n  promocao: 25\n}, {\n  id: 99,\n  fotos: [\"/static/img/mouse-4.png\"],\n  titulo: \"Mouse Gamer 2 \",\n  preco: 55,\n  promocao: 55\n}, {\n  id: 10,\n  fotos: [\"/static/img/mouse-5.png\"],\n  titulo: \"Mouse Gamer 3\",\n  preco: 105,\n  promocao: 95\n}, {\n  id: 12,\n  fotos: [\"/static/img/mouse2.png\"],\n  titulo: \"Mouse Gamer 4\",\n  preco: 160,\n  promocao: 150\n}];\n\nvar ProdutosCategoria = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProdutosCategoria, _Component);\n\n  var _super = _createSuper(ProdutosCategoria);\n\n  function ProdutosCategoria() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ProdutosCategoria);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ProdutosCategoria, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return __jsx(\"div\", {\n        className: \"container Produtos-Pagina-Inicial flex vertical\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }\n      }, __jsx(_components_Listas_Produtos__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        produtos: PRODUTOS,\n        itensPorLinha: 4,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }\n      }), __jsx(Paginacao, {\n        atual: this.state.atual || 0,\n        total: PRODUTOS.length * 4,\n        limite: PRODUTOS.length,\n        onClick: function onClick(numeroAtual) {\n          return _this.setState({\n            atual: 0\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }\n      }));\n    }\n  }]);\n\n  return ProdutosCategoria;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProdutosCategoria);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9MaXN0YS9Qcm9kdXRvc0NhdGVnb3JpYS9pbmRleC5qcz8xNThhIl0sIm5hbWVzIjpbIlBST0RVVE9TIiwiaWQiLCJmb3RvcyIsInRpdHVsbyIsInByZWNvIiwicHJvbW9jYW8iLCJQcm9kdXRvc0NhdGVnb3JpYSIsInN0YXRlIiwiYXR1YWwiLCJsZW5ndGgiLCJudW1lcm9BdHVhbCIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2Y7QUFBRUMsSUFBRSxFQUFFLEVBQU47QUFBVUMsT0FBSyxFQUFFLENBQUMseUJBQUQsQ0FBakI7QUFBOENDLFFBQU0sRUFBQyxlQUFyRDtBQUFzRUMsT0FBSyxFQUFFLEVBQTdFO0FBQWtGQyxVQUFRLEVBQUM7QUFBM0YsQ0FEZSxFQUVmO0FBQUVKLElBQUUsRUFBRSxFQUFOO0FBQVVDLE9BQUssRUFBRSxDQUFDLHlCQUFELENBQWpCO0FBQThDQyxRQUFNLEVBQUMsZ0JBQXJEO0FBQXNFQyxPQUFLLEVBQUUsRUFBN0U7QUFBa0ZDLFVBQVEsRUFBQztBQUEzRixDQUZlLEVBR2Y7QUFBRUosSUFBRSxFQUFFLEVBQU47QUFBVUMsT0FBSyxFQUFFLENBQUMseUJBQUQsQ0FBakI7QUFBOENDLFFBQU0sRUFBQyxlQUFyRDtBQUFzRUMsT0FBSyxFQUFFLEdBQTdFO0FBQWtGQyxVQUFRLEVBQUM7QUFBM0YsQ0FIZSxFQUlmO0FBQUVKLElBQUUsRUFBRSxFQUFOO0FBQVVDLE9BQUssRUFBRSxDQUFDLHdCQUFELENBQWpCO0FBQThDQyxRQUFNLEVBQUMsZUFBckQ7QUFBc0VDLE9BQUssRUFBRSxHQUE3RTtBQUFrRkMsVUFBUSxFQUFDO0FBQTNGLENBSmUsRUFLZjtBQUFFSixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsQ0FBQyx5QkFBRCxDQUFqQjtBQUE4Q0MsUUFBTSxFQUFDLGVBQXJEO0FBQXNFQyxPQUFLLEVBQUUsRUFBN0U7QUFBa0ZDLFVBQVEsRUFBQztBQUEzRixDQUxlLEVBTWY7QUFBRUosSUFBRSxFQUFFLEVBQU47QUFBVUMsT0FBSyxFQUFFLENBQUMseUJBQUQsQ0FBakI7QUFBOENDLFFBQU0sRUFBQyxnQkFBckQ7QUFBc0VDLE9BQUssRUFBRSxFQUE3RTtBQUFrRkMsVUFBUSxFQUFDO0FBQTNGLENBTmUsRUFPZjtBQUFFSixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsQ0FBQyx5QkFBRCxDQUFqQjtBQUE4Q0MsUUFBTSxFQUFDLGVBQXJEO0FBQXNFQyxPQUFLLEVBQUUsR0FBN0U7QUFBa0ZDLFVBQVEsRUFBQztBQUEzRixDQVBlLEVBUWY7QUFBRUosSUFBRSxFQUFFLEVBQU47QUFBVUMsT0FBSyxFQUFFLENBQUMsd0JBQUQsQ0FBakI7QUFBOENDLFFBQU0sRUFBQyxlQUFyRDtBQUFzRUMsT0FBSyxFQUFFLEdBQTdFO0FBQWtGQyxVQUFRLEVBQUM7QUFBM0YsQ0FSZSxFQVFrRjtBQUFFSixJQUFFLEVBQUUsUUFBTjtBQUFnQkMsT0FBSyxFQUFFLENBQUMseUJBQUQsQ0FBdkI7QUFBb0RDLFFBQU0sRUFBQyxlQUEzRDtBQUE0RUMsT0FBSyxFQUFFLEVBQW5GO0FBQXdGQyxVQUFRLEVBQUM7QUFBakcsQ0FSbEYsRUFTZjtBQUFFSixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsQ0FBQyx5QkFBRCxDQUFqQjtBQUE4Q0MsUUFBTSxFQUFDLGdCQUFyRDtBQUFzRUMsT0FBSyxFQUFFLEVBQTdFO0FBQWtGQyxVQUFRLEVBQUM7QUFBM0YsQ0FUZSxFQVVmO0FBQUVKLElBQUUsRUFBRSxFQUFOO0FBQVVDLE9BQUssRUFBRSxDQUFDLHlCQUFELENBQWpCO0FBQThDQyxRQUFNLEVBQUMsZUFBckQ7QUFBc0VDLE9BQUssRUFBRSxHQUE3RTtBQUFrRkMsVUFBUSxFQUFDO0FBQTNGLENBVmUsRUFXZjtBQUFFSixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsQ0FBQyx3QkFBRCxDQUFqQjtBQUE4Q0MsUUFBTSxFQUFDLGVBQXJEO0FBQXNFQyxPQUFLLEVBQUUsR0FBN0U7QUFBa0ZDLFVBQVEsRUFBQztBQUEzRixDQVhlLENBQWpCOztJQWNRQyxpQjs7Ozs7Ozs7Ozs7OztXQUNOLGtCQUFRO0FBQUE7O0FBQ04sYUFDSTtBQUFLLGlCQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVFLE1BQUMsbUVBQUQ7QUFFRSxnQkFBUSxFQUFFTixRQUZaO0FBR0UscUJBQWEsRUFBRSxDQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFPRSxNQUFDLFNBQUQ7QUFDRSxhQUFLLEVBQUssS0FBS08sS0FBTCxDQUFXQyxLQUFYLElBQW9CLENBRGhDO0FBRUUsYUFBSyxFQUFLUixRQUFRLENBQUNTLE1BQVQsR0FBa0IsQ0FGOUI7QUFHRSxjQUFNLEVBQUlULFFBQVEsQ0FBQ1MsTUFIckI7QUFJRSxlQUFPLEVBQUUsaUJBQUVDLFdBQUY7QUFBQSxpQkFBbUIsS0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUgsaUJBQUssRUFBQztBQUFSLFdBQWQsQ0FBbkI7QUFBQSxTQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixDQURKO0FBaUJEOzs7O0VBbkIrQkksK0M7O0FBc0JuQk4sZ0ZBQWYiLCJmaWxlIjoiLi9jb250YWluZXJzL0xpc3RhL1Byb2R1dG9zQ2F0ZWdvcmlhL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQcm9kdXRvcyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xpc3Rhcy9Qcm9kdXRvcyc7XG5cbmNvbnN0IFBST0RVVE9TID0gW1xuICB7IGlkOiAxMSwgZm90b3M6IFtcIi9zdGF0aWMvaW1nL21vdXNlLTEucG5nXCJdLCB0aXR1bG86XCJNb3VzZSBHYW1lciAxXCIsIHByZWNvOiAzNSwgIHByb21vY2FvOjI1IH0sXG4gIHsgaWQ6IDIyLCBmb3RvczogW1wiL3N0YXRpYy9pbWcvbW91c2UtNC5wbmdcIl0sIHRpdHVsbzpcIk1vdXNlIEdhbWVyIDIgXCIscHJlY286IDU1LCAgcHJvbW9jYW86NTUgfSxcbiAgeyBpZDogMzMsIGZvdG9zOiBbXCIvc3RhdGljL2ltZy9tb3VzZS01LnBuZ1wiXSwgdGl0dWxvOlwiTW91c2UgR2FtZXIgM1wiLCBwcmVjbzogMTA1LCBwcm9tb2Nhbzo5NSB9LFxuICB7IGlkOiA0NCwgZm90b3M6IFtcIi9zdGF0aWMvaW1nL21vdXNlMi5wbmdcIl0sICB0aXR1bG86XCJNb3VzZSBHYW1lciA0XCIsIHByZWNvOiAxNjAsIHByb21vY2FvOjE1MH0sXG4gIHsgaWQ6IDU1LCBmb3RvczogW1wiL3N0YXRpYy9pbWcvbW91c2UtMS5wbmdcIl0sIHRpdHVsbzpcIk1vdXNlIEdhbWVyIDFcIiwgcHJlY286IDM1LCAgcHJvbW9jYW86MjUgfSxcbiAgeyBpZDogNjYsIGZvdG9zOiBbXCIvc3RhdGljL2ltZy9tb3VzZS00LnBuZ1wiXSwgdGl0dWxvOlwiTW91c2UgR2FtZXIgMiBcIixwcmVjbzogNTUsICBwcm9tb2Nhbzo1NSB9LFxuICB7IGlkOiA3NywgZm90b3M6IFtcIi9zdGF0aWMvaW1nL21vdXNlLTUucG5nXCJdLCB0aXR1bG86XCJNb3VzZSBHYW1lciAzXCIsIHByZWNvOiAxMDUsIHByb21vY2FvOjk1IH0sXG4gIHsgaWQ6IDg4LCBmb3RvczogW1wiL3N0YXRpYy9pbWcvbW91c2UyLnBuZ1wiXSwgIHRpdHVsbzpcIk1vdXNlIEdhbWVyIDRcIiwgcHJlY286IDE2MCwgcHJvbW9jYW86MTUwfSwgeyBpZDogMTkyMzkxMjMsIGZvdG9zOiBbXCIvc3RhdGljL2ltZy9tb3VzZS0xLnBuZ1wiXSwgdGl0dWxvOlwiTW91c2UgR2FtZXIgMVwiLCBwcmVjbzogMzUsICBwcm9tb2NhbzoyNSB9LFxuICB7IGlkOiA5OSwgZm90b3M6IFtcIi9zdGF0aWMvaW1nL21vdXNlLTQucG5nXCJdLCB0aXR1bG86XCJNb3VzZSBHYW1lciAyIFwiLHByZWNvOiA1NSwgIHByb21vY2FvOjU1IH0sXG4gIHsgaWQ6IDEwLCBmb3RvczogW1wiL3N0YXRpYy9pbWcvbW91c2UtNS5wbmdcIl0sIHRpdHVsbzpcIk1vdXNlIEdhbWVyIDNcIiwgcHJlY286IDEwNSwgcHJvbW9jYW86OTUgfSxcbiAgeyBpZDogMTIsIGZvdG9zOiBbXCIvc3RhdGljL2ltZy9tb3VzZTIucG5nXCJdLCAgdGl0dWxvOlwiTW91c2UgR2FtZXIgNFwiLCBwcmVjbzogMTYwLCBwcm9tb2NhbzoxNTB9LFxuXTtcblxuY2xhc3MgICBQcm9kdXRvc0NhdGVnb3JpYSBleHRlbmRzIENvbXBvbmVudHtcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBQcm9kdXRvcy1QYWdpbmEtSW5pY2lhbCBmbGV4IHZlcnRpY2FsXCI+IFxuICAgICAgICAgXG4gICAgICAgICAgPFByb2R1dG9zXG5cbiAgICAgICAgICAgIHByb2R1dG9zPXtQUk9EVVRPU31cbiAgICAgICAgICAgIGl0ZW5zUG9yTGluaGE9ezR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UGFnaW5hY2FvXG4gICAgICAgICAgICBhdHVhbD0gIHsgdGhpcy5zdGF0ZS5hdHVhbCB8fCAwIH1cbiAgICAgICAgICAgIHRvdGFsPSAgeyBQUk9EVVRPUy5sZW5ndGggKiA0IH1cbiAgICAgICAgICAgIGxpbWl0ZT0geyBQUk9EVVRPUy5sZW5ndGggfVxuICAgICAgICAgICAgb25DbGljaz17KCBudW1lcm9BdHVhbCApID0+IHRoaXMuc2V0U3RhdGUoeyBhdHVhbDowIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1dG9zQ2F0ZWdvcmlhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/Lista/ProdutosCategoria/index.js\n");

/***/ })

})
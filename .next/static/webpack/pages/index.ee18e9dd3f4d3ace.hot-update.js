"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/section_heading/section_heading.jsx":
/*!***************************************************************!*\
  !*** ./src/components/ui/section_heading/section_heading.jsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _section_heading_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section_heading.module.scss */ \"./src/components/ui/section_heading/section_heading.module.scss\");\n/* harmony import */ var _section_heading_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_section_heading_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/fonts */ \"./src/styles/fonts.js\");\n\n\n\n\n\nconst SectionHeading = (param)=>{\n    let { head =\"\" , variant =1  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_section_heading_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionHead), \" \").concat((_section_heading_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[\"v\".concat(variant)]),\n        children: head && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: _styles_fonts__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sofadi,\n                children: head\n            }, void 0, false, {\n                fileName: \"E:\\\\self\\\\NOD Projects\\\\raido-app\\\\src\\\\components\\\\ui\\\\section_heading\\\\section_heading.jsx\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\self\\\\NOD Projects\\\\raido-app\\\\src\\\\components\\\\ui\\\\section_heading\\\\section_heading.jsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\self\\\\NOD Projects\\\\raido-app\\\\src\\\\components\\\\ui\\\\section_heading\\\\section_heading.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SectionHeading;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionHeading);\nvar _c;\n$RefreshReg$(_c, \"SectionHeading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9zZWN0aW9uX2hlYWRpbmcvc2VjdGlvbl9oZWFkaW5nLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDaEI7QUFDSztBQUV4QyxNQUFNSSxpQkFBaUIsU0FBZ0M7UUFBL0IsRUFBRUMsTUFBTyxHQUFFLEVBQUVDLFNBQVUsRUFBQyxFQUFFO0lBQ2hELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLEdBQXlCUCxPQUF0QkEsaUZBQWtCLEVBQUMsS0FBeUIsT0FBdEJBLHFFQUFNLENBQUMsSUFBWSxPQUFSSyxTQUFVO2tCQUMzREQsc0JBQ0MsOERBQUNFO3NCQUNDLDRFQUFDRztnQkFBR0YsV0FBV04sNERBQVk7MEJBQUdHOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3hDO0tBVk1EO0FBWU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvc2VjdGlvbl9oZWFkaW5nL3NlY3Rpb25faGVhZGluZy5qc3g/ZDIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2VjdGlvbl9oZWFkaW5nLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBmb250cyBmcm9tIFwiQC9zdHlsZXMvZm9udHNcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcblxyXG5jb25zdCBTZWN0aW9uSGVhZGluZyA9ICh7IGhlYWQgPSBcIlwiLCB2YXJpYW50ID0gMSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvbkhlYWR9ICR7c3R5bGVzW2B2JHt2YXJpYW50fWBdfWB9PlxyXG4gICAgICB7aGVhZCAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2ZvbnRzLnNvZmFkaX0+e2hlYWR9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiZm9udHMiLCJJbWFnZSIsIlNlY3Rpb25IZWFkaW5nIiwiaGVhZCIsInZhcmlhbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uSGVhZCIsImgxIiwic29mYWRpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ui/section_heading/section_heading.jsx\n"));

/***/ })

});
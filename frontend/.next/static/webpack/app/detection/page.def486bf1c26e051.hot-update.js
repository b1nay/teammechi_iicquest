"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/detection/page",{

/***/ "(app-pages-browser)/./components/detectionComponents/page.jsx":
/*!*************************************************!*\
  !*** ./components/detectionComponents/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst ResultPage = (param)=>{\n    let { data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-sky-500\",\n                        children: \"Predicted Health Status\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: data[0].imgurl,\n                        alt: \"emotion\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl font-bold \".concat(data[0].emotion === \"Happy\" ? \"text-green-600\" : \"text-black\"),\n                        children: \"\".concat(data[0].level, \" \").concat(data[0].emotion)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.score\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_progress__WEBPACK_IMPORTED_MODULE_3__.Progress, {\n                                value: 33\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRStCO0FBQ0w7QUFDZ0I7QUFFMUMsTUFBTUcsYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRTtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWtDOzs7Ozs7a0NBR2hELDhEQUFDTixrREFBS0E7d0JBQUNRLEtBQUtKLElBQUksQ0FBQyxFQUFFLENBQUNLLE1BQU07d0JBQUVDLEtBQUk7d0JBQVVDLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDOUQsOERBQUNDO3dCQUNDUCxXQUFXLHNCQUVWLE9BRENGLElBQUksQ0FBQyxFQUFFLENBQUNVLE9BQU8sS0FBSyxVQUFVLG1CQUFtQjtrQ0FHbEQsR0FBb0JWLE9BQWpCQSxJQUFJLENBQUMsRUFBRSxDQUFDVyxLQUFLLEVBQUMsS0FBbUIsT0FBaEJYLElBQUksQ0FBQyxFQUFFLENBQUNVLE9BQU87Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUNUOzBCQUVLRCxJQUFJLENBQUMsRUFBRSxDQUFDWSxpQkFBaUIsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFlBQVlDLHNCQUN2Qyw4REFBQ2Q7d0JBQWdCQyxXQUFVOzswQ0FDdkIsOERBQUNPOzBDQUFHSyxXQUFXRSxLQUFLOzs7Ozs7MENBQ3BCLDhEQUFDUDswQ0FBR0ssV0FBV0csS0FBSzs7Ozs7OzBDQUNwQiw4REFBQ25CLGtEQUFRQTtnQ0FBRW9CLE9BQU87Ozs7Ozs7dUJBSFpIOzs7Ozs7Ozs7Ozs7Ozs7O0FBVzFCO0tBOUJNaEI7QUFnQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRlY3Rpb25Db21wb25lbnRzL3BhZ2UuanN4PzA1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCIuLi91aS9wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgUmVzdWx0UGFnZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmQgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2t5LTUwMFwiPlxyXG4gICAgICAgICAgUHJlZGljdGVkIEhlYWx0aCBTdGF0dXNcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2RhdGFbMF0uaW1ndXJsfSBhbHQ9XCJlbW90aW9uXCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCAke1xyXG4gICAgICAgICAgICBkYXRhWzBdLmVtb3Rpb24gPT09IFwiSGFwcHlcIiA/IFwidGV4dC1ncmVlbi02MDBcIiA6IFwidGV4dC1ibGFja1wiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7YCR7ZGF0YVswXS5sZXZlbH0gJHtkYXRhWzBdLmVtb3Rpb259YH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YVswXS50b3BfNV9wcmVkaWN0aW9ucy5tYXAoKHByZWRpY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3ByZWRpY3Rpb24ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwcmVkaWN0aW9uLnNjb3JlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgIHZhbHVlPXszM30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRQYWdlO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2dyZXNzIiwiUmVzdWx0UGFnZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsImltZ3VybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImVtb3Rpb24iLCJsZXZlbCIsInRvcF81X3ByZWRpY3Rpb25zIiwibWFwIiwicHJlZGljdGlvbiIsImluZGV4IiwibGFiZWwiLCJzY29yZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});
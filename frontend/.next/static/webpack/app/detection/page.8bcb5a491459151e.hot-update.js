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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-progress */ \"(app-pages-browser)/./node_modules/rc-progress/es/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst ResultPage = (param)=>{\n    let { data } = param;\n    console.log(data);\n    const detectedEmotion = data[0].emotion == \"Happy\" ? \"No sign of difficulties, in a proper mental status\" : data[0].predicted_emotion == \"neu\" ? \"Emotionally Neutral\" : data[0].predicted_emotion == \"sad\" ? \" Sadness detected, seek help\" : \"Unwell, possible  explosive/bipolar disorder\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row items-center justify-around w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-between items-center gap-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold text-sky-500\",\n                                children: \"Predicted Health Status\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: data[0].imgurl,\n                                alt: \"emotion\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-green-600\\n          }\",\n                                children: detectedEmotion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    data[0].emotion === \"Happy\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"bg-sky-500 hover:bg-sky-600 p-6 text-xl\",\n                        children: \"Detect Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 43\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"\",\n                        children: \"Diagnose\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 124\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/6 grid grid-cols-2\",\n                children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold flex flex-col items-center gap-4 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_progress__WEBPACK_IMPORTED_MODULE_4__.Circle, {\n                                percent: \"\".concat(prediction.score * 100),\n                                trailWidth: 6,\n                                strokeWidth: 6,\n                                strokeColor: \"\".concat(prediction.score <= 0.2 ? \"#eb4034\" : prediction.score > 0.2 && prediction.score <= 0.5 ? \"#0EA5E9\" : \"#34eb59\"),\n                                className: \"w-4/6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDTDtBQUNnQjtBQUNDO0FBQ0w7QUFFdEMsTUFBTU0sYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRTtJQUN4QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkLE1BQU1HLGtCQUFrQkgsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ksT0FBTyxJQUFJLFVBQVUsdURBQXVESixJQUFJLENBQUMsRUFBRSxDQUFDSyxpQkFBaUIsSUFBSSxRQUFRLHdCQUF3QkwsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssaUJBQWlCLElBQUksUUFBUSxpQ0FBaUM7SUFFL08scUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FHZiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWtDOzs7Ozs7MENBR2hELDhEQUFDZCxrREFBS0E7Z0NBQUNnQixLQUFLVCxJQUFJLENBQUMsRUFBRSxDQUFDVSxNQUFNO2dDQUFFQyxLQUFJO2dDQUFVQyxPQUFPO2dDQUFLQyxRQUFROzs7Ozs7MENBQzlELDhEQUFDQztnQ0FDQ1AsV0FBWTswQ0FHYko7Ozs7Ozs7Ozs7OztvQkFJR0gsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ksT0FBTyxLQUFLLHdCQUFVLDhEQUFDTiw4Q0FBTUE7d0JBQUNTLFdBQVU7a0NBQTBDOzs7OztrREFBcUIsOERBQUNULDhDQUFNQTt3QkFBQ1MsV0FBVTtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUcxSSw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pQLElBQUksQ0FBQyxFQUFFLENBQUNlLGlCQUFpQixDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsWUFBWUMsc0JBQzFDLDhEQUFDWjt3QkFBZ0JDLFdBQVU7OzBDQUN6Qiw4REFBQ087MENBQUdHLFdBQVdFLEtBQUs7Ozs7OzswQ0FDcEIsOERBQUN2QiwrQ0FBTUE7Z0NBQUN3QixTQUFTLEdBQXdCLE9BQXJCSCxXQUFXSSxLQUFLLEdBQUM7Z0NBQU9DLFlBQVk7Z0NBQUdDLGFBQWE7Z0NBQUdDLGFBQWEsR0FBd0csT0FBckdQLFdBQVdJLEtBQUssSUFBRSxNQUFLLFlBQVdKLFdBQVdJLEtBQUssR0FBQyxPQUFPSixXQUFXSSxLQUFLLElBQUUsTUFBSyxZQUFVO2dDQUFhZCxXQUFVOzs7Ozs7O3VCQUZyTVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEI7S0FwQ01uQjtBQXNDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RldGVjdGlvbkNvbXBvbmVudHMvcGFnZS5qc3g/MDU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4uL3VpL3Byb2dyZXNzXCI7XHJcbmltcG9ydCB7IENpcmNsZSwgTGluZSB9IGZyb20gXCJyYy1wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XHJcblxyXG5jb25zdCBSZXN1bHRQYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIGNvbnN0IGRldGVjdGVkRW1vdGlvbiA9IGRhdGFbMF0uZW1vdGlvbiA9PSBcIkhhcHB5XCIgPyBcIk5vIHNpZ24gb2YgZGlmZmljdWx0aWVzLCBpbiBhIHByb3BlciBtZW50YWwgc3RhdHVzXCIgOiBkYXRhWzBdLnByZWRpY3RlZF9lbW90aW9uID09IFwibmV1XCIgPyBcIkVtb3Rpb25hbGx5IE5ldXRyYWxcIiA6IGRhdGFbMF0ucHJlZGljdGVkX2Vtb3Rpb24gPT0gXCJzYWRcIiA/IFwiIFNhZG5lc3MgZGV0ZWN0ZWQsIHNlZWsgaGVscFwiIDogXCJVbndlbGwsIHBvc3NpYmxlICBleHBsb3NpdmUvYmlwb2xhciBkaXNvcmRlclwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZCB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuXHJcbiAgICAgICBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2t5LTUwMFwiPlxyXG4gICAgICAgICAgUHJlZGljdGVkIEhlYWx0aCBTdGF0dXNcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2RhdGFbMF0uaW1ndXJsfSBhbHQ9XCJlbW90aW9uXCIgd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9IC8+XHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMFxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgIHtkZXRlY3RlZEVtb3Rpb259XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YVswXS5lbW90aW9uID09PSBcIkhhcHB5XCIgPyA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLXNreS01MDAgaG92ZXI6Ymctc2t5LTYwMCBwLTYgdGV4dC14bFwiPkRldGVjdCBOZXh0PC9CdXR0b24+OjxCdXR0b24gY2xhc3NOYW1lPVwiXCI+RGlhZ25vc2U8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi82IGdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICB7ZGF0YVswXS50b3BfNV9wcmVkaWN0aW9ucy5tYXAoKHByZWRpY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBtdC02XCI+XHJcbiAgICAgICAgICAgIDxwPntwcmVkaWN0aW9uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgPENpcmNsZSBwZXJjZW50PXtgJHtwcmVkaWN0aW9uLnNjb3JlKjEwMH1gfSB0cmFpbFdpZHRoPXs2fSBzdHJva2VXaWR0aD17Nn0gc3Ryb2tlQ29sb3I9e2Ake3ByZWRpY3Rpb24uc2NvcmU8PTAuMj8gJyNlYjQwMzQnOiBwcmVkaWN0aW9uLnNjb3JlPjAuMiAmJiBwcmVkaWN0aW9uLnNjb3JlPD0wLjU/ICcjMEVBNUU5JzonIzM0ZWI1OSd9YH0gY2xhc3NOYW1lPVwidy00LzZcIiAvPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRQYWdlO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2dyZXNzIiwiQ2lyY2xlIiwiTGluZSIsIkJ1dHRvbiIsIlJlc3VsdFBhZ2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRldGVjdGVkRW1vdGlvbiIsImVtb3Rpb24iLCJwcmVkaWN0ZWRfZW1vdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiaW1ndXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwidG9wXzVfcHJlZGljdGlvbnMiLCJtYXAiLCJwcmVkaWN0aW9uIiwiaW5kZXgiLCJsYWJlbCIsInBlcmNlbnQiLCJzY29yZSIsInRyYWlsV2lkdGgiLCJzdHJva2VXaWR0aCIsInN0cm9rZUNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});
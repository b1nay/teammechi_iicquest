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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-progress */ \"(app-pages-browser)/./node_modules/rc-progress/es/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst ResultPage = (param)=>{\n    let { data, handleNext } = param;\n    console.log(data);\n    const detectedEmotion = data[0].emotion == \"Happy\" ? \"No sign of difficulties, in a proper mental status\" : data[0].predicted_emotion == \"Neutral\" ? \"Emotionally Neutral\" : data[0].predicted_emotion == \"Sad\" ? \" Sadness detected, seek help\" : \"Unwell, possible  explosive/bipolar disorder\";\n    const handleNextClick = ()=>{\n        handleNext();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-between items-center gap-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold text-sky-500\",\n                                children: \"Predicted Health Status\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: data[0].imgurl,\n                                alt: \"emotion\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-green-600\\n          }\",\n                                children: detectedEmotion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    data[0].emotion === \"Happy\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: handleNextClick,\n                        className: \"bg-sky-500 hover:bg-sky-600 p-6 text-xl\",\n                        children: \"Detect Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"\",\n                        children: \"Diagnose\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/6 grid grid-cols-2\",\n                children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold flex flex-col items-center gap-4 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_progress__WEBPACK_IMPORTED_MODULE_4__.Circle, {\n                                percent: \"\".concat(prediction.score * 100),\n                                trailWidth: 6,\n                                strokeWidth: 6,\n                                strokeColor: \"\".concat(prediction.score <= 0.2 ? \"#eb4034\" : prediction.score > 0.2 && prediction.score <= 0.5 ? \"#0EA5E9\" : \"#34eb59\"),\n                                className: \"w-4/6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDTDtBQUNnQjtBQUNDO0FBQ0w7QUFFdEMsTUFBTU0sYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osTUFBTUksa0JBQ0pKLElBQUksQ0FBQyxFQUFFLENBQUNLLE9BQU8sSUFBSSxVQUNmLHVEQUNBTCxJQUFJLENBQUMsRUFBRSxDQUFDTSxpQkFBaUIsSUFBSSxZQUM3Qix3QkFDQU4sSUFBSSxDQUFDLEVBQUUsQ0FBQ00saUJBQWlCLElBQUksUUFDN0IsaUNBQ0E7SUFFTixNQUFNQyxrQkFBa0I7UUFDdEJOO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBa0M7Ozs7OzswQ0FHaEQsOERBQUNoQixrREFBS0E7Z0NBQUNrQixLQUFLWCxJQUFJLENBQUMsRUFBRSxDQUFDWSxNQUFNO2dDQUFFQyxLQUFJO2dDQUFVQyxPQUFPO2dDQUFLQyxRQUFROzs7Ozs7MENBQzlELDhEQUFDQztnQ0FDQ1AsV0FBWTswQ0FHWEw7Ozs7Ozs7Ozs7OztvQkFHSkosSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssT0FBTyxLQUFLLHdCQUNuQiw4REFBQ1AsOENBQU1BO3dCQUNMbUIsU0FBU1Y7d0JBQ1RFLFdBQVU7a0NBQ1g7Ozs7O2tEQUlELDhEQUFDWCw4Q0FBTUE7d0JBQUNXLFdBQVU7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFHekIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaVCxJQUFJLENBQUMsRUFBRSxDQUFDa0IsaUJBQWlCLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxZQUFZQyxzQkFDMUMsOERBQUNiO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ087MENBQUdJLFdBQVdFLEtBQUs7Ozs7OzswQ0FDcEIsOERBQUMxQiwrQ0FBTUE7Z0NBQ0wyQixTQUFTLEdBQTBCLE9BQXZCSCxXQUFXSSxLQUFLLEdBQUc7Z0NBQy9CQyxZQUFZO2dDQUNaQyxhQUFhO2dDQUNiQyxhQUFhLEdBTVosT0FMQ1AsV0FBV0ksS0FBSyxJQUFJLE1BQ2hCLFlBQ0FKLFdBQVdJLEtBQUssR0FBRyxPQUFPSixXQUFXSSxLQUFLLElBQUksTUFDOUMsWUFDQTtnQ0FFTmYsV0FBVTs7Ozs7Ozt1QkFmUFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmpCO0tBbEVNdEI7QUFvRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRlY3Rpb25Db21wb25lbnRzL3BhZ2UuanN4PzA1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCIuLi91aS9wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBDaXJjbGUsIExpbmUgfSBmcm9tIFwicmMtcHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xyXG5cclxuY29uc3QgUmVzdWx0UGFnZSA9ICh7IGRhdGEsIGhhbmRsZU5leHQgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIGNvbnN0IGRldGVjdGVkRW1vdGlvbiA9XHJcbiAgICBkYXRhWzBdLmVtb3Rpb24gPT0gXCJIYXBweVwiXHJcbiAgICAgID8gXCJObyBzaWduIG9mIGRpZmZpY3VsdGllcywgaW4gYSBwcm9wZXIgbWVudGFsIHN0YXR1c1wiXHJcbiAgICAgIDogZGF0YVswXS5wcmVkaWN0ZWRfZW1vdGlvbiA9PSBcIk5ldXRyYWxcIlxyXG4gICAgICA/IFwiRW1vdGlvbmFsbHkgTmV1dHJhbFwiXHJcbiAgICAgIDogZGF0YVswXS5wcmVkaWN0ZWRfZW1vdGlvbiA9PSBcIlNhZFwiXHJcbiAgICAgID8gXCIgU2FkbmVzcyBkZXRlY3RlZCwgc2VlayBoZWxwXCJcclxuICAgICAgOiBcIlVud2VsbCwgcG9zc2libGUgIGV4cGxvc2l2ZS9iaXBvbGFyIGRpc29yZGVyXCI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRDbGljayA9ICgpID0+IHtcclxuICAgIGhhbmRsZU5leHQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIHctZnVsbCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1za3ktNTAwXCI+XHJcbiAgICAgICAgICAgIFByZWRpY3RlZCBIZWFsdGggU3RhdHVzXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17ZGF0YVswXS5pbWd1cmx9IGFsdD1cImVtb3Rpb25cIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gLz5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMFxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXRlY3RlZEVtb3Rpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2RhdGFbMF0uZW1vdGlvbiA9PT0gXCJIYXBweVwiID8gKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNreS01MDAgaG92ZXI6Ymctc2t5LTYwMCBwLTYgdGV4dC14bFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERldGVjdCBOZXh0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIj5EaWFnbm9zZTwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi82IGdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICB7ZGF0YVswXS50b3BfNV9wcmVkaWN0aW9ucy5tYXAoKHByZWRpY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBtdC02XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e3ByZWRpY3Rpb24ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICA8Q2lyY2xlXHJcbiAgICAgICAgICAgICAgcGVyY2VudD17YCR7cHJlZGljdGlvbi5zY29yZSAqIDEwMH1gfVxyXG4gICAgICAgICAgICAgIHRyYWlsV2lkdGg9ezZ9XHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezZ9XHJcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I9e2Ake1xyXG4gICAgICAgICAgICAgICAgcHJlZGljdGlvbi5zY29yZSA8PSAwLjJcclxuICAgICAgICAgICAgICAgICAgPyBcIiNlYjQwMzRcIlxyXG4gICAgICAgICAgICAgICAgICA6IHByZWRpY3Rpb24uc2NvcmUgPiAwLjIgJiYgcHJlZGljdGlvbi5zY29yZSA8PSAwLjVcclxuICAgICAgICAgICAgICAgICAgPyBcIiMwRUE1RTlcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiIzM0ZWI1OVwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00LzZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiUHJvZ3Jlc3MiLCJDaXJjbGUiLCJMaW5lIiwiQnV0dG9uIiwiUmVzdWx0UGFnZSIsImRhdGEiLCJoYW5kbGVOZXh0IiwiY29uc29sZSIsImxvZyIsImRldGVjdGVkRW1vdGlvbiIsImVtb3Rpb24iLCJwcmVkaWN0ZWRfZW1vdGlvbiIsImhhbmRsZU5leHRDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiaW1ndXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwib25DbGljayIsInRvcF81X3ByZWRpY3Rpb25zIiwibWFwIiwicHJlZGljdGlvbiIsImluZGV4IiwibGFiZWwiLCJwZXJjZW50Iiwic2NvcmUiLCJ0cmFpbFdpZHRoIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});
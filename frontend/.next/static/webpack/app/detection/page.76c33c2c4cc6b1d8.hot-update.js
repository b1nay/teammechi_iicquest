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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-progress */ \"(app-pages-browser)/./node_modules/rc-progress/es/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst ResultPage = (param)=>{\n    let { data, handlenext } = param;\n    console.log(data);\n    const detectedEmotion = data[0].emotion == \"Happy\" ? \"No sign of difficulties, in a proper mental status\" : data[0].predicted_emotion == \"neu\" ? \"Emotionally Neutral\" : data[0].predicted_emotion == \"sad\" ? \" Sadness detected, seek help\" : \"Unwell, possible  explosive/bipolar disorder\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-between items-center gap-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold text-sky-500\",\n                                children: \"Predicted Health Status\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: data[0].imgurl,\n                                alt: \"emotion\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-green-600\\n          }\",\n                                children: detectedEmotion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    data[0].emotion === \"Happy\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: handlenext,\n                        className: \"bg-sky-500 hover:bg-sky-600 p-6 text-xl\",\n                        children: \"Detect Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"\",\n                        children: \"Diagnose\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/6 grid grid-cols-2\",\n                children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center font-bold flex flex-col items-center gap-4 mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_progress__WEBPACK_IMPORTED_MODULE_4__.Circle, {\n                                percent: \"\".concat(prediction.score * 100),\n                                trailWidth: 6,\n                                strokeWidth: 6,\n                                strokeColor: \"\".concat(prediction.score <= 0.2 ? \"#eb4034\" : prediction.score > 0.2 && prediction.score <= 0.5 ? \"#0EA5E9\" : \"#34eb59\"),\n                                className: \"w-4/6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDTDtBQUNnQjtBQUNDO0FBQ0w7QUFFdEMsTUFBTU0sYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osTUFBTUksa0JBQ0pKLElBQUksQ0FBQyxFQUFFLENBQUNLLE9BQU8sSUFBSSxVQUNmLHVEQUNBTCxJQUFJLENBQUMsRUFBRSxDQUFDTSxpQkFBaUIsSUFBSSxRQUM3Qix3QkFDQU4sSUFBSSxDQUFDLEVBQUUsQ0FBQ00saUJBQWlCLElBQUksUUFDN0IsaUNBQ0E7SUFFTixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBa0M7Ozs7OzswQ0FHaEQsOERBQUNmLGtEQUFLQTtnQ0FBQ2lCLEtBQUtWLElBQUksQ0FBQyxFQUFFLENBQUNXLE1BQU07Z0NBQUVDLEtBQUk7Z0NBQVVDLE9BQU87Z0NBQUtDLFFBQVE7Ozs7OzswQ0FDOUQsOERBQUNDO2dDQUNDUCxXQUFZOzBDQUdYSjs7Ozs7Ozs7Ozs7O29CQUdKSixJQUFJLENBQUMsRUFBRSxDQUFDSyxPQUFPLEtBQUssd0JBQ25CLDhEQUFDUCw4Q0FBTUE7d0JBQ0xrQixTQUFTZjt3QkFDVE8sV0FBVTtrQ0FDWDs7Ozs7a0RBSUQsOERBQUNWLDhDQUFNQTt3QkFBQ1UsV0FBVTtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pSLElBQUksQ0FBQyxFQUFFLENBQUNpQixpQkFBaUIsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFlBQVlDLHNCQUMxQyw4REFBQ2I7d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDTzswQ0FBR0ksV0FBV0UsS0FBSzs7Ozs7OzBDQUNwQiw4REFBQ3pCLCtDQUFNQTtnQ0FDTDBCLFNBQVMsR0FBMEIsT0FBdkJILFdBQVdJLEtBQUssR0FBRztnQ0FDL0JDLFlBQVk7Z0NBQ1pDLGFBQWE7Z0NBQ2JDLGFBQWEsR0FNWixPQUxDUCxXQUFXSSxLQUFLLElBQUksTUFDaEIsWUFDQUosV0FBV0ksS0FBSyxHQUFHLE9BQU9KLFdBQVdJLEtBQUssSUFBSSxNQUM5QyxZQUNBO2dDQUVOZixXQUFVOzs7Ozs7O3VCQWZQWTs7Ozs7Ozs7Ozs7Ozs7OztBQXNCakI7S0E5RE1yQjtBQWdFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RldGVjdGlvbkNvbXBvbmVudHMvcGFnZS5qc3g/MDU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4uL3VpL3Byb2dyZXNzXCI7XHJcbmltcG9ydCB7IENpcmNsZSwgTGluZSB9IGZyb20gXCJyYy1wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XHJcblxyXG5jb25zdCBSZXN1bHRQYWdlID0gKHsgZGF0YSwgaGFuZGxlbmV4dCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgZGV0ZWN0ZWRFbW90aW9uID1cclxuICAgIGRhdGFbMF0uZW1vdGlvbiA9PSBcIkhhcHB5XCJcclxuICAgICAgPyBcIk5vIHNpZ24gb2YgZGlmZmljdWx0aWVzLCBpbiBhIHByb3BlciBtZW50YWwgc3RhdHVzXCJcclxuICAgICAgOiBkYXRhWzBdLnByZWRpY3RlZF9lbW90aW9uID09IFwibmV1XCJcclxuICAgICAgPyBcIkVtb3Rpb25hbGx5IE5ldXRyYWxcIlxyXG4gICAgICA6IGRhdGFbMF0ucHJlZGljdGVkX2Vtb3Rpb24gPT0gXCJzYWRcIlxyXG4gICAgICA/IFwiIFNhZG5lc3MgZGV0ZWN0ZWQsIHNlZWsgaGVscFwiXHJcbiAgICAgIDogXCJVbndlbGwsIHBvc3NpYmxlICBleHBsb3NpdmUvYmlwb2xhciBkaXNvcmRlclwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIHctZnVsbCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZ2FwLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1za3ktNTAwXCI+XHJcbiAgICAgICAgICAgIFByZWRpY3RlZCBIZWFsdGggU3RhdHVzXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17ZGF0YVswXS5pbWd1cmx9IGFsdD1cImVtb3Rpb25cIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gLz5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMFxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXRlY3RlZEVtb3Rpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2RhdGFbMF0uZW1vdGlvbiA9PT0gXCJIYXBweVwiID8gKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVuZXh0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1za3ktNTAwIGhvdmVyOmJnLXNreS02MDAgcC02IHRleHQteGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXRlY3QgTmV4dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCI+RGlhZ25vc2U8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvNiBncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAge2RhdGFbMF0udG9wXzVfcHJlZGljdGlvbnMubWFwKChwcmVkaWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTQgbXQtNlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPntwcmVkaWN0aW9uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgPENpcmNsZVxyXG4gICAgICAgICAgICAgIHBlcmNlbnQ9e2Ake3ByZWRpY3Rpb24uc2NvcmUgKiAxMDB9YH1cclxuICAgICAgICAgICAgICB0cmFpbFdpZHRoPXs2fVxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXs2fVxyXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtgJHtcclxuICAgICAgICAgICAgICAgIHByZWRpY3Rpb24uc2NvcmUgPD0gMC4yXHJcbiAgICAgICAgICAgICAgICAgID8gXCIjZWI0MDM0XCJcclxuICAgICAgICAgICAgICAgICAgOiBwcmVkaWN0aW9uLnNjb3JlID4gMC4yICYmIHByZWRpY3Rpb24uc2NvcmUgPD0gMC41XHJcbiAgICAgICAgICAgICAgICAgID8gXCIjMEVBNUU5XCJcclxuICAgICAgICAgICAgICAgICAgOiBcIiMzNGViNTlcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC82XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRQYWdlO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2dyZXNzIiwiQ2lyY2xlIiwiTGluZSIsIkJ1dHRvbiIsIlJlc3VsdFBhZ2UiLCJkYXRhIiwiaGFuZGxlbmV4dCIsImNvbnNvbGUiLCJsb2ciLCJkZXRlY3RlZEVtb3Rpb24iLCJlbW90aW9uIiwicHJlZGljdGVkX2Vtb3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsImltZ3VybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsIm9uQ2xpY2siLCJ0b3BfNV9wcmVkaWN0aW9ucyIsIm1hcCIsInByZWRpY3Rpb24iLCJpbmRleCIsImxhYmVsIiwicGVyY2VudCIsInNjb3JlIiwidHJhaWxXaWR0aCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});
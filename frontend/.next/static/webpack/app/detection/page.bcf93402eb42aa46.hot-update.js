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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-progress */ \"(app-pages-browser)/./node_modules/rc-progress/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ResultPage = (param)=>{\n    let { data } = param;\n    _s();\n    const [progress, setProgress] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(13);\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        const timer = setTimeout(()=>setProgress(66), 500);\n        return ()=>clearTimeout(timer);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-sky-500\",\n                        children: \"Predicted Health Status\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: data[0].imgurl,\n                        alt: \"emotion\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl font-bold \".concat(data[0].emotion === \"Happy\" ? \"text-green-600\" : \"text-black\"),\n                        children: \"\".concat(data[0].level, \" \").concat(data[0].emotion)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/6\",\n                children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_progress__WEBPACK_IMPORTED_MODULE_4__.Circle, {\n                                percent: \"\".concat(prediction.score * 100),\n                                trailWidth: 4,\n                                strokeWidth: 4,\n                                strokeColor: \"#0EA5E9\",\n                                className: \"w-3/6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResultPage, \"oVnZWQ8XMt8hRBE8vziBOI/K0WI=\");\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDTDtBQUNnQjtBQUNDO0FBRTNDLE1BQU1LLGFBQWE7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQzFCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCxxREFBYyxDQUFDO0lBRS9DQSxzREFBZSxDQUFDO1FBQ2QsTUFBTVUsUUFBUUMsV0FBVyxJQUFNSixZQUFZLEtBQUs7UUFDaEQsT0FBTyxJQUFNSyxhQUFhRjtJQUM1QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWtDOzs7Ozs7a0NBR2hELDhEQUFDZixrREFBS0E7d0JBQUNpQixLQUFLWCxJQUFJLENBQUMsRUFBRSxDQUFDWSxNQUFNO3dCQUFFQyxLQUFJO3dCQUFVQyxPQUFPO3dCQUFLQyxRQUFROzs7Ozs7a0NBQzlELDhEQUFDQzt3QkFDQ1AsV0FBVyxzQkFFVixPQURDVCxJQUFJLENBQUMsRUFBRSxDQUFDaUIsT0FBTyxLQUFLLFVBQVUsbUJBQW1CO2tDQUdsRCxHQUFvQmpCLE9BQWpCQSxJQUFJLENBQUMsRUFBRSxDQUFDa0IsS0FBSyxFQUFDLEtBQW1CLE9BQWhCbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQ2lCLE9BQU87Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUNUO2dCQUFJQyxXQUFVOzBCQUNaVCxJQUFJLENBQUMsRUFBRSxDQUFDbUIsaUJBQWlCLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxZQUFZQyxzQkFDMUMsOERBQUNkO3dCQUFnQkMsV0FBVTs7MENBQ3pCLDhEQUFDTzswQ0FBR0ssV0FBV0UsS0FBSzs7Ozs7OzBDQUNwQiw4REFBQzFCLCtDQUFNQTtnQ0FBQzJCLFNBQVMsR0FBd0IsT0FBckJILFdBQVdJLEtBQUssR0FBQztnQ0FBT0MsWUFBWTtnQ0FBR0MsYUFBYTtnQ0FBR0MsYUFBWTtnQ0FBVW5CLFdBQVU7Ozs7Ozs7dUJBRm5HYTs7Ozs7Ozs7Ozs7Ozs7OztBQVNwQjtHQWxDTXZCO0tBQUFBO0FBb0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeD8wNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvZ3Jlc3MgfSBmcm9tIFwiLi4vdWkvcHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgQ2lyY2xlLCBMaW5lIH0gZnJvbSBcInJjLXByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBSZXN1bHRQYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZSgxMyk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gc2V0UHJvZ3Jlc3MoNjYpLCA1MDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIHctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNreS01MDBcIj5cclxuICAgICAgICAgIFByZWRpY3RlZCBIZWFsdGggU3RhdHVzXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhWzBdLmltZ3VybH0gYWx0PVwiZW1vdGlvblwiIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LWJvbGQgJHtcclxuICAgICAgICAgICAgZGF0YVswXS5lbW90aW9uID09PSBcIkhhcHB5XCIgPyBcInRleHQtZ3JlZW4tNjAwXCIgOiBcInRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Ake2RhdGFbMF0ubGV2ZWx9ICR7ZGF0YVswXS5lbW90aW9ufWB9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvNlwiPlxyXG4gICAgICAgIHtkYXRhWzBdLnRvcF81X3ByZWRpY3Rpb25zLm1hcCgocHJlZGljdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICA8cD57cHJlZGljdGlvbi5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgcGVyY2VudD17YCR7cHJlZGljdGlvbi5zY29yZSoxMDB9YH0gdHJhaWxXaWR0aD17NH0gc3Ryb2tlV2lkdGg9ezR9IHN0cm9rZUNvbG9yPVwiIzBFQTVFOVwiIGNsYXNzTmFtZT1cInctMy82XCIgLz5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0UGFnZTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJQcm9ncmVzcyIsIkNpcmNsZSIsIkxpbmUiLCJSZXN1bHRQYWdlIiwiZGF0YSIsInByb2dyZXNzIiwic2V0UHJvZ3Jlc3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiaW1ndXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiZW1vdGlvbiIsImxldmVsIiwidG9wXzVfcHJlZGljdGlvbnMiLCJtYXAiLCJwcmVkaWN0aW9uIiwiaW5kZXgiLCJsYWJlbCIsInBlcmNlbnQiLCJzY29yZSIsInRyYWlsV2lkdGgiLCJzdHJva2VXaWR0aCIsInN0cm9rZUNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});
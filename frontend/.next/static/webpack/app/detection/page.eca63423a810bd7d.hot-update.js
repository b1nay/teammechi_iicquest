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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-progress */ \"(app-pages-browser)/./node_modules/rc-progress/es/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst ResultPage = (param)=>{\n    let { data, handleNext } = param;\n    console.log(\"from the fsdff\", data);\n    const detectedEmotion = data[0].emotion == \"Happy\" ? \"No sign of difficulties, in a proper mental status\" : data[0].predicted_emotion == \"Neutral\" ? \"Emotionally Neutral\" : data[0].predicted_emotion == \"Sad\" ? \" Sadness detected, seek help\" : \"Unwell, possible  explosive/bipolar disorder\";\n    const handleNextClick = ()=>{\n        handleNext();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-around items-center gap-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold text-sky-500\",\n                                children: \"Predicted Health Status\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: data[0].imgurl,\n                                alt: \"emotion\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-green-600\\n          }\",\n                                children: detectedEmotion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    data[0].emotion === \"Happy\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: handleNextClick,\n                        className: \"bg-sky-500 hover:bg-sky-600 p-6 text-xl\",\n                        children: \"Detect Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"\",\n                        children: \"Diagnose\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/6 flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl w-full font-bold text-sky-500\",\n                        children: \"Top 5 Predictions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/6 grid grid-cols-2 \",\n                        children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center font-bold flex flex-col items-center gap-4 mt-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: prediction.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_progress__WEBPACK_IMPORTED_MODULE_4__.Circle, {\n                                        percent: \"\".concat(prediction.score * 100),\n                                        trailWidth: 6,\n                                        strokeWidth: 6,\n                                        strokeColor: \"\".concat(prediction.score <= 0.2 ? \"#eb4034\" : prediction.score > 0.2 && prediction.score <= 0.5 ? \"#0EA5E9\" : \"#34eb59\"),\n                                        className: \"w-4/6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDTDtBQUNnQjtBQUNDO0FBQ0w7QUFFdEMsTUFBTU0sYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCSDtJQUM5QixNQUFNSSxrQkFDSkosSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssT0FBTyxJQUFJLFVBQ2YsdURBQ0FMLElBQUksQ0FBQyxFQUFFLENBQUNNLGlCQUFpQixJQUFJLFlBQzdCLHdCQUNBTixJQUFJLENBQUMsRUFBRSxDQUFDTSxpQkFBaUIsSUFBSSxRQUM3QixpQ0FDQTtJQUVOLE1BQU1DLGtCQUFrQjtRQUN0Qk47SUFDRjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFrQzs7Ozs7OzBDQUdoRCw4REFBQ2hCLGtEQUFLQTtnQ0FBQ2tCLEtBQUtYLElBQUksQ0FBQyxFQUFFLENBQUNZLE1BQU07Z0NBQUVDLEtBQUk7Z0NBQVVDLE9BQU87Z0NBQUtDLFFBQVE7Ozs7OzswQ0FDOUQsOERBQUNDO2dDQUNDUCxXQUFZOzBDQUdYTDs7Ozs7Ozs7Ozs7O29CQUdKSixJQUFJLENBQUMsRUFBRSxDQUFDSyxPQUFPLEtBQUssd0JBQ25CLDhEQUFDUCw4Q0FBTUE7d0JBQ0xtQixTQUFTVjt3QkFDVEUsV0FBVTtrQ0FDWDs7Ozs7a0RBSUQsOERBQUNYLDhDQUFNQTt3QkFBQ1csV0FBVTtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUd6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBeUM7Ozs7OztrQ0FDdkQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaVCxJQUFJLENBQUMsRUFBRSxDQUFDa0IsaUJBQWlCLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxZQUFZQyxzQkFDMUMsOERBQUNiO2dDQUVDQyxXQUFVOztrREFFViw4REFBQ087a0RBQUdJLFdBQVdFLEtBQUs7Ozs7OztrREFDcEIsOERBQUMxQiwrQ0FBTUE7d0NBQ0wyQixTQUFTLEdBQTBCLE9BQXZCSCxXQUFXSSxLQUFLLEdBQUc7d0NBQy9CQyxZQUFZO3dDQUNaQyxhQUFhO3dDQUNiQyxhQUFhLEdBTVosT0FMQ1AsV0FBV0ksS0FBSyxJQUFJLE1BQ2hCLFlBQ0FKLFdBQVdJLEtBQUssR0FBRyxPQUFPSixXQUFXSSxLQUFLLElBQUksTUFDOUMsWUFDQTt3Q0FFTmYsV0FBVTs7Ozs7OzsrQkFmUFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Qm5CO0tBckVNdEI7QUF1RU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXRlY3Rpb25Db21wb25lbnRzL3BhZ2UuanN4PzA1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCIuLi91aS9wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBDaXJjbGUsIExpbmUgfSBmcm9tIFwicmMtcHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL3VpL2J1dHRvblwiO1xyXG5cclxuY29uc3QgUmVzdWx0UGFnZSA9ICh7IGRhdGEsIGhhbmRsZU5leHQgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiZnJvbSB0aGUgZnNkZmZcIiwgZGF0YSk7XHJcbiAgY29uc3QgZGV0ZWN0ZWRFbW90aW9uID1cclxuICAgIGRhdGFbMF0uZW1vdGlvbiA9PSBcIkhhcHB5XCJcclxuICAgICAgPyBcIk5vIHNpZ24gb2YgZGlmZmljdWx0aWVzLCBpbiBhIHByb3BlciBtZW50YWwgc3RhdHVzXCJcclxuICAgICAgOiBkYXRhWzBdLnByZWRpY3RlZF9lbW90aW9uID09IFwiTmV1dHJhbFwiXHJcbiAgICAgID8gXCJFbW90aW9uYWxseSBOZXV0cmFsXCJcclxuICAgICAgOiBkYXRhWzBdLnByZWRpY3RlZF9lbW90aW9uID09IFwiU2FkXCJcclxuICAgICAgPyBcIiBTYWRuZXNzIGRldGVjdGVkLCBzZWVrIGhlbHBcIlxyXG4gICAgICA6IFwiVW53ZWxsLCBwb3NzaWJsZSAgZXhwbG9zaXZlL2JpcG9sYXIgZGlzb3JkZXJcIjtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlTmV4dCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmQgdy1mdWxsIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIGdhcC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2t5LTUwMFwiPlxyXG4gICAgICAgICAgICBQcmVkaWN0ZWQgSGVhbHRoIFN0YXR1c1xyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2RhdGFbMF0uaW1ndXJsfSBhbHQ9XCJlbW90aW9uXCIgd2lkdGg9ezI1MH0gaGVpZ2h0PXsyNTB9IC8+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmVlbi02MDBcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGV0ZWN0ZWRFbW90aW9ufVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtkYXRhWzBdLmVtb3Rpb24gPT09IFwiSGFwcHlcIiA/IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dENsaWNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1za3ktNTAwIGhvdmVyOmJnLXNreS02MDAgcC02IHRleHQteGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZXRlY3QgTmV4dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCI+RGlhZ25vc2U8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB3LWZ1bGwgZm9udC1ib2xkIHRleHQtc2t5LTUwMFwiPlRvcCA1IFByZWRpY3Rpb25zPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC82IGdyaWQgZ3JpZC1jb2xzLTIgXCI+XHJcbiAgICAgICAgICB7ZGF0YVswXS50b3BfNV9wcmVkaWN0aW9ucy5tYXAoKHByZWRpY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBtdC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwPntwcmVkaWN0aW9uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICA8Q2lyY2xlXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50PXtgJHtwcmVkaWN0aW9uLnNjb3JlICogMTAwfWB9XHJcbiAgICAgICAgICAgICAgICB0cmFpbFdpZHRoPXs2fVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezZ9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17YCR7XHJcbiAgICAgICAgICAgICAgICAgIHByZWRpY3Rpb24uc2NvcmUgPD0gMC4yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIiNlYjQwMzRcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogcHJlZGljdGlvbi5zY29yZSA+IDAuMiAmJiBwcmVkaWN0aW9uLnNjb3JlIDw9IDAuNVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCIjMEVBNUU5XCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiIzM0ZWI1OVwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC82XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRQYWdlO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIlByb2dyZXNzIiwiQ2lyY2xlIiwiTGluZSIsIkJ1dHRvbiIsIlJlc3VsdFBhZ2UiLCJkYXRhIiwiaGFuZGxlTmV4dCIsImNvbnNvbGUiLCJsb2ciLCJkZXRlY3RlZEVtb3Rpb24iLCJlbW90aW9uIiwicHJlZGljdGVkX2Vtb3Rpb24iLCJoYW5kbGVOZXh0Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsImltZ3VybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsIm9uQ2xpY2siLCJ0b3BfNV9wcmVkaWN0aW9ucyIsIm1hcCIsInByZWRpY3Rpb24iLCJpbmRleCIsImxhYmVsIiwicGVyY2VudCIsInNjb3JlIiwidHJhaWxXaWR0aCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});
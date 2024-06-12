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

/***/ "(app-pages-browser)/./app/detection/page.jsx":
/*!********************************!*\
  !*** ./app/detection/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_audioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/audioInput */ \"(app-pages-browser)/./components/audioInput.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/generateEmotionList */ \"(app-pages-browser)/./utils/generateEmotionList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Optional state to store the response from the server\n    const handleSend = async (data)=>{\n        setLoading(true);\n        const formData = new FormData();\n        formData.append(\"file\", data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app\n        try {\n            const res = await fetch(\"https://jsonplaceholder.typicode.com/todos/1\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!res.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const ress = {\n                predicted_emotion: \"hap\",\n                top_5_predictions: [\n                    {\n                        label: \"hap\",\n                        score: 0.7928280830383301\n                    },\n                    {\n                        label: \"neu\",\n                        score: 0.20054923595783308\n                    },\n                    {\n                        label: \"sad\",\n                        score: 0.006119635887444019\n                    },\n                    {\n                        label: \"ang\",\n                        score: 0.00020300208416301757\n                    }\n                ]\n            };\n            const result = await ress.json();\n            const extendedEmotionList = (0,_utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(result);\n            setData(extendedEmotionList);\n            console.log(extendedEmotionList);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-[70vh] w-5/6 mx-auto\",\n        children: !loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            handlesend: handleSend\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, undefined) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Emotion Prediction\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\".concat(data[0].level, \" \").concat(data[0].emotion, \" \").concat(data[0].score)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 63,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 68,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4du5pdttxm5wArpEXkL3iTCV5/o=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRlY3Rpb24vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1M7QUFDbEI7QUFDK0I7QUFFOUQsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLE9BQU8sdURBQXVEO0lBRS9GLE1BQU1TLGFBQWEsT0FBT0Y7UUFDeEJELFdBQVc7UUFDWCxNQUFNSSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUUwsS0FBS00sS0FBSyxHQUFHLHNGQUFzRjtRQUUzSCxJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGdEQUFnRDtnQkFDdEVDLFFBQVE7Z0JBQ1JDLE1BQU1QO1lBQ1I7WUFFQSxJQUFJLENBQUNJLElBQUlJLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQSxNQUFNQyxPQUFRO2dCQUNaQyxtQkFBbUI7Z0JBQ25CQyxtQkFBbUI7b0JBQ2pCO3dCQUNFQyxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO2lCQUNEO1lBQ0g7WUFFQSxNQUFNQyxTQUFTLE1BQU1MLEtBQUtNLElBQUk7WUFDOUIsTUFBTUMsc0JBQXNCeEIsc0VBQW1CQSxDQUFDc0I7WUFDaERqQixRQUFRbUI7WUFDUkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDMUI7UUFDQXhCLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBVTtrQkFDWixDQUFDM0IsV0FBVyxDQUFDRSxxQkFDWiw4REFBQ04sOERBQVVBO1lBQUNnQyxZQUFZeEI7Ozs7O3dCQUN0QkYscUJBQ0YsOERBQUN3Qjs7OEJBQ0MsOERBQUNHOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHLEdBQW9CNUIsT0FBakJBLElBQUksQ0FBQyxFQUFFLENBQUM2QixLQUFLLEVBQUMsS0FBc0I3QixPQUFuQkEsSUFBSSxDQUFDLEVBQUUsQ0FBQzhCLE9BQU8sRUFBQyxLQUFpQixPQUFkOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQ2lCLEtBQUs7Ozs7Ozs7Ozs7O3NDQUcxRCw4REFBQ1c7c0JBQUU7Ozs7Ozs7Ozs7O0FBb0JYO0dBaEZNL0I7S0FBQUE7QUFrRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RldGVjdGlvbi9wYWdlLmpzeD9lMTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdWRpb0lucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvYXVkaW9JbnB1dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGdlbmVyYXRlRW1vdGlvbkxpc3QgZnJvbSBcIkAvdXRpbHMvZ2VuZXJhdGVFbW90aW9uTGlzdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7IC8vIE9wdGlvbmFsIHN0YXRlIHRvIHN0b3JlIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZGF0YS5hdWRpbyk7IC8vIEFwcGVuZCB0aGUgc2VsZWN0ZWQgYXVkaW8gZmlsZSwgJ2ZpbGUnIHNob3VsZCBtYXRjaCB0aGUgbmFtZSB1c2VkIGluIHlvdXIgRmxhc2sgYXBwXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXNzICA9IHtcclxuICAgICAgICBwcmVkaWN0ZWRfZW1vdGlvbjogXCJoYXBcIixcclxuICAgICAgICB0b3BfNV9wcmVkaWN0aW9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJoYXBcIixcclxuICAgICAgICAgICAgc2NvcmU6IDAuNzkyODI4MDgzMDM4MzMwMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIm5ldVwiLFxyXG4gICAgICAgICAgICBzY29yZTogMC4yMDA1NDkyMzU5NTc4MzMwOCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcInNhZFwiLFxyXG4gICAgICAgICAgICBzY29yZTogMC4wMDYxMTk2MzU4ODc0NDQwMTksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJhbmdcIixcclxuICAgICAgICAgICAgc2NvcmU6IDAuMDAwMjAzMDAyMDg0MTYzMDE3NTcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNzLmpzb24oKTtcclxuICAgICAgY29uc3QgZXh0ZW5kZWRFbW90aW9uTGlzdCA9IGdlbmVyYXRlRW1vdGlvbkxpc3QocmVzdWx0KTtcclxuICAgICAgc2V0RGF0YShleHRlbmRlZEVtb3Rpb25MaXN0KTtcclxuICAgICAgY29uc29sZS5sb2coZXh0ZW5kZWRFbW90aW9uTGlzdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzcwdmhdIHctNS82IG14LWF1dG9cIj5cclxuICAgICAgeyFsb2FkaW5nICYmICFkYXRhID8gKFxyXG4gICAgICAgIDxBdWRpb0lucHV0IGhhbmRsZXNlbmQ9e2hhbmRsZVNlbmR9IC8+XHJcbiAgICAgICkgOiBkYXRhID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+RW1vdGlvbiBQcmVkaWN0aW9uPC9oMT5cclxuICAgICAgICAgIDxwPntgJHtkYXRhWzBdLmxldmVsfSAke2RhdGFbMF0uZW1vdGlvbn0gJHtkYXRhWzBdLnNjb3JlfWB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiB7IWxvYWRpbmcgJiYgIWRhdGEgPyAoXHJcbiAgICAgICAgPEF1ZGlvSW5wdXQgaGFuZGxlc2VuZD17aGFuZGxlU2VuZH0gLz5cclxuICAgICAgKSA6IGRhdGEgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5PdGhlciBkYXRhPC9oMT5cclxuICAgICAgICAgIDxwPntkYXRhLnByZWRpY3RlZF9lbW90aW9ufTwvcD5cclxuICAgICAgICAgIHtkYXRhLnRvcF81X3ByZWRpY3Rpb25zLm1hcCgocHJlZGljdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8cD57cHJlZGljdGlvbi5sYWJlbH08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3ByZWRpY3Rpb24uc2NvcmV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICl9ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXVkaW9JbnB1dCIsIkltYWdlIiwiZ2VuZXJhdGVFbW90aW9uTGlzdCIsIlBhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlU2VuZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhdWRpbyIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIm9rIiwiRXJyb3IiLCJyZXNzIiwicHJlZGljdGVkX2Vtb3Rpb24iLCJ0b3BfNV9wcmVkaWN0aW9ucyIsImxhYmVsIiwic2NvcmUiLCJyZXN1bHQiLCJqc29uIiwiZXh0ZW5kZWRFbW90aW9uTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImhhbmRsZXNlbmQiLCJoMSIsInAiLCJsZXZlbCIsImVtb3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detection/page.jsx\n"));

/***/ })

});
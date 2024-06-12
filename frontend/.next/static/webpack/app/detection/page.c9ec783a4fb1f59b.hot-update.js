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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_audioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/audioInput */ \"(app-pages-browser)/./components/audioInput.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/generateEmotionList */ \"(app-pages-browser)/./utils/generateEmotionList.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Optional state to store the response from the server\n    const handleSend = async (data)=>{\n        setLoading(true);\n        const formData = new FormData();\n        formData.append(\"file\", data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app\n        try {\n            const res = await fetch(\"https://localhost:5000/predict\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!res.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            //   const ress = {\n            //     predicted_emotion: \"hap\",\n            //     top_5_predictions: [\n            //       {\n            //         label: \"hap\",\n            //         score: 0.7928280830383301,\n            //       },\n            //       {\n            //         label: \"neu\",\n            //         score: 0.20054923595783308,\n            //       },\n            //       {\n            //         label: \"sad\",\n            //         score: 0.006119635887444019,\n            //       },\n            //       {\n            //         label: \"ang\",\n            //         score: 0.00020300208416301757,\n            //       },\n            //     ],\n            //   };\n            const extendedEmotionList = (0,_utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(res);\n            setData(extendedEmotionList);\n            console.log(extendedEmotionList);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-[70vh] w-5/6 mx-auto\",\n        children: !loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            handlesend: handleSend\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, undefined) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold text-sky-500\",\n                    children: \"Predicted Health Status\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: data[0].imgurl,\n                    alt: \"emotion\",\n                    width: 300,\n                    height: 300\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl font-bold \".concat(data[0].emotion === \"Happy\" ? \"text-green-600\" : \"text-black\"),\n                    children: \"\".concat(data[0].level, \" \").concat(data[0].emotion)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 63,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 75,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"4du5pdttxm5wArpEXkL3iTCV5/o=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRlY3Rpb24vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRXdDO0FBQ1M7QUFDbEI7QUFDK0I7QUFFOUQsTUFBTUssT0FBTzs7SUFDWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLE9BQU8sdURBQXVEO0lBRS9GLE1BQU1TLGFBQWEsT0FBT0Y7UUFDeEJELFdBQVc7UUFDWCxNQUFNSSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUUwsS0FBS00sS0FBSyxHQUFHLHNGQUFzRjtRQUUzSCxJQUFJO1lBQ0EsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLGtDQUFrQztnQkFDeERDLFFBQVE7Z0JBQ1JDLE1BQU1QO1lBQ1I7WUFFQSxJQUFJLENBQUNJLElBQUlJLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDSixtQkFBbUI7WUFDbkIsZ0NBQWdDO1lBQ2hDLDJCQUEyQjtZQUMzQixVQUFVO1lBQ1Ysd0JBQXdCO1lBQ3hCLHFDQUFxQztZQUNyQyxXQUFXO1lBQ1gsVUFBVTtZQUNWLHdCQUF3QjtZQUN4QixzQ0FBc0M7WUFDdEMsV0FBVztZQUNYLFVBQVU7WUFDVix3QkFBd0I7WUFDeEIsdUNBQXVDO1lBQ3ZDLFdBQVc7WUFDWCxVQUFVO1lBQ1Ysd0JBQXdCO1lBQ3hCLHlDQUF5QztZQUN6QyxXQUFXO1lBQ1gsU0FBUztZQUNULE9BQU87WUFFTCxNQUFNQyxzQkFBc0JqQixzRUFBbUJBLENBQUNXO1lBRWhETixRQUFRWTtZQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUMxQjtRQUNBakIsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVO2tCQUNaLENBQUNwQixXQUFXLENBQUNFLHFCQUNaLDhEQUFDTiw4REFBVUE7WUFBQ3lCLFlBQVlqQjs7Ozs7d0JBQ3RCRixxQkFDRiw4REFBQ2lCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBR0YsV0FBVTs4QkFBa0M7Ozs7Ozs4QkFDaEQsOERBQUN2QixrREFBS0E7b0JBQUMwQixLQUFLckIsSUFBSSxDQUFDLEVBQUUsQ0FBQ3NCLE1BQU07b0JBQUVDLEtBQUk7b0JBQVVDLE9BQU87b0JBQUtDLFFBQVE7Ozs7Ozs4QkFDOUQsOERBQUNDO29CQUNDUixXQUFXLHNCQUVWLE9BRENsQixJQUFJLENBQUMsRUFBRSxDQUFDMkIsT0FBTyxLQUFLLFVBQVUsbUJBQW1COzhCQUdsRCxHQUFvQjNCLE9BQWpCQSxJQUFJLENBQUMsRUFBRSxDQUFDNEIsS0FBSyxFQUFDLEtBQW1CLE9BQWhCNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQzJCLE9BQU87Ozs7Ozs7Ozs7O3NDQUl4Qyw4REFBQ0Q7c0JBQUU7Ozs7Ozs7Ozs7O0FBb0JYO0dBdkZNN0I7S0FBQUE7QUF5Rk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RldGVjdGlvbi9wYWdlLmpzeD9lMTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdWRpb0lucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvYXVkaW9JbnB1dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGdlbmVyYXRlRW1vdGlvbkxpc3QgZnJvbSBcIkAvdXRpbHMvZ2VuZXJhdGVFbW90aW9uTGlzdFwiO1xyXG5cclxuY29uc3QgUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7IC8vIE9wdGlvbmFsIHN0YXRlIHRvIHN0b3JlIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZGF0YS5hdWRpbyk7IC8vIEFwcGVuZCB0aGUgc2VsZWN0ZWQgYXVkaW8gZmlsZSwgJ2ZpbGUnIHNob3VsZCBtYXRjaCB0aGUgbmFtZSB1c2VkIGluIHlvdXIgRmxhc2sgYXBwXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjUwMDAvcHJlZGljdFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgLy8gICBjb25zdCByZXNzID0ge1xyXG4gICAgLy8gICAgIHByZWRpY3RlZF9lbW90aW9uOiBcImhhcFwiLFxyXG4gICAgLy8gICAgIHRvcF81X3ByZWRpY3Rpb25zOiBbXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiBcImhhcFwiLFxyXG4gICAgLy8gICAgICAgICBzY29yZTogMC43OTI4MjgwODMwMzgzMzAxLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbGFiZWw6IFwibmV1XCIsXHJcbiAgICAvLyAgICAgICAgIHNjb3JlOiAwLjIwMDU0OTIzNTk1NzgzMzA4LFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbGFiZWw6IFwic2FkXCIsXHJcbiAgICAvLyAgICAgICAgIHNjb3JlOiAwLjAwNjExOTYzNTg4NzQ0NDAxOSxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsOiBcImFuZ1wiLFxyXG4gICAgLy8gICAgICAgICBzY29yZTogMC4wMDAyMDMwMDIwODQxNjMwMTc1NyxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGV4dGVuZGVkRW1vdGlvbkxpc3QgPSBnZW5lcmF0ZUVtb3Rpb25MaXN0KHJlcyk7XHJcblxyXG4gICAgICBzZXREYXRhKGV4dGVuZGVkRW1vdGlvbkxpc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhleHRlbmRlZEVtb3Rpb25MaXN0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bNzB2aF0gdy01LzYgbXgtYXV0b1wiPlxyXG4gICAgICB7IWxvYWRpbmcgJiYgIWRhdGEgPyAoXHJcbiAgICAgICAgPEF1ZGlvSW5wdXQgaGFuZGxlc2VuZD17aGFuZGxlU2VuZH0gLz5cclxuICAgICAgKSA6IGRhdGEgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNreS01MDBcIj5QcmVkaWN0ZWQgSGVhbHRoIFN0YXR1czwvaDE+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhWzBdLmltZ3VybH0gYWx0PVwiZW1vdGlvblwiIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxyXG4gICAgICAgICAgPHBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkICR7XHJcbiAgICAgICAgICAgICAgZGF0YVswXS5lbW90aW9uID09PSBcIkhhcHB5XCIgPyBcInRleHQtZ3JlZW4tNjAwXCIgOiBcInRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Ake2RhdGFbMF0ubGV2ZWx9ICR7ZGF0YVswXS5lbW90aW9ufWB9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgKX1cclxuICAgICAgey8qIHshbG9hZGluZyAmJiAhZGF0YSA/IChcclxuICAgICAgICA8QXVkaW9JbnB1dCBoYW5kbGVzZW5kPXtoYW5kbGVTZW5kfSAvPlxyXG4gICAgICApIDogZGF0YSA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPk90aGVyIGRhdGE8L2gxPlxyXG4gICAgICAgICAgPHA+e2RhdGEucHJlZGljdGVkX2Vtb3Rpb259PC9wPlxyXG4gICAgICAgICAge2RhdGEudG9wXzVfcHJlZGljdGlvbnMubWFwKChwcmVkaWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxwPntwcmVkaWN0aW9uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICA8cD57cHJlZGljdGlvbi5zY29yZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgKX0gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdWRpb0lucHV0IiwiSW1hZ2UiLCJnZW5lcmF0ZUVtb3Rpb25MaXN0IiwiUGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJoYW5kbGVTZW5kIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF1ZGlvIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsImV4dGVuZGVkRW1vdGlvbkxpc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoYW5kbGVzZW5kIiwiaDEiLCJzcmMiLCJpbWd1cmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJlbW90aW9uIiwibGV2ZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detection/page.jsx\n"));

/***/ })

});
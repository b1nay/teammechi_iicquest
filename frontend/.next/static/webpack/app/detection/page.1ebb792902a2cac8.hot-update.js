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

/***/ "(app-pages-browser)/./utils/generateEmotionList.js":
/*!**************************************!*\
  !*** ./utils/generateEmotionList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ generateEmotionList; }\n/* harmony export */ });\nconst imageUrl = {\n    hap: \"https://imgs.search.brave.com/n1dyIfNd9kiO4hE5Et4UhuKq-g0aOS19qxBqdoJC4pk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yNC80Ni9l/bW9qaS1zbWlsaW5n/LWhhcHB5LXZlY3Rv/ci00MzYzMjQ0Ni5q/cGc\",\n    ang: \"https://imgs.search.brave.com/fPMetrRL1ktYow9XBi4KKBCEXg6D_0xJ8L0huTZY4QY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzgyLzU3LzQx/LzM2MF9GXzc4MjU3/NDE5NV9YOEZtTWli/aTBxV2lER0ZSVXVM/bmthbnpsUE9CYTR3/bS5qcGc\",\n    sad: \"https://imgs.search.brave.com/SzcLOJPKjS9oLEkJ_0MN7cRQSlfPfJgM_IsC-3fwAAI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzE4LzI1/LzM2MF9GXzg2MTgy/NTQ2X0d5OTNoeW9D/RlhtSzBKbFhZbk9l/a3YwNXY2Nk1VbWZi/LmpwZw\",\n    neu: \"https://imgs.search.brave.com/SzcLOJPKjS9oLEkJ_0MN7cRQSlfPfJgM_IsC-3fwAAI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzE4LzI1/LzM2MF9GXzg2MTgy/NTQ2X0d5OTNoeW9D/RlhtSzBKbFhZbk9l/a3YwNXY2Nk1VbWZi/LmpwZw\"\n};\nconst emotionLabels = {\n    hap: \"Happy\",\n    neu: \"Neutral\",\n    sad: \"Sad\",\n    ang: \"Angry\"\n};\nfunction generateEmotionList(data) {\n    var _top_5_predictions_find;\n    const { predicted_emotion, top_5_predictions } = data;\n    const predictedEmotionScore = (_top_5_predictions_find = top_5_predictions.find((prediction)=>prediction.label === predicted_emotion)) === null || _top_5_predictions_find === void 0 ? void 0 : _top_5_predictions_find.score;\n    if (!predictedEmotionScore) {\n        console.log(\"nto foudnfdofd\");\n        return [\n            {\n                emotion: predicted_emotion,\n                level: \"Unknown\"\n            }\n        ];\n    }\n    const level = getEmotionLevel(predictedEmotionScore);\n    return [\n        {\n            emotion: emotionLabels[predicted_emotion] || predicted_emotion,\n            level,\n            score: predictedEmotionScore,\n            imgurl: imageUrl[predicted_emotion],\n            top_5_predictions: top_5_predictions.map((prediction)=>({\n                    ...prediction,\n                    label: emotionLabels[prediction.label] || prediction.label\n                }))\n        }\n    ];\n} // const getEmotionLevel = (score) => {\n //   if (score >= 0.8) {\n //     return [\"Extremely\", \"\"];\n //   } else if (score >= 0.6) {\n //     return \"Very\";\n //   } else if (score >= 0.4) {\n //     return \"Moderately\";\n //   } else {\n //     return \"Slightly\";\n //   }\n // };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2dlbmVyYXRlRW1vdGlvbkxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVc7SUFDZkMsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsS0FBSztBQUNQO0FBRUEsTUFBTUMsZ0JBQWdCO0lBQ3BCSixLQUFLO0lBQ0xHLEtBQUs7SUFDTEQsS0FBSztJQUNMRCxLQUFLO0FBRVA7QUFFZSxTQUFTSSxvQkFBb0JDLElBQUk7UUFFaEJDO0lBRDlCLE1BQU0sRUFBRUMsaUJBQWlCLEVBQUVELGlCQUFpQixFQUFFLEdBQUdEO0lBQ2pELE1BQU1HLHlCQUF3QkYsMEJBQUFBLGtCQUFrQkcsSUFBSSxDQUNsRCxDQUFDQyxhQUFlQSxXQUFXQyxLQUFLLEtBQUtKLGdDQURURCw4Q0FBQUEsd0JBRTNCTSxLQUFLO0lBRVIsSUFBSSxDQUFDSix1QkFBdUI7UUFDMUJLLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU87WUFBQztnQkFBRUMsU0FBU1I7Z0JBQW1CUyxPQUFPO1lBQVU7U0FBRTtJQUMzRDtJQUVBLE1BQU1BLFFBQVFDLGdCQUFnQlQ7SUFDOUIsT0FBTztRQUNMO1lBQ0VPLFNBQVNaLGFBQWEsQ0FBQ0ksa0JBQWtCLElBQUlBO1lBQzdDUztZQUNBSixPQUFPSjtZQUNQVSxRQUFRcEIsUUFBUSxDQUFDUyxrQkFBa0I7WUFDbkNELG1CQUFtQkEsa0JBQWtCYSxHQUFHLENBQUMsQ0FBQ1QsYUFBZ0I7b0JBQ3hELEdBQUdBLFVBQVU7b0JBQ2JDLE9BQU9SLGFBQWEsQ0FBQ08sV0FBV0MsS0FBSyxDQUFDLElBQUlELFdBQVdDLEtBQUs7Z0JBQzVEO1FBQ0Y7S0FDRDtBQUNILEVBRUEsdUNBQXVDO0NBQ3ZDLHdCQUF3QjtDQUN4QixnQ0FBZ0M7Q0FDaEMsK0JBQStCO0NBQy9CLHFCQUFxQjtDQUNyQiwrQkFBK0I7Q0FDL0IsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsTUFBTTtDQUNOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZ2VuZXJhdGVFbW90aW9uTGlzdC5qcz83YmMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltYWdlVXJsID0ge1xyXG4gIGhhcDogXCJodHRwczovL2ltZ3Muc2VhcmNoLmJyYXZlLmNvbS9uMWR5SWZOZDlraU80aEU1RXQ0VWh1S3EtZzBhT1MxOXF4QnFkb0pDNHBrL3JzOmZpdDo4NjA6MDowL2c6Y2UvYUhSMGNITTZMeTlqWkc0dS9kbVZqZEc5eWMzUnZZMnN1L1kyOXRMMmt2Y0hKbGRtbGwvZHkweGVDOHlOQzgwTmk5bC9iVzlxYVMxemJXbHNhVzVuL0xXaGhjSEI1TFhabFkzUnYvY2kwME16WXpNalEwTmk1cS9jR2NcIixcclxuICBhbmc6IFwiaHR0cHM6Ly9pbWdzLnNlYXJjaC5icmF2ZS5jb20vZlBNZXRyUkwxa3RZb3c5WEJpNEtLQkNFWGc2RF8weEo4TDBodVRaWTRRWS9yczpmaXQ6NTAwOjA6MC9nOmNlL2FIUjBjSE02THk5ME5DNW0vZEdOa2JpNXVaWFF2YW5Cbi9MekEzTHpneUx6VTNMelF4L0x6TTJNRjlHWHpjNE1qVTMvTkRFNU5WOVlPRVp0VFdsaS9hVEJ4VjJsRVIwWlNWWFZNL2JtdGhibnBzVUU5Q1lUUjMvYlM1cWNHY1wiLFxyXG4gIHNhZDogXCJodHRwczovL2ltZ3Muc2VhcmNoLmJyYXZlLmNvbS9TemNMT0pQS2pTOW9MRWtKXzBNTjdjUlFTbGZQZkpnTV9Jc0MtM2Z3QUFJL3JzOmZpdDo1MDA6MDowL2c6Y2UvYUhSMGNITTZMeTkwTkM1bS9kR05rYmk1dVpYUXZhbkJuL0x6QXdMemcyTHpFNEx6STEvTHpNMk1GOUdYemcyTVRneS9OVFEyWDBkNU9UTm9lVzlEL1JsaHRTekJLYkZoWmJrOWwvYTNZd05YWTJOazFWYldaaS9MbXB3WndcIixcclxuICBuZXU6IFwiaHR0cHM6Ly9pbWdzLnNlYXJjaC5icmF2ZS5jb20vU3pjTE9KUEtqUzlvTEVrSl8wTU43Y1JRU2xmUGZKZ01fSXNDLTNmd0FBSS9yczpmaXQ6NTAwOjA6MC9nOmNlL2FIUjBjSE02THk5ME5DNW0vZEdOa2JpNXVaWFF2YW5Cbi9MekF3THpnMkx6RTRMekkxL0x6TTJNRjlHWHpnMk1UZ3kvTlRRMlgwZDVPVE5vZVc5RC9SbGh0U3pCS2JGaFpiazlsL2EzWXdOWFkyTmsxVmJXWmkvTG1wd1p3XCIsXHJcbn07XHJcblxyXG5jb25zdCBlbW90aW9uTGFiZWxzID0ge1xyXG4gIGhhcDogXCJIYXBweVwiLFxyXG4gIG5ldTogXCJOZXV0cmFsXCIsXHJcbiAgc2FkOiBcIlNhZFwiLFxyXG4gIGFuZzogXCJBbmdyeVwiLFxyXG4gIC8vIEFkZCBtb3JlIGVtb3Rpb24gbGFiZWxzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGZ1bGwgbmFtZXMgaGVyZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVFbW90aW9uTGlzdChkYXRhKSB7XHJcbiAgY29uc3QgeyBwcmVkaWN0ZWRfZW1vdGlvbiwgdG9wXzVfcHJlZGljdGlvbnMgfSA9IGRhdGE7XHJcbiAgY29uc3QgcHJlZGljdGVkRW1vdGlvblNjb3JlID0gdG9wXzVfcHJlZGljdGlvbnMuZmluZChcclxuICAgIChwcmVkaWN0aW9uKSA9PiBwcmVkaWN0aW9uLmxhYmVsID09PSBwcmVkaWN0ZWRfZW1vdGlvblxyXG4gICk/LnNjb3JlO1xyXG5cclxuICBpZiAoIXByZWRpY3RlZEVtb3Rpb25TY29yZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJudG8gZm91ZG5mZG9mZFwiKTtcclxuICAgIHJldHVybiBbeyBlbW90aW9uOiBwcmVkaWN0ZWRfZW1vdGlvbiwgbGV2ZWw6IFwiVW5rbm93blwiIH1dO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGV2ZWwgPSBnZXRFbW90aW9uTGV2ZWwocHJlZGljdGVkRW1vdGlvblNjb3JlKTtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBlbW90aW9uOiBlbW90aW9uTGFiZWxzW3ByZWRpY3RlZF9lbW90aW9uXSB8fCBwcmVkaWN0ZWRfZW1vdGlvbixcclxuICAgICAgbGV2ZWwsXHJcbiAgICAgIHNjb3JlOiBwcmVkaWN0ZWRFbW90aW9uU2NvcmUsXHJcbiAgICAgIGltZ3VybDogaW1hZ2VVcmxbcHJlZGljdGVkX2Vtb3Rpb25dLFxyXG4gICAgICB0b3BfNV9wcmVkaWN0aW9uczogdG9wXzVfcHJlZGljdGlvbnMubWFwKChwcmVkaWN0aW9uKSA9PiAoe1xyXG4gICAgICAgIC4uLnByZWRpY3Rpb24sXHJcbiAgICAgICAgbGFiZWw6IGVtb3Rpb25MYWJlbHNbcHJlZGljdGlvbi5sYWJlbF0gfHwgcHJlZGljdGlvbi5sYWJlbCxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG4vLyBjb25zdCBnZXRFbW90aW9uTGV2ZWwgPSAoc2NvcmUpID0+IHtcclxuLy8gICBpZiAoc2NvcmUgPj0gMC44KSB7XHJcbi8vICAgICByZXR1cm4gW1wiRXh0cmVtZWx5XCIsIFwiXCJdO1xyXG4vLyAgIH0gZWxzZSBpZiAoc2NvcmUgPj0gMC42KSB7XHJcbi8vICAgICByZXR1cm4gXCJWZXJ5XCI7XHJcbi8vICAgfSBlbHNlIGlmIChzY29yZSA+PSAwLjQpIHtcclxuLy8gICAgIHJldHVybiBcIk1vZGVyYXRlbHlcIjtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgcmV0dXJuIFwiU2xpZ2h0bHlcIjtcclxuLy8gICB9XHJcbi8vIH07XHJcbiJdLCJuYW1lcyI6WyJpbWFnZVVybCIsImhhcCIsImFuZyIsInNhZCIsIm5ldSIsImVtb3Rpb25MYWJlbHMiLCJnZW5lcmF0ZUVtb3Rpb25MaXN0IiwiZGF0YSIsInRvcF81X3ByZWRpY3Rpb25zIiwicHJlZGljdGVkX2Vtb3Rpb24iLCJwcmVkaWN0ZWRFbW90aW9uU2NvcmUiLCJmaW5kIiwicHJlZGljdGlvbiIsImxhYmVsIiwic2NvcmUiLCJjb25zb2xlIiwibG9nIiwiZW1vdGlvbiIsImxldmVsIiwiZ2V0RW1vdGlvbkxldmVsIiwiaW1ndXJsIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/generateEmotionList.js\n"));

/***/ })

});
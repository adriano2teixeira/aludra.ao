"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/jogos/rouleta/page",{

/***/ "(app-pages-browser)/./app/jogos/rouleta/winners.tsx":
/*!***************************************!*\
  !*** ./app/jogos/rouleta/winners.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LastWinners: function() { return /* binding */ LastWinners; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_500_subsets_latin_variableName_nameFont___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"app/jogos/rouleta/winners.tsx\",\"import\":\"Roboto_Mono\",\"arguments\":[{\"weight\":\"500\",\"subsets\":[\"latin\"]}],\"variableName\":\"nameFont\"} */ \"(app-pages-browser)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"app/jogos/rouleta/winners.tsx\\\",\\\"import\\\":\\\"Roboto_Mono\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"500\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"nameFont\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_500_subsets_latin_variableName_nameFont___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_500_subsets_latin_variableName_nameFont___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_400_subsets_latin_variableName_emailFont___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"app/jogos/rouleta/winners.tsx\",\"import\":\"Roboto_Mono\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"emailFont\"} */ \"(app-pages-browser)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"app/jogos/rouleta/winners.tsx\\\",\\\"import\\\":\\\"Roboto_Mono\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"emailFont\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_400_subsets_latin_variableName_emailFont___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_400_subsets_latin_variableName_emailFont___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_auth_signIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../firebase/auth/signIn */ \"(app-pages-browser)/./firebase/auth/signIn.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst LastWinners = ()=>{\n    var _user;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(_firebase_auth_signIn__WEBPACK_IMPORTED_MODULE_2__.auth, (usr)=>{\n        var _usr, _usr1, _usr2;\n        if (usr) setUser({\n            name: (_usr = usr) === null || _usr === void 0 ? void 0 : _usr.displayName,\n            email: (_usr1 = usr) === null || _usr1 === void 0 ? void 0 : _usr1.email,\n            avatar: (_usr2 = usr) === null || _usr2 === void 0 ? void 0 : _usr2.photoURL\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: (_user = user) === null || _user === void 0 ? void 0 : _user.avatar,\n                        className: \"rounded-full w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-white text-md leading-4\",\n                                style: (_next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_500_subsets_latin_variableName_nameFont___WEBPACK_IMPORTED_MODULE_4___default().style),\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-gray-300 text-sm leading-7\",\n                                style: (_next_font_google_target_css_path_app_jogos_rouleta_winners_tsx_import_Roboto_Mono_arguments_weight_400_subsets_latin_variableName_emailFont___WEBPACK_IMPORTED_MODULE_5___default().style),\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n                lineNumber: 27,\n                columnNumber: 22\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"border-0 bg-none ml-6 text-purple-500 text-sm\",\n                children: \"Sair\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/winners.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LastWinners, \"Iei9RGtZU29Y1RhBe1sbfh/MntA=\");\n_c = LastWinners;\nvar _c;\n$RefreshReg$(_c, \"LastWinners\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb2dvcy9yb3VsZXRhL3dpbm5lcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUtNQTtBQUtBQztBQVQ0QztBQUNFO0FBQ3BCO0FBWXpCLE1BQU1JLGNBQWM7UUFZREM7O0lBWHRCLE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBaUY7SUFDakhGLGlFQUFrQkEsQ0FBQ0MsdURBQUlBLEVBQUNLLENBQUFBO1lBRVZBLE1BQ0NBLE9BQ0NBO1FBSFosSUFBR0EsS0FBS0QsUUFBUTtZQUNaRSxJQUFJLEdBQUVELE9BQUFBLGlCQUFBQSwyQkFBQUEsS0FBS0UsV0FBVztZQUN0QkMsS0FBSyxHQUFFSCxRQUFBQSxpQkFBQUEsNEJBQUFBLE1BQUtHLEtBQUs7WUFDakJDLE1BQU0sR0FBRUosUUFBQUEsaUJBQUFBLDRCQUFBQSxNQUFLSyxRQUFRO1FBQ3pCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0M7O1lBQ0lSLHNCQUFRLDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ3BCLDhEQUFDQzt3QkFBSUMsR0FBRyxHQUFFWCxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1NLE1BQU07d0JBQUVHLFdBQVU7Ozs7OztrQ0FDbEMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0c7Z0NBQUdILFdBQVU7Z0NBQStCSSxPQUFPbkIsMkxBQWM7MENBQUdNLEtBQUtHLElBQUk7Ozs7OzswQ0FDOUUsOERBQUNXO2dDQUFHTCxXQUFVO2dDQUFrQ0ksT0FBT2xCLDRMQUFlOzBDQUFHSyxLQUFLSyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3ZGLDhEQUFDVTtnQkFBT04sV0FBVTswQkFBZ0Q7Ozs7Ozs7Ozs7OztBQUdsRixFQUFDO0dBckJZVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvam9nb3Mvcm91bGV0YS93aW5uZXJzLnRzeD8wZTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvYm90b19Nb25vIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCJcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2UvYXV0aC9zaWduSW5cIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBuYW1lRm9udCA9IFJvYm90b19Nb25vKHtcbiAgICB3ZWlnaHQ6IFwiNTAwXCIsXG4gICAgc3Vic2V0czogW1wibGF0aW5cIl1cbn0pXG5cbmNvbnN0IGVtYWlsRm9udCA9IFJvYm90b19Nb25vKHtcbiAgICB3ZWlnaHQ6IFwiNDAwXCIsXG4gICAgc3Vic2V0czogW1wibGF0aW5cIl1cbn0pXG5cbmV4cG9ydCBjb25zdCBMYXN0V2lubmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx7IG5hbWU/OiBzdHJpbmcgfCBudWxsLCBlbWFpbD86IHN0cmluZyB8IG51bGwsIGF2YXRhcj86IHN0cmluZyB8IG51bGwgfSB8IG51bGw+KG51bGwpXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsdXNyID0+IHtcbiAgICAgICAgaWYodXNyKSBzZXRVc2VyKHtcbiAgICAgICAgICAgIG5hbWU6IHVzcj8uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBlbWFpbDogdXNyPy5lbWFpbCxcbiAgICAgICAgICAgIGF2YXRhcjogdXNyPy5waG90b1VSTFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt1c2VyICYmIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXI/LmF2YXRhcn0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIHctMTAgaC0xMFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbWQgbGVhZGluZy00XCIgc3R5bGU9e25hbWVGb250LnN0eWxlfT57dXNlci5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtc20gbGVhZGluZy03XCIgc3R5bGU9e2VtYWlsRm9udC5zdHlsZX0+e3VzZXIuZW1haWx9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlci0wIGJnLW5vbmUgbWwtNiB0ZXh0LXB1cnBsZS01MDAgdGV4dC1zbVwiPlNhaXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJuYW1lRm9udCIsImVtYWlsRm9udCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGgiLCJ1c2VTdGF0ZSIsIkxhc3RXaW5uZXJzIiwidXNlciIsInNldFVzZXIiLCJ1c3IiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsImF2YXRhciIsInBob3RvVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDMiLCJzdHlsZSIsImg0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/jogos/rouleta/winners.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./app/jogos/rouleta/wheel.tsx":
/*!*************************************!*\
  !*** ./app/jogos/rouleta/wheel.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Wheel: function() { return /* binding */ Wheel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _next_font_google_target_css_path_app_jogos_rouleta_wheel_tsx_import_Roboto_Mono_arguments_weight_600_subsets_latin_variableName_h1___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"app/jogos/rouleta/wheel.tsx\",\"import\":\"Roboto_Mono\",\"arguments\":[{\"weight\":\"600\",\"subsets\":[\"latin\"]}],\"variableName\":\"_h1\"} */ \"(app-pages-browser)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"app/jogos/rouleta/wheel.tsx\\\",\\\"import\\\":\\\"Roboto_Mono\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"600\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"_h1\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_app_jogos_rouleta_wheel_tsx_import_Roboto_Mono_arguments_weight_600_subsets_latin_variableName_h1___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_app_jogos_rouleta_wheel_tsx_import_Roboto_Mono_arguments_weight_600_subsets_latin_variableName_h1___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chips */ \"(app-pages-browser)/./app/jogos/rouleta/chips.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ Wheel auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Wheel = (param)=>{\n    let { playround, setPlayround, setRounds, setWallet, wallet } = param;\n    _s();\n    const [isRolling, setIsRolling] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n    const [bet, setBet] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const [rot, setRT] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [mt, setMt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const onChipClick = (chip)=>{\n        if (bet == chip) {\n            setBet(\"\");\n            return;\n        }\n        setBet(chip);\n    };\n    const onSpin = ()=>{\n        if (!bet) {\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast)(\"Escolha o quanto quer apostar!\");\n            return;\n        }\n        if (wallet.total >= Number(bet)) {}\n        setIsRolling(true);\n        setRT(0);\n        let number = Math.ceil(Math.random() * 10000);\n        number += Math.ceil(Math.random() * 10000);\n        setRT(number);\n        // Calculate the effective rotation angle within 360 degrees\n        let rotation = number % 360;\n        // Determine which element is at the top position based on the rotation angle\n        let topElement;\n        if (rotation > 0 && rotation <= 29) {\n            topElement = 0;\n        } else if (rotation > 30 && rotation <= 89) {\n            topElement = 1;\n        } else if (rotation > 90 && rotation <= 149) {\n            topElement = 0;\n        } else if (rotation > 150 && rotation <= 209) {\n            topElement = 5;\n        } else if (rotation > 210 && rotation <= 269) {\n            topElement = 0;\n        } else if (rotation > 270 && rotation <= 329) {\n            topElement = 2;\n        } else if (rotation > 329) {\n            topElement = 0;\n        }\n        console.log(rotation, topElement);\n        setMt(topElement);\n    };\n    const onEnd = ()=>{\n        setRounds((prev)=>[\n                ...prev,\n                {\n                    betted: bet,\n                    multiplier: mt\n                }\n            ]);\n        setBet(\"\");\n        setIsRolling(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between content-center flex-col pb-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wheel-container\",\n                style: rot ? {\n                    transform: \"rotate(\" + rot + \"deg)\",\n                    transition: \"3s all\"\n                } : {},\n                onTransitionEnd: onEnd,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"one bg-red-500 text-white\",\n                        children: \"0x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"two bg-blue-500\",\n                        children: \"2x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"three bg-red-500\",\n                        children: \"0x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"four bg-purple-500\",\n                        children: \"5x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"five bg-red-500\",\n                        children: \"0x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"six bg-yellow-500\",\n                        children: \"1x\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stoper\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chips__WEBPACK_IMPORTED_MODULE_1__.Chips, {\n                onChipSelect: onChipClick,\n                selectedChip: bet\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-8 flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email-address\",\n                        name: \"email\",\n                        type: \"number\",\n                        required: true,\n                        className: \"min-w-0 mx-4 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-gray-300 w-46 h-12\",\n                        placeholder: \"Quanta quer apostar?\",\n                        disabled: isRolling,\n                        value: bet,\n                        onChange: (e)=>setBet(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onSpin,\n                        type: \"submit\",\n                        style: (_next_font_google_target_css_path_app_jogos_rouleta_wheel_tsx_import_Roboto_Mono_arguments_weight_600_subsets_latin_variableName_h1___WEBPACK_IMPORTED_MODULE_4___default().style),\n                        className: \"flex-none w-40 h-12 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                        disabled: isRolling,\n                        children: \"Apostar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/projects/aludra/aludra.ao/app/jogos/rouleta/wheel.tsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Wheel, \"TENESn1q4lg9Ztnt6/6IBWhzqc4=\");\n_c = Wheel;\nvar _c;\n$RefreshReg$(_c, \"Wheel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9qb2dvcy9yb3VsZXRhL3doZWVsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTU1BO0FBSjBCO0FBQ1E7QUFDZTtBQU9oRCxNQUFNTSxRQUFRO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBR0MsU0FBUyxFQUFHQyxNQUFNLEVBQUU7O0lBQzlFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCxxREFBYyxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1ksS0FBS0MsT0FBTyxHQUFHYixxREFBYyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2MsS0FBS0MsTUFBTSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM5QixNQUFNLENBQUNlLElBQUlDLE1BQU0sR0FBRWhCLCtDQUFRQSxDQUFDO0lBRTVCLE1BQU1pQixjQUFjLENBQUNDO1FBQ3BCLElBQUdQLE9BQU9PLE1BQU07WUFDWk4sT0FBTztZQUNQO1FBQ0o7UUFFQUEsT0FBT007SUFDUjtJQUVDLE1BQU1DLFNBQVM7UUFDWCxJQUFHLENBQUNSLEtBQUs7WUFDTFQscURBQUtBLENBQUM7WUFDTjtRQUNKO1FBQ0EsSUFBR00sT0FBT1ksS0FBSyxJQUFJQyxPQUFPVixNQUFNLENBQUM7UUFDakNELGFBQWE7UUFDYkksTUFBTTtRQUNOLElBQUlRLFNBQVNDLEtBQUtDLElBQUksQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLO1FBQ3ZDSCxVQUFVQyxLQUFLQyxJQUFJLENBQUNELEtBQUtFLE1BQU0sS0FBSztRQUNwQ1gsTUFBTVE7UUFFTiw0REFBNEQ7UUFDNUQsSUFBSUksV0FBV0osU0FBUztRQUN4Qiw2RUFBNkU7UUFDN0UsSUFBSUs7UUFDSixJQUFHRCxXQUFXLEtBQUtBLFlBQVksSUFBSztZQUNoQ0MsYUFBYTtRQUNqQixPQUFTLElBQUdELFdBQVcsTUFBTUEsWUFBWSxJQUFJO1lBQ3pDQyxhQUFhO1FBQ2pCLE9BQU8sSUFBR0QsV0FBVyxNQUFNQSxZQUFZLEtBQUs7WUFDeENDLGFBQWE7UUFDakIsT0FBTyxJQUFHRCxXQUFXLE9BQU9BLFlBQVksS0FBSztZQUN6Q0MsYUFBYTtRQUNqQixPQUNLLElBQUdELFdBQVcsT0FBT0EsWUFBWSxLQUFLO1lBQ3ZDQyxhQUFhO1FBQ2pCLE9BQ0ssSUFBR0QsV0FBVyxPQUFPQSxZQUFZLEtBQUs7WUFDdkNDLGFBQVk7UUFDaEIsT0FDSyxJQUFHRCxXQUFXLEtBQUs7WUFDcEJDLGFBQWE7UUFDakI7UUFDQUMsUUFBUUMsR0FBRyxDQUFDSCxVQUFVQztRQUN0QlgsTUFBTVc7SUFDVjtJQUVBLE1BQU1HLFFBQVE7UUFDVnhCLFVBQVV5QixDQUFBQSxPQUFRO21CQUFJQTtnQkFBTTtvQkFBRUMsUUFBUXJCO29CQUFNc0IsWUFBWWxCO2dCQUFHO2FBQUU7UUFDN0RILE9BQU87UUFDUEYsYUFBYTtJQUNqQjtJQUVBLHFCQUNJLDhEQUFDd0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNsQywwREFBY0E7Ozs7OzBCQUNmLDhEQUFDaUM7Z0JBQUlDLFdBQVU7Z0JBQWtCQyxPQUFPdkIsTUFBTTtvQkFDMUN3QixXQUFXLFlBQVl4QixNQUFNO29CQUM3QnlCLFlBQVk7Z0JBQ2hCLElBQUcsQ0FBQztnQkFBR0MsaUJBQWlCVDs7a0NBQ3BCLDhEQUFDSTt3QkFBSUMsV0FBVTtrQ0FBNEI7Ozs7OztrQ0FDM0MsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFrQjs7Ozs7O2tDQUNqQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2xDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDcEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFrQjs7Ozs7O2tDQUNqQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQW9COzs7Ozs7Ozs7Ozs7MEJBRXZDLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDckMseUNBQUtBO2dCQUFDMEMsY0FBY3ZCO2dCQUFhd0IsY0FBYzlCOzs7Ozs7MEJBQ2hELDhEQUFDdUI7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDTzt3QkFDR0MsSUFBRzt3QkFDSEMsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsUUFBUTt3QkFDUlgsV0FBVTt3QkFDVlksYUFBWTt3QkFDWkMsVUFBVXZDO3dCQUNWd0MsT0FBT3RDO3dCQUNQdUMsVUFBVUMsQ0FBQUEsSUFBS3ZDLE9BQU91QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FHeEMsOERBQUNJO3dCQUNHQyxTQUFTbkM7d0JBQ1QwQixNQUFLO3dCQUNMVCxPQUFPdkMsbUxBQVM7d0JBQ2hCc0MsV0FBVTt3QkFDVmEsVUFBVXZDO2tDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakIsRUFBQztHQXBHWU47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2pvZ29zL3JvdWxldGEvd2hlZWwudHN4P2EzMjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBSb2JvdG9fTW9ubyB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiXG5pbXBvcnQgeyBDaGlwcyB9IGZyb20gXCIuL2NoaXBzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY29uc3QgX2gxID0gUm9ib3RvX01vbm8oe1xuICAgIHdlaWdodDogXCI2MDBcIixcbiAgICBzdWJzZXRzOiBbXCJsYXRpblwiXVxufSlcblxuZXhwb3J0IGNvbnN0IFdoZWVsID0gKHsgcGxheXJvdW5kLCBzZXRQbGF5cm91bmQsIHNldFJvdW5kcyAsIHNldFdhbGxldCAsIHdhbGxldCB9KSA9PiB7XG4gICBjb25zdCBbaXNSb2xsaW5nLCBzZXRJc1JvbGxpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICBjb25zdCBbYmV0LCBzZXRCZXRdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gICBjb25zdCBbcm90LCBzZXRSVF0gPSB1c2VTdGF0ZSgwKVxuICAgY29uc3QgW210LCBzZXRNdF0gPXVzZVN0YXRlKG51bGwpXG5cbiAgIGNvbnN0IG9uQ2hpcENsaWNrID0gKGNoaXA6IHN0cmluZykgPT4ge1xuICAgIGlmKGJldCA9PSBjaGlwKSB7XG4gICAgICAgIHNldEJldCgnJylcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldEJldChjaGlwKVxuICAgfVxuXG4gICAgY29uc3Qgb25TcGluID0gKCkgPT4ge1xuICAgICAgICBpZighYmV0KSB7XG4gICAgICAgICAgICB0b2FzdChcIkVzY29saGEgbyBxdWFudG8gcXVlciBhcG9zdGFyIVwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHdhbGxldC50b3RhbCA+PSBOdW1iZXIoYmV0KSkge31cbiAgICAgICAgc2V0SXNSb2xsaW5nKHRydWUpXG4gICAgICAgIHNldFJUKDApXG4gICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwKTtcbiAgICAgICAgbnVtYmVyICs9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuICAgICAgICBzZXRSVChudW1iZXIpXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBlZmZlY3RpdmUgcm90YXRpb24gYW5nbGUgd2l0aGluIDM2MCBkZWdyZWVzXG4gICAgICAgIGxldCByb3RhdGlvbiA9IG51bWJlciAlIDM2MDtcbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGVsZW1lbnQgaXMgYXQgdGhlIHRvcCBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgcm90YXRpb24gYW5nbGVcbiAgICAgICAgbGV0IHRvcEVsZW1lbnQ7XG4gICAgICAgIGlmKHJvdGF0aW9uID4gMCAmJiByb3RhdGlvbiA8PSAyOSkgIHtcbiAgICAgICAgICAgIHRvcEVsZW1lbnQgPSAwO1xuICAgICAgICB9ICAgZWxzZSBpZihyb3RhdGlvbiA+IDMwICYmIHJvdGF0aW9uIDw9IDg5KSB7XG4gICAgICAgICAgICB0b3BFbGVtZW50ID0gMVxuICAgICAgICB9IGVsc2UgaWYocm90YXRpb24gPiA5MCAmJiByb3RhdGlvbiA8PSAxNDkpIHtcbiAgICAgICAgICAgIHRvcEVsZW1lbnQgPSAwXG4gICAgICAgIH0gZWxzZSBpZihyb3RhdGlvbiA+IDE1MCAmJiByb3RhdGlvbiA8PSAyMDkpIHtcbiAgICAgICAgICAgIHRvcEVsZW1lbnQgPSA1XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYocm90YXRpb24gPiAyMTAgJiYgcm90YXRpb24gPD0gMjY5KSB7XG4gICAgICAgICAgICB0b3BFbGVtZW50ID0gMFxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmKHJvdGF0aW9uID4gMjcwICYmIHJvdGF0aW9uIDw9IDMyOSkge1xuICAgICAgICAgICAgdG9wRWxlbWVudD0gMlxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmKHJvdGF0aW9uID4gMzI5KSB7XG4gICAgICAgICAgICB0b3BFbGVtZW50ID0gMFxuICAgICAgICB9IFxuICAgICAgICBjb25zb2xlLmxvZyhyb3RhdGlvbiwgdG9wRWxlbWVudClcbiAgICAgICAgc2V0TXQodG9wRWxlbWVudClcbiAgICB9XG5cbiAgICBjb25zdCBvbkVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0Um91bmRzKHByZXYgPT4gWy4uLnByZXYsIHsgYmV0dGVkOiBiZXQgLCBtdWx0aXBsaWVyOiBtdCB9XSlcbiAgICAgICAgc2V0QmV0KCcnKVxuICAgICAgICBzZXRJc1JvbGxpbmcoZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gY29udGVudC1jZW50ZXIgZmxleC1jb2wgcGItMTZcIj5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1jb250YWluZXJcIiBzdHlsZT17cm90ID8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoXCIgKyByb3QgKyBcImRlZylcIixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIjNzIGFsbFwiXG4gICAgICAgICAgICB9OiB7fX0gb25UcmFuc2l0aW9uRW5kPXtvbkVuZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUgYmctcmVkLTUwMCB0ZXh0LXdoaXRlXCI+MHg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3byBiZy1ibHVlLTUwMFwiPjJ4PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHJlZSBiZy1yZWQtNTAwXCI+MHg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXIgYmctcHVycGxlLTUwMFwiPjV4PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXZlIGJnLXJlZC01MDBcIj4weDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l4IGJnLXllbGxvdy01MDBcIj4xeDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3BlclwiPjwvZGl2PlxuICAgICAgICAgICAgPENoaXBzIG9uQ2hpcFNlbGVjdD17b25DaGlwQ2xpY2t9IHNlbGVjdGVkQ2hpcD17YmV0fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwtYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0wIG14LTQgZmxleC1hdXRvIHJvdW5kZWQtbWQgYm9yZGVyLTAgYmctd2hpdGUvNSBweC0zLjUgcHktMiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLXdoaXRlLzEwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctd2hpdGUgc206dGV4dC1zbSBzbTpsZWFkaW5nLTYgcGxhY2Vob2xkZXItZ3JheS0zMDAgdy00NiBoLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGEgcXVlciBhcG9zdGFyP1wiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1JvbGxpbmd9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiZXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEJldChlLnRhcmdldC52YWx1ZSl9XG5cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TcGlufVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e19oMS5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ub25lIHctNDAgaC0xMiByb3VuZGVkLW1kIGJnLXdoaXRlIHB4LTMuNSBweS0yLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtOTUwIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmV5LTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUm9sbGluZ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFwb3N0YXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIl9oMSIsIkNoaXBzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJXaGVlbCIsInBsYXlyb3VuZCIsInNldFBsYXlyb3VuZCIsInNldFJvdW5kcyIsInNldFdhbGxldCIsIndhbGxldCIsImlzUm9sbGluZyIsInNldElzUm9sbGluZyIsImJldCIsInNldEJldCIsInJvdCIsInNldFJUIiwibXQiLCJzZXRNdCIsIm9uQ2hpcENsaWNrIiwiY2hpcCIsIm9uU3BpbiIsInRvdGFsIiwiTnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJyb3RhdGlvbiIsInRvcEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwib25FbmQiLCJwcmV2IiwiYmV0dGVkIiwibXVsdGlwbGllciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsIm9uQ2hpcFNlbGVjdCIsInNlbGVjdGVkQ2hpcCIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/jogos/rouleta/wheel.tsx\n"));

/***/ })

});
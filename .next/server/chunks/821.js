exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 8816:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 6440:
/***/ (() => {



/***/ }),

/***/ 6701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I8: () => (/* binding */ auth),
  d6: () => (/* binding */ signWithGoogle)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var dist = __webpack_require__(2856);
;// CONCATENATED MODULE: ./firebase/config.ts
// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: "AIzaSyDyXi9UymDqMEoWvL8CvUsQRIBQ2rk8nxA",
    authDomain: "aludra-ee7ee.firebaseapp.com",
    projectId: "aludra-ee7ee",
    storageBucket: "aludra-ee7ee.appspot.com",
    messagingSenderId: "855452524832",
    appId: "1:855452524832:web:a5a5bdb2c2367cb33b3745",
    measurementId: "WS0L9QVDBW"
};
// Initialize Firebase
let firebase_app = (0,dist/* getApps */.C6)().length === 0 ? (0,dist/* initializeApp */.ZF)(firebaseConfig) : (0,dist/* getApps */.C6)()[0];
/* harmony default export */ const config = (firebase_app);

// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var auth_dist = __webpack_require__(3407);
;// CONCATENATED MODULE: ./firebase/auth/signIn.ts


const auth = (0,auth_dist/* getAuth */.v0)(config);
const provider = new auth_dist/* GoogleAuthProvider */.hJ();
async function signUp(email, password) {
    let result = null, error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }
    return {
        result,
        error
    };
}
const signWithGoogle = async ()=>{
    return (0,auth_dist/* signInWithPopup */.rh)(auth, provider).then((result)=>{
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = auth_dist/* GoogleAuthProvider */.hJ.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user, token);
    }).catch((error)=>{
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = auth_dist/* GoogleAuthProvider */.hJ.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage);
    });
};


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);

// These styles apply to every route in the application

const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 6540:
/***/ (() => {



/***/ })

};
;